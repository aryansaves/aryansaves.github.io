# Design Direction — Notebook Scrapbook Résumé

## Selected composition

One centered, compact portfolio sheet over a static CSS collage background. It is a static-exported web page, not an embedded PDF or a multipage portfolio. The name, role, supplied square identity image, factual introduction, projects, open-source work, education, practical details, and contact stay in one readable sequence. The sheet is up to 760px wide, with a wider layout on short landscape screens. The centered desk uses the dynamic viewport height and does not scroll. Notebook padding, type, and spacing adapt to screen width and height; phones retain Education and Details in parallel columns. Short landscape screens place the identity and introduction beside the content. The notebook itself permits scrolling when a very small viewport or enlarged text cannot fit all content at readable sizes. No fixed paper aspect ratio or whole-page scaling compresses the text.

The latest art direction replaces the earlier pink/green pastel palette. Maximalism comes from layers of real paper, notebook rules, torn edges, tape, a few patterned cutouts, and playful type. The content stays upright and selectable. There is no Home/Work/About/Resume bar.

## Color and material

| Role | Color | Use |
| --- | --- | --- |
| Surround | `#E7E0CA` | Cream graph paper, layered rust checks, teal waves, and mustard stripes |
| Sheet | `#F8F6EE` | Ivory paper under the supplied photographic texture |
| Ink | `#282E31` | Main readable text |
| Notebook rule | `#A9C3C9` | Subtle horizontal lines and blue margin rule |
| Red | `#BC2C45` | Tiny expressive accents and hover response |

The background is a collage of rust checkerboard, teal wave, and mustard striped paper over cream graph paper drawn entirely with CSS. The background uses only native CSS gradients, borders, and fixed rotations. There are no draggable or floating scraps, stickers, randomized positions, background image downloads, event handlers, or Easter egg. Small viewports retain the same static pattern with adjusted proportions.

The notebook is structured as a perspective page stack: two visible under-pages sit behind the current sheet, which has a left-edge transform origin and backface handling. Ten punched holes and binding loops establish the diary spine. A future page-turn feature should add the next page as another page face in this stack and rotate the active sheet around the existing left origin; the current résumé content does not need to be reorganized.

The lined-paper CSS and photographic paper texture remain on the notebook. The profile sits in a plain CSS frame. Paper cutouts, tape, stickers, and the decorative 404 cat have been removed. The supplied cat-with-ball animation is restored beside the notebook’s lower-right edge, at 170px wide. It ignores pointer events and is hidden below 1100px and for reduced motion. All background layers ignore pointer events and are hidden from assistive technology.

## Type and interaction

Super Adorable is the default display face for the full name, project names, and degree. Each name line changes independently to Papernotes on hover or keyboard focus by changing the font on the actual text. Do not overlay duplicated pseudo-element text: selection styles can expose the hidden original and make the two fonts overlap. Each line reserves its line height while swapping. Papernotes is also the handwritten role face and the alternate project-title face on hover or keyboard focus. Manrope serves dense factual copy and links. No cursive font is the default. Font files are self-hosted; publication rights are documented in [TYPOGRAPHY.md](TYPOGRAPHY.md).

The supplied smiling cat is the default cursor on fine-pointer devices; the open-mouthed cat appears while pressed. Both are sized to avoid covering copy. The role label automatically swipes vertically through “backend engineer,” “avid rubber ducker,” and “just ...” inside a fixed-height slot, so the sheet does not resize. Reduced-motion users see the first phrase without animation. The two main-name font swaps use a quiet metallic hit; project and open-source-work font swaps use a lighter click. Sound is preloaded on mount and attempted on the first hover, focus, or press, with no application-level click gate. Browser autoplay policy can still require an interaction before audible playback. Sounds stay low in volume and do not loop. Project rows respond to hover, focus, and press with a subtle tint, font swap, and small offset. Touch devices retain the native cursor behavior. No entrance animation, scroll reveal, parallax, or animation library is used.

## Content and accessibility

Keep the semantic reading order and grounded copy in [CONTENT.md](CONTENT.md). Projects link directly to their verified destinations. The introduction pairs a clean sans-serif lead with a handwritten highlighted ending for a controlled, playful accent. The initial launch does not include a résumé link or PDF. Decorative images use empty alternative text. Keyboard focus and the skip link remain visible and usable. Contrast, horizontal overflow, and legibility matter more than adding more collage objects.

The supplied square identity artwork remains unchanged. Do not invent a portrait or personal facts. Do not add unrelated sticker packs or a theme switcher. The implementation and verification details are in [IMPLEMENTATION.md](IMPLEMENTATION.md).

## Current branch

The September 30 direction on `codex/static-background` starts from the notebook design on main. The dark minimal experiment was discarded. Keep the notebook content and existing foreground details while removing the entire desk interaction and celebration system. Validation and production publication were authorized on September 30; see VERIFICATION.md for the current checks.

Project, contribution, social, contact, and 404 return links request a new tab using `target="_blank"` and `rel="noopener noreferrer"`. The in-page accessibility skip link retains native same-page navigation. Mail links follow the visitor’s configured email handler.
