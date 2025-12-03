import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../../src/components/Header'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}))

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    nav: ({ children, ...props }: any) => <nav {...props}>{children}</nav>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

describe('Header component', () => {
  it('should render the header', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('should display the Free For Charity logo', () => {
    render(<Header />)
    // Check for logo image with alt text
    expect(screen.getByAltText('Free For Charity')).toBeInTheDocument()
  })

  it('should display main navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Help for Charities')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('should have a mobile menu button', () => {
    render(<Header />)
    // Look for the menu icon button
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('should have search functionality button', () => {
    render(<Header />)
    const buttons = screen.getAllByRole('button')
    // Should have at least menu and search buttons
    expect(buttons.length).toBeGreaterThanOrEqual(2)
  })
})
