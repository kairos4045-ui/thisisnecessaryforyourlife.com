## 2025-01-24 - GPU Accelerated Shimmer Animations
**Learning:** The landing pages use a shimmer effect on CTA buttons implemented via pseudo-elements with 'width: 200%' and 'left' animations. This triggers expensive Layout and Paint cycles on every frame.
**Action:** Refactor shimmer animations to use 'transform: translateX()' and 'will-change: transform'. For an element with 'width: 200%', 'left: -200%' translates to 'translateX(-100%)' and 'left: 100%' translates to 'translateX(50%)'. This offloads rendering to the GPU for smoother 60fps performance.
