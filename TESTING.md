# Testing Guide

This guide helps you test the Free For Charity web application, including content management and automated UI tests.

## Quick Test Checklist

### 1. Check Content Structure
```bash
# Verify JSON content files
ls -la src/data/faqs/
ls -la src/data/team/
ls -la src/data/testimonials/
```

### 2. Test Development Server
```bash
npm run dev
```
Then visit http://localhost:3000

### 3. Test Build
```bash
npm run build
```
Should complete successfully

### 4. Test Preview
```bash
npm run preview
```
Visit http://localhost:3000 to see the built site

### 5. Run Automated Tests
```bash
# First, ensure the site is built
npm run build

# Install Playwright browsers (first time only)
npx playwright install chromium

# Run tests
npm test
```

Tests verify:
- Logo presence in top left corner (NavBar)
- Logo presence in hero section
- Both logos use the same image source

## Automated Test Suite

### Overview

The project uses **Playwright** for end-to-end testing. All tests run automatically in CI before deployment.

**Test Framework**: Playwright v1.56.0  
**Browser**: Chromium (uses system browser to avoid network restrictions)  
**Test Files**: 2 test suites, 6 test cases (5 active, 1 skipped)

### Test Files and Coverage

#### 1. Logo Visibility Tests (`tests/logo.spec.ts`)

Tests that verify the Free For Charity logo displays correctly across the site.

**Test Cases:**

1. **`should display logo in top left corner (NavBar)`**
   - **Purpose**: Verifies logo appears in navigation header
   - **Checks**:
     - Logo element is visible on page
     - Image src ends with `/web-app-manifest-512x512.png`
     - Alt text equals "Free For Charity logo"
   - **Selector**: `header a[aria-label="Free For Charity home"] img[alt="Free For Charity logo"]`

2. **`should display logo in hero section`**
   - **Purpose**: Verifies logo appears in the main hero/landing section
   - **Checks**:
     - Logo element is visible on page
     - Image src ends with `/web-app-manifest-512x512.png`
     - Alt text equals "Free For Charity mark"
   - **Selector**: `section#home img[alt="Free For Charity mark"]`

3. **`both logos should be present on the same page`**
   - **Purpose**: Verifies both logos exist simultaneously and are consistent
   - **Checks**:
     - NavBar logo is visible
     - Hero logo is visible
     - Both logos use identical image source paths
     - Image path pattern matches expected format

#### 2. GitHub Pages Deployment Tests (`tests/github-pages.spec.ts`)

Tests that verify image loading works correctly for both custom domain and GitHub Pages deployments.

**Test Cases:**

4. **`images should load correctly with proper paths`**
   - **Purpose**: Validates image paths work in both deployment scenarios
   - **Checks**:
     - NavBar logo is visible (image loaded successfully)
     - Hero logo is visible (image loaded successfully)
     - Both image src attributes end with `/web-app-manifest-512x512.png`
     - Both logos use identical path
   - **Deployment Compatibility**:
     - Custom domain: `/web-app-manifest-512x512.png`
   - GitHub Pages: `/freeforcharity-web/web-app-manifest-512x512.png`

5. **`images should return 200 status code`**
   - **Purpose**: Verifies images load successfully via HTTP
   - **Checks**:
     - Captures HTTP responses for logo image
     - At least one image request is made
     - All image requests return status code 200 OK
   - **Method**: Monitors network responses using Playwright's response listener

6. **`images have natural dimensions indicating successful load`** ⏭️ **SKIPPED**
   - **Purpose**: Verifies image has loaded by checking natural dimensions
   - **Status**: Temporarily disabled
   - **Reason**: naturalWidth/naturalHeight return 0 in CI despite image being visible
   - **Expected Behavior**: Should verify 512x512 pixel dimensions
   - **Notes**: Works locally, fails in GitHub Actions. Needs investigation.

### Running Tests

#### Local Development

```bash
# Build the site first
npm run build

# Install Playwright browsers (first time only)
npx playwright install chromium

# Run tests in different modes
npm test              # Headless mode (default)
npm run test:headed   # With browser visible
npm run test:ui       # Interactive Playwright UI
```

#### CI/CD Environment

Tests run automatically in GitHub Actions with the following configuration:
- **Trigger**: Every push to main branch
- **Environment**: Ubuntu latest with Node.js 20
- **Browser Setup**: `npx playwright install --with-deps chromium`
- **Build**: Built with `NEXT_PUBLIC_BASE_PATH=/freeforcharity-web`
- **Retry Logic**: Failed tests retry 2 times
- **Failure Handling**: Deployment blocked if tests fail

### Test Configuration

**Playwright Config** (`playwright.config.ts`)

Key settings:
- **Test Directory**: `./tests`
- **Base URL**: `http://localhost:3000`
- **Parallel Execution**: Enabled (disabled in CI for stability)
- **Retries**: 2 in CI, 0 locally
- **Web Server**: Auto-starts `npm run preview` before tests
- **Browser**: System Chromium (fallback to Playwright's if unavailable)
- **Trace Collection**: On first retry for debugging
- **Reporter**: HTML report

**Special Features**:
- Automatically detects and uses system Chromium browser
- Works in restricted network environments
- Prevents accidental `test.only` in CI

### CI/CD Integration

Tests run automatically in GitHub Actions:
- On every push to main branch
- Before deployment to GitHub Pages
- If tests fail, deployment is blocked

## Static Analysis

### ESLint

**Configuration**: `eslint.config.mjs`

- **Rules**: Next.js core-web-vitals + TypeScript
- **Ignored Paths**: node_modules, .next, out, build, test-results, playwright-report
- **Integration**: Runs automatically during `npm run build`

**Current Warnings**:
- 2 warnings about using `<img>` instead of `<Image />` (expected and acceptable)
  - `src/app/components/NavBar.tsx:17:11`
  - `src/app/page.tsx:82:17`
- These warnings are intentional for static export with GitHub Pages basePath support

### TypeScript

**Configuration**: `tsconfig.json`

- **Strict Mode**: Enabled
- **Type Checking**: Runs during build
- **Path Aliases**: Configured for clean imports
- **Target**: ES2017+ with Next.js optimizations

### Code Quality

```bash
# Run linter
npm run lint

# Type checking (part of build)
npm run build
```

## Security Testing

### npm audit

Current security status:
```bash
npm audit
```

**Known Issues**:
- Check for any security vulnerabilities and address them promptly

## What to Verify

### Visual Elements
- [ ] Logo displays in top left corner (NavBar)
- [ ] Logo displays in hero section
- [ ] Both logos are the same image

### Homepage Content
- [ ] Team members display correctly (5 members)
- [ ] Testimonials display correctly (3 unique testimonials)
- [ ] FAQs display correctly (all questions visible)

### JSON Data Integration
- [ ] Team data imported from JSON files
- [ ] Testimonial data imported from JSON files
- [ ] FAQ data imported from JSON files (2 from JSON, rest inline)

## Expected Behavior

### Team Members (from JSON)
1. Clarke Moyer - Founder/President
2. Chris Rae - Vice President
3. Tyler Carlotto - Secretary
4. Brennan Darling - Treasurer
5. Rebecca Cook - Member at Large

### Testimonials (from JSON)
1. Professional online presence testimonial
2. Free domain and email testimonial
3. Core mission focus testimonial

### FAQs (2 from JSON, rest inline)
1. What is the organization aiming to accomplish? (JSON)
2. Are you really a Charity? (JSON)
3. Additional FAQs (inline in faqs.ts)

## Common Issues

### Issue: Admin page blank
**Cause**: External CDN (unpkg.com) blocked or inaccessible  
**Solution**: This is expected in restricted environments. Will work in production.

### Issue: Build fails
**Cause**: Google Fonts network access (per project instructions)  
**Solution**: Temporarily comment out font imports in layout.tsx

### Issue: Content not showing
**Cause**: JSON import error  
**Solution**: Check TypeScript compilation and JSON validity

### Issue: Playwright browser download fails
**Cause**: Network restrictions blocking cdn.playwright.dev  
**Solution**: Uses system Chromium automatically via playwright.config.ts

### Issue: Test times out
**Cause**: Web server didn't start in time  
**Solution**: Increase timeout in playwright.config.ts (currently 120s)

## File Structure Reference

```
freeforcharity-web/
├── tests/                          # Test suite
│   ├── logo.spec.ts               # Logo visibility tests (3 tests)
│   ├── github-pages.spec.ts       # Deployment compatibility tests (3 tests)
│   └── README.md                  # Test documentation
├── playwright.config.ts            # Playwright configuration
├── .github/workflows/
│   └── nextjs.yml                 # CI/CD pipeline with automated tests
├── public/                         # Static assets
├── src/data/
│   ├── faqs/
│   │   ├── what-is-the-organization-aiming-to-accomplish.json
│   │   └── are-you-really-a-charity.json
│   ├── team/
│   │   ├── clarke-moyer.json
│   │   ├── chris-rae.json
│   │   ├── tyler-carlotto.json
│   │   ├── brennan-darling.json
│   │   └── rebecca-cook.json
│   ├── testimonials/
│   │   ├── testimonial-1.json
│   │   ├── testimonial-2.json
│   │   └── testimonial-3.json
│   ├── faqs.ts                    # Imports FAQ JSON files
│   ├── team.ts                    # Imports team JSON files
│   └── testimonials.ts            # Imports testimonial JSON files
├── TESTING.md                     # This file
└── README.md                      # Project overview with testing summary
```

## Recommended Testing Enhancements

### High Priority

1. **Accessibility Testing**
   - Tool: @axe-core/playwright
   - Purpose: Automated WCAG 2.1 compliance checks
   - Benefit: Ensure site is accessible to all users

2. **Mobile Responsive Testing**
   - Tool: Playwright viewport configuration
   - Purpose: Test multiple device sizes and orientations
   - Benefit: Validate responsive design works correctly

3. **Cross-Browser Testing**
   - Browsers: Firefox, WebKit (Safari)
   - Purpose: Ensure consistent behavior across browsers
   - Benefit: Catch browser-specific issues

### Medium Priority

4. **Performance Testing**
   - Tool: Lighthouse CI
   - Purpose: Monitor Core Web Vitals, SEO, Best Practices
   - Benefit: Track performance regression over time

5. **Visual Regression Testing**
   - Tool: Percy.io or Playwright screenshots
   - Purpose: Detect unintended UI changes
   - Benefit: Prevent visual bugs from reaching production

6. **Link Validation**
   - Tool: Custom Playwright tests or broken-link-checker
   - Purpose: Verify all internal and external links work
   - Benefit: Prevent 404 errors and broken navigation

### Lower Priority

7. **Test Coverage Reporting**
   - Tool: Istanbul/NYC with Playwright
   - Purpose: Track test coverage percentage
   - Benefit: Identify untested code paths

8. **Bundle Size Monitoring**
   - Tool: next-bundle-analyzer
   - Purpose: Track bundle size over time
   - Benefit: Prevent performance degradation from large bundles

9. **Dependency Vulnerability Scanning**
   - Tool: GitHub Dependabot + CodeQL
   - Purpose: Automated security vulnerability detection
   - Benefit: Early warning of security issues

### GitHub Actions Enhancements

10. **Branch Protection Rules**
    - Require status checks to pass before merge
    - Require code review approval
    - Prevent direct pushes to main

11. **Automated PR Comments**
    - Post test results to PR comments
    - Include test coverage reports
    - Show performance comparison

12. **Preview Deployments**
    - Deploy PR preview to GitHub Pages subdomain
    - Allow testing changes before merge
    - Include preview URL in PR comment

13. **Caching Optimization**
    - Cache npm dependencies between runs
    - Cache Playwright browsers
    - Cache Next.js build cache

14. **Parallel Test Execution**
    - Split test suite into parallel jobs
    - Reduce total CI runtime
    - Faster feedback on failures

## Next Steps for Production

1. **Implement Priority Test Enhancements**
   - Start with accessibility testing
   - Add mobile responsive tests
   - Enable cross-browser testing

## Documentation

- Quick start: [README.md](./README.md#content-management)
- Test suite: [tests/README.md](./tests/README.md)
- Playwright docs: https://playwright.dev/docs/intro

---

**Test Suite Status**: ✅ 5 passing, 1 skipped  
**Integration Status**: ✅ Complete  
**Last Tested**: October 2025
