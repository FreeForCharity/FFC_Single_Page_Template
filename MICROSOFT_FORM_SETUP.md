# Microsoft Form Setup

## Overview

The application button now opens a Microsoft Form in a popup modal instead of redirecting to the old cart.php URLs.

## Updating the Microsoft Form URL

**⚠️ IMPORTANT:** The Microsoft Form URL is currently set to a placeholder and **must be updated** before the form will work in production.

The Microsoft Form URL can be configured in two ways:

### Option 1: Update Default in Component (Required for production)

Edit `src/components/ui/ApplicationFormButton.tsx` and replace `YOUR_FORM_ID` with your actual Microsoft Form ID on line 22:

```typescript
const microsoftFormUrl =
  formUrl || 'https://forms.office.com/pages/responsepage.aspx?id=YOUR_ACTUAL_FORM_ID'
```

### Option 2: Pass as Component Prop (Optional - for testing or multiple forms)

```tsx
<ApplicationFormButton formUrl="https://forms.office.com/pages/responsepage.aspx?id=YOUR_FORM_ID" />
```

### How to Get Your Microsoft Form URL

1. Create your Microsoft Form at https://forms.office.com
2. Click "Share" or "Send" to get the form link
3. Copy the full form URL (it should look something like: `https://forms.office.com/pages/responsepage.aspx?id=xxxxx`)
4. Use one of the three methods above to configure it

Example URL:

```
https://forms.office.com/pages/responsepage.aspx?id=dHQyc2FwbGUtaWQtZXhhbXBsZQ
```

## Components Updated

The following components now use the new `ApplicationFormButton`:

1. **Home Page - Our Programs Section**
   - File: `src/components/home-page/Our-Programs/index.tsx`
   - Location: After the program descriptions, in the "Ready to Get Started Now?" section

2. **Help for Charities - Ready to Get Started**
   - File: `src/components/help-for-charities/Ready-to-Get-Started-Now/index.tsx`
   - Used in 501c3 pages

3. **Free Charity Web Hosting - Ready to Get Started**
   - File: `src/components/free-charity-web-hosting/ReadyToGetStarted/index.tsx`
   - Used in hosting pages

## Features

- **Modal Popup**: Opens in a centered modal overlay
- **Close Button**: X button in top-right corner
- **Click Outside to Close**: Click on the dark background to close
- **Body Scroll Lock**: Page scroll is disabled when popup is open
- **Responsive**: Works on mobile and desktop
- **Hover Effect**: Button has hover animation

## Testing

After updating the URL, test the popup by:

1. Running `npm run dev`
2. Navigate to the Programs section on the homepage
3. Click "Apply to Become a Supported Charity"
4. Verify the Microsoft Form loads in the popup
5. Test closing the popup with the X button and by clicking outside

## Old URLs Replaced

The following old application URLs have been removed:

- `https://freeforcharity.org/hub/cart.php?a=confproduct&i=0` (501c3)
- `https://freeforcharity.org/hub/cart.php?a=confproduct&i=1` (Pre-501c3)
- `https://freeforcharity.org/hub/cart.php?a=confproduct&i=8` (Hosting)

All now use a single unified application form.
