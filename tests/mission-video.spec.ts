import { test, expect } from '@playwright/test'

/**
 * Mission Video Tests
 *
 * These tests verify that the mission video is present and properly configured
 * on the homepage mission section.
 */

test.describe('Mission Video', () => {
  test('should display video in mission section', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Find the video element with the aria-label
    const missionVideo = page.locator('video[aria-label="Free For Charity mission video"]')

    // Verify the video exists and is visible
    await expect(missionVideo).toBeVisible()

    // Verify the video has the correct accessibility attributes
    await expect(missionVideo).toHaveAttribute('aria-label', 'Free For Charity mission video')
    await expect(missionVideo).toHaveAttribute(
      'title',
      "Learn about Free For Charity's mission to help nonprofits reduce costs"
    )

    // Verify the video has controls enabled
    await expect(missionVideo).toHaveAttribute('controls', '')
  })

  test('should have video source configured correctly', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Find the video source element
    const videoSource = page.locator('video[aria-label="Free For Charity mission video"] source')

    // Verify the source exists
    await expect(videoSource).toHaveCount(1)

    // Verify the source has the correct type
    await expect(videoSource).toHaveAttribute('type', 'video/mp4')
  })
})
