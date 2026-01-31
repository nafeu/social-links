# Social Links

A single-file reference for your social media and marketing copy. Use it when you need to paste links into YouTube descriptions, Patreon posts, Bandcamp descriptions, Instagram captions, and similar places.

Each card is a different context (e.g. “YouTube description”, “Instagram bio”). Click a card to copy its text to the clipboard. Links in the text are clickable in the browser but don’t trigger copy.

## Editing

Edit **`links.md`**. The format is:

- A line starting with `#` (one hash and a space) starts a new card. The rest of that line is the card **title**.
- Everything below it until the next `#` line is that card’s **content**. Newlines are preserved.

Example:

```markdown
# YouTube description

Check out my website: https://yoursite.com
Bandcamp: https://yourname.bandcamp.com
Support on Patreon: https://patreon.com/yourname

# Instagram bio

Link in bio: https://yoursite.com
```

After editing `links.md`, run the build to regenerate `index.html` (see below).

## Build

The site is built from `links.md` and `template.html`:

```bash
node build.js
```

This parses `links.md` and writes `index.html`. You need Node.js installed.

## Preview locally

After building (or if `index.html` already exists):

- **Option 1:** Open `index.html` in a browser (double-click, or `open index.html` on macOS).
- **Option 2:** Run a local server, e.g. `python3 -m http.server 8000` or `npx serve`, then open the URL shown.

## GitHub Pages

A GitHub Action (`.github/workflows/deploy.yml`) runs on every push to `main`: it runs `node build.js` and deploys the resulting `index.html` to GitHub Pages.

**One-time setup in the GitHub repo:**

1. Go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).

After that, each push to `main` will build and deploy. If your default branch is not `main`, edit the workflow’s `on.push.branches` in `.github/workflows/deploy.yml` to match your branch name.
