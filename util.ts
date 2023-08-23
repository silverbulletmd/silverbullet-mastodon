export function tootHtmlToMarkdown(html: string) {
  // Remove any newlines
  html = html.replaceAll("\n", "");
  // Replace <p> with new lines
  html = html.replaceAll("<p>", "\n\n");
  return html.replace(/<[^>]*>?/gm, "").trim();
}
