# Copilot Review Instructions

When reviewing this repository (especially PRs that touch GitHub Actions workflows), please:

- Prefer small, targeted feedback over broad refactors.
- Flag whitespace-only lines or trailing spaces inside `run: |` blocks (these can break Prettier/YAML formatting checks).
- Confirm any "post-deploy smoke check" step:
  - Runs in the job that has access to the deployment URL output (same job, or via explicit job outputs).
  - Uses a bounded retry window (e.g., via `time.monotonic()` deadline) to avoid unexpectedly long hangs.
  - Avoids `except Exception:` unless there is a strong reason; prefer catching expected HTTP/network errors.
  - Logs helpful context (HTTP status codes, last error) without printing any secrets.

If you see issues outside this scope, mention them briefly but don't block the PR unless they are security or correctness bugs.