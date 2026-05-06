## 2025-03-22 - Static Landing Page Optimization
**Learning:** In static repositories without build pipelines, performance relies heavily on standard HTML attributes (loading, decoding) and resource hints (preconnect). Non-standard tags like `<image>` bypass the browser's preload scanner, delaying the discovery of critical assets like Hero images.
**Action:** Always convert `<image>` to `<img>` for critical assets. Use `decoding="async"` for all images to offload the main thread, and `loading="lazy"` for below-the-fold content while keeping LCP candidates eager.
