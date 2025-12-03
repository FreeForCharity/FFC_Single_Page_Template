import { test, expect } from '@playwright/test'

/**
 * Copyright Notice Tests
 *
 * These tests verify that the copyright notice in the footer:
 * 1. Contains the copyright symbol (©)
 * 2. Displays the current year
 * 3. Renders the complete copyright text
 */

test.describe('Footer Copyright Notice', () => {
  test('should display copyright notice with current year', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Get the current year
    const currentYear = new Date().getFullYear()

    // Find the footer paragraph containing the copyright text
    const footerText = page.locator('footer p:has-text("All Rights Are Reserved")')

    // Verify the copyright notice is visible
    await expect(footerText).toBeVisible()

    // Verify it contains the copyright symbol and current year
    await expect(footerText).toContainText(`© ${currentYear}`)

    // Verify the complete copyright text is present
    await expect(footerText).toContainText(
      'All Rights Are Reserved by Free For Charity a US 501c3 Non Profit'
    )
  })

  test('should display link to freeforcharity.org in copyright notice', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Find the link within the copyright notice
    const copyrightLink = page.locator(
      'footer p:has-text("All Rights Are Reserved") a[href="https://freeforcharity.org"]'
    )

    // Verify the link is visible
    await expect(copyrightLink).toBeVisible()

    // Verify the link text
    await expect(copyrightLink).toContainText('https://freeforcharity.org')
  })
})
