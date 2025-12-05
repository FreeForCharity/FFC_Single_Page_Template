# Free For Charity Website

Single-page Next.js 16.0.7 website built with App Router for Free For Charity nonprofit organization.

## 🎉 Phase 5 Implementation Complete

**Status:** ✅ All critical gaps closed. Repository now has enterprise-grade tooling, comprehensive testing, and professional documentation.

**Quick Links:**

- 📚 [Quick Start Guide](./QUICK_START.md) - Get set up in 5 minutes
- 📋 [Site Improvements Summary](./SITE_IMPROVEMENTS.md) - See what was implemented (13 of 19 gaps closed)
- 🧪 [Testing Guide](./TESTING.md) - Unit + E2E + Accessibility tests
- 🎨 [Responsive Design Guide](./RESPONSIVE_DESIGN.md) - Mobile-first design principles
- 📝 [Naming Conventions](./NAMING_CONVENTIONS.md) - **Required**: kebab-case for SEO (Google-recommended)

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

This is a single-page website with **112 component files** organized into multiple sections that showcase Free For Charity's programs, services, and resources. The homepage is composed of scrollable sections (Hero, Mission, Programs, Team, FAQ, etc.), with additional policy pages for legal content. The site is designed to enable donations and volunteer signups via global popups (currently disabled in code).

### Site Structure

**IMPORTANT:** When new pages or sections are added, explicitly list them here. Keep this documentation up to date.

**Homepage (Single Page Application):**

The main page (`/`) is a single-page application composed of scrollable sections:

- Hero section
- Mission statement
- 2023 Results
- Testimonials
- Volunteer call-to-action
- Support/Donate section
- Endowment Fund features
- Programs overview
- Frequently Asked Questions
- Team section

**Legal & Policy Pages (7 Separate Routes):**

- Privacy Policy (`/privacy-policy`)
- Cookie Policy (`/cookie-policy`)
- Terms of Service (`/terms-of-service`)
- Donation Policy (`/donation-policy`)
- Free For Charity Donation Policy (`/free-for-charity-donation-policy`)
- Vulnerability Disclosure Policy (`/vulnerability-disclosure-policy`)
- Security Acknowledgements (`/security-acknowledgements`)

**Note:** All the program information, services, guides, and content are presented as sections within the single-page homepage rather than as separate page routes.

## Tech Stack

- Next.js (App Router, TypeScript)
- Tailwind-style utility classes for styling
- next/font for Google fonts (Faustina, Fauna One, Lato, Inter)

## Content Management

Content such as FAQs, Team Members, and Testimonials is stored as JSON files in the `src/data/` directory. To edit content, simply modify the JSON files directly.

## Local Development

1. Install dependencies

```bash
npm install
```

2. Run the dev server

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
- ⚠️ Currently reports 16 warnings - see details below

**ESLint Warning Details:**

The ESLint warnings fall into three categories:

1. **`@next/next/no-img-element` warnings (6 occurrences)** - ⚠️ ACCEPTABLE for this project
   - Files: `header/index.tsx`, `footer/index.tsx`, `endowment-fund/Hero/index.tsx`, `free-charity-web-hosting/About-FFC-Hosting/index.tsx`, `ui/General-Donation-Card.tsx`, `ui/trainingcard.tsx`
   - Issue: Using `<img>` tags instead of Next.js `<Image />` component
   - Why acceptable: This project uses static export (`output: "export"` in `next.config.ts`), which is incompatible with Next.js Image Optimization. We use the `assetPath()` helper to ensure images work correctly on both custom domain and GitHub Pages basePath.
   - Alternative fix: Could suppress these specific warnings or migrate to a custom image component
   - Website impact: Images load correctly but without automatic optimization (WebP conversion, lazy loading). For a static nonprofit site with modest image usage, this is an acceptable tradeoff.

2. **React Hooks warnings - `react-hooks/set-state-in-effect` (6 occurrences)** - ⚠️ ACCEPTABLE but could be improved
   - Files: Various accordion components (`Accordian.tsx`, `AccordianBold.tsx`, `Frequently-Asked-Questions.tsx`, `OrangeFaqItem.tsx`, `free-charity-web-hosting/FAQs/index.tsx`) and `cookie-consent/index.tsx`
   - Issue: Calling `setState` synchronously within `useEffect` when animating accordion height or loading preferences
   - Why acceptable: These components work correctly and don't cause performance issues in practice
   - Recommended fix: Use `useLayoutEffect` instead of `useEffect` for DOM measurements, or use CSS transitions with `max-height`
   - Website impact: Accordion animations work correctly. May cause minor cascading renders but not noticeable to users.

3. **React Hooks warnings - Other (4 occurrences)** - ⚠️ ACCEPTABLE but could be improved
   - `react-hooks/exhaustive-deps` (2 occurrences): Missing dependencies in `useEffect`
     - Files: `free-charity-web-hosting/ClientTestimonials/index.tsx`, `ui/CallToActionCard.tsx`
     - Impact: Effects may not re-run when dependencies change, but current implementation works as intended
   - `react-hooks/immutability` (2 occurrences): Direct mutation of state values
     - Files: `free-charity-web-hosting/ClientTestimonials/index.tsx`, `home/Testimonials/index.tsx`
     - Issue: Modifying Swiper navigation params directly instead of using setter
     - Impact: Works correctly but violates React best practices
   - These are technical debt items that don't affect functionality but should be addressed in future refactoring

**Summary:**

- 6 warnings are acceptable by design (static export constraint)
- 10 warnings are technical debt that don't affect functionality
- All warnings have been reviewed and determined to be non-blocking
- Website functions correctly despite these warnings

**TypeScript** (`tsconfig.json`)

- ✅ Strict mode enabled
- ✅ Type checking runs during build

### Security Analysis

**GitHub Dependabot**

- ✅ **Configuration File**: `.github/dependabot.yml` enables version updates
  - npm packages (production and development dependencies)
  - GitHub Actions workflow dependencies
  - Weekly updates every Monday at 9:00 AM UTC
  - Grouped updates for easier review
- ⚙️ **Repository Settings**: Must be enabled for security alerts and security updates
  - Settings → Security & Analysis → Dependabot alerts (enable this)
  - Settings → Security & Analysis → Dependabot security updates (enable this)
  - Security updates run immediately when vulnerabilities are detected
- 📊 Monitor Dependabot PRs in the repository's Pull Requests tab
- 📖 **Full Guide**: See [DEPENDABOT.md](./DEPENDABOT.md) for comprehensive documentation and setup instructions

**CodeQL Security Scanning** (`.github/workflows/codeql.yml`)

- ✅ Scans JavaScript/TypeScript code for security vulnerabilities
- ✅ Scans GitHub Actions workflows for security issues
- ✅ Runs on push to main, pull requests, and weekly schedule
- 📊 View results in repository Security → Code scanning alerts

**npm audit**

- All dependencies are checked for security vulnerabilities
- Run `npm audit` locally to check for known security issues
- ⚠️ **Known Issues**: As of December 2025, there are 4 low severity vulnerabilities
  - Low: tmp package vulnerabilities affecting Lighthouse CI dev dependency only
  - Impact: Limited to development environment, does not affect production site
  - Fix available via `npm audit fix --force` (may involve breaking changes)
  - These are being monitored and will be addressed through regular Dependabot updates
  - See [SECURITY.md](./SECURITY.md) for detailed information and mitigation steps

### CI/CD Integration

**Separate CI and Deployment Workflows** (Phase 5 Implementation)

The project uses separate workflows for better separation of concerns:

**CI Workflow** (`.github/workflows/ci.yml`)

- ✅ Runs on all pull requests and pushes
- ✅ Node.js 20 setup
- ✅ Dependency installation (`npm ci`)
- ✅ Code formatting check (Prettier)
- ✅ Linting (ESLint)
- ✅ Unit tests (Jest)
- ✅ Playwright browser installation
- ✅ Next.js build with GitHub Pages basePath
- ✅ E2E tests (Playwright)
- ✅ Fast feedback for PRs (no deployment overhead)

**Deploy Workflow** (`.github/workflows/deploy.yml`)

- ✅ Runs only on push to main branch
- ✅ Node.js 20 setup
- ✅ Dependency installation (`npm ci`)
- ✅ Next.js build with GitHub Pages basePath
- ✅ Static site artifact upload
- ✅ Deployment to GitHub Pages
- ✅ Separate deployment job with environment protection

### Implemented Quality Enhancements (Phase 1-5)

The following quality improvements have been successfully implemented:

#### ✅ Testing Infrastructure (Phases 2 & 4)

- ✅ **Unit Testing**: Jest + React Testing Library with 26 tests passing (4 test suites)
- ✅ **Accessibility Testing**: jest-axe for WCAG compliance checks (3 components tested)
- ✅ **E2E Testing**: Playwright for critical user paths
- ✅ **Performance Testing**: Lighthouse CI monitoring Core Web Vitals
- ✅ **Test Coverage**: ~5% baseline established with coverage thresholds

#### ✅ Code Quality Automation (Phase 1)

- ✅ **Code Formatting**: Prettier for consistent code style (3.7.4)
- ✅ **Pre-commit Hooks**: Husky enforcing formatting and linting before commits
- ✅ **Conventional Commits**: Commitlint enforcing commit message standards
- ✅ **Editor Config**: .editorconfig for consistent editor settings
- ✅ **ESLint**: Next.js rules + Prettier integration

#### ✅ Security & Monitoring (Phases 1 & 3)

- ✅ **Dependabot**: Automated dependency updates (npm + GitHub Actions)
- ✅ **CodeQL**: Security vulnerability scanning (JavaScript/TypeScript + Actions)
- ✅ **Lighthouse CI**: Performance monitoring with thresholds
- ✅ **Link Validation**: Linkinator for broken link detection

#### ✅ CI/CD Optimization (Phase 5)

- ✅ **Separate CI/Deploy Workflows**: Better separation of concerns
- ✅ **Optimized Caching**: Faster builds with intelligent caching
- ✅ **Fast PR Feedback**: CI runs without deployment overhead

#### 📚 Documentation (Phases 3 & 5)

- ✅ **11 Comprehensive Guides**: Covering all aspects of development and deployment
- ✅ **Quick Start Guide**: 5-minute setup for new contributors
- ✅ **Responsive Design Guide**: Mobile-first principles and breakpoints
- ✅ **Lessons Learned**: Project retrospective and best practices

### Future Enhancement Opportunities

The following enhancements could further improve the test suite:

#### Potential Improvements

- **Visual Regression Testing**: Add Percy or Playwright screenshots for UI change detection
- **Mobile Device Testing**: Test on real mobile devices via BrowserStack
- **Cross-Browser Testing**: Add Firefox and WebKit browser testing
- **Increased Test Coverage**: Target 25-50% coverage for critical components
- **TypeScript Strict Mode**: Enable additional strict flags
- **Import Organization**: Add eslint-plugin-import for import sorting
- **npm audit**: Add automated npm audit checks to CI with failure threshold

#### Build Quality Gates

- **Bundle Size Analysis**: Add next-bundle-analyzer to track bundle size
- **Test Coverage Reports**: Add coverage collection and reporting
- **Performance Budgets**: Set and enforce performance budgets in CI

#### GitHub Actions Enhancements

- **Branch Protection**: Require status checks to pass before merging
- **Automated PR Comments**: Post test results and coverage to PRs
- **Deployment Preview**: Add preview deployments for PRs (see detailed guide below)
- **Cache Optimization**: Improve caching strategy for faster builds
- **Parallel Testing**: Run test suites in parallel for faster feedback

### Preview Deployments for Static Sites

Preview deployments allow reviewers to see and test changes in a live environment before merging, without needing to clone the repository or run it locally. This is especially valuable for non-technical reviewers.

#### Options for Static Site Preview Deployments

**1. GitHub Pages PR Previews (Manual Approach)**

Current limitation: GitHub Pages only supports one deployment per repository (typically from `main` branch). However, you can implement PR previews using subdirectories:

- **How it works**: Deploy each PR to a subdirectory like `/pr-123/`
- **Pros**: Free, uses existing GitHub Pages setup
- **Cons**: Manual cleanup needed, subdirectory routing complexity
- **Implementation**: Requires custom workflow to build and deploy to PR-specific paths

**2. Netlify (Recommended for Static Sites)**

- **Setup**: Connect GitHub repo to Netlify
- **How it works**: Automatic preview deployments for every PR
- **Pros**: Automatic, free tier available, custom preview URLs, automatic cleanup
- **URL format**: `https://deploy-preview-123--your-site.netlify.app`
- **Review workflow**:
  1. Developer creates PR
  2. Netlify bot comments with preview URL (appears automatically in PR)
  3. Reviewer clicks preview link to test changes
  4. No local setup or IDE needed
- **Cost**: Free for open source projects (100GB bandwidth/month)

**3. Vercel**

- **Setup**: Import GitHub repository to Vercel
- **How it works**: Automatic preview deployments for every PR and branch
- **Pros**: Excellent Next.js integration, automatic HTTPS, custom domains
- **URL format**: `https://project-name-git-branch.vercel.app`
- **Review workflow**: Similar to Netlify, bot comments with preview URL
- **Cost**: Free for personal/hobby projects

**4. Cloudflare Pages**

- **Setup**: Connect GitHub repo to Cloudflare Pages
- **How it works**: Automatic preview deployments
- **Pros**: Fast global CDN, unlimited bandwidth on free tier
- **Review workflow**: Preview links in PR comments
- **Cost**: Free with generous limits

#### Recommended Implementation for This Project

For a Next.js static site with GitHub Actions already set up:

1. **Best for ease of use**: Netlify or Vercel
   - Both have excellent Next.js support
   - Both auto-comment preview URLs on PRs
   - Both handle cleanup automatically
   - No changes to existing GitHub Pages deployment needed (can run both)

2. **Workflow for creators/reviewers**:

   ```
   Creator:
   1. Create feature branch
   2. Make changes
   3. Push to GitHub and open PR
   4. Wait for preview deployment (1-3 minutes)
   5. Share preview URL from bot comment

   Reviewer:
   1. Open PR on GitHub
   2. Click preview URL in bot comment
   3. Test the live site in browser
   4. Provide feedback on PR
   5. No IDE or local setup required
   ```

3. **Coexistence with GitHub Pages**:
   - Keep GitHub Pages for production (ffcworkingsite1.org)
   - Use Netlify/Vercel only for PR previews
   - No conflicts between the two systems

#### Setting Up Netlify Preview Deployments (Step-by-Step)

1. Go to [netlify.com](https://netlify.com) and sign in with GitHub
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub and select this repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
   - Environment variables: Do NOT set `NEXT_PUBLIC_BASE_PATH` (leave it unset/empty)
     - GitHub Pages needs `/FFC_Single_Page_Template` basePath for subdirectory routing
     - Netlify deploys to root domain, so no basePath is needed
5. Deploy site
6. In Netlify settings → Build & deploy → Deploy contexts:
   - Enable "Deploy Preview" for pull requests
   - Enable "Branch deploys" if desired
7. Done! Netlify will now automatically:
   - Comment on PRs with preview URLs
   - Build and deploy each PR commit
   - Clean up deployments when PRs are closed

**Result**: Every PR will have a comment like:

```
✅ Deploy Preview for ffc-template ready!
🔨 Explore the source changes: abc123
🔍 Inspect the deploy log: https://app.netlify.com/...
😎 Browse the preview: https://deploy-preview-123--ffc-template.netlify.app
```

**Full Testing Guide:** See [TESTING.md](./TESTING.md) for complete documentation.

**Security Documentation:** See [SECURITY.md](./SECURITY.md) for branch protection rules and security best practices.

## Key Features

- **Single-Page Architecture:** One main scrollable page with multiple sections plus 7 policy pages
- **Component Library:** 112 component files organized by feature/section
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

**Note:**

- This is a single-page application where all main content is displayed on one scrollable page with navigation anchors
- Global Donate/Volunteer popup system is present in codebase but currently commented out in `layout.tsx`
- Components are organized by feature/section but rendered within the single homepage

## Project Structure

**IMPORTANT:** When updating this structure, ALWAYS show all items fully. When new pages or folders are added, explicitly list them here. Do NOT use placeholders like `[policy-pages]` or `[feature]` - show the actual folder names.

```
src/
├── app/                                        # Next.js App Router
│   ├── page.tsx                               # Main entry point (loads homepage)
│   ├── layout.tsx                             # Root layout with global config
│   ├── globals.css                            # Global styles
│   ├── home-page/                             # Homepage sections (single-page structure)
│   ├── cookie-policy/                         # Cookie Policy page
│   ├── donation-policy/                       # Donation Policy page
│   ├── free-for-charity-donation-policy/      # Free For Charity Donation Policy page
│   ├── privacy-policy/                        # Privacy Policy page
│   ├── security-acknowledgements/             # Security Acknowledgements page
│   ├── terms-of-service/                      # Terms of Service page
│   ├── vulnerability-disclosure-policy/       # Vulnerability Disclosure Policy page
│   ├── sitemap.ts                             # Dynamic sitemap generation
│   └── robots.ts                              # Robots.txt configuration
├── components/                                # Reusable components (112 component files)
│   ├── header/                               # Site header/navigation
│   ├── footer/                               # Site footer
│   ├── cookie-consent/                        # Cookie consent banner
│   ├── google-tag-manager/                    # Analytics integration
│   ├── ui/                                    # Reusable UI components
│   ├── home-page/                             # Homepage-specific components
│   ├── home/                                  # Alternative home components
│   ├── domains/                               # Domain-related components
│   ├── donate/                                # Donation components
│   ├── volunteer/                             # Volunteer components
│   ├── 501c3/                                 # 501c3 charity components
│   ├── about-us/                              # About page components
│   ├── charity-validation-guide/              # Charity validation guide components
│   ├── contact-us/                            # Contact form components
│   ├── endowment-fund/                        # Endowment fund components
│   ├── free-charity-web-hosting/              # Web hosting program components
│   ├── guidestar-guide/                       # GuideStar guide components
│   ├── help-for-charities/                    # Help resources
│   ├── online-impacts-onboarding/             # Online impacts onboarding components
│   ├── pre501c3/                              # Pre-501c3 charity components
│   ├── service-delivery-stages/               # Service delivery stages components
│   ├── techstack/                             # Technology stack components
│   ├── tools-for-success/                     # Tools and resources
│   ├── volunteer-proving-ground/              # Volunteer proving ground components
│   └── web-developer-training-guide/          # Web developer training guide components
├── data/                                      # Static content
│   ├── faqs/                                  # FAQ JSON files
│   ├── team/                                  # Team member data
│   └── testimonials/                          # Testimonial data
├── lib/                                       # Utility functions
│   └── assetPath.ts                           # Helper for GitHub Pages basePath support
└── public/                                    # Static assets (icons, images, fonts)
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
- Deployment: Automatic via GitHub Actions (`.github/workflows/deploy.yml`)
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

### Getting Started

- **[README.md](./README.md)** - Project overview, setup, and deployment (this file)
- **[QUICK_START.md](./QUICK_START.md)** - ⚡ 5-minute setup guide for new contributors
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Guidelines for contributing to the project

### Development & Testing

- **[TESTING.md](./TESTING.md)** - Complete testing guide (Jest unit tests + Playwright E2E tests)
- **[CODE_QUALITY.md](./CODE_QUALITY.md)** - Code quality standards, linting, and best practices
- **[RESPONSIVE_DESIGN.md](./RESPONSIVE_DESIGN.md)** - Responsive design principles, breakpoints, and mobile-first approach

### Deployment & Operations

- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Comprehensive deployment guide for GitHub Pages
- **[LIGHTHOUSE.md](./LIGHTHOUSE.md)** - Performance monitoring with Lighthouse CI
- **[SECURITY.md](./SECURITY.md)** - Security policies, branch protection rules, and best practices
- **[DEPENDABOT.md](./DEPENDABOT.md)** - Automated dependency management and security updates

### Troubleshooting & Planning

- **[ISSUE_RESOLUTION.md](./ISSUE_RESOLUTION.md)** - Common issues, troubleshooting, and FAQ
- **[LESSONS_LEARNED.md](./LESSONS_LEARNED.md)** - Project retrospective, what worked, what didn't
- **[SITE_IMPROVEMENTS.md](./SITE_IMPROVEMENTS.md)** - ✅ Phase 5 Complete: Technical analysis showing repository comparison and implemented improvements
