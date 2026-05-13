## 2025-05-14 - Animation Layout Thrashing
**Learning:** The 'shimmer' animations on landing pages like 'modelacaps' were using the 'left' property, which triggers a full layout/reflow cycle on every frame. This is particularly expensive on pages with large amounts of embedded base64 data.
**Action:** Always refactor 'left' or 'top' based animations to use 'transform: translateX/Y' and 'will-change' to move the animation to the compositor thread.

## 2025-05-14 - Non-standard HTML Tags
**Learning:** Found usage of non-standard <image> tags in static landing pages. These tags are not properly handled by the browser's preload scanner and don't natively support modern performance attributes like 'decoding' or 'loading' as reliably as <img>.
**Action:** Convert all <image> tags to standard <img> tags to ensure optimal resource prioritization and support for modern attributes.
