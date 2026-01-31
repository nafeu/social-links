#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname);
const LINKS_MD = path.join(ROOT, "links.md");
const TEMPLATE_HTML = path.join(ROOT, "template.html");
const INDEX_HTML = path.join(ROOT, "index.html");

function parseLinksMd(content) {
  const cards = [];
  // Split on newline followed by # (start of a heading)
  const blocks = content.split(/\n(?=# )/);

  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed.startsWith("# ")) continue;

    const firstNewline = trimmed.indexOf("\n");
    const titleLine = firstNewline === -1 ? trimmed : trimmed.slice(0, firstNewline);
    const title = titleLine.replace(/^#\s*/, "").trim();
    const content = firstNewline === -1 ? "" : trimmed.slice(firstNewline + 1).trim();

    cards.push({ title, content });
  }

  return cards;
}

function build() {
  const linksContent = fs.readFileSync(LINKS_MD, "utf8");
  const templateContent = fs.readFileSync(TEMPLATE_HTML, "utf8");

  const cards = parseLinksMd(linksContent);
  const config = { cards };
  const configJson = JSON.stringify(config, null, 0);

  const indexContent = templateContent.replace("{{CONFIG}}", configJson);
  fs.writeFileSync(INDEX_HTML, indexContent, "utf8");

  console.log(`Built index.html from links.md (${cards.length} cards)`);
}

build();
