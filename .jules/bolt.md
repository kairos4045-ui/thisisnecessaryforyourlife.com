## 2026-03-22 - Optimizing CSS Shimmer Animations
**Learning:** Animating layout-triggering properties like `left` or `top` forces the browser to perform expensive layout and paint cycles on every frame. By switching to `transform: translateX()` and applying `will-change: transform`, the animation is offloaded to the compositor thread (GPU), significantly reducing main-thread blocking and improving FPS.
**Action:** Always prioritize `transform` and `opacity` for animations. Use `will-change` sparingly but effectively for continuously animating elements like CTA buttons.
