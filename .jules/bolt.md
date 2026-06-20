## 2025-05-14 - [GPU-Accelerated Shimmer Animations]
**Learning:** Using the `left` property for shimmer animations on large pseudo-elements (e.g., width: 200%) triggers layout and paint on every frame. Moving this to `transform: translateX()` and adding `will-change: transform` offloads the work to the GPU, providing significant rendering performance wins.
**Action:** Always prefer `transform` and `opacity` for high-frequency animations to ensure they are handled by the compositor thread.

## 2025-05-14 - [Handling Large Files with Base64 Assets]
**Learning:** Large HTML files (5MB+) containing massive base64-encoded images can crash standard text buffers or trigger memory limits in automation tools.
**Action:** Use Python scripts with streaming or targeted string replacements (e.g., `re.sub`) for surgical edits to avoid loading the entire file into memory multiple times or truncating output.
