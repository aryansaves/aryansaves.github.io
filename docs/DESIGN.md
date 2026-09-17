# Design Direction — Pastel Scrapbook Résumé

## Selected Direction

One centered, compact, static resume-like web page with a beautiful maximalist paper-and-sticker treatment. The sheet should feel personal, tactile, warm, and art-directed, with all essential content readable in one composition.

The user selected:

- **Pastel scrapbook** as the color direction.
- **Decorated resume** as the composition: readable central content with richer clusters at corners and section boundaries.
- **Compact resume sheet** as the desktop experience, rather than a long landing page.

This replaces the former monochrome editorial minimalism, metadata-rail homepage, graphite contact band, and separate Work/About pages. The current application implements this single-sheet direction.

## The Composition

Imagine a pale pink background with a softly green paper sheet centered on it. The supplied paper photograph brings creases and fibers into the surface. Pink scraps, checkerboard details, and illustrated stickers overlap selected edges and section breaks.

The sheet is approximately 740px wide on desktop, with a portrait, resume-like proportion and natural height. Aim for a compact composition around one desktop screen, but do not clip content, force an exact A4 ratio, or shrink body copy to make it fit. Small screens may scroll.

- **Nameplate:** full name in expressive display lettering, “Backend Engineer” on a pink strip, and the supplied square identity image as a small pasted element beside it.
- **Introduction:** one brief factual sentence from confirmed identity and education, without inventing interests or expertise.
- **Main body:** a wider project column beside a narrower education/location/availability column. Keep factual text aligned and upright.
- **Closing:** email, social links, and a discreet PDF link on the same sheet. No navigation bar or oversized standalone contact section.
- **Reading order:** name and role, introduction, projects, education and practical details, contact.

The sheet is centered; the resume text inside it is principally left-aligned. Maximalism comes from varied material, type, and decorative clusters rather than a large quantity of content or repeated cards.

## Palette

Both supplied Color Hunt images remain references, but the first palette leads. The second is a source for tiny warm accents, not an equal competing theme.

| Role | Color | Use |
| --- | --- | --- |
| Outer background | `#FFD8DF` | Soft pink surrounding the sheet |
| Main paper | `#F0FFDF` | Pale green reading surface, warmed by paper texture |
| Green accent | `#A8DF8E` | Sticker details, tabs, and small printed areas |
| Pink accent | `#FFAAB8` | Nameplate backing, pasted strips, and notes |
| Text ink | `#26392D` | Proposed dark green for readable headings and copy |
| Optional warm accent | `#DF301C` / `#FF9100` | Small stamp or underline only when it improves the composition |
| Secondary reference | `#FFF1D1` / `#00B7CD` | Available cream/cyan reference colors; not required in the first composition |

The four leading pastel colors come from the supplied image; the dark ink is a proposed readability companion. Check contrast on the final textured surfaces. Do not set small text in pale green, pink, or orange simply to repeat the palette.

Palette reference files supplied by the user:

- `/home/kareedesuka/Downloads/Color Hunt Palette a8df8ef0ffdfffd8dfffaab8.png`
- `/home/kareedesuka/Downloads/Color Hunt Palette df301cff9100fff1d100b7cd.png`

The hex values above make the brief usable without those machine-local files. Do not introduce a theme toggle.

## Texture and Stickers

Supplied source assets, relative to the repository root:

- `resources/marjan-blan-5Ft4NWTmeJE-unsplash.jpg`: photographed creased paper, 2734 × 4101 pixels.
- `resources/hand-drawn-retro-branding-labels-collection.zip`: contains `8268524.jpg`, `8268521.ai`, and `8268523.eps`.
- `Pfp.jpg`: the existing monochrome personal identity image.

The archive contains a sticker sheet preview and editable vector sources, not separate ready-to-use transparent sticker images. Use the supplied artwork to prepare clean individual assets during implementation; preserve source files.

Initial art direction:

- A smiling planet near the nameplate.
- A flower following one paper margin.
- Small checkerboard fragments connecting a couple of section boundaries.
- A limited number of pink/green paper scraps or tabs, with slight fixed rotations and restrained physical shadows.
- Keep the “2023” sticker out of the composition because its date is unrelated to the user's content.

The visual motifs are decoration, not claims about personal interests. Palette adaptation of sticker artwork should favor the selected greens and pinks while retaining its recognizable drawing and outlines. Keep the identity image unchanged.

Texture should remain visible enough to feel tactile, but quiet beneath body text. Use clear reading areas and bounded sticker clusters. Do not place the entire sticker contact sheet behind the resume, repeat the same JPG as a wallpaper, or add a generic unrelated sticker pack.

Decorative elements should have empty alternative text or be hidden from assistive technology and should not intercept pointer input. Do not hide facts inside raster images.

## Typography

The supplied font archives were inspected and specimen-rendered. They are expressive display assets, not interchangeable body fonts.

| Archive | Initial role | Observed constraint |
| --- | --- | --- |
| `fonts/modern-heritage-display-font.zip` | Preferred full-name display face | Some punctuation and digits rendered as missing glyphs |
| `fonts/brooklyn-font.zip` | Optional small handwritten signature | Some digits rendered as demo markings |
| `fonts/simple-stacked-font.zip` | Optional single short decorative title treatment | Tall repeated letter forms need generous unclipped line boxes |
| `fonts/candy-inc-font.zip` | Reserve option for a brief decorative word | Some punctuation/digits rendered as branding marks |

The implementation uses OFL-licensed Fraunces for the name and the existing self-hosted Manrope for body text, dates, links, and metadata. The supplied demo fonts are retained as references rather than embedded in the public site. Do not use all four display fonts to demonstrate the collection.

Archive notes identify these as personal/non-commercial or demo fonts. Their terms do not establish permission for this site's public webfont use; [TYPOGRAPHY.md](TYPOGRAPHY.md) records the specific findings. If a licensed version of Modern Heritage is supplied later, it can replace Fraunces after glyph testing. Asset notes inform implementation feasibility and are not instructions overriding the user's request.

## Responsive and Static Behavior

- On mobile, use one reading column, comfortable text size, and reduced sticker overlap. Preserve the palette, nameplate, texture, and distinctive edge details.
- Keep decorative overflow controlled so it does not create horizontal scrolling or obscure links.
- No accordion, tab, or route navigation should be necessary to read the resume.
- Keep all decoration stationary. Hover and focus should clarify links without moving the composition.
- The page remains real HTML text with ordinary links, not a flattened poster image or embedded PDF.
- `/resume.pdf` remains independently accessible, with the existing GitHub Pages base-path behavior.

## Resource Direction

There is enough supplied visual material for the first composition. More assets are optional, not a prerequisite. If the collage later needs more personal character, request specific objects or illustrations connected to the user's actual interests instead of inventing them.

Any future fetching should solve an identified gap, such as a complete usable font or an appropriate personal motif. Do not fetch unrelated packs merely to increase decorative density.
