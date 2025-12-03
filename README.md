Free For Charity website built with Next.js App Router.

## Organization

**Free For Charity** is a 501(c)(3) nonprofit organization (EIN: 46-2471893) dedicated to supporting other nonprofits.

## Purpose

Free For Charity connects students, professionals, and businesses with nonprofits to reduce operating costs and increase impact. By providing free web hosting, domain names, Microsoft 365 grants assistance, and consulting services, we help nonprofits put more resources back into their charitable missions.

## Main Calls-to-Action

The site features two primary CTAs accessible throughout the experience via global popups:

- **Donate**: Support our mission with financial contributions
- **Volunteer**: Join our team of skilled volunteers helping nonprofits

## Deployment

- **Live Site**: [https://www.freeforcharity.org](https://www.freeforcharity.org)
- **GitHub Pages**: [https://freeforcharity.github.io/freeforcharity-web/](https://freeforcharity.github.io/freeforcharity-web/)
- **Hosting**: GitHub Pages
- **Deployment**: Automated via GitHub Actions on push to `main` branch

## Development Status

**Current Status: In Development**

The site is actively being developed with the following status:

✅ **Functional:**
- Core navigation and layout
- Global Donate and Volunteer popups
- Responsive design (mobile and desktop)
- SEO optimization (metadata, sitemap, robots.txt)
- Static site generation and deployment pipeline

⚠️ **In Progress:**
- Many footer links are placeholder (#) and need proper destinations
- Program application CTAs link to placeholders
- Social media links need proper URLs
- Policy pages (Privacy, Terms, etc.) need to be created
- Form submissions are simulated (backend integration pending)

The site is deployed to its live domain (freeforcharity.org) but some functionality is still being completed.

## Overview

This site showcases programs, enables donations, and lets visitors volunteer via global popups.

## Tech Stack

- Next.js (App Router, TypeScript)
- Tailwind-style utility classes for styling
- next/font for Google fonts (Faustina, Fauna One, Lato, Inter)

## Content Management

Content such as FAQs, Team Members, and Testimonials is stored as JSON files in the `src/data/` directory. To edit content, simply modify the JSON files directly.

## Local Development

1) Install dependencies
```bash
npm install
```

2) Run the dev server
```bash
npm run dev
```

Visit http://localhost:3000

## Testing

This project includes automated tests to ensure quality and consistency.

### Running Tests

```bash
# Build the site first
npm run build

# Install Playwright browsers (first time only)
npx playwright install chromium

# Run tests
npm test              # Headless mode
npm run test:headed   # With browser visible
npm run test:ui       # Interactive UI mode
```

### Current Test Coverage

#### End-to-End Tests (Playwright)

**Logo Visibility Tests** (`tests/logo.spec.ts`)
- ✅ **NavBar Logo Visibility**: Verifies logo appears in top left corner with correct src and alt text
- ✅ **Hero Section Logo Visibility**: Verifies logo appears in hero section with correct src and alt text  
- ✅ **Logo Consistency**: Confirms both logos are present simultaneously and use the same image source

**GitHub Pages Deployment Tests** (`tests/github-pages.spec.ts`)
- ✅ **Image Path Compatibility**: Validates logo image paths work for both custom domain and GitHub Pages basePath
- ✅ **Image HTTP Status**: Verifies logo images return 200 OK status codes
- ⏭️ **Image Natural Dimensions** (skipped): Checks image dimensions after load (disabled in CI due to timing issues)

**Test Configuration** (`playwright.config.ts`)
- Uses system Chromium browser to avoid network download issues
- Runs against built static site (`npm run preview`)
- Retries failed tests 2x in CI, 0x locally
- Collects traces on first retry for debugging

Tests run automatically on every push to main via GitHub Actions before deployment.

### Static Code Analysis

**ESLint** (`eslint.config.mjs`)
- ✅ Next.js core-web-vitals and TypeScript rules enabled
- ✅ Runs automatically during build process
- ⚠️ Currently reports 2 expected warnings about `<img>` tags (acceptable for static export)

**TypeScript** (`tsconfig.json`)
- ✅ Strict mode enabled
- ✅ Type checking runs during build

### Security Analysis

**npm audit**
- All dependencies are checked for security vulnerabilities

### CI/CD Integration

**GitHub Actions Workflow** (`.github/workflows/nextjs.yml`)

Current CI/CD pipeline includes:
1. ✅ Node.js 20 setup
2. ✅ Dependency installation (`npm ci`)
3. ✅ Next.js build with GitHub Pages basePath
4. ✅ Playwright browser installation
5. ✅ Automated test execution
6. ✅ Test failure blocks deployment
7. ✅ Static site artifact upload
8. ✅ Deployment to GitHub Pages

### Recommended Testing Enhancements

The following enhancements could improve the test suite and CI/CD process:

#### Dynamic Analysis Opportunities
- **Accessibility Testing**: Add @axe-core/playwright for WCAG compliance checks
- **Performance Testing**: Add Lighthouse CI for Core Web Vitals monitoring
- **Visual Regression Testing**: Add Percy or Playwright screenshots for UI change detection
- **Mobile Testing**: Extend Playwright config to test multiple viewports and devices
- **Cross-Browser Testing**: Add Firefox and WebKit browser testing

#### Static Analysis Enhancements
- **TypeScript Strict Mode**: Enable additional strict flags (strictNullChecks, noImplicitAny)
- **ESLint Extensions**: Add accessibility plugin (eslint-plugin-jsx-a11y)
- **Code Formatting**: Add Prettier for consistent code style
- **Import Organization**: Add eslint-plugin-import for import sorting

#### Security Testing
- **Dependabot**: Enable GitHub Dependabot for automated dependency updates
- **CodeQL**: Add GitHub CodeQL for security vulnerability scanning
- **npm audit**: Add automated npm audit checks to CI with failure threshold

#### Build Quality Gates
- **Bundle Size Analysis**: Add next-bundle-analyzer to track bundle size
- **Test Coverage Reports**: Add coverage collection and reporting
- **Performance Budgets**: Set and enforce performance budgets in CI

#### GitHub Actions Enhancements
- **Branch Protection**: Require status checks to pass before merging
- **Automated PR Comments**: Post test results and coverage to PRs
- **Deployment Preview**: Add preview deployments for PRs
- **Cache Optimization**: Improve caching strategy for faster builds
- **Parallel Testing**: Run test suites in parallel for faster feedback

**Full Testing Guide:** See [TESTING.md](./TESTING.md) for complete documentation.

## Key Features

- Global popups for Donate and Volunteer
  - Context provider: `src/app/components/PopupProvider.tsx`
  - Mounted via: `src/app/components/PopupsRootClient.tsx`
  - Open from anywhere using `usePopups()` or shared buttons:
    - `DonateButton.tsx`, `VolunteerButton.tsx`

- Mobile slide-out navigation
  - `src/app/components/NavBar.tsx`
  - Hamburger opens a right-side panel with overlay; actions wired to popups

- SEO
  - Global metadata in `src/app/layout.tsx` (title template, description, OG/Twitter, robots)
  - `src/app/sitemap.ts` and `src/app/robots.ts`

## Project Structure

- `src/app/page.tsx` – Home page
- `src/app/components/*` – UI components and popups
- `src/app/data/*` – Static content (FAQs, team, testimonials)
- `public/*` – Static assets (icons, images)

## Common Tasks

- Update homepage content: edit `src/app/page.tsx`
- Change CTA copy: update text in components under `src/app/components`
- Adjust SEO: edit `metadata` in `src/app/layout.tsx`

## Deployment Details

The site is configured for static export and deployed to GitHub Pages:

**Production:**
- Live at: [https://www.freeforcharity.org](https://www.freeforcharity.org)
- GitHub Pages URL: [https://freeforcharity.github.io/freeforcharity-web/](https://freeforcharity.github.io/freeforcharity-web/)
- Deployment: Automatic via GitHub Actions (`.github/workflows/nextjs.yml`)
- Trigger: Push to `main` branch
- Build output: Static files in `./out` directory

**Local preview of production build:**
```bash
npm run build    # Build static site
npm run preview  # Preview at http://localhost:3000
```

**Note:** The build process uses `output: "export"` in `next.config.ts` for static site generation compatible with GitHub Pages.

## Notes

- Popups are globally available modals; avoid fixed floating buttons. Use `DonateButton`/`VolunteerButton` or `usePopups()` to open.
- If you add new routes, consider updating `sitemap.ts` accordingly.
