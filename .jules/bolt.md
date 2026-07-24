## 2026-03-24 - Standardizing Non-Standard HTML Image Tags
**Learning:** Using the non-standard `<image>` tag prevents browser preload scanners from identifying and loading the image during initial HTML parsing. Converting it to standard `<img>` restores optimized image preloading, cutting down Largest Contentful Paint (LCP) and discovery latency.
**Action:** Always replace `<image>` tags with `<img>` tags on landing pages, ensuring proper performance attributes like `decoding="async"` are applied for asynchronous decoding without stalling the main parser thread.
