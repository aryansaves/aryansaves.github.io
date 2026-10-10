# Notebook fold geometry

`geometry.ts` is the pure TypeScript fold geometry from [Grabfold](https://github.com/javocsoft/grabfold/blob/main/src/geometry.ts), downloaded on October 8, 2026. Copyright (c) 2026 JavocSoft, MIT; the complete upstream license is retained in `LICENSE`.

The source archive was downloaded from `https://codeload.github.com/javocsoft/grabfold/tar.gz/refs/heads/main`; its SHA-256 was `24c83784b65a7cbe8465b091c13804033e87bcc7cae834757aacd770f758f5fa`. Only a provenance header was added to the geometry source. There is no Grabfold package or full book engine dependency.

The notebook controller uses the actual rendered page dimensions, clips the existing HTML at the computed crease, and carries a decorative blank reverse with the returned transform. Crease/cast shading is adapted from upstream `src/sheet.ts`; its license also covers that adaptation. The portfolio HTML is neither cloned nor rasterized. The blank destination is a decorative ruled leaf; it adds no factual content or route.

Pointer Events are confined to the turn button. Native links, text selection, and internal article scrolling retain their own input. A committed turn uses a smooth acceleration and deceleration; dragging follows the hand, a release either settles or returns, and Escape cancels. Keyboard activation uses the same turn. Reduced motion switches the leaf immediately.

Implementation is under visual refinement on `codex/page-turn-animation`. Formal validation and commits are deferred until the user approves the visual effect.
