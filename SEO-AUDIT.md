# SEO Audit: codexdreamskin.top

Audit date: July 16, 2026  
Scope: production static export before deployment

## 1. Executive summary

Overall health: ready to deploy.

The site has a crawlable static architecture, unique metadata, matching canonicals and Open Graph URLs, a valid sitemap, a permissive robots file, descriptive internal links, rendered structured data, accessible interactive controls, and enough original explanatory content to satisfy the install intent without padding.

Highest-impact items completed:

- Added the dedicated `/codex-pets` landing page around the new `Codex Pets` topic and the established `desktop pets` search demand.
- Replaced homepage GitHub install paths with a same-domain ZIP mirror and published its SHA-256 checksum.
- Added the pet gallery, search, category filtering, prepared `codex://` links, CLI fallbacks, creator attribution, safety guidance, FAQs, and X source links.
- Corrected child-page Open Graph URLs so they match their canonicals.
- Converted large screenshots from PNG to WebP and reduced the homepage LCP asset from roughly 716 KB to roughly 40 KB.
- Fixed heading contrast. Lighthouse accessibility is now 100 on both primary pages.

Remaining launch dependencies:

- Deploy the current `out/` directory over HTTPS.
- Confirm the apex domain resolves to the deployed Cloudflare Pages project.
- Submit `https://codexdreamskin.top/sitemap.xml` in Google Search Console after the live URL responds.
- Request indexing for `/` and `/codex-pets` after live verification.

## 2. Keyword and intent decision

Target market: United States, English. The new topic has limited exact-match paid-tool history, so the page uses a two-layer strategy: `Codex Pets` for the emerging entity and `desktop pets` for proven category demand.

| keyword | search_volume | intitle | kgr | kd | cpc | trends | eeat_status | est_length | decision |
|---|---:|---:|---:|---:|---:|---|---|---:|---|
| Codex Pets | no separate SEMrush estimate | not reliable | n/a | n/a | n/a | rising | pass | 900-1400 | build_now |
| desktop pets | 2,400 US | 3,280 | 1.37 | 41 | n/a | stable | pass | 1000-1600 | build_now as secondary intent |
| desktop pet | 1,900 US / 8,000 global | 19,300 | 10.16 | 44 | $0.41 | stable | pass | 1200-1800 | queue for a broader guide |
| how to get a desktop pet | 20 US | 8 | 0.40 | n/a | n/a | stable | pass | 800-1100 | build_now as a page section |
| how to make a desktop pet | 90 US | 10 | 0.11 | 22 | n/a | stable | partial | 1200-1800 | queue until creation tools exist |
| desktop pet games | 720 US | not collected | n/a | 31 | n/a | stable | partial | 1200-1800 | drop for this page due to intent mismatch |
| are desktop pets safe | 20 US | unreliable result count | n/a | n/a | n/a | stable | pass | 700-1000 | build_now as safety section and FAQ |

Top build-now picks:

1. `Codex Pets`: first-mover entity page with direct product utility, real previews, and creator attribution.
2. `desktop pets`: strong category demand that naturally describes what Codex Pets are, despite higher competition.
3. `how to get a desktop pet`: workable long-tail intent that matches the choose, open, review, and run flow.

Biggest keyword risks:

- Exact `Codex Pets` volume is not yet established in SEMrush, so early performance depends on trend capture and fast indexing.
- `desktop pet` and `desktop pets` are competitive category terms. The page needs links and topical authority before category rankings are realistic.
- Creation intent should not be targeted until the site actually supports making or uploading pets.

## 3. Technical SEO findings

### Crawlability and indexation

- Status: pass.
- Evidence: `robots.txt` allows all crawlers and references the canonical sitemap.
- Evidence: `sitemap.xml` contains only the four public canonical pages: `/`, `/codex-pets`, `/about`, and `/privacy`.
- Evidence: all important pages are linked from the shared header or footer and are within one click of the homepage.
- Evidence: the static export produces an HTML document for every public route.

### Canonical and social URL consistency

- Status: pass after fix.
- Evidence: title, description, canonical, and `og:url` now agree on every public page.
- Evidence: `/codex-pets` has its own keyword-aligned title, description, canonical, Open Graph values, and Twitter values.

### Mobile and accessibility

- Status: pass.
- Evidence: Chrome testing at 390 px reported a 390 px document width with no horizontal overflow on `/` or `/codex-pets`.
- Evidence: pet search, filters, selection buttons, install link, tabs, details elements, and copy status are keyboard-readable native controls.
- Evidence: Lighthouse accessibility score is 100 for both primary pages.

### Performance and Core Web Vitals

- Status: pass in local Cloudflare Pages simulation.
- Homepage Lighthouse: Performance 99, Accessibility 100, Best Practices 100, SEO 100, LCP 2.0 s, CLS 0, TBT 50 ms.
- Codex Pets Lighthouse: Performance 100, Accessibility 100, Best Practices 100, SEO 100, LCP 1.9 s, CLS 0, TBT 50 ms.
- Evidence: images reserve dimensions, below-fold images lazy-load, and the primary screenshot is a small WebP asset.

### Security and downloads

- Status: pass for launch scope.
- Evidence: Cloudflare headers include `X-Content-Type-Options`, a strict referrer policy, and a restrictive permissions policy.
- Evidence: the ZIP is served as `application/zip` with `Content-Disposition: attachment`.
- Evidence: the served ZIP passed archive validation and matched SHA-256 `2a54b8f7b6474b22587b7692395c76dd0fc9acce27007482f42df827ccb42251`.

## 4. On-page SEO findings

### Titles and descriptions

- Status: pass.
- Homepage title: 47 characters.
- Codex Pets title: 58 characters.
- Homepage description: 144 characters.
- Codex Pets description: 152 characters.
- Every public page has one unique title and one unique description.

### Headings and keyword targeting

- Status: pass.
- Every public page has exactly one H1.
- `/codex-pets` uses `Codex Pets`, `desktop pet`, `desktop pets`, `free desktop pets`, `how to get a desktop pet`, and `are desktop pets safe` in natural, intent-matched locations.
- The homepage remains focused on `Codex Dream Skin`, `Codex skin`, `Codex desktop theme`, and platform installation.
- There is no meaningful keyword cannibalization between the homepage and pet page.

### Content quality and trust

- Status: pass.
- Homepage visible copy: approximately 1,358 English words.
- Codex Pets visible copy: approximately 1,137 English words.
- Claims are bounded: the one-click link is described as opening a prepared Codex task, not silently installing software.
- Real pet previews, creator names, original pet links, X source links, safety guidance, privacy information, and the package checksum provide Experience and Trust signals.
- No ratings, review counts, prices, or performance claims were invented.

### Structured data

- Status: pass.
- Homepage renders `WebSite` and `FAQPage` JSON-LD.
- `/codex-pets` renders `CollectionPage`, `ItemList`, and `FAQPage` JSON-LD.
- Structured data matches visible content and uses real page URLs and item names.

### Images and internal links

- Status: pass.
- Meaningful images have descriptive alt text and fixed dimensions.
- Pet preview files and community gallery images are served from the same domain.
- Internal links use descriptive anchors such as `Browse Codex Pets`, `Open the pet gallery`, and `Dream Skin`.
- Automated checking found no local asset or internal-link response at 400 or above.

## 5. Prioritized action plan

### Critical before launch

1. Push the tested commit to the repository.
2. Deploy `out/` to the Cloudflare Pages project.
3. Bind `codexdreamskin.top` and confirm the apex HTTPS response.
4. Verify the live Google site-verification meta tag and GA4 tag.

### High impact after launch

1. Submit the sitemap and request indexing for `/` and `/codex-pets`.
2. Monitor Search Console impressions for `codex pets`, `desktop pets`, and `how to get a desktop pet`.
3. Update pet metadata and the sitemap modification date when the curated collection materially changes.

### Longer-term opportunities

1. Add individual indexable pet detail pages only after the site can provide unique instructions, compatibility notes, and removal guidance for each pet.
2. Build a separate `how to make a desktop pet` guide only when a real creation workflow can be tested and demonstrated.
3. Earn relevant links from Codex customization discussions and desktop-pet communities without duplicating thin gallery pages.

## 6. References and tool notes

- SEMrush US database, checked July 16, 2026.
- Google `intitle` checks, treated as rough competition signals rather than exact index counts.
- Chrome desktop and 390 px responsive testing.
- Lighthouse against a local Cloudflare Pages simulation using the production static export.
- Next.js 16 static export and Metadata API output inspected directly in generated HTML.
