## 2024-05-24 - Hardware-Accelerated Shimmer Animations
**Learning:** Animating properties like `left` or `margin` triggers layout reflows and repaints on every frame, which is computationally expensive. Moving these to `transform: translateX()` offloads the animation to the GPU (compositor thread).
**Action:** Always prefer `transform` and `opacity` for animations. Use `will-change: transform` to hint the browser to promote the element to its own layer.

## 2024-05-24 - Preconnect for External Asset Domains
**Learning:** When a page relies heavily on external domains for assets (e.g., Imgur for images), DNS lookup, TCP handshake, and TLS negotiation can add significant latency.
**Action:** Use `<link rel="preconnect">` for primary asset domains to establish connections early in the page load waterfall.
