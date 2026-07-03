## 2024-05-24 - Hardware-Accelerated Shimmer Animations
**Learning:** Using `left` for shimmer animations on large pseudo-elements (e.g., 200% width) triggers layout and paint on every frame. Moving this to `transform: translateX()` and adding `will-change: transform` offloads the work to the GPU, providing significant rendering performance wins.
**Action:** Always prefer `transform` over `left`/`top`/`margin` for continuous animations. Use `will-change: transform` to hint the browser about upcoming optimizations.
