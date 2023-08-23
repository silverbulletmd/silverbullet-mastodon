import "$sb/lib/syscall_mock.ts";
import { tootHtmlToMarkdown } from "./util.ts";
import { assertEquals } from "https://deno.land/std@0.199.0/assert/mod.ts";

Deno.test("Mastodon utils", () => {
  assertEquals(tootHtmlToMarkdown("<p>Hello</p>"), "Hello");
  assertEquals(
    tootHtmlToMarkdown("<p>Hello</p><p>New line</p>"),
    "Hello\n\nNew line",
  );
});
