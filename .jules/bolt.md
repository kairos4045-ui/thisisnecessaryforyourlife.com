## 2025-05-23 - LCP Protection for Post-Hero Images
**Learning:** Images immediately following the hero section (e.g., trust badges or "as seen on" banners) often contribute to the Largest Contentful Paint (LCP) on mobile or smaller viewports. Applying `loading="lazy"` to these elements can negatively impact performance metrics.
**Action:** When applying lazy loading, explicitly skip the first image or group of images that follow the hero section to ensure they are available for early paint.
