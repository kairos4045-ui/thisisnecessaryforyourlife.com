## 2024-05-20 - Preload Scanner Anti-pattern
**Learning:** Using non-standard `<image>` tags (often seen in SVG-style markup) within HTML prevents the browser's preload scanner from identifying and downloading images early. This can significantly delay the Largest Contentful Paint (LCP) as assets are only discovered during full DOM parsing.
**Action:** Always use standard `<img>` tags for HTML image elements and prefer standard performance attributes like `decoding="async"`.

## 2024-05-20 - GPU-accelerated Rendering for Shimmer
**Learning:** Animating the `left` property on large elements (e.g., 200% width shimmer effects) triggers expensive layout and paint cycles on every frame.
**Action:** Use `transform: translateX()` for translations and add `will-change: transform` to promote the element to its own compositor layer, ensuring the animation is handled by the GPU.
