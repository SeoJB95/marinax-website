# Media guide

`assets/media/` is the only canonical location for media committed to this site.

## Official brand identity

The three approved CI logo variants live under `assets/media/brand/`:

- `marinax-logo-v1.svg` — dark and deep-blue mark for light backgrounds
- `marinax-logo-v2.svg` — white mark with gray edge for dark backgrounds
- `marinax-logo-v3.svg` — solid-black mark for monochrome/light applications

Do not recolor, distort, crop, or overwrite these source SVG files. Select the
variant based on background contrast.

## Images you should replace directly

| File | Used for | Recommended ratio | Recommended size |
| --- | --- | --- | --- |
| `images/hero-maritime.jpg` | Landing hero | 16:9 | 2400×1350 |
| `images/capabilities.jpg` | Capabilities | 4:3 | 1600×1200 |
| `images/generate-hull.jpg` | Generate Hull Forms | 4:3 | 1600×1200 |
| `images/flow-prediction.jpg` | Predict the Flow | 4:3 | 1600×1200 |
| `images/cfd-integration.jpg` | CFD + AI Integration | 4:3 | 1600×1200 |
| `images/agent-max.jpg` | Agent MAX | 4:3 | 1600×1200 |
| `images/about-mission.jpg` | About / Mission | 16:10 | 2000×1250 |
| `images/about-slider-01.jpg` to `03.jpg` | About CTA slider | 3:4 | 1200×1600 |
| `images/news-*.jpg` | News cards | 16:10 | 1600×1000 |

Keep these filenames when replacing images so the HTML does not need to change.
Use lowercase kebab-case for additional files. Prefer `.jpg` for photography,
`.webp` when properly optimized, `.svg` for logos/icons, and `.mp4` for video.

## Other media

- `videos/` — optional product or hero video
- `icons/` — local brand icons only; general UI icons should come from a CDN
- `documents/` — brochures, PDFs, and downloadable technical material

Record the source and license of every third-party asset in `ATTRIBUTIONS.md`.
