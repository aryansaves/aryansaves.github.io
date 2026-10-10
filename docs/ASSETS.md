# Active resources

The site ships only assets referenced by its current notebook design.

| Resource | Use |
| --- | --- |
| `public/identity.jpg` | Unchanged supplied square identity artwork; original reference is `Pfp.jpg` |
| `public/art/cat-playing.svg` | Restored supplied cat-with-ball animation beside the notebook; hidden below 1100px and for reduced motion |
| `public/art/paper.webp` | Compressed photographic texture on the notebook sheet |
| `public/art/cursor-default-small.png` | 26×26 default cursor on fine-pointer devices |
| `public/art/cursor-pressed-small.png` | 26×26 pressed cursor on fine-pointer devices |
| `public/audio/font-title.mp3` | Short metallic effect for title font changes |
| `public/audio/font-item.mp3` | Short click for project/contribution font changes |
| `src/assets/fonts/SuperAdorable.ttf` | Display typography |
| `src/assets/fonts/Papernotes.woff2` | Accent and hover/focus typography |
| Fontsource Manrope Latin variable WOFF2 | Factual text; license retained in `public/licenses/manrope.txt` |
| `public/licenses/page-turn.txt` | MIT notice for the adapted Grabfold geometry and fold shading; source provenance retained in `src/lib/page-turn/README.md` |

The desk background uses only static CSS gradients, borders, and rotations. No background asset downloads or desk interaction code are needed.

All Easter-egg cats, reduced-motion celebration variants, jackpot audio, floating-scrap assets, flower/planet stickers, rough paper, taped portrait backing, tape strips, and decorative 404 cat SVG have been removed, together with unused components, styles, and references. Earlier assets remain in Git history.

The retained cursor images are transparent derivatives of the supplied cat drawings. The retained short mono font sounds preload on mount and attempt playback on hover, focus, or press. Browser autoplay policy may require a visitor interaction before sound is allowed.

Asset provenance: paper texture derives from the supplied `marjan-blan-5Ft4NWTmeJE-unsplash.jpg`; cursors derive from `cursor_hover.png` and `cursor_click.png`; font-title and font-item audio derive from the supplied metallic-twang and typing WAVs. The supplied resources do not include a complete license record; existing font notes are in TYPOGRAPHY.md.

The homepage cat-with-ball SVG was restored at the user’s request. It is unchanged from the original supplied export.
