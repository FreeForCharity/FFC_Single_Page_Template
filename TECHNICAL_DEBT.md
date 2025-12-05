# Technical Debt

**Document Purpose:** This document consolidates all known technical debt items across the Free For Charity website repository, including code quality issues, security vulnerabilities, dependency updates, and deferred improvements.

**Last Updated:** December 2025  
**Status:** Active Tracking  
**Repository:** FreeForCharity/FFC_Single_Page_Template

---

## Table of Contents

1. [Overview](#overview)
2. [ESLint Warnings (React Hooks)](#eslint-warnings-react-hooks)
3. [Security Vulnerabilities](#security-vulnerabilities)
4. [Dependency Management (Dependabot)](#dependency-management-dependabot)
5. [Future Enhancements](#future-enhancements)
6. [Deferred Improvements](#deferred-improvements)
7. [Tracking and Prioritization](#tracking-and-prioritization)

---

## Overview

This document tracks technical debt items that:

- Don't currently block functionality
- Should be addressed in future refactoring
- Require monitoring and eventual resolution
- Are acceptable tradeoffs for now but not ideal long-term

**Current Technical Debt Count:** 10 React Hooks warnings + 4 security vulnerabilities (low severity)

---

## ESLint Warnings (React Hooks)

### Summary

The project has **10 React Hooks ESLint warnings** that are technical debt. These warnings don't affect functionality but violate React best practices and should be addressed in future refactoring.

### Category 1: `react-hooks/set-state-in-effect` (6 occurrences)

**Issue:** Calling `setState` synchronously within `useEffect` when animating accordion height or loading preferences.

**Affected Files:**

- `src/components/ui/Accordian.tsx`
- `src/components/ui/AccordianBold.tsx`
- `src/components/ui/Frequently-Asked-Questions.tsx`
- `src/components/ui/OrangeFaqItem.tsx`
- `src/components/free-charity-web-hosting/FAQs/index.tsx`
- `src/components/cookie-consent/index.tsx`

**Why it's acceptable now:**

- Components work correctly without performance issues
- Accordion animations function properly
- No user-visible impact

**Recommended fix:**

- Use `useLayoutEffect` instead of `useEffect` for DOM measurements
- OR migrate to CSS transitions with `max-height` instead of JavaScript height calculations
- OR use React's `useTransition` API for smoother updates

**Priority:** Medium - Should address during next UI component refactoring

---

### Category 2: `react-hooks/exhaustive-deps` (2 occurrences)

**Issue:** Missing dependencies in `useEffect` dependency arrays.

**Affected Files:**

- `src/components/free-charity-web-hosting/ClientTestimonials/index.tsx`
- `src/components/ui/CallToActionCard.tsx`

**Why it's acceptable now:**

- Effects function as intended with current implementation
- Dependencies are intentionally omitted to prevent unnecessary re-runs
- No functional bugs observed

**Recommended fix:**

- Add missing dependencies to dependency arrays
- OR use `useCallback` to stabilize function references
- OR refactor to eliminate the need for complex dependencies

**Priority:** Medium - Address when refactoring these components

---

### Category 3: `react-hooks/immutability` (2 occurrences)

**Issue:** Direct mutation of state values in Swiper carousel setup.

**Affected Files:**

- `src/components/free-charity-web-hosting/ClientTestimonials/index.tsx`
- `src/components/home/Testimonials/index.tsx`

**Why it's acceptable now:**

- Swiper library requires direct manipulation of navigation parameters
- Carousels function correctly
- This is a known pattern with Swiper.js integration

**Recommended fix:**

- Use Swiper's React-specific API instead of direct DOM manipulation
- OR create a custom carousel component that follows React patterns
- OR use a more React-friendly carousel library

**Priority:** Low - Works correctly, only a code style issue

---

## Security Vulnerabilities

### Current Status (December 2025)

The project has **4 low severity vulnerabilities** identified by npm audit:

#### 1. tmp Package Vulnerabilities (4 low severity)

**CVE:** GHSA-52f5-9888-hmc6  
**Severity:** Low  
**Affected Package:** tmp (via @lhci/cli - Lighthouse CI)  
**Vulnerability:** Arbitrary temporary file/directory write via symbolic link

**Impact:**

- **Development only** - affects Lighthouse CI dev dependency
- **No production impact** - tmp package not used in production build
- **Limited risk** - requires local file system access

**Available Fixes:**

- `npm audit fix --force` - May introduce breaking changes to Lighthouse CI
- Wait for Lighthouse CI to update their dependencies

**Current Decision:** Monitor via Dependabot, low priority to fix manually

**Dependabot Status:** Will automatically create PR when fix becomes available

---

### Previously Resolved Vulnerabilities

#### ✅ Next.js RCE Vulnerability (RESOLVED)

**CVE:** GHSA-9qr9-h5gf-34mp  
**Severity:** Critical  
**Status:** Fixed in next@16.0.7  
**Resolution Date:** December 2025

This critical vulnerability in Next.js has been resolved by upgrading to version 16.0.7.

---

### Monitoring Process

**Automated Monitoring:**

- Dependabot checks for vulnerabilities weekly (Mondays at 9:00 AM UTC)
- GitHub Security Advisories trigger immediate alerts
- CodeQL scanning runs on every PR and push to main

**Manual Checks:**

```bash
# Check for vulnerabilities
npm audit

# View details
npm audit --json

# Attempt automatic fix (use with caution)
npm audit fix

# Fix including breaking changes (test thoroughly first!)
npm audit fix --force
```

**Response Protocol:**

1. **Critical/High:** Address immediately, create emergency PR
2. **Moderate:** Address within 1 week, include in next sprint
3. **Low (production):** Address within 1 month
4. **Low (dev only):** Monitor via Dependabot, low priority

---

## Dependency Management (Dependabot)

### Automated Dependency Updates

**Configuration:** `.github/dependabot.yml`

**Update Schedule:**

- **Frequency:** Weekly (Mondays at 9:00 AM UTC)
- **Scope:** npm packages (production and development)
- **Scope:** GitHub Actions workflow dependencies
- **Strategy:** Grouped updates for easier review

**Current Dependabot PRs:** Check [Pull Requests tab](https://github.com/FreeForCharity/FFC_Single_Page_Template/pulls)

### Pending Dependency Updates

Monitor active Dependabot PRs for:

- Security patches
- Minor version updates
- Major version updates (require manual testing)

**Review Process:**

1. Dependabot creates PR with changes
2. CI runs automated tests
3. Review changelog for breaking changes
4. Test locally if needed
5. Merge when safe

**Documentation:** See [DEPENDABOT.md](./DEPENDABOT.md) for full setup guide

---

## Future Enhancements

### Potential Improvements (From README.md)

These are nice-to-have features that could improve code quality but aren't critical:

#### Testing Enhancements

- **Visual Regression Testing**: Add Percy or Playwright screenshots for UI change detection
- **Mobile Device Testing**: Test on real mobile devices via BrowserStack
- **Cross-Browser Testing**: Add Firefox and WebKit browser testing
- **Increased Test Coverage**: Target 25-50% coverage for critical components

**Current Status:** 5% test coverage baseline established  
**Priority:** Low-Medium

---

#### Code Quality Improvements

- **TypeScript Strict Mode**: Enable additional strict flags
- **Import Organization**: Add eslint-plugin-import for import sorting
- **npm audit CI Integration**: Add automated npm audit checks with failure threshold

**Priority:** Low

---

#### Build Quality Gates

- **Bundle Size Analysis**: Add next-bundle-analyzer to track bundle size
- **Test Coverage Reports**: Add coverage collection and reporting
- **Performance Budgets**: Set and enforce performance budgets in CI

**Priority:** Low

---

#### CI/CD Improvements

- **Branch Protection**: Require status checks to pass before merging
- **Automated PR Comments**: Post test results and coverage to PRs
- **Cache Optimization**: Improve caching strategy for faster builds
- **Parallel Testing**: Run test suites in parallel for faster feedback

**Priority:** Low-Medium

---

## Deferred Improvements

### Intentionally Not Implemented

These items from SITE_IMPROVEMENTS.md analysis are intentionally not implemented:

#### 1. Dark Mode Theming

**Status:** Not implemented  
**Reason:** Not required for current use case, adds complexity  
**Source:** SITE_IMPROVEMENTS.md GAP-12

---

#### 2. Advanced Context Management

**Status:** Not needed  
**Reason:** Single-page architecture doesn't require complex state management  
**Source:** Comparison with KCCF-web

---

#### 3. Server-Side API Routes

**Status:** Not applicable  
**Reason:** Static export architecture doesn't support API routes  
**Source:** next.config.ts output: "export"

---

#### 4. Database Integration

**Status:** Not needed  
**Reason:** Static site, no database required for current scope

---

#### 5. Authentication System

**Status:** Not needed  
**Reason:** Public website, no login functionality required

---

#### 6. Advanced Form Handling

**Status:** Simplified  
**Reason:** Current form submissions are simulated (backend integration pending)

---

## Tracking and Prioritization

### Priority Levels

**🔴 High Priority (Address within 1 month):**

- Critical security vulnerabilities
- Blocking bugs
- Performance issues affecting users

**🟡 Medium Priority (Address within 3 months):**

- React Hooks ESLint warnings
- Moderate security vulnerabilities
- Code quality improvements that reduce maintenance burden

**🟢 Low Priority (Address when convenient):**

- Low severity vulnerabilities in dev dependencies
- Code style issues that don't affect functionality
- Nice-to-have enhancements

---

### Current Action Items

**Immediate (Next Sprint):**

- [ ] Monitor tmp package vulnerability for updates from Dependabot

**Short Term (Next Quarter):**

- [ ] Refactor accordion components to use `useLayoutEffect`
- [ ] Review and fix `exhaustive-deps` warnings in carousel components
- [ ] Evaluate Swiper.js alternative or React-specific API usage

**Long Term (Next 6 Months):**

- [ ] Increase test coverage to 25%
- [ ] Implement visual regression testing
- [ ] Add bundle size monitoring

---

### Review Schedule

**Monthly Review:**

- Review new security vulnerabilities
- Assess Dependabot PRs
- Update priority levels

**Quarterly Review:**

- Re-evaluate technical debt priorities
- Plan refactoring sprints
- Update this document

**Annual Review:**

- Comprehensive code quality audit
- Major refactoring planning
- Technology stack updates

---

## Related Documentation

- [README.md](./README.md) - Main project documentation
- [SECURITY.md](./SECURITY.md) - Security policies and vulnerability reporting
- [DEPENDABOT.md](./DEPENDABOT.md) - Dependency management guide
- [SITE_IMPROVEMENTS.md](./SITE_IMPROVEMENTS.md) - Capability gap analysis
- [TESTING.md](./TESTING.md) - Testing strategy and guides
- [CODE_QUALITY.md](./CODE_QUALITY.md) - Code quality standards

---

**Questions or Concerns?**

If you have questions about technical debt items or want to propose prioritization changes:

- Open a GitHub Discussion
- Create an issue with label `technical-debt`
- Contact repository maintainers

---

**Document Maintenance:**

- Update this document when technical debt items are added or resolved
- Review and update priorities quarterly
- Keep the action items section current
