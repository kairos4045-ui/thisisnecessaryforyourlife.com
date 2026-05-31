## 2026-03-23 - Optimizing modelacaps Landing Page

**Learning:** Static landing pages in this repo use non-standard `<image>` tags and layout-triggering CSS animations (`left`) which can be easily optimized for better browser parsing and GPU acceleration. Applying `decoding="async"` to large base64 images helps prevent main-thread jank during initial load.

**Action:** Standardize `<image>` to `<img>`, refactor `left`/`top` animations to `transform: translateX/Y()`, and ensure all below-the-fold assets use `loading="lazy"`.
