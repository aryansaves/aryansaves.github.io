# Design Direction — Notebook Scrapbook Résumé

## Selected composition

One centered, compact résumé sheet on a charcoal desk. It is a static-exported web page, not an embedded PDF or a multipage portfolio. The name, role, supplied square identity image, factual introduction, projects, education, practical details, contact, and PDF link stay in one readable sequence. The sheet is 760px wide at most; smaller screens use a single reading column and natural vertical scrolling.

The latest art direction replaces the earlier pink/green pastel palette. Maximalism comes from layers of real paper, notebook rules, torn edges, tape, a few patterned cutouts, and playful type. The content stays upright and selectable. There is no Home/Work/About/Resume bar.

## Color and material

| Role | Color | Use |
| --- | --- | --- |
| Desk | `#455056` | Quiet charcoal/slate surround |
| Sheet | `#F8F6EE` | Ivory paper under the supplied photographic texture |
| Ink | `#282E31` | Main readable text |
| Notebook rule | `#A9C3C9` | Subtle horizontal lines and blue margin rule |
| Red | `#BC2C45` | Tiny expressive accents and hover response |
| Olive | `#63773F` | Small yin-yang patterned card only |

The user's lined-paper CSS informs the sheet and introduction note. Their yin-yang and zig-zag recipes appear as small edge details rather than full-page backgrounds. The original creased JPG remains the sheet's photographic texture. The supplied transparent scrap PNGs form a taped portrait backing, a rough lower-left edge, and a cropped torn strip over the portrait. No decoration may cover copy or capture pointer events. The lower-left scrap is hidden on narrow screens where it would crowd content.

## Type and interaction

Super Adorable is the default display face for the full name, project names, and degree. Each name line changes independently to Papernotes on hover. Papernotes is also the handwritten role face and the alternate project-title face on hover or keyboard focus. Manrope serves dense factual copy and links. No cursive font is the default. Font files are self-hosted; publication rights are documented in [TYPOGRAPHY.md](TYPOGRAPHY.md).

The supplied smiling cat is the default cursor on fine-pointer devices; the open-mouthed cat appears while pressed. Both are sized to avoid covering copy. The role label automatically swipes vertically through “backend engineer,” “avid rubber ducker,” and “just ...” inside a fixed-height slot, so the sheet does not resize. Reduced-motion users see the first phrase without animation. Project rows respond to hover, focus, and press with a subtle tint, font swap, and small offset. Touch devices retain the native cursor behavior. The supplied animated SVGs appear on the desk and 404 page; they are hidden for reduced-motion users. No entrance animation, scroll reveal, parallax, or animation library is used.

## Content and accessibility

Keep the semantic reading order and grounded copy in [CONTENT.md](CONTENT.md). Projects link directly to their verified destinations. Contact links and the discreet PDF link stay on the sheet. `/resume.pdf` is a direct exported PDF (or `/<repository>/resume.pdf` on a GitHub Pages project site). Decorative images use empty alternative text. Keyboard focus and the skip link remain visible and usable. Contrast, horizontal overflow, and legibility matter more than adding more collage objects.

The supplied square identity artwork remains unchanged. Do not invent a portrait or personal facts. Do not add unrelated sticker packs or a theme switcher. The implementation and verification details are in [IMPLEMENTATION.md](IMPLEMENTATION.md).
