# MarinAX Website

Static multi-page marketing website for MarinAX, designed for GitHub Pages.

## Pages

- `index.html` — Landing page
- `about.html` — About, mission, values, metrics, and CTA
- `news.html` — News card listing
- `contact.html` — Contact form
- `404.html` — GitHub Pages fallback

## Local preview

No build step is required. Serve the repository root with any static HTTP server.

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Media

All replaceable media belongs under `assets/media/`. See
[`docs/MEDIA-GUIDE.md`](docs/MEDIA-GUIDE.md) before replacing files.

## Deployment

Push to `main`. The workflow in `.github/workflows/pages.yml` publishes the
repository root to GitHub Pages.

