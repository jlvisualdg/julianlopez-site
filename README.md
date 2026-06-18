# Julian Lopez — Authority Hub

A lean, fast, AI-readable personal authority site built with **Next.js** (static export). It is engineered so AI answer engines (ChatGPT, Perplexity, Google AI Mode) can read it, understand the entity, and answer questions about Julian Lopez accurately.

## What makes this an "Authority Hub"
- **Single source of truth** — every page, all structured data, and `/llms.txt` are generated from one file: `lib/entity.ts`. Change a fact once; it updates everywhere.
- **Proper structure** — one `<h1>` per page, logical `<h2>`/`<h3>` nesting, question-shaped headings on the About page.
- **Answerability** — 19 Q&As rendered as visible text *and* emitted as `FAQPage` structured data, plus `Person` and `Book` schema, so models can quote answers directly.
- **Fast** — fully static, ~87 kB shared JS, optimized images, no server required.

## Pages
- `/` — Home (AEO Research, Brand Entity Optimization, Contact)
- `/about/` — the Entity Hub (intro + sectioned Q&A)
- `/the-aeo-blueprint/` — the book + the BRAIN Framework methodology
- `/speaking/` — Mentor Table Conference (Nashville) photos + how AEO works
- `/contact/`
- `/llms.txt`, `/robots.txt`, `/sitemap.xml` — generated at build

## Run it locally
You need Node.js 18.17+ (LTS recommended). Then:

```bash
npm install
npm run dev      # preview at http://localhost:3000
```

## Build & deploy
```bash
npm run build    # outputs a static site to ./out
```
`./out` is plain HTML/CSS/JS — drop it on Vercel, Netlify, or Cloudflare Pages. No Node needed on the server.

To preview the production build locally:
```bash
npx serve out
```

## Before going live
Open `lib/entity.ts` and set `SITE_URL` to the real domain. That value anchors the canonical URLs, the sitemap, the JSON-LD `@id`s, and the llms.txt links.

## Reuse for another client
Replace `lib/entity.ts` (the facts) and the photos in `public/`. Every page, schema block, and llms.txt regenerates around the new entity — no template surgery.

## Project map
```
app/            pages + route handlers (llms.txt, sitemap)
components/      JsonLd, header, footer, WebMCP (agent layer)
lib/entity.ts   ← single source of truth (edit this)
lib/schema.ts   builds Person / Book / FAQPage JSON-LD
public/         images, robots.txt
```
# julian-lopez-authority-hub
