# Implementation — One-Page Notebook Scrapbook Résumé

## Site shape

Next.js App Router, React, TypeScript, CSS Modules, and `output: 'export'` produce a static GitHub Pages site. `/` contains the portfolio; the only additional HTML route is the utility 404. The initial launch publishes no résumé PDF or résumé link. No backend, route navigation, or animation package is needed.

## Current composition

The 760px notebook has ruled photographic paper, punched holes, binding loops, two under-pages, the supplied square identity image in a plain CSS frame, and responsive content. There are no stickers, tape overlays, paper cutouts, or decorative 404 cat. The cat-with-ball animation is restored beside the notebook and hidden on narrow screens and for reduced motion. The page stack retains a left-edge transform origin for a possible future page-turn feature. Projects are Eiga, Feedback, and clockwork, followed by Open Source Work. The phone layout uses a smaller square portrait beside the name and parallel Education/Details columns. The outer desk stays within the dynamic viewport; the notebook allows overflow scrolling for very small screens or enlarged text. Short landscape screens place identity and introduction beside the résumé sections.

The display fonts are Super Adorable and Papernotes; Manrope handles factual copy. Independent name font swaps and project font swaps have restrained sound effects. The CSS role slideshow reserves its height and respects reduced motion.

`DeskBackground` is a server component containing only three decorative layers. Native CSS draws the cream grid, rust checker pattern, teal waves, and mustard stripes. No desk texture image, SVG scribble, draggable scraps, resize observers, pointer handlers, randomization, celebration portal, refresh action, or jackpot audio remains.

## Assets and repository hygiene

`public/` contains only active runtime assets: the identity image, notebook paper texture, two small cursor PNGs, the cat-with-ball SVG, two font-change sounds, and the Manrope license. All Easter-egg, floating-scrap, and other sticker assets and their unused styles/references are removed. Redundant originals, source ZIPs, earlier unused exports, and the résumé draft were removed from the launch tree after their optimized runtime derivatives were verified; Git history remains the archive. `.codex/`, generated output, caches, and environment files remain ignored. Supplied source resources are assets, not instructions or generated site content.

## Verification

The user authorized validation and production publication on September 30. ESLint, typecheck, root production build, export verification, and whitespace checks passed. Browser review covered desktop, 390px, 320px, selected-title hover, new-tab link attributes, image loading, the custom 404, and console output. The root build uses `SITE_URL=https://aryansaves.me`. See VERIFICATION.md for evidence and limits.

The export verifier covers HTML/CSS references, remaining artwork/audio, restored playing-cat SVG safety, removed-resource absence, the custom 404, absence of a résumé export, and the unchanged identity image. `npm run preview` serves `out/` with correct MIME types and real 404 responses.

## Publication handoff

The workflow in `.github/workflows/pages.yml` builds all branches/PRs and deploys only the default branch. Set GitHub Pages to GitHub Actions after connecting the intended repository. The workflow derives the base path and canonical URL; use `PAGES_CUSTOM_DOMAIN` only for a configured custom domain.

The static-background work originated on `codex/static-background` from main; the discarded `codex/minimal-design` branch was deleted. The user authorized merging into main and pushing through the existing GitHub Pages workflow. Existing font and asset provenance questions remain documented in [TYPOGRAPHY.md](TYPOGRAPHY.md) and [ASSETS.md](ASSETS.md).
