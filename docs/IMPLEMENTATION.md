# Implementation — One-Page Notebook Scrapbook Résumé

## Site shape

Next.js App Router, React, TypeScript, CSS Modules, and `output: 'export'` produce a static GitHub Pages site. `/` contains the résumé; the only additional HTML route is the utility 404. `public/resume.pdf` is the canonical PDF, linked beside Contact with `target="_blank"`. No backend, route navigation, or animation package is needed.

## Current composition

The 760px notebook has ruled photographic paper, punched holes, binding loops, two under-pages, the supplied square identity image, and responsive content. The page stack retains a left-edge transform origin for a possible future page-turn feature. Projects are Eiga, Feedback, and clockwork, followed by Open Source Work. The smaller phone layout keeps the portrait below the name to prevent overlap.

The display fonts are Super Adorable and Papernotes; Manrope handles factual copy. Independent name font swaps and project font swaps have restrained sound effects. The CSS role slideshow reserves its height and respects reduced motion.

`ScrapbookDesk` owns four independently draggable paper scraps. Randomized margin slots prevent starting collisions; dragging remains unrestricted and passes underneath the notebook. Full containment triggers a latched celebration so focus/resize events cannot dismiss it accidentally. The celebration floods the screen with 48 overlapping cat scraps, plays the supplied jackpot once, and offers a single keyboard-accessible cat button that reloads the page. No automatic refresh or visible helper text is used.

## Assets and repository hygiene

`public/` contains active runtime assets; source media remains in `resources/`. Earlier unused public assets and fonts are preserved in `resources/archive/` rather than shipped in the export. `.codex/`, source font ZIPs, generated output, caches, and environment files remain ignored. The supplied source resources are not instructions or generated site content.

## Verification

Run `npm run lint`, `npm run typecheck`, `npm run build`, and `npm run verify`. Repeat build and verify with `NEXT_PUBLIC_BASE_PATH=/portfolio` to exercise project-site asset paths. The verifier covers HTML/CSS references, interactive artwork/audio, still SVGs, the custom 404, canonical PDF, and unchanged identity image. `npm run preview` serves `out/` with correct media MIME types and real 404 responses.

Browser review covers desktop, 390px and 320px widths, name/portrait separation, keyboard focus, the full lost-scrap trigger and cat refresh, and horizontal overflow. Use `npm audit --omit=dev` for the production dependency advisory check.

## Publication handoff

The workflow in `.github/workflows/pages.yml` builds all branches/PRs and deploys only the default branch. Set GitHub Pages to GitHub Actions after connecting the intended repository. The workflow derives the base path and canonical URL; use `PAGES_CUSTOM_DOMAIN` only for a configured custom domain.

The exact root endpoint `/resume.pdf` requires an account-site repository such as `aryansaves.github.io` or a root custom domain. A project site exposes `/<repository>/resume.pdf`. No Git remote is currently configured and no deployment has been performed. Existing font and asset provenance questions remain documented in [TYPOGRAPHY.md](TYPOGRAPHY.md) and [ASSETS.md](ASSETS.md).
