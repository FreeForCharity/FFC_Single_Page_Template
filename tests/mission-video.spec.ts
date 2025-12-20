import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Mission Video Tests
 *
 * These tests verify that the mission video is present and properly configured
 * on the homepage mission section.
 *
 * Note: Test expectations use values from test.config.ts for easy customization
 */

test.describe('Mission Video', () => {
  test('should display video in mission section', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Find the video element with the aria-label
    const missionVideo = page.locator(`video[aria-label="${testConfig.missionVideo.ariaLabel}"]`)

    // Verify the video exists and is visible
    await expect(missionVideo).toBeVisible()

    // Verify the video has the correct accessibility attributes
    await expect(missionVideo).toHaveAttribute('aria-label', testConfig.missionVideo.ariaLabel)
    await expect(missionVideo).toHaveAttribute('title', testConfig.missionVideo.title)

    // Verify the video has controls enabled
    await expect(missionVideo).toHaveAttribute('controls', '')
  })

  test('should have video source configured correctly', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Find the video source element
    const videoSource = page.locator(
      `video[aria-label="${testConfig.missionVideo.ariaLabel}"] source`
    )

    // Verify the source exists
    await expect(videoSource).toHaveCount(1)

    // Verify the source has the correct type
    await expect(videoSource).toHaveAttribute('type', 'video/mp4')
  })
})
