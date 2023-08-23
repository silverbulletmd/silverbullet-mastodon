import { editor, markdown, space } from "$sb/silverbullet-syscall/mod.ts";
import { readSetting } from "$sb/lib/settings_page.ts";
import { readSecret } from "$sb/lib/secrets_page.ts";
import { extractFeedItems } from "$sb/lib/feed.ts";
import { extractFrontmatter } from "$sb/lib/frontmatter.ts";
import { createRestAPIClient } from "https://esm.sh/masto@6.1.0?target=es2022";
import { PublishEvent } from "$sb/app_event.ts";
import type { Status } from "./types.ts";
import { tootHtmlToMarkdown } from "./util.ts";

type MastodonConfig = {
  pagePrefix?: string;
  accounts: Record<string, MastodonAccountConfig>;
};

type MastodonAccountConfig = {
  url: string;
};

async function createApiClient(accountName: string) {
  const mastodonConfig: MastodonConfig = await readSetting("mastodon", {});
  const mastodonServerUrl = mastodonConfig.accounts[accountName]?.url;
  if (!mastodonServerUrl) {
    throw new Error(
      `Mastodon server URL is not configured for ${accountName}.`,
    );
  }
  const secrets: Record<string, string> = await readSecret("mastodon");
  const token = secrets[accountName];
  if (!token) {
    throw new Error(
      `Mastodon access token is not configured for ${accountName}.`,
    );
  }

  return createRestAPIClient({
    url: mastodonServerUrl,
    accessToken: token,
  });
}

export async function pullAllStatusesForAccount(
  accountName: string,
  pagePrefix: string,
) {
  const client = await createApiClient(accountName);

  console.log("Fetching profile info");
  const me = await client.v1.accounts.verifyCredentials();
  console.log("Fetching recent statuses");
  const statuses = await client.v1.accounts.$select(me.id).statuses.list({
    limit: 500,
    excludeReblogs: true,
    excludeReplies: false,
  });

  const statusMapping = new Map<string, Status>(
    statuses.map((status) => [status.id, status]),
  );

  // Build up status tree
  for (const status of statuses) {
    if (status.inReplyToId) {
      const parentStatus = statusMapping.get(status.inReplyToId);
      if (parentStatus) {
        parentStatus.children = parentStatus.children ?? [];
        parentStatus.children.push(status);
      }
    }
  }

  console.log("Writing statuses to space");
  let pageText = "";
  for (const _status of statuses) {
    const extStatus: Status = _status;
    if (extStatus.inReplyToId) {
      // Reply, skipping
      continue;
    }
    pageText = `---\n$share: mastodon:${accountName}\n`;
    appendStatus(extStatus);

    await space.writePage(
      `${pagePrefix}/${accountName}/${
        extStatus.createdAt.split("T")[0]
      }/${extStatus.id}`,
      pageText,
    );
  }

  function appendStatus(status: Status) {
    pageText += `---

$id/${status.id}
${tootHtmlToMarkdown(status.content)}

`;
    if (status.children) {
      for (const childStatus of status.children) {
        appendStatus(childStatus);
      }
    }
  }
}

export async function cleanAllStatusesCommand() {
  const mastodonConfig: MastodonConfig = await readSetting("mastodon", {});
  const allPages = await space.listPages();
  const prefix = mastodonConfig.pagePrefix ?? "mastodon";
  for (const pageMeta of allPages) {
    if (pageMeta.name.startsWith(prefix)) {
      await space.deletePage(pageMeta.name);
    }
  }
  await editor.flashNotification("Done cleaning!");
}

export async function pullAllStatusesCommand() {
  const mastodonConfig: MastodonConfig = await readSetting("mastodon", {});
  await editor.flashNotification("Pulling statuses...");
  for (const accountName in mastodonConfig.accounts) {
    await pullAllStatusesForAccount(
      accountName,
      mastodonConfig.pagePrefix ?? "mastodon",
    );
  }
  await editor.flashNotification("Done!");
}

export async function updateToot(event: PublishEvent) {
  const text = await editor.getText();
  const tree = await markdown.parseMarkdown(text);
  const [_, accountName] = event.uri.split(":");
  const frontmatter = await extractFrontmatter(tree, [], true);
  console.log("Frontmatter", frontmatter);
  const client = await createApiClient(accountName);
  const feedItems = await extractFeedItems(tree);
  console.log("Feed items", feedItems);
  // return;
  let lastSeenStatusId: string | null = null;
  for (const toot of feedItems) {
    console.log("Found status", toot);
    if (!toot.id.startsWith("gen/")) { // gen/ based IDs are generated meaning no ID is defined
      lastSeenStatusId = toot.id;
      console.log("Updating status", toot.id);

      // Check if actually changed
      const currentToot = await client.v1.statuses.$select(toot.id)
        .fetch();
      if (tootHtmlToMarkdown(currentToot.content) !== toot.text) {
        // Text changed
        await client.v1.statuses.$select(toot.id).update({
          status: toot.text,
        });
        console.log("Updated status", toot.id);
      } else {
        console.log("No change, skipping");
      }
    } else {
      console.log("No ID found, posting new toot!");
      // Refetch the text every time, because there may be a whole slew up updates
      const text = await editor.getText();
      // Perhaps naive assumption: no duplicate statuses
      const statusTextPos = text.indexOf(toot.text);
      if (!statusTextPos) {
        await editor.flashNotification(
          "Could not find status text in page",
          "error",
        );
        return;
      }
      const newStatus: Status = await client.v1.statuses.create({
        status: toot.text,
        inReplyToId: lastSeenStatusId,
      });
      lastSeenStatusId = newStatus.id;
      await editor.dispatch({
        changes: [
          {
            from: statusTextPos,
            insert: `$id/${newStatus.id}\n`,
          },
        ],
      });
    }
  }

  return true;
}
