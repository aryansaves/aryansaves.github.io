# AGENTS.md

## Project

A personal portfolio presented as one centered, static, resume-like web page.

The selected visual identity is a notebook scrapbook résumé: an ivory ruled and textured paper sheet on a charcoal desk, supplied scrap-paper and cat assets, expressive non-cursive display typography, and a compact readable composition. The user's latest direction supersedes the earlier pink/green palette, monochrome editorial minimalism, and multipage structure.

## Working Principles

- Read the existing code and relevant project docs before making changes.
- Follow the user's current art direction; the existing monochrome implementation is a starting codebase, not the desired visual reference.
- Center the paper sheet in the viewport. Keep body text legible and aligned within it; centering the sheet does not require centering every line.
- Use one page for identity, projects, education, availability, and contact. Do not add Home/Work/About/Resume navigation or separate content pages.
- Do not publish or link a résumé for the initial launch. Add one later only when the user provides and approves the final PDF.
- Treat maximalism as a deliberate composition of type, colored paper, texture, and sticker clusters. Use the user's assets before adding unrelated decoration.
- Preserve clear reading order, keyboard navigation, contrast, touch targets, and responsive behavior. Decorative assets must not cover essential copy or intercept clicks.
- Keep motion modest. The user explicitly requested the supplied cat cursors, hover/click responses, font swaps, and small animated SVGs; support reduced motion and avoid entrance effects, parallax, or scroll reveals.
- Keep one fixed visual identity; do not add a light/dark theme system.
- Preserve the supplied personal identity image's recognizable square artwork. It may sit within a paper frame; do not replace it with an invented portrait or alter its artwork by default.
- Use semantic HTML and sensible component boundaries. Keep dependencies minimal; prefer native CSS and the existing Next.js static-export setup.
- Avoid generic SaaS layouts, glossy gradients, glowing blobs, glass panels, fake terminals, and repetitive rounded-card grids.
- Do not fabricate facts or write generic personality filler to fill the sheet.
- Avoid unrelated refactors. Run lint, typecheck, build, and appropriate export/browser checks after implementation changes.

## Design and Content Authority

- [docs/DESIGN.md](docs/DESIGN.md): selected visual direction, composition, palette, typography, and supplied asset guidance.
- [docs/CONTENT.md](docs/CONTENT.md): factual copy, links, confirmed information, and editorial TODOs.
- [docs/IMPLEMENTATION.md](docs/IMPLEMENTATION.md): redesign handoff, workstream boundaries, integration sequence, and verification requirements.

Preserve factual accuracy and usability while giving the page a distinctive handmade character. Do not reinstate the former restraint, monochrome, or multipage rules from historical implementation notes.

## Scope and Collaboration

Honor the task's requested scope. A request to save Markdown does not authorize changing application code, extracting assets into the site, installing dependencies, deploying, or starting agents.

The implementation document includes a future Sol fan-out handoff. It records independently assignable workstreams; it does not start them. Shared layout and final art direction remain the integrating agent's responsibility when implementation is requested.
