## 2026-05-15 - GPU-Accelerated Shimmer Animations
**Learning:** Using 'left' for animations (like shimmer effects on buttons) triggers 'Layout' and 'Paint' on every frame, which is expensive for the main thread, especially on pages with large embedded base64 images or complex CSS.
**Action:** Always prefer 'transform: translateX()' for horizontal animations and add 'will-change: transform' to promote the element to its own compositor layer (GPU acceleration).
