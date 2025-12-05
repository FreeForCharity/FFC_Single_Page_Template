# Free For Charity Web Application

Free For Charity is a Next.js 15.5.7 single-page static website that connects students, professionals, and businesses with nonprofits to reduce operating costs and increase impact. Built with TypeScript, Tailwind CSS, and configured for static export to GitHub Pages.

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Environment Setup

- **Node.js Version**: Requires Node.js 20.x (validated with v20.19.5)
- **Package Manager**: Uses npm with package-lock.json

### Bootstrap and Build Process

**Build Process**

- `npm run build` -- Builds the static site successfully (~30 seconds)
- Google Fonts are NOT used in this project (imports have been removed)
- Build generates 13 static pages (1 homepage + 7 policy pages + sitemap/robots)
- NEVER CANCEL. Set timeout to 180+ seconds for safety.

### Core Commands and Timings

1. `npm install` -- takes ~17 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
2. `npm run lint` -- takes ~2 seconds. Produces 8 warnings about img tags and React hooks (expected). Set timeout to 30+ seconds.
3. `npm run build` -- takes ~30 seconds. NEVER CANCEL. Set timeout to 180+ seconds.
4. `npm run dev` -- starts in ~1 second with turbopack. NEVER CANCEL. Set timeout to 30+ seconds.
5. `npm run preview` -- serves built static files. NEVER CANCEL. Set timeout to 30+ seconds.

### Development Workflow

```bash
# Install dependencies (17 seconds)
npm install

# Start development server (1 second startup)
npm run dev
# Visit http://localhost:3000

# Lint code (2 seconds, 8 warnings expected)
npm run lint

# Build for production (30 seconds)
npm run build

# Preview built site
npm run preview
# Visit http://localhost:3000
```

## Validation Requirements

### Manual Testing Scenarios

**ALWAYS test application functionality after making changes:**

1. **Homepage Load Test**: Navigate to http://localhost:3000 and verify page loads completely
2. **Navigation Test**: Test mobile hamburger menu and desktop navigation
3. **Popup System Test**: Click "Donate" and "Volunteer" buttons to test global popup functionality
4. **Responsive Design Test**: Verify mobile and desktop layouts work correctly
5. **Static Content Test**: Verify all sections load (Programs, Impact, Team, FAQ)
6. **Logo Rendering Test**: Verify logos display correctly in NavBar (top left) and hero section

### Automated Testing

**Playwright tests are available to validate critical functionality:**

```bash
# Build the site first
npm run build

# Install Playwright browsers (first time only)
npx playwright install chromium

# Run all tests
npm test

# Run tests in headed mode (to see browser)
npm run test:headed

# Run tests with UI
npm run test:ui
```

**Test Suites:**

- `tests/logo.spec.ts` - Verifies logo visibility in NavBar and hero section
- `tests/github-pages.spec.ts` - Validates image loading for GitHub Pages deployment

**Testing Image Rendering for GitHub Pages:**
To test the GitHub Pages deployment locally with basePath:

```bash
# Build with basePath for GitHub Pages
NEXT_PUBLIC_BASE_PATH=/FFC_Single_Page_Template npm run build

# Preview the site
npm run preview

# Run tests (in another terminal)
npm test
```

### Pre-Commit Validation

**ALWAYS run before committing changes:**

```bash
npm run lint  # Fix any errors, warnings about img tags are expected
npm test     # Run automated tests (requires build first)
```

## Application Architecture

### Key Features

- **Global Popup System**: Centralized Donate/Volunteer modals accessible from any component
  - Provider: `src/app/components/PopupProvider.tsx`
  - Mount: `src/app/components/PopupsRootClient.tsx`
  - Buttons: `DonateButton.tsx`, `VolunteerButton.tsx`
- **Mobile Navigation**: Slide-out panel with overlay in `NavBar.tsx`
- **Static Export**: Configured for GitHub Pages deployment via `next.config.ts`
- **SEO Optimized**: Comprehensive metadata in `layout.tsx`, sitemap, and robots.txt
- **GitHub Pages Image Support**: Assets use `assetPath()` helper to handle basePath for GitHub Pages deployment

### Project Structure

**Note: Folder structure was refactored to use consistent kebab-case naming and remove redundant suffixes.**

```
src/
├── app/                           # Next.js app directory
│   ├── page.tsx                   # Main homepage entry point
│   ├── layout.tsx                 # Root layout with metadata, providers
│   ├── globals.css                # Global styles
│   ├── home-page/                 # Homepage components (formerly Figma-Home-page)
│   ├── cookie-policy/             # Cookie policy page
│   ├── privacy-policy/            # Privacy policy page
│   └── [other policy pages]
├── components/                    # All UI components (kebab-case naming)
│   ├── header/                    # Site header/navigation
│   ├── footer/                    # Site footer
│   ├── cookie-consent/            # Cookie consent banner
│   ├── google-tag-manager/        # Analytics integration
│   ├── ui/                        # Reusable UI components
│   ├── home-page/                 # Homepage-specific components
│   ├── home/                      # Alternative home components
│   ├── domains/                   # Domain-related components
│   ├── donate/                    # Donation components
│   ├── volunteer/                 # Volunteer components
│   ├── 501c3/                     # 501c3 charity components
│   ├── about-us/                  # About page components
│   ├── endowment-fund/            # Endowment fund components
│   ├── help-for-charities/        # Help resources
│   ├── tools-for-success/         # Tools and resources
│   └── [other feature folders]
├── data/                          # Static content
│   ├── faqs/                      # FAQ JSON files
│   ├── team/                      # Team member data
│   └── testimonials/              # Testimonial data
└── lib/                           # Utility functions
    └── assetPath.ts               # Helper for GitHub Pages basePath support
```

**Naming Conventions:**

**IMPORTANT: All folders MUST use kebab-case (lowercase with hyphens)**

- All component folders use kebab-case (e.g., `home-page`, `cookie-consent`)
- All app route folders use kebab-case (e.g., `cookie-policy`, `privacy-policy`)
- Removed redundant `-components` suffix from folder names
- Removed Figma references from folder names
- Consistent structure makes imports clearer and more maintainable

**Why kebab-case is Required:**

1. **SEO Best Practice**: Search engines prefer kebab-case URLs as they clearly separate words and improve readability
   - Source: Google Search Central - "Use hyphens to separate words in URLs" (https://developers.google.com/search/docs/crawling-indexing/url-structure)
   - Source: Moz SEO Guide - "Hyphens are treated as space by search engines" (https://moz.com/learn/seo/url)

2. **URL Readability**: Kebab-case URLs are more readable to both users and search engines
   - Example: `/cookie-policy` is clearer than `/cookiepolicy` or `/CookiePolicy`
   - Hyphens act as word separators, improving keyword recognition

3. **Industry Standard**: Kebab-case is the web standard for URLs and file paths
   - Used by major frameworks (Next.js, React Router, Vue Router)
   - Consistent with HTTP/REST API conventions

4. **Accessibility**: Screen readers handle hyphenated text better than camelCase or PascalCase

**Never use PascalCase or camelCase for folder names** - it negatively impacts SEO and URL readability.

### Configuration Files

- `next.config.ts` - Static export configuration
- `tsconfig.json` - TypeScript configuration with path aliases
- `eslint.config.mjs` - ESLint with Next.js rules
- `postcss.config.mjs` - Tailwind CSS PostCSS configuration
- `.github/workflows/ci.yml` - CI workflow for testing
- `.github/workflows/deploy.yml` - GitHub Pages deployment
- `.github/workflows/codeql.yml` - Security scanning
- `.github/workflows/lighthouse.yml` - Performance monitoring

## Common Tasks

### Content Updates

- **Homepage content**: Edit `src/app/page.tsx`
- **Navigation links**: Update `src/app/components/NavBar.tsx`
- **Team information**: Modify `src/app/data/team.ts`
- **FAQ content**: Update `src/app/data/faqs.ts`
- **Testimonials**: Edit `src/app/data/testimonials.ts`

### SEO and Metadata

- **Site metadata**: Edit `metadata` object in `src/app/layout.tsx`
- **Sitemap**: Update `src/app/sitemap.ts` for new routes
- **Robots.txt**: Modify `src/app/robots.ts`

### Styling and UI

- **Global styles**: Edit `src/app/globals.css`
- **Component styles**: Use Tailwind classes directly in components
- **Font issues**: Remember to handle Google Fonts limitation when building

### Adding Images and Assets

When adding images or other static assets that need to work on both custom domain and GitHub Pages:

**ALWAYS use the `assetPath()` helper for images:**

```typescript
import { assetPath } from "../lib/assetPath";

// In your component:
<img src={assetPath("/my-image.png")} alt="Description" />
```

**Why this is needed:**

- Custom domain (ffcworkingsite1.org): images at `/my-image.png`
- GitHub Pages: images at `/FFC_Single_Page_Template/my-image.png`
- The helper automatically handles both scenarios based on the `NEXT_PUBLIC_BASE_PATH` environment variable

**Files using assetPath:**

- `src/app/components/NavBar.tsx` - Logo in navigation
- `src/app/page.tsx` - Logo in hero section

### Deployment Process

The site auto-deploys to GitHub Pages via `.github/workflows/deploy.yml` when pushed to main branch:

1. Node.js 20 setup
2. `npm ci` for clean install
3. `NEXT_PUBLIC_BASE_PATH=/FFC_Single_Page_Template` is set for GitHub Pages deployment
4. `next build` builds the site with proper basePath
5. Playwright tests run to validate the build
6. Static files deployed from `./out` directory

**Dual Deployment:**

- **Custom domain**: https://ffcworkingsite1.org (CNAME configured, no basePath needed)
- **GitHub Pages**: https://freeforcharity.github.io/FFC_Single_Page_Template/ (basePath required)

## Known Issues and Limitations

### Google Fonts Build Failure

- **Issue**: `npm run build` fails with "ENOTFOUND fonts.googleapis.com"
- **Cause**: Network restrictions prevent Google Fonts access
- **Workaround**: Temporarily comment out font imports in `src/app/layout.tsx`
- **Files affected**: Lines 2, 9-12, 73 in `src/app/layout.tsx`

### ESLint Warnings

- **Expected warnings**: `@next/next/no-img-element` in `NavBar.tsx` and `page.tsx`
- **Cause**: Using `<img>` instead of Next.js `<Image>` component
- **Status**: Acceptable for static export configuration. We use `assetPath()` helper to ensure images work on GitHub Pages.

## Quick Reference Commands

```bash
# Repository setup
node --version        # Verify Node.js 20.x
npm install          # 17 seconds

# Development
npm run dev          # http://localhost:3000 (1 second startup)
npm run lint         # 2 seconds, warnings expected

# Testing
npm run build        # Build first (required for tests)
npm test             # Run Playwright tests
npm run test:headed  # Run tests in headed mode
npm run test:ui      # Run tests with Playwright UI

# Production (requires font workaround)
npm run build        # 20 seconds when fonts disabled
npm run preview      # http://localhost:3000

# Test GitHub Pages deployment locally
NEXT_PUBLIC_BASE_PATH=/FFC_Single_Page_Template npm run build
npm run preview      # Test with basePath

# File structure overview
ls -la src/app/      # Main application code
ls -la public/       # Static assets (icons, images)
ls -la tests/        # Playwright test files
ls -la .github/      # GitHub workflows and configs
```

## Troubleshooting

### Build Failures

1. **Google Fonts error**: Apply font workaround in `layout.tsx`
2. **TypeScript errors**: Run `npm run lint` to identify issues
3. **Network timeouts**: Increase timeout values as specified above

### Development Server Issues

1. **Port conflicts**: Stop existing servers or use different port
2. **Cache issues**: Delete `.next` directory and rebuild
3. **Font rendering**: Expected to fail without workaround applied

Remember: **NEVER CANCEL** long-running commands. **ALWAYS** test manually after changes. **ALWAYS** apply Google Fonts workaround before building.
