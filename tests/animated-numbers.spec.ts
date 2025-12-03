import { test, expect } from '@playwright/test'

/**
 * Animated Numbers Tests
 *
 * These tests verify that the Results-2023 section numbers animate correctly
 * when scrolled into view.
 */

test.describe('Results 2023 Animated Numbers', () => {
  // Helper selector for ResultCard components - uses the distinctive border class
  // to identify the card containing a specific description
  const getResultCard = (page: import('@playwright/test').Page, description: string) =>
    page.locator(`div.border-\\[\\#F58629\\]:has(p:text-is("${description}"))`)

  test('should display the Results-2023 section with all four statistics', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Find the Results-2023 section heading
    const resultsHeading = page.locator('h1:has-text("Results - 2023")')
    await expect(resultsHeading).toBeVisible()

    // Scroll to the Results section to trigger animations
    await resultsHeading.scrollIntoViewIfNeeded()

    // Wait for animation to complete by checking final values
    await expect(getResultCard(page, 'Organizational partners').locator('h1')).toContainText(
      '221',
      { timeout: 5000 }
    )
    await expect(getResultCard(page, 'Total volunteers').locator('h1')).toContainText('3')
    await expect(
      getResultCard(page, 'Organizations accessing technical assistance offerings').locator('h1')
    ).toContainText('221')
    await expect(
      getResultCard(page, 'Volunteer hours contributed to the organization').locator('h1')
    ).toContainText('25')
  })

  test('should start with numbers at 0 before scrolling into view', async ({ page }) => {
    // Navigate to the homepage without scrolling
    await page.goto('/')

    // Verify the numbers start at 0 before scrolling into view
    const firstCardNumber = getResultCard(page, 'Organizational partners').locator('h1')
    await expect(firstCardNumber).toContainText('0')

    const resultsSection = page.locator('h1:has-text("Results - 2023")')
    await expect(resultsSection).toBeAttached()
  })

  test('should animate numbers only once when scrolled into view', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Find and scroll to the Results-2023 section
    const resultsHeading = page.locator('h1:has-text("Results - 2023")')
    await resultsHeading.scrollIntoViewIfNeeded()

    // Wait for animation to complete by checking the final value
    const firstCardNumber = getResultCard(page, 'Organizational partners').locator('h1')
    await expect(firstCardNumber).toContainText('221', { timeout: 5000 })

    // Scroll away and back
    await page.locator('h1:has-text("Welcome to")').scrollIntoViewIfNeeded()
    await resultsHeading.scrollIntoViewIfNeeded()

    // Value should still be the final animated value (not reset to 0)
    await expect(firstCardNumber).toContainText('221')
  })

  test('should display correct descriptions for each statistic', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Verify all descriptions are present
    await expect(page.locator('text=Organizational partners')).toBeVisible()
    await expect(page.locator('text=Total volunteers')).toBeVisible()
    await expect(
      page.locator('text=Organizations accessing technical assistance offerings')
    ).toBeVisible()
    await expect(page.locator('text=Volunteer hours contributed to the organization')).toBeVisible()
  })

  test('should respect prefers-reduced-motion preference', async ({ browser }) => {
    // Create a context with reduced motion preference
    const context = await browser.newContext({
      reducedMotion: 'reduce',
    })
    const page = await context.newPage()

    await page.goto('/')
    const resultsHeading = page.locator('h1:has-text("Results - 2023")')
    // Wait for the element to be visible before scrolling
    await expect(resultsHeading).toBeVisible({ timeout: 5000 })
    await resultsHeading.scrollIntoViewIfNeeded()

    // With reduced motion, numbers should appear instantly at final value
    const firstCardNumber = getResultCard(page, 'Organizational partners').locator('h1')
    await expect(firstCardNumber).toContainText('221', { timeout: 1000 })

    await context.close()
  })
})
