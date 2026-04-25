## 2025-05-15 - Image Optimization Patterns
**Learning:** Hero images in this codebase sometimes use the non-standard SVG-derived `<image>` tag, which can be less predictable for standard browser optimizations. Additionally, while `decoding="async"` is beneficial for almost all images, `loading="lazy"` must be strictly excluded from the hero image to prevent LCP degradation.
**Action:** Always convert `<image>` to `<img>` when optimizing and apply resource hints (`preconnect`) for third-party image hosts.
