## 2025-05-14 - Shimmer Animation Performance
**Learning:** Using `left` for shimmer animations on large pseudo-elements (e.g., 200% width) triggers layout and paint on every frame, which is computationally expensive. Moving this to `transform: translateX()` and adding `will-change: transform` offloads the work to the GPU, providing significant rendering performance wins and smoother 60fps animations.
**Action:** Always prefer `transform` and `opacity` for animations over layout-triggering properties like `left`, `top`, or `margin`.
