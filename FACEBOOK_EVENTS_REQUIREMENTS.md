# Facebook Events Integration Requirements

**Last Updated:** December 9, 2024

This document outlines the technical and functional requirements for integrating Free For Charity's Facebook events into a new Events section on the homepage.

## Table of Contents

- [Overview](#overview)
- [Integration Options](#integration-options)
- [Recommended Approach](#recommended-approach)
- [Technical Requirements](#technical-requirements)
- [Privacy and Compliance Requirements](#privacy-and-compliance-requirements)
- [Design Requirements](#design-requirements)
- [Implementation Considerations](#implementation-considerations)
- [Testing Requirements](#testing-requirements)

## Overview

Free For Charity maintains an active Facebook page at [https://www.facebook.com/freeforcharity](https://www.facebook.com/freeforcharity) that hosts events to engage with the community, volunteers, and supported charities. This integration will display upcoming Facebook events directly on the homepage to increase visibility and engagement.

### Goals

- **Increase Event Visibility:** Display upcoming events prominently on the homepage
- **Drive Engagement:** Make it easy for visitors to see and RSVP to events
- **Maintain Consistency:** Automatically sync with Facebook event updates
- **Ensure Privacy Compliance:** Respect GDPR, CCPA, and user privacy preferences
- **Preserve Performance:** Minimize impact on page load times and Lighthouse scores

## Integration Options

There are three primary approaches to integrating Facebook events:

### Option 1: Facebook Page Plugin (Easiest)

**Description:** Embed Facebook's official Page Plugin configured to show the events tab.

**Pros:**

- No API credentials required
- Automatic updates when events change on Facebook
- Official Facebook styling and functionality
- Built-in RSVP and sharing features
- No token management or expiration concerns

**Cons:**

- Limited customization of appearance
- Loads third-party scripts from Facebook
- Requires cookie consent for GDPR compliance
- Less control over displayed data
- May not match site design perfectly

**Technical Details:**

```html
<div
  class="fb-page"
  data-href="https://www.facebook.com/freeforcharity"
  data-tabs="events"
  data-width="500"
  data-height="600"
  data-small-header="false"
  data-adapt-container-width="true"
  data-hide-cover="false"
  data-show-facepile="true"
></div>
<script
  async
  defer
  crossorigin="anonymous"
  src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0"
></script>
```

### Option 2: Facebook Graph API (Most Customizable)

**Description:** Use Facebook's Graph API to programmatically fetch event data and render it with custom components.

**Pros:**

- Complete control over design and layout
- Can filter and customize event data
- Better performance optimization opportunities
- Matches existing site design perfectly
- No third-party iframe dependencies

**Cons:**

- Requires Facebook Developer account and app creation
- Needs access token management (tokens expire)
- Requires API permissions (`pages_read_engagement`, `pages_manage_events`)
- Must handle token refresh logic
- More complex implementation
- Potential API rate limits
- Must go through Facebook App Review for production use

**Technical Details:**

- API Endpoint: `GET /{page-id}/events?access_token={token}`
- Required Permissions: `pages_read_engagement`, `pages_manage_events`
- Token Type: Long-lived Page Access Token (60 days validity)
- Response Format: JSON with event objects

**Example Response:**

```json
{
  "data": [
    {
      "id": "123456789",
      "name": "Volunteer Training Workshop",
      "start_time": "2024-12-15T18:00:00-0500",
      "end_time": "2024-12-15T20:00:00-0500",
      "description": "Join us for a hands-on training...",
      "place": {
        "name": "Free For Charity Office",
        "location": {
          "city": "State College",
          "state": "PA",
          "street": "301 Science Park Road"
        }
      }
    }
  ]
}
```

### Option 3: Third-Party Widget Services

**Description:** Use services like SociableKIT, Elfsight, or similar that provide event embedding widgets.

**Pros:**

- Easier setup than Graph API
- More customization than Page Plugin
- Handle token management for you
- Often provide enhanced features

**Cons:**

- Additional third-party dependency
- May have monthly costs
- Privacy policy updates required
- Less control than Graph API
- Another service to maintain

## Recommended Approach

**Primary Recommendation: Facebook Page Plugin with Cookie Consent Integration**

For Free For Charity's use case, the Facebook Page Plugin is recommended because:

1. **Simplicity:** No API credentials, token management, or complex setup
2. **Maintainability:** Automatic updates without code changes
3. **Compliance:** Already have cookie consent infrastructure in place
4. **Consistency:** Official Facebook styling is familiar to users
5. **Static Site Friendly:** Works with Next.js static export
6. **Cost:** No additional service fees or API rate limits

**Alternative: Graph API for Future Enhancement**

If greater customization is needed in the future, the Graph API approach can be implemented. However, this should be considered Phase 2 due to:

- Token management complexity
- Need for server-side logic or edge functions
- Facebook App Review requirements for production
- Compatibility concerns with static site generation

## Technical Requirements

### For Facebook Page Plugin Approach

#### Frontend Components

1. **Events Section Component** (`src/components/home-page/Events/index.tsx`)
   - Section container with consistent styling
   - Heading: "Upcoming Events" or similar
   - Facebook Page Plugin embed
   - Responsive design (mobile/tablet/desktop)
   - Loading state while Facebook SDK initializes

2. **Cookie Consent Integration**
   - Block Facebook SDK script until user accepts marketing/social cookies
   - Show placeholder or notice when blocked
   - Auto-load after consent is given
   - Store consent state in existing cookie consent system

#### Dependencies

- **No new npm packages required** (uses Facebook's CDN)
- Facebook SDK loaded conditionally based on consent
- Integration with existing `src/components/cookie-consent/index.tsx`

#### Configuration

```typescript
// Configuration object for Facebook Page Plugin
interface FacebookPagePluginConfig {
  pageUrl: string // 'https://www.facebook.com/freeforcharity'
  tabs: string[] // ['events']
  width: number // Responsive or fixed (e.g., 500)
  height: number // e.g., 600
  smallHeader: boolean // false
  adaptContainerWidth: boolean // true
  hideCover: boolean // false
  showFacepile: boolean // true
}
```

### For Graph API Approach (Future)

#### Backend/API Requirements

1. **Facebook App Configuration**
   - Create Facebook Developer app
   - Configure app permissions
   - Generate Page Access Token
   - Store token securely (environment variable)

2. **Token Management**
   - Implement token refresh logic
   - Handle token expiration gracefully
   - Secure storage of access tokens
   - Monitoring for token validity

3. **API Integration**
   - Fetch events endpoint handler
   - Cache responses (reduce API calls)
   - Error handling for API failures
   - Rate limit management

#### Frontend Components

1. **Events Display Component**
   - Fetch events from API endpoint
   - Display event cards with custom styling
   - Loading states
   - Error states
   - Empty state (no upcoming events)

2. **Event Card Component**
   - Event title, date, time
   - Location (if applicable)
   - Description (truncated with "read more")
   - RSVP link to Facebook
   - Share functionality

## Privacy and Compliance Requirements

### GDPR and Cookie Consent

#### Required Updates to Cookie Policy

Update `src/app/cookie-policy/page.tsx` to include:

```markdown
#### Facebook Page Plugin / Events Widget

- **Purpose:** Display upcoming Facebook events from our Facebook page
- **Data Collected:** Facebook may set cookies to track page visits, user interactions,
  and behavior even for non-logged-in users
- **Cookie Category:** Marketing/Social Media
- **Provider:** Meta Platforms, Inc.
- **Privacy Policy:** [https://www.facebook.com/privacy/policy/](https://www.facebook.com/privacy/policy/)
- **User Control:** Requires explicit consent for marketing/social cookies
```

#### Required Updates to Privacy Policy

Update `src/app/privacy-policy/page.tsx` to include:

```markdown
### Facebook Events Integration

Our website displays upcoming events from our Facebook page using the Facebook Page Plugin.
When you consent to marketing and social media cookies, this plugin may load content from
Facebook and set cookies that allow Facebook to track your activity on our site, even if
you are not logged into Facebook.

**Data Shared with Facebook:**

- Your IP address
- Browser information
- Pages visited on our site
- Interaction with the events widget
- Time spent on page

**User Control:**
You can control whether the Facebook plugin loads by managing your cookie preferences
through our cookie consent banner. You may also opt out of Facebook tracking through
your Facebook ad settings at [https://www.facebook.com/settings/?tab=ads](https://www.facebook.com/settings/?tab=ads).
```

#### Implementation Requirements

1. **Conditional Loading**
   - Facebook SDK must NOT load until user explicitly consents to marketing/social cookies
   - Check consent state from existing cookie consent system
   - Only inject Facebook SDK script after consent

2. **Consent Banner Integration**
   - Update `src/components/cookie-consent/index.tsx` to handle Facebook Events
   - Add Facebook SDK loading logic similar to Meta Pixel implementation
   - Ensure banner displays before any Facebook content loads

3. **Placeholder State**
   - Show a placeholder or message when consent is not given
   - Example: "Accept marketing cookies to view our upcoming events"
   - Provide button to open consent settings

4. **Opt-Out Mechanism**
   - Users must be able to withdraw consent at any time
   - Removing consent should stop loading Facebook SDK on subsequent visits
   - Clear instructions in Privacy Policy on how to manage preferences

### External Dependencies Documentation

Update `EXTERNAL_DEPENDENCIES.md` to include:

```markdown
### Facebook Events Integration

#### Facebook Page Plugin

- **Purpose:** Display upcoming events from Free For Charity's Facebook page
- **Implementation:** Embedded widget via iframe
- **Domain:** `www.facebook.com`, `connect.facebook.net`
- **Preconnect:** `<link rel="preconnect" href="https://connect.facebook.net" />`
- **Load Strategy:** Conditional (only after marketing cookie consent)
- **Data Collected:** User interactions, page views, browser information
- **User Control:** Requires explicit consent via cookie banner
- **Privacy Policy:** https://www.facebook.com/privacy/policy/
- **Opt-out:** https://www.facebook.com/settings/?tab=ads

**Technical Details:**

- SDK Version: v19.0 or latest stable
- Plugin Type: Page Plugin with Events tab
- Integration: Client-side JavaScript SDK
- Sandbox: None (uses iframe from Facebook domain)
```

## Design Requirements

### Section Placement

The Events section should be placed on the homepage in a logical position:

**Recommended Placement:** After "Volunteer with Us" and before "Support Free For Charity"

Rationale:

- Events are related to volunteering and engagement
- Placing near volunteer section encourages participation
- Maintains flow from calls to action to informational content

**Homepage Section Order (with Events):**

```
1. Hero
2. Mission
3. Results 2023
4. Testimonials
5. Volunteer with Us
6. Events (NEW)
7. Support Free For Charity
8. Endowment Features
9. Our Programs
10. FAQ
11. Team
```

### Visual Design

#### Section Styling

- **Container:** Consistent with other homepage sections
- **Width:** `w-[90%] mx-auto` or `max-w-7xl mx-auto`
- **Padding:** `py-[52px]` (consistent with other sections)
- **Background:** White or light background to distinguish from other sections

#### Typography

- **Section Heading:**
  - Font: Faustina (consistent with "Our Programs", etc.)
  - Size: `text-[40px] lg:text-[48px]`
  - Weight: `font-[400]`
  - Alignment: `text-center`
  - Margin: `mb-[50px]`

- **Subheading/Description (optional):**
  - Font: Lato
  - Size: `text-[25px]`
  - Weight: `font-[500]`

#### Widget Styling

- **Width:** Responsive, full width on mobile, max 600px on desktop
- **Height:** 500-700px (enough to show 2-3 events)
- **Alignment:** Center-aligned
- **Border/Shadow:** Optional subtle shadow or border to distinguish widget
- **Mobile Responsiveness:** Adjust width and height for mobile screens

#### Consent Placeholder

When user has not consented to marketing cookies:

```tsx
<div className="text-center py-12 px-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
  <h3 className="text-2xl font-semibold mb-4">Upcoming Events</h3>
  <p className="text-lg text-gray-600 mb-6">
    To view our upcoming Facebook events, please accept marketing and social media cookies.
  </p>
  <button
    onClick={openCookieSettings}
    className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
  >
    Manage Cookie Preferences
  </button>
</div>
```

### Accessibility

- **Section ID:** `id="events"` for navigation anchor links
- **Semantic HTML:** Use proper heading hierarchy (h1 or h2 for section title)
- **ARIA Labels:** Add `aria-label` to Facebook widget for screen readers
- **Keyboard Navigation:** Ensure all interactive elements are keyboard accessible
- **Focus Management:** Proper focus indicators for all clickable elements

## Implementation Considerations

### Performance

1. **Lazy Loading**
   - Consider loading Facebook SDK only when Events section is in viewport
   - Use Intersection Observer API for scroll-based loading
   - Initial page load should not be blocked by Facebook SDK

2. **Script Loading**
   - Load Facebook SDK `async` and `defer`
   - Don't block rendering or interactivity
   - Maintain Lighthouse performance scores (currently 95+)

3. **Caching**
   - Facebook plugin caches events automatically
   - No additional caching logic needed for Page Plugin approach
   - For Graph API approach, implement caching to reduce API calls

### Error Handling

1. **Facebook SDK Load Failure**
   - Detect when Facebook SDK fails to load (ad blockers, network issues)
   - Show fallback message with link to Facebook page
   - Example: "Unable to load events. [View events on Facebook](link)"

2. **No Upcoming Events**
   - Facebook plugin handles this automatically
   - Shows "No upcoming events" message
   - Consider showing past events or a message about checking back later

3. **Consent Not Given**
   - Show clear placeholder as described in Design Requirements
   - Provide easy way to give consent without page reload

### Build and Deployment

1. **Static Site Compatibility**
   - Facebook Page Plugin is fully compatible with static sites
   - No server-side rendering or API routes needed
   - Works with `output: "export"` in Next.js config

2. **Environment Variables** (if using Graph API)
   - `NEXT_PUBLIC_FACEBOOK_PAGE_ID` - Page ID
   - `FACEBOOK_ACCESS_TOKEN` - Server-side only, not exposed to client
   - Store securely in GitHub Secrets and Cloudflare environment

3. **Build Process**
   - No changes to existing build process
   - No impact on `npm run build` timing
   - Works with GitHub Pages deployment

### SEO Considerations

1. **Content Visibility**
   - Facebook plugin content may not be crawlable by search engines (iframe)
   - Consider adding schema.org Event markup for upcoming events
   - Add section description text that search engines can index

2. **Section Title and Description**
   - Include keyword-rich heading: "Upcoming Events and Volunteer Opportunities"
   - Add descriptive paragraph above widget for SEO value

3. **Link to Facebook Page**
   - Provide text link to Facebook page for crawlers: "View all events on our [Facebook page](link)"
   - Use `rel="noopener noreferrer"` for external link

## Testing Requirements

### Unit Tests

Not applicable for Facebook Page Plugin approach (external widget).

For Graph API approach:

- Test API response parsing
- Test error handling
- Test loading states
- Test empty states

### Integration Tests (Playwright)

Create `tests/facebook-events.spec.ts`:

```typescript
import { test, expect } from '@playwright/test'

test.describe('Facebook Events Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should show events section with heading', async ({ page }) => {
    // Scroll to events section
    await page.locator('#events').scrollIntoViewIfNeeded()

    // Verify section exists
    await expect(page.locator('#events')).toBeVisible()

    // Verify heading
    await expect(page.locator('#events h1, #events h2')).toBeVisible()
  })

  test('should show consent placeholder when cookies not accepted', async ({ page }) => {
    // Reject cookies first
    await page.locator('[data-testid="cookie-reject"]').click()

    // Scroll to events section
    await page.locator('#events').scrollIntoViewIfNeeded()

    // Verify placeholder is shown
    await expect(page.locator('#events [data-testid="events-consent-required"]')).toBeVisible()
  })

  test('should load Facebook widget after accepting cookies', async ({ page }) => {
    // Accept marketing cookies
    await page.locator('[data-testid="cookie-accept"]').click()

    // Scroll to events section
    await page.locator('#events').scrollIntoViewIfNeeded()

    // Wait for Facebook SDK to load
    await page.waitForSelector('.fb-page iframe', { timeout: 10000 })

    // Verify Facebook iframe is present
    await expect(page.locator('.fb-page iframe')).toBeVisible()
  })

  test('should be accessible', async ({ page }) => {
    await page.locator('#events').scrollIntoViewIfNeeded()

    // Check for proper heading hierarchy
    const heading = page.locator('#events h1, #events h2')
    await expect(heading).toBeVisible()

    // Verify section has accessible name
    const section = page.locator('#events')
    await expect(section).toHaveAttribute('id', 'events')
  })

  test('should link to Facebook page', async ({ page }) => {
    await page.locator('#events').scrollIntoViewIfNeeded()

    // Find link to Facebook page
    const fbLink = page.locator('#events a[href*="facebook.com/freeforcharity"]')
    await expect(fbLink).toBeVisible()

    // Verify link opens in new tab
    await expect(fbLink).toHaveAttribute('target', '_blank')
    await expect(fbLink).toHaveAttribute('rel', /noopener/)
  })
})
```

### Manual Testing Checklist

- [ ] Events section appears in correct position on homepage
- [ ] Section heading is properly styled and visible
- [ ] Placeholder shows when cookies not accepted
- [ ] Facebook widget loads after accepting marketing cookies
- [ ] Events are visible and properly formatted
- [ ] Widget is responsive on mobile (320px), tablet (768px), desktop (1024px+)
- [ ] RSVP links work correctly (open Facebook)
- [ ] Section is keyboard accessible (tab navigation works)
- [ ] Screen reader announces section and content properly
- [ ] Performance: Page load time is not significantly impacted
- [ ] Privacy: Facebook SDK only loads with consent
- [ ] Error handling: Graceful fallback if Facebook SDK fails
- [ ] Cross-browser: Works in Chrome, Firefox, Safari, Edge

### Performance Testing

Run Lighthouse before and after implementation:

```bash
npm run build
npm run preview
# In another terminal
npm run lighthouse
```

**Acceptance Criteria:**

- Performance score: Maintain 95+ (currently 97)
- Accessibility score: Maintain 100
- Best Practices score: Maintain 95+
- SEO score: Maintain 100

If scores drop significantly, investigate lazy loading or defer Facebook SDK loading.

## Implementation Timeline

### Phase 1: Basic Integration (Recommended for MVP)

**Estimated Time:** 4-6 hours

1. Create Events section component (1 hour)
2. Integrate with cookie consent system (1-2 hours)
3. Update privacy and cookie policies (1 hour)
4. Add Playwright tests (1 hour)
5. Manual testing and refinement (1-2 hours)

**Deliverables:**

- Events section on homepage with Facebook Page Plugin
- Cookie consent integration
- Updated privacy documentation
- Automated tests

### Phase 2: Enhanced Customization (Optional/Future)

**Estimated Time:** 16-20 hours

1. Set up Facebook Developer app and get credentials (2 hours)
2. Implement Graph API integration (4-6 hours)
3. Build custom event card components (3-4 hours)
4. Implement caching and token refresh (3-4 hours)
5. Comprehensive testing (2-3 hours)
6. Documentation updates (2 hours)

**Deliverables:**

- Custom-designed events display
- Full control over event presentation
- Optimized performance with caching
- Graph API integration documentation

## Next Steps

1. Review and approve this requirements document
2. See `FACEBOOK_EVENTS_SETUP.md` for step-by-step implementation guide
3. Decide on Phase 1 (Page Plugin) vs Phase 2 (Graph API) approach
4. Assign developer resources and timeline
5. Schedule review of privacy policy updates with legal/compliance team (if applicable)

## References

- [Facebook Page Plugin Documentation](https://developers.facebook.com/docs/plugins/page-plugin/)
- [Facebook Graph API - Events](https://developers.facebook.com/docs/graph-api/reference/event/)
- [GDPR and Social Media Widgets](https://gdpr.eu/cookies/)
- [Existing Cookie Consent Implementation](src/components/cookie-consent/index.tsx)
- [Meta Pixel Privacy Policy](https://www.facebook.com/privacy/policy/)

---

**Document Status:** ✅ Complete - Ready for Review

**Last Reviewed By:** GitHub Copilot Agent

**Next Review Date:** After implementation completion
