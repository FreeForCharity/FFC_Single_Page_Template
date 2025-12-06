import { test, expect } from '@playwright/test'

/**
 * Social Links Tests
 *
 * These tests verify that:
 * 1. Social media links are present and functional
 * 2. Defunct platforms (like Google+) are not present
 * 3. All social icons link to correct destinations
 */

test.describe('Footer Social Links', () => {
  test('should not contain Google+ social link', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Check that Google+ link is not present
    const googlePlusLink = page.locator('footer a[href*="plus.google.com"]')
    await expect(googlePlusLink).toHaveCount(0)

    // Also check that Google Plus label is not present
    const googlePlusLabel = page.locator('footer a[aria-label="Google Plus"]')
    await expect(googlePlusLabel).toHaveCount(0)
  })

  test('should display active social media links', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Verify Facebook link is present
    const facebookLink = page.locator('footer a[href*="facebook.com/freeforcharity"]')
    await expect(facebookLink).toBeVisible()
    await expect(facebookLink).toHaveAttribute('aria-label', 'Facebook')

    // Verify X (Twitter) link is present
    const twitterLink = page.locator('footer a[href*="x.com/freeforcharity1"]')
    await expect(twitterLink).toBeVisible()
    await expect(twitterLink).toHaveAttribute('aria-label', 'X (Twitter)')

    // Verify LinkedIn link is present
    const linkedInLink = page.locator('footer a[href*="linkedin.com/company/freeforcharity"]')
    await expect(linkedInLink).toBeVisible()
    await expect(linkedInLink).toHaveAttribute('aria-label', 'LinkedIn')

    // Verify GitHub link is present
    const githubLink = page.locator(
      'footer a[href*="github.com/FreeForCharity/FFC_Single_Page_Template"]'
    )
    await expect(githubLink).toBeVisible()
    await expect(githubLink).toHaveAttribute('aria-label', 'GitHub')
  })

  test('should have exactly 4 social media icons', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Count all social media links in the footer
    // They are identified by having target="_blank" and being in the footer's social links section

    // We should have exactly 4 social icons: Facebook, X (Twitter), LinkedIn, GitHub
    // Note: This count might be higher due to other external links in footer
    // So let's be more specific and count only links with aria-label containing social platform names
    const socialMediaLinks = page.locator(
      'footer a[aria-label="Facebook"], footer a[aria-label="X (Twitter)"], footer a[aria-label="LinkedIn"], footer a[aria-label="GitHub"]'
    )
    await expect(socialMediaLinks).toHaveCount(4)
  })
})
