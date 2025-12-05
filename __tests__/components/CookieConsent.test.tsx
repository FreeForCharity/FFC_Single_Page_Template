import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import CookieConsent from '../../src/components/cookie-consent'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString()
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

describe('CookieConsent component', () => {
  beforeEach(() => {
    localStorageMock.clear()
  })

  it('should show cookie banner on first visit', async () => {
    render(<CookieConsent />)

    await waitFor(
      () => {
        expect(screen.queryByText(/cookies/i)).toBeInTheDocument()
      },
      { timeout: 2000 }
    )
  })

  it('should display banner when no preferences are saved', async () => {
    render(<CookieConsent />)

    await waitFor(
      () => {
        const banner = screen.queryByText(/cookies/i)
        expect(banner).toBeInTheDocument()
      },
      { timeout: 2000 }
    )
  })

  it('should not show banner if preferences are already saved', () => {
    localStorageMock.setItem(
      'cookie-consent',
      JSON.stringify({
        necessary: true,
        functional: true,
        analytics: false,
        marketing: false,
      })
    )

    render(<CookieConsent />)

    // Banner should not appear immediately if consent is already saved
    const banner = screen.queryByText(/We use cookies/i)
    expect(banner).not.toBeInTheDocument()
  })

  it('should have a link to privacy policy', async () => {
    render(<CookieConsent />)

    await waitFor(
      () => {
        const privacyLinks = screen.queryAllByText(/Privacy Policy/i)
        expect(privacyLinks.length).toBeGreaterThanOrEqual(1)
      },
      { timeout: 2000 }
    )
  })

  it('should not have accessibility violations when visible', async () => {
    const { container } = render(<CookieConsent />)

    await waitFor(
      async () => {
        const banner = screen.queryByText(/cookies/i)
        if (banner) {
          const results = await axe(container)
          expect(results).toHaveNoViolations()
        }
      },
      { timeout: 2000 }
    )
  })
})
