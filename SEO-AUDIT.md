# SEO Audit: codexdreamskin.top

Audit date: July 17, 2026  
Target market: United States / English  
Site type: install guide, searchable asset directory, tutorial hub, and one-time setup service

## 1. Executive summary

Overall health: **technically ready to launch and index**.

The site now has three distinct search-intent paths instead of one overloaded landing page:

- `/`: Codex Dream Skin, Codex skin, Codex desktop theme, change Codex theme.
- `/codex-pets`: Codex Pets, desktop pets, free desktop pets, installation and creation tutorials.
- `/custom-skin`: custom Codex skin, Codex skin setup, Codex theme customization.

The strongest completed improvements are:

1. Public static HTML for every indexable route, with correct canonical URLs and no login wall.
2. A 53-item searchable Pet gallery with real slugs, prepared install commands, creator/source context, and a complete V1 creation tutorial.
3. Free macOS and Windows install, restore, compatibility, safety, and troubleshooting guidance.
4. A separate paid-service page with accurate `$4.99` and `$9.99` offers, delivery terms, checkout flow, and matching Service structured data.
5. About, Contact, Privacy, Terms, and Refund Policy pages linked sitewide.
6. Order return routes excluded from indexing with `noindex, nofollow` and excluded from the sitemap.
7. Google Search Console verification and consent-gated GA4 tracking.

Top remaining SEO risks:

- Community preview images and the mirrored ZIP need a verifiable license/permission record. Attribution and takedown language reduce trust risk but do not replace rights evidence.
- Search Console indexing and sitemap submission must be verified against the deployed production URLs.
- The domain has little proven external authority; relevant links and genuine user references will matter more than adding more keyword variants.

## 2. Keyword and intent mapping

The earlier SEMrush US check on July 16, 2026 produced the following evidence. Values without a reliable estimate remain explicitly unknown rather than invented.

| keyword | US volume | global volume | KD | CPC | intent | target |
| --- | ---: | ---: | ---: | ---: | --- | --- |
| Codex Pets | no separate estimate | no separate estimate | n/a | n/a | exact emerging entity | `/codex-pets` |
| desktop pets | 2,400 | not collected | 41 | n/a | category discovery | `/codex-pets` |
| desktop pet | 1,900 | 8,000 | 44 | $0.41 | broad category | `/codex-pets` |
| desktop pet games | 720 | not collected | 31 | n/a | partially related | supporting term only |
| how to make a desktop pet | 90 | not collected | 22 | n/a | creation tutorial | `/codex-pets#create-codex-pet` |
| how to get a desktop pet | 20 | not collected | n/a | n/a | install tutorial | `/codex-pets#how-pets-work` |
| are desktop pets safe | 20 | not collected | n/a | n/a | safety reassurance | `/codex-pets` |
| Codex Dream Skin | no reliable estimate | no reliable estimate | n/a | n/a | exact product/entity | `/` |
| Codex skin | no reliable estimate | no reliable estimate | n/a | n/a | customization | `/` |
| custom Codex skin | no reliable estimate | no reliable estimate | n/a | n/a | commercial setup | `/custom-skin` |

Cannibalization is controlled because each route has a separate job:

- The homepage explains changing the desktop appearance and installing/restoring the skin.
- The Pets page handles companion discovery, package selection, installation, safety, and creation.
- The service page handles paid preparation and custom-image intent.

## 3. Technical SEO findings

### Crawlability and indexation

- Issue: no blocking directive found on public content.
- Impact: High.
- Evidence: `robots.txt` allows `/` for all user agents and references `https://codexdreamskin.top/sitemap.xml`; sitemap contains the eight intended indexable routes and excludes both order routes.
- Fix: complete.
- Priority: Pass.

### Static rendering

- Issue: none.
- Impact: High.
- Evidence: Next.js 16 static export generated 18 static routes; public content is available without JavaScript-only navigation or POST state.
- Fix: none.
- Priority: Pass.

### Canonical and robots consistency

- Issue: none on current output.
- Impact: High.
- Evidence: every audited page has one canonical matching its intended production URL. `/order/success` and `/order/cancel` render `noindex, nofollow`; all public content routes remain indexable.
- Fix: complete.
- Priority: Pass.

### Metadata and social previews

- Issue: Terms, Refund, and order routes initially inherited the homepage Open Graph URL and title.
- Impact: Medium.
- Evidence: after correction, each route has matching title, description, canonical, `og:url`, Open Graph title, Twitter title, and a 1200 × 630 image.
- Fix: complete.
- Priority: Pass.

### Internal links and downloads

- Issue: none found.
- Impact: High.
- Evidence: recursive Linkinator crawl passed every internal route, anchor, image, stylesheet, script, manifest, ZIP, and initially rendered Pet preview.
- Fix: none.
- Priority: Pass.

### Mobile layout

- Issue: none after final CSS review.
- Impact: High.
- Evidence: all ten audited routes reported `clientWidth = 390`, `scrollWidth = 390`; gallery search, 53-item expansion, Pet selection, OS tabs, CLI blocks, and checkout cards produced no horizontal overflow.
- Fix: none.
- Priority: Pass.

### Performance and Core Web Vitals proxy

Local Cloudflare Pages simulation, Lighthouse 12.8.2:

| page | device | performance | accessibility | best practices | SEO | LCP | CLS | TBT |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | desktop | 100 | 100 | 100 | 100 | 0.5 s | 0 | 0 ms |
| `/codex-pets` | mobile | 98 | 100 | 100 | 100 | 2.3 s | 0 | 20 ms |
| `/custom-skin` | mobile | 100 | 100 | 100 | 100 | 1.4 s | 0 | 10 ms |

The Pets page stays below the 2.5-second LCP target in the local mobile run. Only 18 cards render initially; the remaining 35 are shown after one explicit action.

## 4. On-page SEO findings

### Homepage

- Primary keyword: `Codex Dream Skin` / `Codex desktop theme`.
- Title: 47 characters.
- Meta description: 144 characters.
- H1: one visible H1, `Change your Codex skin today.`
- Complete main-content copy: approximately 1,348 words.
- Original value: platform-specific commands, prerequisites, integrity checksum, restore commands, runtime explanation, safety boundary, troubleshooting, and FAQs.
- Status: Pass.

### Codex Pets

- Primary keyword: `Codex Pets`; secondary: `desktop pets`, `how to get a desktop pet`, `how to make a desktop pet`.
- Title: 59 characters.
- Meta description: 146 characters.
- H1: one visible H1, `Find and install your Codex pet.`
- Complete main-content copy: approximately 1,238 words.
- Gallery: 53 unique slugs, local WebP previews, creator labels, V1/V2 filters, search, style filters, A-Z sorting, install deep links, CLI fallbacks, source links, and a 53-item ItemList.
- Tutorial: exact V1 sheet size, cell size, animation order, manifest example, downloadable starter, validation and publishing flow.
- Status: Pass.

### Custom Skin service

- Primary keyword: `custom Codex skin`; secondary: `Codex skin setup`, `Codex theme customization`.
- Title: 60 characters.
- Meta description: 136 characters.
- H1: one visible H1.
- Offers: `$4.99` Quick Setup and `$9.99` Custom Skin Early Access match the visible copy, frontend constants, Creem production products, and JSON-LD.
- Commercial trust: delivery window, no-revision limit, image rights, refunds, secure checkout, private uploads, and free alternative are visible before purchase.
- Status: Pass.

### Trust pages

- About explains independence, editorial checks, commercial boundaries, corrections, and rights requests.
- Contact publishes a working support address and safe support instructions.
- Privacy covers Cloudflare, Supabase, Creem, GA4 consent, future advertising, retention, deletion, children, and international processing.
- Terms and Refund Policy match the actual offers and delivery model.
- Status: Pass.

## 5. Structured data

Rendered browser inspection found:

- `/`: `WebSite` and `FAQPage`.
- `/codex-pets`: `CollectionPage`, 53-item `ItemList`, and `FAQPage`.
- `/custom-skin`: `Service`, two real USD `Offer` entries, and `FAQPage`.

All schema values map to visible page content. No ratings, reviews, download totals, rankings, or guarantees were invented.

## 6. E-E-A-T and content quality

- Experience: copy-ready commands, tested platform switching, searchable gallery, exact package slugs, restore instructions, starter ZIP, and direct failure guidance.
- Expertise: exact operating-system requirements, CDP security boundary, manifest fields, sprite dimensions, animation rows, image limits, and payment verification flow.
- Authority: still developing. Creator/source links help, but independent references and relevant links are limited.
- Trust: HTTPS, checksum, independent-service disclosure, support email, privacy/terms/refund pages, rights confirmation, and private upload storage.

The material rights gap remains the largest trust issue. A source link proves origin, not reuse permission. Before scaling SEO or applying for ads, keep a private table with asset, creator, source URL, license/permission, allowed use, attribution text, and review date.

## 7. Prioritized action plan

### Critical before claiming AdSense readiness

1. Verify a license or explicit reuse permission for every mirrored gallery/X image and the downloadable archive; replace anything that cannot be documented.
2. Confirm the AdSense account owner and existing-account status.
3. Configure a Google-certified CMP before personalized advertising in the EEA, UK, or Switzerland.

### High impact after deployment

1. Submit `https://codexdreamskin.top/sitemap.xml` in Google Search Console.
2. Inspect and request indexing for `/`, `/codex-pets`, and `/custom-skin` after the production build is live.
3. Monitor queries separately for skin-install intent, Pet-gallery intent, and paid custom-skin intent.
4. Keep the 53-item gallery current without changing the canonical route.

### Authority and retention

1. Earn references from genuine Codex customization, desktop-pet, and developer-tool discussions; do not use link exchanges.
2. Publish individual Pet pages only when each page can provide unique compatibility, creator/license, installation, removal, and troubleshooting value.
3. Add user submissions only after moderation, permission evidence, duplicate checks, takedown handling, and a stable public detail URL exist.

## 8. Verification references

- SEMrush US database checks captured July 16, 2026.
- Next.js 16 production build and exported HTML inspected July 17, 2026.
- Lighthouse 12.8.2 against local Cloudflare Pages simulation.
- Recursive Linkinator crawl with fragment validation.
- Chrome desktop and 390 × 844 interaction tests.
- Google Search Console verification meta: present.
- GA4 measurement ID `G-D5PHPQZHTL`: loads only after analytics consent.
- Detailed AdSense findings: `ADSENSE-AUDIT.md`.

