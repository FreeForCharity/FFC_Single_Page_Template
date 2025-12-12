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
     - ✅ GitHub Pages: `/FFC_Single_Page_Template/web-app-manifest-512x512.png`

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

### `social-links.spec.ts`

Tests footer social media links to ensure only active platforms are displayed.

**Test Suite**: `Footer Social Links` (3 tests)

**Tests:**

7. **`should not contain Google+ social link`**
   - **Purpose**: Verifies defunct Google+ link has been removed (shut down April 2019)
   - **Verifications**:
     - No links to `plus.google.com` in footer
     - No elements with `aria-label="Google Plus"` in footer
   - **Selectors**:
     - `footer a[href*="plus.google.com"]`
     - `footer a[aria-label="Google Plus"]`

8. **`should display active social media links`**
   - **Purpose**: Validates all 4 active social media platforms are present and functional
   - **Verifications**:
     - Facebook link is visible with correct href and aria-label
     - X (Twitter) link is visible with correct href and aria-label
     - LinkedIn link is visible with correct href and aria-label
     - GitHub link is visible with correct href and aria-label
   - **Platforms Tested**:
     - ✅ Facebook: `facebook.com/freeforcharity`
     - ✅ X (Twitter): `x.com/freeforcharity1`
     - ✅ LinkedIn: `linkedin.com/company/freeforcharity`
     - ✅ GitHub: `github.com/FreeForCharity/FFC_Single_Page_Template`

9. **`should have exactly 4 social media icons`**
   - **Purpose**: Ensures correct number of social icons are rendered
   - **Verifications**:
     - Counts social media links by aria-label
     - Validates exactly 4 icons: Facebook, X (Twitter), LinkedIn, GitHub
   - **Why This Matters**: Prevents accidental addition/removal of social links

### `application-form.spec.ts`

Tests the ApplicationFormButton modal component functionality.

**Test Suites**: `Application Form Button` (14 tests) + `Application Form Iframe Loading` (1 test)

**Tests:** (continued from previous test files)

10. **`should display "Apply to Become a Supported Charity" button`**
    - **Purpose**: Verifies the trigger button is visible on the page
    - **Verifications**: Button is visible with correct text

11. **`should open modal when button is clicked`**
    - **Purpose**: Validates modal opens on button click
    - **Verifications**:
      - Modal becomes visible
      - Modal has proper ARIA attributes (aria-modal, aria-labelledby)

12. **`should display loading indicator before iframe loads`**
    - **Purpose**: Ensures loading state is shown to users
    - **Verifications**: Loading message "Loading application form..." is visible initially

13. **`should display close button in modal`**
    - **Purpose**: Verifies close button is present
    - **Verifications**: Close button with aria-label "Close application form" is visible

14. **`should close modal when close button is clicked`**
    - **Purpose**: Tests modal closure via close button
    - **Verifications**: Modal is hidden after clicking close button

15. **`should close modal when pressing Escape key`**
    - **Purpose**: Validates keyboard accessibility
    - **Verifications**: Modal closes when Escape key is pressed

16. **`should close modal when clicking outside (overlay)`**
    - **Purpose**: Tests click-outside-to-close behavior
    - **Verifications**: Modal closes when overlay (background) is clicked

17. **`should have Microsoft Forms iframe with correct attributes`**
    - **Purpose**: Verifies iframe sandbox configuration (critical for form loading)
    - **Verifications**:
      - Iframe is present with title "Charity Application Form"
      - Sandbox attribute includes: `allow-scripts`, `allow-forms`, `allow-popups`, `allow-same-origin`
    - **Why This Matters**: The `allow-same-origin` permission is required for Microsoft Forms to load

18. **`should have Microsoft Forms URL in iframe src`**
    - **Purpose**: Validates correct form URL is embedded
    - **Verifications**: iframe src contains `forms.office.com/r/`

19. **`should lock body scroll when modal is open`**
    - **Purpose**: Tests scroll-lock behavior for better UX
    - **Verifications**:
      - Body overflow is set to 'hidden' when modal opens
      - Body overflow is restored when modal closes

20. **`should manage focus properly when modal opens`**
    - **Purpose**: Tests focus management for accessibility
    - **Verifications**: Focus moves to close button when modal opens

21. **`should restore focus to trigger button when modal closes`**
    - **Purpose**: Ensures focus returns to trigger element
    - **Verifications**: Focus returns to "Apply to Become a Supported Charity" button after closing

22. **`should have proper accessibility attributes`**
    - **Purpose**: Validates WCAG compliance
    - **Verifications**:
      - Modal has role="dialog", aria-modal="true", aria-labelledby
      - Screen reader heading with sr-only class exists

23. **`should handle multiple open/close cycles correctly`**
    - **Purpose**: Tests modal stability across multiple interactions
    - **Verifications**: Modal can be opened and closed multiple times using different methods

24. **`should display loading indicator and iframe elements`**
    - **Purpose**: Verifies component structure (loading indicator and iframe are present)
    - **Verifications**:
      - Loading indicator displays initially
      - Iframe element exists in the DOM
    - **Note**: Loading indicator behavior is environment-dependent; external iframes may be blocked by privacy settings

## Test Statistics

- **Total Test Suites**: 4
- **Total Test Cases**: 24
- **Active Tests**: 23 passing ✅
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

# Run only social links tests
npx playwright test social-links.spec.ts

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

**Workflows**:

- `.github/workflows/ci.yml` - CI testing on all PRs and pushes
- `.github/workflows/deploy.yml` - Deployment on push to main

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
   import { test, expect } from '@playwright/test'
   ```

3. **Write test cases**:

   ```typescript
   test.describe('My Feature', () => {
     test('should do something', async ({ page }) => {
       await page.goto('/')

       // Your test code here
       const element = page.locator('selector')
       await expect(element).toBeVisible()
     })
   })
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
await page.goto('/path')
await page.goBack()
await page.reload()

// Finding elements
const element = page.locator('css-selector')
const byRole = page.getByRole('button', { name: 'Submit' })
const byText = page.getByText('Hello World')

// Assertions
await expect(element).toBeVisible()
await expect(element).toHaveText('Expected Text')
await expect(element).toHaveAttribute('href', '/link')
await expect(page).toHaveURL('/expected-path')

// Interactions
await element.click()
await element.fill('text input')
await element.selectOption('value')

// Network monitoring
page.on('response', (response) => {
  console.log(response.url(), response.status())
})
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

**Test Suite Status**: ✅ 8 passing, 1 skipped  
**Last Updated**: December 2025  
**Framework**: Playwright v1.57.0
