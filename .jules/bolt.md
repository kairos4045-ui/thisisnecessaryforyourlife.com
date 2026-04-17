# Bolt's Journal ⚡

## 2025-05-14 - [Compositor vs Layout for Animations]
**Learning:** Using `left` or `top` for recurring animations (like CTA shimmer effects) triggers layout and paint cycles on the main thread. In complex landing pages, this can cause stuttering or frame drops.
**Action:** Always prefer `transform: translateX()` or `translateY()` for animations. Use `will-change: transform` to hint the browser to promote the element to its own compositor layer.

## 2025-05-14 - [Lazy Loading Hazards]
**Learning:** Adding `loading="lazy"` to images that appear in the initial viewport or just below the fold can delay their discovery by the browser's preload scanner, negatively impacting Largest Contentful Paint (LCP).
**Action:** Only apply `loading="lazy"` to images that are guaranteed to be deep below the fold. For images near the top, use `decoding="async"` but omit `loading="lazy"`.
