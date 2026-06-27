## 2025-05-15 - GPU-Accelerated Shimmer Animations
**Learning:** Animating the `left` property on large pseudo-elements (like a 200% width shimmer effect) triggers expensive layout and paint cycles on every frame. This leads to main-thread congestion and visible "jank" on mobile devices.
**Action:** Use `transform: translateX()` combined with `will-change: transform` to offload animations to the GPU's compositor thread. Ensure `left: 0` is set to stabilize the element's position before applying transforms.

## 2025-05-15 - Standardizing Image Tags for Preload Scanner
**Learning:** The use of non-standard `<image>` tags in some landing pages prevents the browser's preload scanner from identifying critical assets (like hero images) early in the loading process.
**Action:** Always convert `<image>` to standard `<img>` tags and apply `decoding="async"` to prevent image decoding from blocking the main thread.
