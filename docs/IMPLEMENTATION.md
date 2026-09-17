# Redesign Handoff — One-Page Pastel Scrapbook Résumé

## Status and Intent

Documentation saved; redesign implementation has not started. This handoff replaces the previous multipage monochrome design. The existing Next.js site and resume endpoint are unchanged by this documentation task.

The user wants to direct the final appearance and later implement with Sol. The confirmed direction is a centered, compact decorated resume sheet in the pastel scrapbook palette. Use [DESIGN.md](DESIGN.md) as the shared art-direction reference and [CONTENT.md](CONTENT.md) for facts.

## Existing Foundation to Keep

- Next.js, React, TypeScript, App Router, CSS Modules, global tokens, npm, and static export.
- Existing `output: 'export'`, `trailingSlash: true`, unoptimized static image support, base-path helper, and static preview tooling.
- Canonical `public/resume.pdf` and the unchanged personal identity image. Preserve original asset archives and the archival PDF.
- GitHub Actions build/deploy workflow, lint/typecheck commands, and a useful custom 404.
- No runtime server, API, database, form backend, or animation library.

Inspect the installed versions before implementation; a redesign does not require scaffolding a new project or upgrading dependencies.

## Final Page and Route Shape

- `/` is the sole portfolio content page, containing identity, short factual introduction, projects, education, location, availability, and contact.
- Remove the Home/Work/About/Resume navigation bar and the separate Work/About content routes when implementing. Consolidate their useful copy on the sheet.
- Keep `/resume.pdf` as a directly served PDF and a discreet link within the closing contact area. It is not an HTML resume route.
- Keep the exported 404 as a utility page with a link home. The old Work/About routes need no replacement landing pages or redirects; no deployment of them was established.
- Use semantic reading order and ordinary external links. Do not hide content behind tabs, accordions, modals, or navigation.
- Update metadata, documentation, and export assertions to match one content page plus the 404 and PDF.

## Sol Fan-Out Handoff

These workstreams are for the later implementation task; saving this document does not launch agents. A coordinating agent first fixes the shared design tokens, section order, and asset interface. Independent work can then fan out without multiple agents rewriting the page shell or shared CSS.

| Workstream | Bounded responsibility | Deliverable and boundary |
| --- | --- | --- |
| Asset preparation | Inspect the provided archives, prepare the paper texture and individual planet/flower/checkerboard assets, test exact font glyphs, retain provenance/license notes | Web-ready assets and an asset manifest with paths, dimensions, role, and decorative status; no page/layout edits |
| Typography and palette | Translate DESIGN.md into pastel tokens, readable ink, display/body font roles, type sizes, and stationery treatments | Proposed token/type specification and component styling guidance; integrate shared global CSS only through the coordinator |
| Resume content and sections | Consolidate current facts into one content model; create compact project, education, practical-detail, and contact sections | Accessible semantic section components using shared tokens; no invented descriptions, separate routes, or shell edits |
| Responsive verification | Review the assembled sheet, reading order, overflow, keyboard behavior, contrast, static routing, and resume | Evidence-backed findings and focused fixes agreed with the coordinator; begin browser review after integration |

The coordinator owns the centered sheet, nameplate, sticker placement, final visual balance, root page, global CSS, removal of obsolete routes/navigation, export-test updates, and deployment regression checks. Asset and content work may proceed independently; exact decorative positioning happens only after real content and assets are available.

## Integration Sequence

1. Read the updated guidance and inspect current source. Preserve working static hosting and the PDF.
2. Establish the approximately 740px desktop sheet, pale pink surround, pale green paper, dark green ink, and the shared section/asset interfaces from DESIGN.md.
3. Prepare supplied assets and glyph-tested font choices. Resolve any required font version or usage gap before final public embedding; do not substitute a different visual identity without surfacing the choice.
4. Assemble the nameplate and a wider project column beside a narrower education/practical-details column. Place contact and the PDF link at the bottom of the same sheet.
5. Add static decorative clusters and paper texture. Check the full composition before tuning mobile reflow and decoration density.
6. Remove obsolete routes/navigation, update documentation and static-export assertions, and run the acceptance checks.

Keep the sheet compact through concise copy and composition, not fixed-height clipping, tiny text, or excessive scaling. Treat the 740px width as an initial art-direction target rather than a device requirement.

## Content and Asset Defaults

- Full name and Backend Engineer remain the nameplate copy. The square identity artwork stays recognizable and unchanged.
- Consolidate the four already-listed public project entries in supplied order: servee, clockwork, Feedback, Eiga. Names and destination links suffice until descriptions are verified.
- Use confirmed education and practical details; no blank employment or skills sections.
- Use the first palette as the foundation. The second palette supplies optional tiny warm accents only.
- Prefer Modern Heritage for the name, Manrope for readable details, and an optional Brooklyn signature, subject to the inspected glyph/usage limitations documented in DESIGN.md.
- Start with the supplied planet, flower, and checkerboard motifs. Exclude the date-bearing 2023 sticker.
- No additional resource pack is necessary at the outset. Ask for genuinely personal motifs only if needed; do not invent interests.

## GitHub Pages and Resume

Keep the existing static export and deployment workflow. The site and PDF must work at both an empty base path and a project prefix. The root endpoint `/resume.pdf` requires an account-site repository such as `aryansaves.github.io` or a root custom domain; a project site serves `/<repository>/resume.pdf`.

The current workspace had no connected Git repository at initial implementation. Do not claim public hosting is complete until an actual deployment is verified. See [README.md](../README.md) for current development and publishing commands.

## Redesign Acceptance Checks

- One centered resume sheet contains all essential content, with no Work/About/Resume navigation bar or separate content pages.
- The result reads as the selected pastel decorated resume, with visible paper texture and intentional sticker clusters. It must not regress to the monochrome index or become an all-over unreadable collage.
- Copy stays upright, selectable, readable, and factually grounded; stickers do not intercept links or obscure information.
- Inspect desktop, 390px and 320px widths, 200% zoom, touch targets, keyboard focus, skip link, color contrast, and horizontal overflow.
- Check actual display-font glyphs and line boxes, especially the full name, punctuation, numerals, and mobile wrapping. No demo markings or missing-glyph boxes may appear.
- Pass lint, strict typechecking, production build, and revised export verification for root and project-prefix paths.
- Confirm the PDF returns HTTP 200 with PDF content type and original bytes. Confirm custom 404 behavior and all public assets under both base paths.
- Verify there is no decorative motion, theme switcher, hover-only content, or new backend requirement.

## Historical Baseline — Not Redesign Verification

The following record applies only to the old monochrome multipage implementation. Re-run relevant checks after the redesign; these results do not certify the new layout.

## Verification Record — 2026-09-17

- Passed ESLint, strict TypeScript checking, and Next.js production builds.
- Passed export verification for root and `/portfolio` base paths: four HTML pages, internal URLs, unchanged identity image, and canonical resume PDF.
- Confirmed HTTP 200 and `application/pdf` with byte-for-byte PDF integrity. Confirmed direct page loads and a real custom HTTP 404 under the project path.
- Inspected desktop and 390px mobile layouts in the browser; checked 320px reflow, Work/About navigation, page refresh, contact anchors, skip-to-content behavior, visible keyboard focus, and browser console errors.
- Verified the foreground/background text pairs meet 4.5:1 contrast. Native browser zoom shortcuts did not change the testing browser's zoom; exact 200% zoom remains a manual check.
- Root preview restored after project-path testing. Deployment workflow is prepared but has not run on GitHub because this workspace has no connected repository.
- Local runtime: Node.js 26.8.1; workflow runtime: Node.js 24 LTS. ESLint 9 is retained for compatibility with Next.js's bundled React lint plugin; ESLint 10 was incompatible.
