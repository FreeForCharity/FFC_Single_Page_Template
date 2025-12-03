# Contributing to Free For Charity

Thank you for your interest in contributing to Free For Charity! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Coding Standards](#coding-standards)
5. [Testing Guidelines](#testing-guidelines)
6. [Commit Message Guidelines](#commit-message-guidelines)
7. [Pull Request Process](#pull-request-process)
8. [Communication Channels](#communication-channels)

---

## Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors. By participating in this project, you agree to abide by our code of conduct:

- **Be respectful**: Treat all contributors with respect and courtesy
- **Be collaborative**: Work together to improve the project
- **Be constructive**: Provide helpful feedback and be open to receiving it
- **Be inclusive**: Welcome contributors from all backgrounds and experience levels

---

## Getting Started

### Prerequisites

- **Node.js**: Version 20.x or higher (validated with v20.19.5)
- **npm**: Package manager (comes with Node.js)
- **Git**: Version control
- **Code Editor**: We recommend VS Code with the following extensions:
  - ESLint
  - Prettier (if formatting is enabled)
  - Tailwind CSS IntelliSense

### Setting Up Your Development Environment

1. **Fork the repository** on GitHub

2. **Clone your fork**:

   ```bash
   git clone https://github.com/YOUR_USERNAME/FFC_Single_Page_Template.git
   cd FFC_Single_Page_Template
   ```

3. **Add upstream remote**:

   ```bash
   git remote add upstream https://github.com/FreeForCharity/FFC_Single_Page_Template.git
   ```

4. **Install dependencies**:

   ```bash
   npm install
   ```

5. **Start the development server**:

   ```bash
   npm run dev
   ```

   Visit http://localhost:3000 to see the site running locally.

### Verify Your Setup

Run the following commands to ensure everything is working:

```bash
# Run linting
npm run lint

# Run unit tests
npm test

# Build the project
npm run build

# Run E2E tests (requires build first)
npm run test:e2e
```

---

## Development Workflow

### Creating a New Branch

Always create a new branch for your work:

```bash
# Update your main branch
git checkout main
git pull upstream main

# Create a new feature branch
git checkout -b feature/your-feature-name
```

Branch naming conventions:

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `test/description` - Test additions or updates
- `refactor/description` - Code refactoring

### Making Changes

1. **Make your changes** in your feature branch
2. **Test your changes** locally:

   ```bash
   npm run lint        # Check for linting errors
   npm test           # Run unit tests
   npm run build      # Ensure it builds successfully
   npm run test:e2e   # Run E2E tests
   ```

3. **Commit your changes** with clear, descriptive messages (see [Commit Message Guidelines](#commit-message-guidelines))

4. **Keep your branch up to date**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

### Testing Your Changes

Before submitting a pull request:

1. **Run all tests**:

   ```bash
   npm test              # Unit tests
   npm run test:coverage # Check test coverage
   npm run test:e2e     # E2E tests
   ```

2. **Test manually**:
   - Test on different screen sizes (mobile, tablet, desktop)
   - Test navigation and all interactive elements
   - Verify images and assets load correctly
   - Check console for errors

3. **Verify the build**:
   ```bash
   npm run build
   npm run preview
   ```

---

## Coding Standards

### TypeScript/JavaScript

- Use **TypeScript** for all new files
- Follow **functional programming** principles where possible
- Use **arrow functions** for component definitions
- Prefer **const** over **let**, avoid **var**
- Use **meaningful variable names** that describe their purpose

### React Components

- Use **functional components** with hooks
- Keep components **small and focused** (single responsibility)
- Use **TypeScript interfaces** for props and state
- Place **"use client"** directive at the top when client-side features are needed
- Organize components in the appropriate directory:
  - `/src/components` - Shared/reusable components
  - `/src/app` - Page-specific components

### Styling

- Use **Tailwind CSS** for styling
- Follow a **mobile-first** approach
- Use **existing Tailwind classes** before creating custom CSS
- Group related classes together for readability
- Use consistent spacing and sizing scales

Example:

```tsx
// Good
<div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-gray-900">Title</h2>
  <p className="text-gray-600">Content</p>
</div>

// Avoid inline styles
<div style={{ padding: '24px' }}> // ❌
```

### File Organization

- One component per file
- Name files using **PascalCase** for components: `MyComponent.tsx`
- Name files using **camelCase** for utilities: `assetPath.ts`
- Keep related files together in directories
- Use `index.tsx` for directory exports when appropriate

---

## Testing Guidelines

### Unit Tests

- Write tests for all new components and utilities
- Place tests in `__tests__` directory, mirroring the source structure
- Name test files: `ComponentName.test.tsx` or `utilityName.test.ts`
- Use **Jest** and **React Testing Library**
- Aim for meaningful test coverage, not just high percentages

#### Writing Good Tests

```tsx
// Good test structure
describe('ComponentName', () => {
  it('should render correctly', () => {
    render(<ComponentName />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

  it('should handle user interaction', () => {
    render(<ComponentName />)
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByText('Updated')).toBeInTheDocument()
  })
})
```

### E2E Tests

- Write E2E tests for critical user flows
- Place E2E tests in the `tests` directory
- Use **Playwright** for E2E testing
- Test across different viewports when relevant

### Test Coverage Goals

- **Minimum**: 5% overall coverage (current threshold)
- **Target**: 15-20% coverage for initial implementation
- **Long-term goal**: 50%+ coverage

---

## Commit Message Guidelines

We follow a conventional commit message format to maintain a clear and organized git history.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring without changing functionality
- `test`: Adding or updating tests
- `chore`: Maintenance tasks, dependency updates
- `perf`: Performance improvements
- `ci`: CI/CD changes

### Examples

```bash
# Feature addition
git commit -m "feat: add dark mode toggle component"

# Bug fix
git commit -m "fix: resolve mobile navigation menu not closing"

# Documentation
git commit -m "docs: update README with new deployment instructions"

# Multiple lines
git commit -m "feat: implement user authentication

- Add login component
- Add logout functionality
- Add protected route wrapper
- Update navigation to show user status"
```

### Guidelines

- Use the **imperative mood** ("add" not "added" or "adds")
- Keep the subject line under **50 characters**
- Capitalize the subject line
- Do not end the subject line with a period
- Use the body to explain **what** and **why**, not **how**
- Reference issues and pull requests when relevant

---

## Pull Request Process

### Before Submitting

1. **Ensure all tests pass**:

   ```bash
   npm run lint
   npm test
   npm run test:e2e
   ```

2. **Update documentation** if needed:
   - Update README.md for new features
   - Add JSDoc comments to new functions
   - Update TESTING.md for new test approaches

3. **Verify the build works**:

   ```bash
   npm run build
   npm run preview
   ```

4. **Commit all changes** with proper commit messages

5. **Rebase on main** to ensure a clean history:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

### Creating a Pull Request

1. **Push your branch** to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open a Pull Request** on GitHub from your fork to the main repository

3. **Fill out the PR template** with:
   - Clear description of changes
   - Related issue numbers (if applicable)
   - Screenshots for UI changes
   - Testing performed
   - Breaking changes (if any)

### PR Title Format

Use the same format as commit messages:

```
feat: add new feature
fix: resolve bug in component
docs: update contributing guidelines
```

### Review Process

1. **Automated checks** will run:
   - Linting
   - Unit tests
   - E2E tests
   - Build verification
   - CodeQL security scan

2. **Code review** by maintainers:
   - At least one approval required
   - Address all review comments
   - Make changes in new commits (don't force push during review)

3. **Merge**:
   - Once approved and all checks pass, a maintainer will merge your PR
   - Your contribution will be included in the next release

### After Your PR is Merged

1. **Delete your branch**:

   ```bash
   git branch -d feature/your-feature-name
   git push origin --delete feature/your-feature-name
   ```

2. **Update your local main**:
   ```bash
   git checkout main
   git pull upstream main
   ```

---

## Communication Channels

### GitHub Issues

- Report bugs and request features through [GitHub Issues](https://github.com/FreeForCharity/FFC_Single_Page_Template/issues)
- Search existing issues before creating a new one
- Provide clear, detailed information
- Use issue templates when available

### GitHub Discussions

- Ask questions about the project
- Discuss ideas and proposals
- Share knowledge with other contributors

### Email

For sensitive matters, contact the maintainers directly:

- **Email**: hello@freeforcharity.org

---

## Additional Resources

- [README.md](./README.md) - Project overview and setup
- [TESTING.md](./TESTING.md) - Testing documentation
- [SECURITY.md](./SECURITY.md) - Security policies and procedures
- [SITE_IMPROVEMENTS.md](./SITE_IMPROVEMENTS.md) - Planned improvements and roadmap

---

## Recognition

All contributors will be recognized in our project documentation and release notes. Thank you for helping make Free For Charity better!

---

**Questions?** Feel free to open an issue or reach out to the maintainers. We're here to help!
