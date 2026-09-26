# Design Direction — Notebook Scrapbook Résumé

## Selected composition

One centered, compact portfolio sheet on an interactive collage desk. It is a static-exported web page, not an embedded PDF or a multipage portfolio. The name, role, supplied square identity image, factual introduction, projects, open-source work, education, practical details, and contact stay in one readable sequence. The sheet is 760px wide at most and its height follows the content with a responsive 58–76px lower paper margin instead of a literal A4-height minimum. This optical page proportion preserves a physical-paper ending while allowing common desktop viewports to show the complete sheet without scrolling; smaller screens retain natural vertical scrolling and tighter spacing.

The latest art direction replaces the earlier pink/green pastel palette. Maximalism comes from layers of real paper, notebook rules, torn edges, tape, a few patterned cutouts, and playful type. The content stays upright and selectable. There is no Home/Work/About/Resume bar.

## Color and material

| Role | Color | Use |
| --- | --- | --- |
| Surround | `#E7E0CA` | Cream graph paper, layered rust checks, teal waves, and mustard stripes |
| Sheet | `#F8F6EE` | Ivory paper under the supplied photographic texture |
| Ink | `#282E31` | Main readable text |
| Notebook rule | `#A9C3C9` | Subtle horizontal lines and blue margin rule |
| Red | `#BC2C45` | Tiny expressive accents and hover response |

The background is a collage of rust checkerboard, teal wave, and mustard striped paper over cream graph paper with the supplied photographic grain. Pattern techniques take inspiration from [Lea Verou’s gallery](https://projects.verou.me/css3patterns/); composition and direct manipulation take inspiration from [Codrops’ cutout collage](https://tympanus.net/Tutorials/CutoutCollageLayout/) and [dragging experiments](https://tympanus.net/Development/ImageDraggingEffects/). These are references for an original local implementation, without remote dependencies.

Above 1100px, four paper scraps are scattered into newly randomized margin positions and angles on each load, including the supplied planet and flower stickers. Dragging is unrestricted across the desk; scraps pass underneath the higher notebook layer rather than blocking its content. Clicking cycles four prints. Keyboard users can activate with Enter/Space, move with arrow keys, and restore a scrap to its randomized origin with Escape. There is no shuffle button or visible instruction label. Starting positions occupy separate margin slots and account for rotated bounds. Hover lifts a corner; reduced motion disables animated transitions and lift. Smaller viewports retain the layered pattern without crowded side controls.

The notebook is structured as a perspective page stack: two visible under-pages sit behind the current sheet, which has a left-edge transform origin and backface handling. Ten punched holes and binding loops establish the diary spine. A future page-turn feature should add the next page as another page face in this stack and rotate the active sheet around the existing left origin; the current résumé content does not need to be reorganized.

The user's lined-paper CSS still informs the sheet. The original creased JPG remains the sheet's photographic texture. The supplied transparent scrap PNGs form a taped portrait backing and a cropped torn strip over the portrait. The former lower-left scrap was removed because it overlapped Experience. Decorative layers ignore pointer events; only the explicitly interactive scraps accept input outside the sheet.

## Type and interaction

Super Adorable is the default display face for the full name, project names, and degree. Each name line changes independently to Papernotes on hover. Papernotes is also the handwritten role face and the alternate project-title face on hover or keyboard focus. Manrope serves dense factual copy and links. No cursive font is the default. Font files are self-hosted; publication rights are documented in [TYPOGRAPHY.md](TYPOGRAPHY.md).

The supplied smiling cat is the default cursor on fine-pointer devices; the open-mouthed cat appears while pressed. Both are sized to avoid covering copy. The role label automatically swipes vertically through “backend engineer,” “avid rubber ducker,” and “just ...” inside a fixed-height slot, so the sheet does not resize. Reduced-motion users see the first phrase without animation. The two main-name font swaps use a quiet metallic hit; project and open-source-work font swaps use a lighter click. Sound plays only after browser interaction has enabled audio, stays low in volume, and does not loop. Project rows respond to hover, focus, and press with a subtle tint, font swap, and small offset. Touch devices retain the native cursor behavior. The playing-cat SVG is anchored to the sheet’s lower-right edge so the ball’s leftmost point meets the paper edge; it is hidden where the side margin is too narrow and for reduced-motion users. The supplied 404 SVG remains on the utility page. No entrance animation, scroll reveal, parallax, or animation library is used.

## Content and accessibility

Keep the semantic reading order and grounded copy in [CONTENT.md](CONTENT.md). Projects link directly to their verified destinations. The introduction pairs a clean sans-serif lead with a handwritten highlighted ending for a controlled, playful accent. The initial launch does not include a résumé link or PDF. Decorative images use empty alternative text. Keyboard focus and the skip link remain visible and usable. Contrast, horizontal overflow, and legibility matter more than adding more collage objects.

The supplied square identity artwork remains unchanged. Do not invent a portrait or personal facts. Do not add unrelated sticker packs or a theme switcher. The implementation and verification details are in [IMPLEMENTATION.md](IMPLEMENTATION.md).

## Lost-scraps Easter egg

Once all four scraps are fully beneath the notebook, 48 randomly sized and rotated rainbow-cat scraps flood the screen with overlap. Reuse the supplied rough paper PNG instead of operating-system window chrome. The centre paper contains only “ALL SCRAPS LOST!” and the larger, clickable 8-bit cat. Its accessible button label explains that it refreshes and rearranges the desk. There is no automatic refresh, secondary button, or explanatory visible copy. The supplied casino jackpot plays once; confetti finishes after two passes. The overlay contains keyboard focus, blocks underlying interaction, and uses still SVG variants for reduced motion.
