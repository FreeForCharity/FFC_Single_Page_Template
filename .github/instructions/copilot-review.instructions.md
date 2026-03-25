# Copilot Review Instructions

When reviewing this repository, please focus on:

- Small, targeted feedback (avoid broad refactors).
- GitHub Actions workflow correctness and consistency.
- Avoiding whitespace-only lines or trailing spaces in `run: |` blocks.

If a pull request adds an incident-notification job (commonly named `notify-failure`), please confirm:

- It runs only when the deploy job fails (via `always()` + `needs.<job>.result == 'failure'`).
- It uses least-privilege permissions (typically just `issues: write`; omit `contents: read` unless the job reads repo contents).
- It links to the failing run and avoids printing any secrets.

For any "post-deploy smoke check" step, confirm it:

- Runs in the job that has access to the deployed URL.
- Uses a bounded retry window (e.g. via `time.monotonic()`).
- Avoids broad exception handlers like `except Exception:`.
- Logs helpful context (HTTP status codes, last error) without printing secrets.

If you see issues outside this scope, mention them briefly.
Don't block the PR unless they are security or correctness bugs.

<!-- Copilot review wave: 2026-03-25T03:56:27.6681381Z -->
