## 2024-04-24 - Optimizing Static Landing Pages
**Learning:** Found that this codebase uses non-standard `<image>` tags and layout-triggering properties (`left`) for shimmer animations. Large base64 strings in the HTML make traditional diff tools difficult to use, requiring surgical line-based edits or automation scripts.
**Action:** Always verify image tag standardity and prioritize compositor-thread animations (`transform`) over layout-triggering ones. Use Python scripts for precise attribute injection in large HTML files.
