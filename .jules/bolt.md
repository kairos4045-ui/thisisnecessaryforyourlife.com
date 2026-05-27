## 2025-05-15 - Shimmer Animation Optimization: Percent-based Transforms
**Learning:** When refactoring shimmer animations from 'left' to 'transform: translateX()' on elements with 'width: 200%', correctly calculate the translation percentages. 'left: -200%' corresponds to 'translateX(-100%)' (relative to the element's width) and 'left: 100%' corresponds to 'translateX(50%)'.
**Action:** Always set 'left: 0' when switching to transforms and calculate relative percentages based on the element's specific dimensions.
