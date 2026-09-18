# Implementation — One-Page Notebook Scrapbook Résumé

## Site shape

The site uses Next.js App Router, React, TypeScript, CSS Modules, and `output: 'export'`. `/` contains the entire résumé sheet. The only other HTML route is the utility 404. `public/resume.pdf` remains a directly served static file linked from the sheet. There is no backend, route navigation, or animation dependency. The GitHub Pages workflow and base-path helper are retained.

The user replaced the earlier pink/green direction with a charcoal desk, ivory lined paper, supplied torn-paper PNGs, and restrained red/olive patterned accents. [DESIGN.md](DESIGN.md) is the current art direction; [CONTENT.md](CONTENT.md) holds factual authority.

## Work sequence

1. Audit the new resources and revise the palette. Keep the provided photographed paper as a subtle sheet texture, layer the supplied scrap PNGs, and adapt the supplied lined-paper/yin-yang/zig-zag CSS.
2. Replace cursive display fonts with the supplied Super Adorable default and Papernotes accent. Preserve Manrope for compact factual copy.
3. Prepare transparent cursor-sized variants of the supplied cats, assign the smiling one by default and the open-mouthed one while pressed, and add hover/focus font swaps and small press responses. Use the smaller animated SVG on the desktop desk and the 404 cat on the utility page. Honor reduced motion.
4. Recheck mobile composition, update documentation and export assertions, then run lint, typecheck, root and prefixed builds, and browser checks.

The first three steps are implemented. The paper width is capped at 760px and remains naturally tall on mobile. The contact and social links sit in the sheet header; the PDF link sits at the foot. The role phrase cycles in a CSS-only fixed-height swipe slot, with a still first phrase for reduced-motion users. The source PNGs and SVGs are preserved; their web exports live in `public/art/`. [ASSETS.md](ASSETS.md) records the derived assets and provenance questions. [TYPOGRAPHY.md](TYPOGRAPHY.md) records font roles and publication terms.

## Verification and publication

The export must work with no base path and with `NEXT_PUBLIC_BASE_PATH=/portfolio`. The verifier checks the one content page, 404, new artwork, direct PDF, unchanged identity image, and internal asset paths. Browser review should cover desktop, 390px and 320px widths, horizontal overflow, keyboard focus, decorative noninterference, reduced motion, PDF response, and cursor states on a fine pointer.

The root endpoint `/resume.pdf` requires an account-site repository such as `aryansaves.github.io` or a root custom domain. A project site serves `/<repository>/resume.pdf`. No remote or public deployment is connected in this workspace. Confirm the Papernotes license and supplied art rights before publication.

Earlier commits documented the first static résumé implementation. This new design is an iteration on that codebase, preserving the factual sections, one-page route, PDF, and export workflow.
