# Test Suite

This directory contains automated end-to-end tests for the Free For Charity web application using Playwright.

## Test Files

### `logo.spec.ts`

Tests logo visibility and consistency across the application.

**Test Suite**: `Logo Visibility` (3 tests)

**Tests:**

1. **`should display logo in top left corner (NavBar)`**
   - **Purpose**: Verifies logo appears correctly in the navigation header
   - **Verifications**:
     - Logo element is visible on page
     - Image src ends with `/web-app-manifest-512x512.png`
     - Alt text equals "Free For Charity logo"
   - **Selector**: `header a[aria-label="Free For Charity home"] img[alt="Free For Charity logo"]`

2. **`should display logo in hero section`**
   - **Purpose**: Verifies logo appears correctly in the hero/landing section
   - **Verifications**:
     - Logo element is visible on page
     - Image src ends with `/web-app-manifest-512x512.png`
     - Alt text equals "Free For Charity mark"
   - **Selector**: `section#home img[alt="Free For Charity mark"]`

3. **`both logos should be present on the same page`**
   - **Purpose**: Verifies consistency between NavBar and Hero logos
   - **Verifications**:
     - NavBar logo is visible
     - Hero logo is visible
     - Both logos use identical image source paths
     - Image path matches expected pattern

### `github-pages.spec.ts`

Tests deployment compatibility for both custom domain and GitHub Pages with basePath.

**Test Suite**: `GitHub Pages Image Loading` (3 tests)

**Tests:**

4. **`images should load correctly with proper paths`**
   - **Purpose**: Validates image paths work in both deployment scenarios
   - **Verifications**:
     - NavBar logo is visible (loaded successfully)
     - Hero logo is visible (loaded successfully)
     - Both image src attributes end with `/web-app-manifest-512x512.png`
     - Both logos use identical path
   - **Deployment Scenarios**:
     - ✅ Custom domain: `/web-app-manifest-512x512.png`
     - ✅ GitHub Pages: `/FreeForCharity-web/web-app-manifest-512x512.png`

5. **`images should return 200 status code`**
   - **Purpose**: Verifies images load successfully via HTTP requests
   - **Method**: Monitors network responses using Playwright's response listener
   - **Verifications**:
     - Captures HTTP responses for logo image requests
     - At least one image request is made
     - All image requests return status code 200 OK

6. **`images have natural dimensions indicating successful load`** ⏭️ **SKIPPED**
   - **Purpose**: Verifies image has loaded by checking natural pixel dimensions
   - **Status**: Temporarily disabled
   - **Reason**: `naturalWidth`/`naturalHeight` return 0 in CI environment despite image being visible
   - **Expected**: Should verify 512x512 pixel dimensions
   - **Notes**: 
     - ✅ Passes locally
     - ❌ Fails in GitHub Actions
     - Needs investigation of CI timing or rendering differences

## Test Statistics

- **Total Test Suites**: 2
- **Total Test Cases**: 6
- **Active Tests**: 5 passing ✅
- **Skipped Tests**: 1 ⏭️
- **Status**: All active tests passing

## Running Tests

### Prerequisites

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Install Playwright browsers (first time only):**
   ```bash
   npx playwright install chromium
   ```

### Test Commands

```bash
# Run all tests in headless mode (default)
npm test

# Run tests with browser visible (useful for debugging)
npm run test:headed

# Run tests with Playwright UI (interactive mode)
npm run test:ui
```

### Running Individual Tests

```bash
# Run only logo tests
npx playwright test logo.spec.ts

# Run only GitHub Pages tests
npx playwright test github-pages.spec.ts

# Run a specific test by name
npx playwright test -g "should display logo in top left corner"

# Run in debug mode
npx playwright test --debug
```

## Test Configuration

Tests are configured in `playwright.config.ts` at the project root.

**Key Configuration:**
- **Base URL**: `http://localhost:3000`
- **Browser**: Chromium (uses system browser when available)
- **Web Server**: Auto-starts `npm run preview` before tests
- **Server Timeout**: 120 seconds
- **Parallel Execution**: Enabled locally, disabled in CI
- **Retries**: 
  - CI: 2 times
  - Local: 0 times
- **Trace Collection**: On first retry (for debugging)
- **Reporter**: HTML (view with `npx playwright show-report`)

**Special Features**:
- Automatically detects and uses system Chromium browser
- Falls back to Playwright's bundled browser if system browser unavailable
- Works in restricted network environments
- Prevents accidental `test.only` in CI (`forbidOnly: true`)

## CI/CD Integration

Tests are automatically run in GitHub Actions on every push to the main branch.

**Workflow**: `.github/workflows/nextjs.yml`

**CI Pipeline Steps**:
1. ✅ Checkout repository
2. ✅ Setup Node.js 20
3. ✅ Install dependencies (`npm ci`)
4. ✅ Install Playwright browsers with system deps
5. ✅ Build Next.js with GitHub Pages basePath
6. ✅ Run test suite
7. ✅ Upload test artifacts on failure
8. ✅ Deploy only if tests pass

**Test Failure Handling**:
- If any test fails, the build is marked as failed
- Deployment to GitHub Pages is blocked
- Test artifacts and traces are uploaded for debugging
- Team is notified of failure

## Writing New Tests

### Basic Test Structure

To add new tests:

1. **Create a new test file** in this directory:
   ```bash
   touch tests/my-feature.spec.ts
   ```

2. **Import Playwright utilities**:
   ```typescript
   import { test, expect } from '@playwright/test';
   ```

3. **Write test cases**:
   ```typescript
   test.describe('My Feature', () => {
     test('should do something', async ({ page }) => {
       await page.goto('/');
       
       // Your test code here
       const element = page.locator('selector');
       await expect(element).toBeVisible();
     });
   });
   ```

4. **Run your tests**:
   ```bash
   npm test
   ```

### Best Practices

- **Use descriptive test names**: Clearly state what is being tested
- **Group related tests**: Use `test.describe()` blocks
- **Use specific selectors**: Prefer data-testid, role, or aria-label attributes
- **Wait for elements**: Always use Playwright's auto-waiting or explicit waits
- **Test user behavior**: Focus on what users see and do, not implementation details
- **Keep tests independent**: Each test should run in isolation
- **Handle multiple scenarios**: Test both success and failure cases

### Useful Playwright Commands

```typescript
// Navigation
await page.goto('/path');
await page.goBack();
await page.reload();

// Finding elements
const element = page.locator('css-selector');
const byRole = page.getByRole('button', { name: 'Submit' });
const byText = page.getByText('Hello World');

// Assertions
await expect(element).toBeVisible();
await expect(element).toHaveText('Expected Text');
await expect(element).toHaveAttribute('href', '/link');
await expect(page).toHaveURL('/expected-path');

// Interactions
await element.click();
await element.fill('text input');
await element.selectOption('value');

// Network monitoring
page.on('response', response => {
  console.log(response.url(), response.status());
});
```

## Test Debugging

### Local Debugging

```bash
# Run tests in headed mode to see browser
npm run test:headed

# Run in debug mode with Playwright Inspector
npx playwright test --debug

# Run with trace collection
npx playwright test --trace on

# View trace file
npx playwright show-trace trace.zip
```

### CI Debugging

When tests fail in CI:
1. Check the GitHub Actions workflow run logs
2. Download test artifacts (screenshots, traces)
3. View HTML report: `npx playwright show-report`
4. Compare local vs CI results

### Common Issues

**Issue**: Test times out waiting for element  
**Solution**: Check selector specificity or increase timeout

**Issue**: Element not visible  
**Solution**: Add explicit waits or check for dynamic loading

**Issue**: Tests pass locally but fail in CI  
**Solution**: Check for timing issues, race conditions, or environment differences

## Recommended Test Additions

### High Priority

1. **Navigation Tests**
   - Verify all navigation links work
   - Test mobile hamburger menu
   - Validate smooth scrolling to sections

2. **Form Tests**
   - Test donation popup form
   - Test volunteer popup form
   - Validate form validation

3. **Responsive Tests**
   - Test mobile viewport (375px)
   - Test tablet viewport (768px)
   - Test desktop viewport (1920px)

4. **Accessibility Tests**
   - Add @axe-core/playwright for WCAG checks
   - Test keyboard navigation
   - Verify screen reader compatibility

### Medium Priority

5. **Content Tests**
   - Verify all team members display
   - Verify all testimonials display
   - Verify all FAQs display

6. **SEO Tests**
   - Test meta tags presence
   - Validate Open Graph tags
   - Check robots.txt and sitemap.xml

7. **Performance Tests**
   - Lighthouse CI integration
   - Core Web Vitals monitoring
   - Bundle size tracking

### Lower Priority

8. **Visual Regression Tests**
   - Screenshot comparison testing
   - Detect unintended UI changes

9. **Cross-Browser Tests**
   - Firefox compatibility
   - WebKit/Safari compatibility

## Resources

- **Playwright Documentation**: https://playwright.dev/docs/intro
- **Best Practices**: https://playwright.dev/docs/best-practices
- **API Reference**: https://playwright.dev/docs/api/class-test
- **Debugging Guide**: https://playwright.dev/docs/debug
- **CI Guide**: https://playwright.dev/docs/ci

---

**Test Suite Status**: ✅ 5 passing, 1 skipped  
**Last Updated**: October 2025  
**Framework**: Playwright v1.56.0
