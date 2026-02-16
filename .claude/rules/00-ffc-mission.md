# Free For Charity Global Rules

## Mission

Free For Charity (FFC) provides free websites and domain management for 501(c)(3) nonprofit organizations. Every repo in this org supports that mission.

## Commit Messages

Use descriptive prefixes:

- `Add:` -- New feature or file
- `Fix:` -- Bug fix
- `Update:` -- Enhancement to existing feature
- `Refactor:` -- Code restructuring without behavior change
- `Docs:` -- Documentation only
- `Security:` -- Security-related change

## PR Workflow

- Always create a branch. Never push directly to `main`.
- Link PRs to issues: `Fixes #NNN` or `Refs #NNN`
- All PRs require CI checks to pass before merge.

## Naming Conventions

- **Web folders**: Always use kebab-case (`privacy-policy/`, not `PrivacyPolicy/`)
- **Reason**: SEO best practice per Google Search Central. Screen readers handle hyphens better.

## Build Commands

- NEVER CANCEL long-running commands (`npm install`, `npm run build`, `npm test`)
- Set timeout to 180+ seconds for builds
- Wait for commands to complete before proceeding

## Code Style

- Follow existing patterns in the codebase
- Don't over-engineer. Keep solutions simple and focused.
- Don't add features beyond what was asked.
