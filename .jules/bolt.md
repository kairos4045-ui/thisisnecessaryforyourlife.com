## 2025-05-14 - Optimizing Shimmer Animations and Image Loading in Landing Pages

**Learning:** Static landing pages in this repo often use layout-triggering properties (like `left` or `top`) for simple shimmer animations and non-standard `<image>` tags. Replacing `left` with `transform: translateX()` offloads the animation to the compositor thread, preventing main-thread jank. Standardizing `<image>` to `<img>` allows the browser's preload scanner to identify assets immediately.

**Action:** Always check for `left`/`top` animations in CSS and replace with `transform`. Convert all `<image>` tags to `<img>` and apply `decoding="async"` to all images, plus `loading="lazy"` for those below the fold.
