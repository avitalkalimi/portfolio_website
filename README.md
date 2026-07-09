# Avital Kalimi — Portfolio

Personal data portfolio site: a homepage plus five topic pages (Business Intelligence, GIS, Computer Vision, LLM, SQL).

Live: https://avitalkalimi.github.io/portfolio_website/

## Stack
Plain HTML/CSS/vanilla JS. No build step, no dependencies, no Node.js required.

Content (bio, project write-ups, nav labels, tool chips) lives in one place: [assets/js/data.js](assets/js/data.js). Editing that file updates every page — no HTML/JS changes needed for copy edits.

## Preview locally
Just open [index.html](index.html) in a browser (double-click works — no server required).

## Structure
- `index.html`, `bi.html`, `gis.html`, `computer-vision.html`, `llm.html`, `sql.html` — page shells (empty content, filled at load time from `data.js`)
- `assets/js/data.js` — all site content (`window.SITE_DATA`)
- `assets/js/partials.js` — renders the shared nav + footer on every page
- `assets/js/render.js` — renders each page's content from `SITE_DATA`
- `assets/css/style.css` — all styling, design tokens, and responsive rules

## Adding real content
Currently ships with placeholder copy and image slots (dashed boxes). To replace:
- Text: edit the relevant fields in `assets/js/data.js`.
- Images: set a project/photo's `image` field to a path (e.g. `"assets/img/my-photo.jpg"`) and drop the file in `assets/img/`. The placeholder box is automatically replaced with the real image.

## Deployment
Static site served via GitHub Pages, "Deploy from a branch" (`main` / root). Pushing to `main` updates the live site — no CI workflow needed.
