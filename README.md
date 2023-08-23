# Mastodon for SilverBullet

This plug enables posting to Mastodon via SilverBullet.

## Configuration
To use this plug you need to configure it in two places. In your [[SETTINGS]] page, configure your Mastodon accounts:

```yaml
mastodon:
  pagePrefix: mastodon
  accounts:
    myuser:
      url: https://hachyderm.io
```

Then, visit your Mastodon instance, login and under `Settings > Development` click the "Create application" button. Give your application a name (e.g. "SilverBullet") and make sure the "read" and "write" scopes are enabled (this is the default). Then click "Submit" at the bottom.

Then, navigate to your new application in the application list and copy the token listed behind "Your access token" in your [[SECRETS]] page (or create it if doesn't already exist):

    ```yaml
    mastodon:
        myuser: yourtoken
    ```

Alright, configuration-wise we're good to go. 

## Use
If you like, you can pull in your current toot archive (up to 500 posts) into your space (by default under the `mastodon/<account>` prefix, but this is configurable in [[SETTINGS]]). To do so, run the {[Mastodon: Pull All Statuses]} command. This will create one page per _thread_. Feel free to edit the text of your toots here, and run {[Share: Publish]} (`Cmd-s` or `Ctrl-s`) to edit them.

To create a new toot, just create an empty page (with any name) and in the frontmatter put:

```
---
$share: mastodon:youraccount
---
```

After this, just write your text and run {[Share: Publish]} to post it. This will automatically inject a named reference with the toot ID so you can make changes to it.

To create a "toot storm" (a series of toots, threaded together) simply separate them with a horizontal rule (`---`). For instance:

```
---
$share: mastodon:youraccount
---
Toot 1

---

Toot 2

---

Toot 3
```

Note the use of new lines for the horizontal rules to work correctly. Then simply {[Share: Publish]} again to publish (or update) them.

## Build
To build this plug, make sure you have [SilverBullet installed](https://silverbullet.md/Install). Then, build the plug with:

```shell
deno task build
```

Or to watch for changes and rebuild automatically

```shell
deno task watch
```

Then, copy the resulting `.plug.js` file into your space's `_plug` folder. Or build and copy in one command:

```shell
deno task build && cp *.plug.js /my/space/_plug/
```

SilverBullet will automatically sync and load the new version of the plug (or speed up this process by running the {[Sync: Now]} command).

## Installation
Run {[Plug: Add]} and add the following URL:

```
- github:silverbulletmd/silverbullet-mastodon/mastodon.plug.js
```
