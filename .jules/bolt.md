
## 2026-06-19 - Playwright evaluation of large DOM elements
**Learning:** Returning large strings (like the entire content of a `<style>` tag containing massive base64 data) from `page.evaluate()` can cause `SyntaxError: Invalid or unexpected token` in the environment's bridge.
**Action:** Perform specific string matching or logical checks within the browser context and return only simple data types (e.g., booleans) to the Playwright script.
