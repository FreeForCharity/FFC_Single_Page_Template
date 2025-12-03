// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// Configure jest-axe for accessibility testing
import 'jest-axe/extend-expect'

// Suppress Next.js Link component act() warnings
// These warnings occur because Next.js Link uses internal intersection observer
// that triggers state updates after render. This is expected behavior and not a test issue.
// See: https://github.com/vercel/next.js/issues/47738
const originalError = console.error.bind(console)
console.error = (...args) => {
  // Check if the error message contains the Next.js Link component act() warning
  // The message could be the first argument or could be part of a format string
  const messageStr = args.map((arg) => String(arg)).join(' ')
  if (messageStr.includes('ForwardRef(LinkComponent)') && messageStr.includes('act(')) {
    return
  }
  originalError(...args)
}
