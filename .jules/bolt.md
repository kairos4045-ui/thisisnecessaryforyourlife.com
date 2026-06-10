## 2025-03-24 - Shimmer Animation Optimization
**Learning:** Animating 'left' or 'top' properties triggers the browser's layout and paint cycles on every frame, which is expensive for the CPU. Switching to 'transform: translateX()' moves this work to the Compositor Thread.
**Action:** Always prefer 'transform' for animations. When refactoring 'left' percentages for an element with 'width: 200%', 'left: -200%' to 'left: 100%' maps to 'translateX(-100%)' to 'translateX(50%)' if the base 'left' is set to 0.

## 2025-03-24 - Tag Standardization and Decoding
**Learning:** Non-standard tags like '<image>' can bypass some browser preload optimizations. Standardizing to '<img>' and adding 'decoding="async"' ensures the browser handles the asset efficiently without blocking the main thread during decoding.
**Action:** Use standard HTML5 tags and performance attributes (decoding, loading) for all visual assets.
