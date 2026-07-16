# SEO Audit: codexdreamskin.top

Audit date: July 16, 2026  
Scope: expanded `/codex-pets` release before production redeployment

## 1. Executive summary

Overall health: ready to redeploy.

The expanded site preserves the crawlable Next.js static architecture and adds substantially more product utility without changing the canonical route. `/codex-pets` now contains a 53-item public pet library, real creator attribution, search and filters, prepared `codex://` installation links, CLI fallbacks, a documented V1 creation tutorial, a downloadable starter ZIP, safety guidance, and six matching FAQ answers.

Highest-impact improvements completed:

- Increased the installable gallery from 8 to 53 unique public Codex Pets.
- Stored all 53 previews locally as compressed WebP assets to avoid runtime hotlink failure.
- Added one-click gallery expansion, name search, V1/V2 filtering, style filtering, A-Z sorting, selection state, and a sticky install panel.
- Added a tested custom-pet workflow for `how to make a desktop pet`: exact atlas size, cell size, row order, valid manifest fields, validator link, and starter ZIP.
- Updated title, description, keywords, Open Graph, Twitter, FAQ content, and CollectionPage ItemList to match the expanded page.
- Preserved the canonical URL, sitemap route, analytics tag, Search Console verification, and existing internal links.

Current priorities:

1. Push and deploy the expanded build.
2. Re-run live URL checks after Cloudflare publishes the new assets.
3. Request indexing for `/codex-pets` after the new release is live.

## 2. Keyword and intent decision

Target market: United States, English. The page combines the emerging entity `Codex Pets` with established desktop-pet demand and tested long-tail utility.

| keyword | search_volume | intitle | kgr | kd | cpc | intent fit | decision |
|---|---:|---:|---:|---:|---:|---|---|
| Codex Pets | no separate SEMrush estimate | not reliable | n/a | n/a | n/a | exact product/entity | build_now |
| desktop pets | 2,400 US | 3,280 | 1.37 | 41 | n/a | category discovery | build_now as secondary |
| desktop pet | 1,900 US / 8,000 global | 19,300 | 10.16 | 44 | $0.41 | broad category | support naturally |
| desktop pet games | 720 US | not collected | n/a | 31 | n/a | partially related | do not make primary |
| how to make a desktop pet | 90 US | 10 | 0.11 | 22 | n/a | creation tutorial | build_now |
| how to get a desktop pet | 20 US | 8 | 0.40 | n/a | n/a | installation tutorial | build_now |
| are desktop pets safe | 20 US | unreliable | n/a | n/a | n/a | safety reassurance | build_now |

Keyword mapping:

- `/codex-pets`: `Codex Pets`, `desktop pets`, `free desktop pets`, `how to get a desktop pet`, `how to make a desktop pet`, `are desktop pets safe`.
- `/`: `Codex Dream Skin`, `Codex skin`, `Codex desktop theme`, `change Codex theme`.

There is no material cannibalization because the homepage targets desktop theme replacement while `/codex-pets` targets companions, installation, and package creation.

## 3. Technical SEO findings

### Crawlability and indexation

- Issue: no blocking crawl directive found.
- Impact: High.
- Evidence: `robots.txt` allows crawling and references the canonical sitemap; `sitemap.xml` includes `/`, `/codex-pets`, `/about`, and `/privacy`.
- Fix: none required.
- Priority: pass.

### Canonical and metadata consistency

- Issue: none found.
- Impact: High.
- Evidence: `/codex-pets` title, description, canonical, `og:url`, Open Graph title, and Twitter title all describe the same 53-item gallery page.
- Fix: none required.
- Priority: pass.

### Mobile layout and accessibility

- Issue: a tutorial grid initially caused horizontal overflow at 390 px and was fixed before release.
- Impact: High.
- Evidence: final Chrome measurement reports `clientWidth: 390`, `scrollWidth: 390`, and `bodyScrollWidth: 390`.
- Fix: added `min-w-0` to both tutorial grid columns and their parent.
- Priority: complete.

### Performance and Core Web Vitals

- Issue: the first expanded build rendered all 53 cards immediately and scored 86 on mobile performance.
- Impact: High.
- Evidence: excessive initial DOM size and uncompressed preview images increased rendering time.
- Fix: render 18 cards initially, provide one-click expansion to all 53, remove unnecessary eager image loads, and compress all local previews.
- Priority: complete.

Final local Cloudflare Pages simulation:

- Desktop: Performance 100, Accessibility 100, Best Practices 100, SEO 100, LCP 0.6 s, CLS 0.001, TBT 0 ms.
- Mobile: Performance 96, Accessibility 100, Best Practices 100, SEO 100, LCP 2.5 s, CLS 0, TBT 110 ms.

### Static hosting and downloads

- Issue: none found.
- Impact: Medium.
- Evidence: Next.js produces a static HTML file for every public route. The V1 starter ZIP contains `pet.json`, `spritesheet.webp`, and a README with the verified row contract.
- Fix: none required.
- Priority: pass.

## 4. On-page SEO findings

### Title and description

- Issue: none found.
- Impact: High.
- Evidence: rendered title is 59 characters including the brand; description is 146 characters; both begin with the page topic and describe the install and creation value.
- Fix: none required.
- Priority: pass.

### Headings and visible content

- Issue: none found.
- Impact: High.
- Evidence: the page has one H1, logical H2/H3 hierarchy, and approximately 1,401 visible words after scripts and styles are removed.
- Fix: none required.
- Priority: pass.

### Gallery usefulness

- Issue: the original 8-item gallery was too small for material discovery intent.
- Impact: High.
- Evidence: the new library contains 53 unique slugs, 53 local previews, public creator names, V1/V2 labels, tags, source-detail links, prepared install links, and CLI commands.
- Fix: complete.
- Priority: complete.

### Creation tutorial

- Issue: the previous page did not satisfy `how to make a desktop pet` intent.
- Impact: High.
- Evidence: the page now documents the V1 1536 x 1872 atlas, 192 x 208 cells, 8 columns, 9 ordered animation rows, valid manifest fields, public validation flow, and post-publication install command.
- Fix: complete.
- Priority: complete.

### Structured data

- Issue: none found.
- Impact: Medium.
- Evidence: rendered JSON-LD includes a CollectionPage, a 53-item ItemList, and six FAQ questions that match visible page content.
- Fix: none required.
- Priority: pass.

### Images and attribution

- Issue: community artwork must retain clear attribution and rights boundaries.
- Impact: Medium.
- Evidence: cards show creator names, selected items link to public package details, and X screenshots link to their original posts.
- Fix: keep attribution and source links whenever the collection changes; remove an asset if its public source disappears or a valid takedown request is received.
- Priority: ongoing.

## 5. Content quality and E-E-A-T

- Experience: real browser-tested install links, filters, responsive behavior, starter archive, and command-copy fallbacks.
- Expertise: exact public V1 sprite dimensions, state order, manifest validation fields, and package filenames.
- Authoritativeness: creator names and public source pages are retained instead of replacing them with invented profiles.
- Trust: safety warnings, rights boundaries, HTTPS, privacy page, source details, and explicit review-before-run language.
- Accuracy: no invented search volume, rankings, ratings, download totals, prices, or performance claims appear on the page.

## 6. Prioritized action plan

### Critical

1. Deploy the expanded static export to the existing Cloudflare Pages project.
2. Confirm the live page serves all 53 preview assets and the starter ZIP with HTTP 200.
3. Request Google indexing for `https://codexdreamskin.top/codex-pets` after deployment.

### High impact

1. Monitor Search Console queries for `codex pets`, `desktop pets`, `how to get a desktop pet`, and `how to make a desktop pet`.
2. Refresh the gallery when public listings materially change, but keep the route and canonical stable.
3. Add individual indexable pet pages only when each can offer unique compatibility, removal, and creator information.

### Longer term

1. Add a first-party in-browser sprite validator only after it can enforce the same package contract reliably.
2. Add a visible takedown contact if the gallery grows beyond manual curation.
3. Earn links from relevant Codex customization and desktop-pet discussions without publishing thin duplicate galleries.

## 7. References and tool notes

- SEMrush US database, checked July 16, 2026.
- Public Codex Pets gallery and package-detail pages, checked in Chrome.
- Public package validation and animation configuration in the referenced project source.
- Chrome desktop interaction testing and 390 x 844 responsive testing.
- Lighthouse 12.8.2 against the production static export in local Cloudflare Pages simulation.
- Generated HTML inspected for metadata, canonical, verification, JSON-LD, word count, and image paths.
