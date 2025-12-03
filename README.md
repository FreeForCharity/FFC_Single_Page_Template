# Free For Charity Website

Multi-page Next.js website built with App Router for Free For Charity nonprofit organization.

## Organization

**Free For Charity** is a 501(c)(3) nonprofit organization (EIN: 46-2471893) dedicated to supporting other nonprofits.

## Purpose

Free For Charity connects students, professionals, and businesses with nonprofits to reduce operating costs and increase impact. By providing free web hosting, domain names, Microsoft 365 grants assistance, and consulting services, we help nonprofits put more resources back into their charitable missions.

## Main Calls-to-Action

The site features two primary CTAs accessible throughout the experience via global popups:

- **Donate**: Support our mission with financial contributions
- **Volunteer**: Join our team of skilled volunteers helping nonprofits

## Deployment

- **Live Site**: [https://ffcworkingsite1.org](https://ffcworkingsite1.org)
- **GitHub Pages**: [https://freeforcharity.github.io/FFC_Single_Page_Template/](https://freeforcharity.github.io/FFC_Single_Page_Template/)
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

The site is deployed to its live domain (ffcworkingsite1.org) but some functionality is still being completed.

## Overview

This is a comprehensive multi-page website with **29 pages** and **83 components** that showcases Free For Charity's programs, services, and resources. The site is designed to enable donations and volunteer signups via global popups (currently disabled in code).

### Site Structure

**Core Pages:**
- Homepage (Figma-Home-page)
- About Us
- Contact Us
- Donate
- Volunteer

**Program & Service Pages:**
- Free Charity Web Hosting
- Free For Charity Endowment Fund
- FFC Tools for Success
- Help for Charities
- Domains

**Guide & Documentation Pages:**
- GuideStar Guide
- Online Impacts Onboarding Guide
- Charity Validation Guide
- FFC Service Delivery Stages
- FFC Web Developer Training Guide
- FFC Volunteer Proving Ground Core Competencies
- FFCAdmin cPanel Backup SOP

**Nonprofit Status Pages:**
- 501(c)(3) Information
- Pre-501(c)(3) Information

**Legal & Policy Pages:**
- Privacy Policy
- Cookie Policy
- Terms of Service
- Donation Policy
- Vulnerability Disclosure Policy
- Security Acknowledgements

**Technical Pages:**
- Tech Stack
- FFCAdmin Portal

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

**Security Documentation:** See [SECURITY.md](./SECURITY.md) for branch protection rules and security best practices.

## Key Features

- **Comprehensive Page Structure:** 29 pages covering programs, services, guides, and legal content
- **Component Library:** 83 reusable components organized by feature/page
- **Responsive Navigation:** Mobile and desktop navigation with Header/Footer components
- **Cookie Consent System:** GDPR-compliant cookie consent management
- **SEO Optimization:**
  - Global metadata in `src/app/layout.tsx` (title template, description, OG/Twitter, robots)
  - Dynamic sitemap: `src/app/sitemap.ts`
  - Robots configuration: `src/app/robots.ts`
- **Static Site Generation:** Full static export for GitHub Pages deployment
- **TypeScript:** Full TypeScript implementation for type safety
- **Modern Styling:** Tailwind CSS 4.x with utility-first approach
- **Animation:** Framer Motion for smooth transitions
- **Icons:** Lucide React and React Icons libraries
- **Carousels:** Swiper for image carousels and sliders

**Note:** Global Donate/Volunteer popup system is present in codebase but currently commented out in `layout.tsx`.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages (29 pages)
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout with global config
│   ├── globals.css        # Global styles
│   ├── [page-name]/       # Individual page directories
│   ├── sitemap.ts         # Dynamic sitemap generation
│   └── robots.ts          # Robots.txt configuration
├── components/            # Reusable components (83 components)
│   ├── Header/           # Site header/navigation
│   ├── Footer/           # Site footer
│   ├── CookieConsent/    # Cookie consent banner
│   ├── UI/               # Reusable UI components
│   └── [feature]/        # Feature-specific component groups
├── data/                 # Static content (if present)
├── lib/                  # Utility functions (if present)
└── public/               # Static assets (icons, images, fonts)
```

## Site Improvements & Capability Gaps

A comprehensive technical analysis comparing this repository to sister sites (freeforcharity-web, ffcadmin.org, KCCF-web) is available in **[SITE_IMPROVEMENTS.md](./SITE_IMPROVEMENTS.md)**.

This document identifies:
- 19 technical capability gaps
- Detailed implementation guidance for each gap
- Priority recommendations and implementation roadmap
- Estimated effort and complexity for each improvement

**Key improvement opportunities:**
- CodeQL security scanning
- Unit testing with Jest
- Code formatting with Prettier
- Lighthouse CI performance monitoring
- Dark mode theming
- Enhanced documentation suite
- And more...

## Common Tasks

- Update homepage content: edit `src/app/page.tsx`
- Change CTA copy: update text in components under `src/app/components`
- Adjust SEO: edit `metadata` in `src/app/layout.tsx`

## Deployment Details

The site is configured for static export and deployed to GitHub Pages:

**Production:**
- Live at: [https://ffcworkingsite1.org](https://ffcworkingsite1.org)
- GitHub Pages URL: [https://freeforcharity.github.io/FFC_Single_Page_Template/](https://freeforcharity.github.io/FFC_Single_Page_Template/)
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

- When adding new pages, update `sitemap.ts` to include them in the sitemap
- Static export configuration in `next.config.ts` supports GitHub Pages deployment with basePath
- Cookie consent implementation tracks user preferences in localStorage
- All images use `unoptimized` setting for static export compatibility
- ESLint warnings about `<img>` tags are expected and acceptable for static export configuration

## Documentation

For comprehensive guides and documentation:

- **[README.md](./README.md)** - Project overview, setup, and deployment (this file)
- **[TESTING.md](./TESTING.md)** - Complete testing guide with automated test suite documentation
- **[SECURITY.md](./SECURITY.md)** - Security policies, branch protection rules, and best practices
- **[SITE_IMPROVEMENTS.md](./SITE_IMPROVEMENTS.md)** - Technical analysis and capability gaps compared to sister sites
