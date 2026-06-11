## 2025-06-11 - Shimmer Animation Optimization
**Learning:** In this codebase, CTA buttons often use a 'shimmer' effect implemented by animating the 'left' property of a pseudo-element with 200% width. Animating 'left' triggers layout thrashing.
**Action:** Replace 'left' animations with 'transform: translateX()' for GPU acceleration. When the element width is 200%, mapping 'left: -200%' to 'translateX(-100%)' and 'left: 100%' to 'translateX(50%)' preserves the visual range while improving performance.

## 2025-06-11 - Non-standard Image Tags
**Learning:** Some landing pages use the non-standard '<image>' tag, which may bypass some browser preload optimizations or inconsistent attribute handling.
**Action:** Standardize to '<img>' tags to ensure full compatibility with 'decoding="async"' and 'loading="lazy"' attributes.
