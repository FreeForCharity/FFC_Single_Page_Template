import { test, expect } from '@playwright/test'

/**
 * Events Section Tests
 *
 * These tests verify that:
 * 1. The Events section renders correctly on the homepage
 * 2. The iframe loads with proper sandbox attributes
 * 3. The section is accessible via the #events anchor
 * 4. The Facebook link works correctly
 * 5. The component is keyboard accessible
 */

test.describe('Events Section', () => {
  test('should render the Events section on homepage', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Verify Events section exists with correct ID
    const eventsSection = page.locator('#events')
    await expect(eventsSection).toBeVisible()

    // Verify section heading is present
    const heading = eventsSection.locator('h1')
    await expect(heading).toBeVisible()
    await expect(heading).toContainText('Upcoming Events')
  })

  test('should load iframe with proper sandbox attributes', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Locate the Events iframe
    const eventsIframe = page.locator('#events iframe[title="Facebook Events"]')
    await expect(eventsIframe).toBeVisible()

    // Verify iframe has correct src
    await expect(eventsIframe).toHaveAttribute(
      'src',
      'https://widgets.sociablekit.com/facebook-page-events/iframe/25631700'
    )

    // Verify iframe has sandbox attribute for security
    const sandboxAttr = await eventsIframe.getAttribute('sandbox')
    expect(sandboxAttr).toBeTruthy()
    expect(sandboxAttr).toContain('allow-scripts')
    expect(sandboxAttr).toContain('allow-same-origin')

    // Verify iframe has lazy loading
    await expect(eventsIframe).toHaveAttribute('loading', 'lazy')

    // Verify iframe has accessible title
    await expect(eventsIframe).toHaveAttribute('title', 'Facebook Events')
  })

  test('should be accessible via #events anchor link', async ({ page }) => {
    // Navigate directly to the events section via anchor
    await page.goto('/#events')

    // Wait for page to load (use domcontentloaded instead of networkidle)
    await page.waitForLoadState('domcontentloaded')

    // Verify Events section is visible
    const eventsSection = page.locator('#events')
    await expect(eventsSection).toBeVisible()

    // Section should be at least partially visible
    const boundingBox = await eventsSection.boundingBox()
    expect(boundingBox).toBeTruthy()
  })

  test('should have working Facebook link', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Locate the Facebook link in Events section
    const facebookLink = page.locator('#events a[href*="facebook.com/freeforcharity"]')
    await expect(facebookLink).toBeVisible()

    // Verify link text
    await expect(facebookLink).toContainText('View all events on Facebook')

    // Verify link opens in new tab
    await expect(facebookLink).toHaveAttribute('target', '_blank')

    // Verify link has security attributes
    await expect(facebookLink).toHaveAttribute('rel', 'noopener noreferrer')

    // Verify link href
    await expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/freeforcharity')
  })

  test('should be keyboard accessible', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Scroll to Events section
    await page.locator('#events').scrollIntoViewIfNeeded()

    // Tab to the Facebook link in Events section
    const facebookLink = page.locator('#events a[href*="facebook.com/freeforcharity"]')

    // Focus the link using keyboard navigation
    await facebookLink.focus()

    // Verify the link is focused
    await expect(facebookLink).toBeFocused()

    // Verify pressing Enter would activate the link (we won't actually click to avoid navigation)
    // Just verify the link is interactive
    const isClickable = await facebookLink.evaluate((el) => {
      return el instanceof HTMLAnchorElement && el.href.length > 0
    })
    expect(isClickable).toBe(true)
  })

  test('should have proper section structure and styling', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    const eventsSection = page.locator('#events')

    // Verify section has proper padding class
    const classes = await eventsSection.getAttribute('class')
    expect(classes).toContain('py-[52px]')

    // Verify description text is present
    const description = eventsSection.locator('p').first()
    await expect(description).toBeVisible()
    await expect(description).toContainText('volunteer opportunities')

    // Verify section has separator line at bottom
    const separator = eventsSection.locator('div.border')
    await expect(separator).toBeVisible()
  })

  test('should appear in footer navigation', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Verify Events link exists in footer
    const footerEventsLink = page.locator('footer a[href="/#events"]')
    await expect(footerEventsLink).toBeVisible()
    await expect(footerEventsLink).toContainText('Events')

    // Click the footer link and verify it navigates to Events section
    await footerEventsLink.click()

    // Wait for navigation/scroll
    await page.waitForTimeout(500)

    // Verify Events section is visible after clicking footer link
    const eventsSection = page.locator('#events')
    await expect(eventsSection).toBeVisible()
  })

  test('should load on mobile viewport', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })

    // Navigate to the homepage
    await page.goto('/')

    // Scroll to Events section
    await page.locator('#events').scrollIntoViewIfNeeded()

    // Verify Events section is visible on mobile
    const eventsSection = page.locator('#events')
    await expect(eventsSection).toBeVisible()

    // Verify iframe is visible on mobile
    const eventsIframe = page.locator('#events iframe[title="Facebook Events"]')
    await expect(eventsIframe).toBeVisible()

    // Verify heading is visible on mobile
    const heading = eventsSection.locator('h1')
    await expect(heading).toBeVisible()
  })
})
