## 2026-07-06 - Hardware Accelerated Shimmer Animation
**Learning:** Using `left` for shimmer animations on large pseudo-elements (e.g., 200% width) triggers layout and paint on every frame. Moving this to `transform: translateX()` and adding `will-change: transform` offloads the work to the GPU, providing significant rendering performance wins.
**Action:** Always prefer `transform` over `left`/`top` for continuous animations.

## 2026-07-06 - Image Discovery Latency with Non-Standard Tags
**Learning:** The `<image>` tag is non-standard for HTML5 and is often ignored by the browser's preload scanner, delaying image discovery and increasing LCP.
**Action:** Convert `<image>` tags to standard `<img>` tags to improve discovery latency and enable performance attributes like `decoding="async"`.
