## 2025-03-24 - Standardizing Non-Standard Image Tags
**Learning:** Some landing pages in this codebase use the non-standard `<image>` tag instead of `<img>`. This can prevent modern optimization attributes like `decoding="async"` or `loading="lazy"` from being applied correctly by some parsers/engines, and it deviates from standard performance practices.
**Action:** Always convert `<image>` to `<img>` when optimizing image delivery to ensure consistent behavior and attribute support.
