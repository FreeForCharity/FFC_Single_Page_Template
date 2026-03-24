# Copilot Review Instructions

When reviewing this repository, please focus on:

- Small, targeted feedback (avoid broad refactors).
- GitHub Actions workflow correctness and consistency.
- Avoiding whitespace-only lines or trailing spaces in `run: |` blocks.

For any "post-deploy smoke check" step, confirm it:

- Runs in the job that has access to the deployed URL.
- Uses a bounded retry window (e.g. via `time.monotonic()`).
- Avoids broad exception handlers like `except Exception:`.
- Logs helpful context (HTTP status codes, last error) without printing secrets.

If you see issues outside this scope, mention them briefly.
Don't block the PR unless they are security or correctness bugs.
