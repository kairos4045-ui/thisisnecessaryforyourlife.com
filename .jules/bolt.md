## 2026-03-22 - Optimize shimmer animation and image loading in modelacaps
**Learning:** Animating 'left' triggers layout/paint on every frame. Moving to 'transform: translateX()' and 'will-change: transform' allows for GPU acceleration and smoother performance. Also, non-standard '<image>' tags are not optimized by browsers; standardizing to '<img>' enables better discovery and performance attributes.
**Action:** Always refactor layout animations to transform-based animations and standardize HTML tags before applying performance attributes.
