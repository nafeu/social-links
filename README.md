# Social Links

A single-file reference for your social media and marketing copy. Use it when you need to paste links into YouTube descriptions, Patreon posts, Bandcamp descriptions, Instagram captions, and similar places.

Each card is a different context (e.g. “YouTube description”, “Instagram bio”). Click a card to copy its text to the clipboard. Links in the text are clickable in the browser but don’t trigger copy.

## Editing

Open `index.html` and find the `CONFIG` object near the top of the `<script>` block. Each card has:

- **title** – Label for the card (e.g. “YouTube description”).
- **content** – A single paragraph of text. Include plain text and URLs; URLs are turned into clickable links in the UI. This is exactly what gets copied when you click the card.

Add, remove, or edit cards by changing the `cards` array in `CONFIG`.

## Preview locally

The app is a single static HTML file. No build step or server is required.

**Option 1: Open in a browser**

- Double-click `index.html`, or  
- Drag it into a browser window, or  
- From the project folder: `open index.html` (macOS)

**Option 2: Local HTTP server** (optional, e.g. if you hit file:// restrictions)

With Python 3:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

With Node.js (npx):

```bash
npx serve
```

Then open the URL shown in the terminal (usually [http://localhost:3000](http://localhost:3000)).
