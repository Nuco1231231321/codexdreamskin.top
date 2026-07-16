# codexdreamskin.top

SEO-focused install and safety guide for the unofficial [Codex Dream Skin](https://github.com/Fei-Away/Codex-Dream-Skin) project, plus a curated Codex Pets gallery with prepared install links.

## Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- Static export for Cloudflare Pages

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run lint
npm run build
```

The static site is written to `out/`.

## Cloudflare Pages

Build command: `npm run build`

Output directory: `out`

Production domain: `https://codexdreamskin.top`

The project includes Google Search Console verification, GA4 measurement ID `G-D5PHPQZHTL`, `robots.txt`, `sitemap.xml`, canonical metadata, Open Graph images, FAQ structured data, a same-domain installer mirror, and Cloudflare response headers.

## Source policy

Installation claims are checked against the upstream repository, platform docs, scripts, changelog, and public issues. Codex pet previews link to their original public listings, while X gallery examples link to the public posts used for commentary and discovery.
