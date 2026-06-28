## 2025-05-14 - [GPU acceleration for shimmer animations]
**Learning:** Using 'left' for shimmer animations on large pseudo-elements (200% width) triggers layout and paint on every frame. Moving this to 'transform: translateX()' and adding 'will-change: transform' offloads the work to the GPU, providing significant rendering performance wins.
**Action:** Always prefer 'transform' for animations over layout properties like 'left', 'top', or 'margin'.
