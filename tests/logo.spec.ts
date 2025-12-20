import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Logo and Image Visibility Tests
 *
 * These tests verify that critical images are present and visible on the homepage:
 * 1. Header logo (top left corner) - validates the organization branding
 * 2. Hero section image - validates the decorative hero image is displayed
 *
 * Note: Test expectations use values from test.config.ts for easy customization
 */

test.describe('Logo and Image Visibility', () => {
  test('should display logo in header', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Find the logo in the Header
    // The logo is in a Link element that points to "/" with img alt text
    const headerLogo = page.locator(`header a[href="/"] img[alt="${testConfig.logo.headerAlt}"]`)

    // Verify the logo exists
    await expect(headerLogo).toBeVisible()

    // Verify the logo has the correct alt text
    await expect(headerLogo).toHaveAttribute('alt', testConfig.logo.headerAlt)
  })

  test('should display hero section image', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Find the hero image
    const heroImage = page.locator(`img[alt="${testConfig.logo.heroAlt}"]`)

    // Verify the image exists
    await expect(heroImage).toBeVisible()

    // Verify the image has the correct alt text
    await expect(heroImage).toHaveAttribute('alt', testConfig.logo.heroAlt)
  })

  test('both header logo and hero image should be present on the same page', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Find both images
    const headerLogo = page.locator(`header a[href="/"] img[alt="${testConfig.logo.headerAlt}"]`)
    const heroImage = page.locator(`img[alt="${testConfig.logo.heroAlt}"]`)

    // Verify both are visible simultaneously
    await expect(headerLogo).toBeVisible()
    await expect(heroImage).toBeVisible()
  })
})
