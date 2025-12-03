# Free For Charity Web Application

Free For Charity is a Next.js 15.5.2 static website that connects students, professionals, and businesses with nonprofits to reduce operating costs and increase impact. Built with TypeScript, Tailwind CSS, and configured for static export to GitHub Pages.

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Environment Setup
- **Node.js Version**: Requires Node.js 20.x (validated with v20.19.4)
- **Package Manager**: Uses npm with package-lock.json

### Bootstrap and Build Process
**CRITICAL: Google Fonts Network Limitation**
- `npm run build` -- **FAILS** due to network restrictions accessing fonts.googleapis.com
- **Workaround**: Comment out Google Font imports in `src/app/layout.tsx` before building:
  ```typescript
  // import { Faustina, Fauna_One, Lato, Inter } from "next/font/google";
  // Comment out font variable declarations and body className usage
  ```
- Build takes ~20 seconds when fonts are disabled. NEVER CANCEL. Set timeout to 180+ seconds (includes retry time for font failures).

### Core Commands and Timings
1. `npm install` -- takes ~17 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
2. `npm run lint` -- takes ~2 seconds. Produces warnings about img tags (expected). Set timeout to 30+ seconds.
3. `npm run build` -- **FAILS with Google Fonts**. Takes ~20 seconds when fonts disabled. NEVER CANCEL. Set timeout to 180+ seconds.
4. `npm run dev` -- starts in ~1 second with turbopack. NEVER CANCEL. Set timeout to 30+ seconds.
5. `npm run preview` -- serves built static files. NEVER CANCEL. Set timeout to 30+ seconds.

### Development Workflow
```bash
# Install dependencies (17 seconds)
npm install

# Start development server (1 second startup)
npm run dev
# Visit http://localhost:3000

# Lint code (2 seconds, warnings expected)
npm run lint

# Build for production (REQUIRES font workaround)
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
NEXT_PUBLIC_BASE_PATH=/FreeForCharity-web npm run build

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
```
src/app/
├── page.tsx              # Homepage content
├── layout.tsx            # Root layout with fonts (problematic), metadata, providers
├── globals.css           # Global styles
├── lib/                  # Utility functions
│   └── assetPath.ts     # Helper for GitHub Pages basePath support
├── components/           # All UI components
│   ├── PopupProvider.tsx # Global popup state management
│   ├── NavBar.tsx       # Navigation with mobile menu
│   ├── DonateButton.tsx # Donation popup trigger
│   ├── VolunteerButton.tsx # Volunteer popup trigger
│   └── [other components]
├── data/                 # Static content
│   ├── faqs.ts          # FAQ data
│   ├── team.ts          # Team member data
│   └── testimonials.ts  # Testimonial data
└── sitemap.ts           # SEO sitemap generation
```

### Configuration Files
- `next.config.ts` - Static export configuration
- `tsconfig.json` - TypeScript configuration with path aliases
- `eslint.config.mjs` - ESLint with Next.js rules
- `postcss.config.mjs` - Tailwind CSS PostCSS configuration
- `.github/workflows/nextjs.yml` - GitHub Pages deployment

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
- Custom domain (freeforcharity.org): images at `/my-image.png`
- GitHub Pages: images at `/FreeForCharity-web/my-image.png`
- The helper automatically handles both scenarios based on the `NEXT_PUBLIC_BASE_PATH` environment variable

**Files using assetPath:**
- `src/app/components/NavBar.tsx` - Logo in navigation
- `src/app/page.tsx` - Logo in hero section

### Deployment Process
The site auto-deploys to GitHub Pages via `.github/workflows/nextjs.yml` when pushed to main branch:
1. Node.js 20 setup
2. `npm ci` for clean install
3. `NEXT_PUBLIC_BASE_PATH=/FreeForCharity-web` is set for GitHub Pages deployment
4. `next build` builds the site with proper basePath
5. Playwright tests run to validate the build
6. Static files deployed from `./out` directory

**Dual Deployment:**
- **Custom domain**: https://www.freeforcharity.org (CNAME configured, no basePath needed)
- **GitHub Pages**: https://freeforcharity.github.io/FreeForCharity-web/ (basePath required)

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
NEXT_PUBLIC_BASE_PATH=/FreeForCharity-web npm run build
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