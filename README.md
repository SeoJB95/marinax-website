# MarinAX Website

Static multi-page marketing website for MarinAX, designed for GitHub Pages.

## Pages

- `index.html` — Landing page
- `about.html` — About, mission, values, metrics, and CTA
- `news.html` — News card listing
- `notice.html` — Simple bilingual corporate notice board with PDF downloads
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


## Corporate notices

Keep this deliberately simple: one static Korean-first bilingual page, native expandable notices,
and a PDF download for each notice. No CMS, database, or separate detail pages.
Edit `notice.html` to add a notice and place its PDF in `assets/media/documents/`.
Use the actual publication date when releasing a notice; the initial notice is
prepared for September 15, 2026. Keep previously published notices and PDFs available.

The supplied corporate registry records incorporation on September 11, 2026,
website publication at https://marinax.co.kr/, and Busan Ilbo as the fallback.
It does not identify the clause number in the Articles of Incorporation.
The page therefore cites Commercial Act Article 289(3), not an assumed company
clause. This is the basis for electronic publication, not a claim that an
incorporation announcement is legally mandatory. The PDF attachment is the original Korean corporate registry supplied by the
company, published unchanged at its explicit request. The older August 15 news article is a separate company story.

The Notice page defaults to Korean. The small ENG/KOR button below the title
switches its content in place; the original Korean PDF remains unchanged.
