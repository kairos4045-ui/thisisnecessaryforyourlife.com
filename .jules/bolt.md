## 2025-05-14 - Standardizing image tags and protecting LCP
**Learning:** Found non-standard `<image>` tags in production HTML files. While browsers often alias this to `<img>`, it bypasses standard optimization attributes and can cause inconsistent rendering. Additionally, blindly applying `loading="lazy"` to all images can hurt LCP if the first image after the fold is caught in the sweep.
**Action:** Always convert `<image>` to `<img>`. When applying lazy loading, manually identify the first 1-2 images after the hero section and exclude them from lazy loading to preserve the LCP candidate.
