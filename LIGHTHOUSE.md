# Lighthouse CI - Performance Monitoring

This document explains how to use Lighthouse CI to monitor the performance, accessibility, SEO, and best practices of the Free For Charity website.

## Table of Contents

1. [Overview](#overview)
2. [What is Lighthouse?](#what-is-lighthouse)
3. [Automated Audits](#automated-audits)
4. [Running Lighthouse Locally](#running-lighthouse-locally)
5. [Understanding Lighthouse Reports](#understanding-lighthouse-reports)
6. [Performance Optimization Tips](#performance-optimization-tips)
7. [Troubleshooting](#troubleshooting)

---

## Overview

Lighthouse CI is integrated into our CI/CD pipeline to automatically audit the website's quality after each deployment. It measures:

- **Performance**: Loading speed and runtime performance
- **Accessibility**: WCAG compliance and usability for all users
- **Best Practices**: Security, modern web standards, and code quality
- **SEO**: Search engine optimization and discoverability

### Current Thresholds

Our Lighthouse CI is configured with the following warning thresholds:

| Category | Threshold | Priority |
|----------|-----------|----------|
| **Performance** | 60% | Medium |
| **Accessibility** | 80% | High |
| **Best Practices** | 80% | High |
| **SEO** | 90% | High |

These are **warning** levels, not hard failures. They help identify areas for improvement without blocking deployments.

---

## What is Lighthouse?

Lighthouse is an open-source, automated tool developed by Google for improving the quality of web pages. It audits:

### Performance Metrics

- **First Contentful Paint (FCP)**: When the first text or image appears
- **Largest Contentful Paint (LCP)**: When the largest element appears
- **Time to Interactive (TTI)**: When the page becomes fully interactive
- **Speed Index**: How quickly content is visually displayed
- **Total Blocking Time (TBT)**: Time between FCP and TTI
- **Cumulative Layout Shift (CLS)**: Visual stability during loading

### Accessibility Checks

- Color contrast ratios
- ARIA attributes
- Form labels
- Alt text for images
- Keyboard navigation
- Screen reader compatibility

### SEO Checks

- Meta descriptions
- Title tags
- Crawlability
- Mobile-friendliness
- Structured data

### Best Practices

- HTTPS usage
- Console errors
- Image optimization
- Security vulnerabilities
- Modern JavaScript practices

---

## Automated Audits

### When Audits Run

Lighthouse CI runs automatically:

1. **After successful deployment** to the main branch
2. **On manual trigger** from the Actions tab
3. **Multiple runs per page** (3 runs) to get median scores

### Viewing CI Results

#### In GitHub Actions

1. Go to the **Actions** tab in the repository
2. Look for **"Lighthouse CI"** workflow runs
3. Click on a workflow run to see the summary
4. Download artifacts to view detailed HTML reports

#### Downloading Reports

1. In the workflow run, scroll to the **Artifacts** section
2. Download **"lighthouse-reports"** artifact
3. Extract the ZIP file
4. Open HTML files in your browser to view detailed reports

### Configuration File

The Lighthouse CI configuration is in `lighthouserc.json`:

```json
{
  "ci": {
    "collect": {
      "staticDistDir": "./out",
      "url": [
        "http://localhost/index.html",
        "http://localhost/about-us/index.html",
        "http://localhost/donate/index.html",
        "http://localhost/volunteer/index.html",
        "http://localhost/help-for-charities/index.html"
      ],
      "numberOfRuns": 3
    }
  }
}
```

You can add more pages to audit by adding URLs to the `url` array.

---

## Running Lighthouse Locally

### Prerequisites

- Node.js 20.x installed
- Site built and ready to serve

### Quick Start

```bash
# Build the site
npm run build

# Install Lighthouse CI globally (if not already installed)
npm install -g @lhci/cli

# Run Lighthouse CI
lhci autorun
```

### Running on Specific Pages

To audit specific pages only:

```bash
# Edit lighthouserc.json to include only the pages you want
# Then run
lhci autorun
```

### Using Chrome DevTools

For interactive audits with recommendations:

1. Open the site in Chrome/Edge
2. Open DevTools (F12)
3. Go to the **Lighthouse** tab
4. Select categories to audit
5. Click **"Analyze page load"**
6. Review the report and recommendations

### Viewing Local Reports

After running `lhci autorun`, reports are saved to `.lighthouseci/` directory:

```bash
# Open a report in your browser
open .lighthouseci/*.html  # macOS
xdg-open .lighthouseci/*.html  # Linux
start .lighthouseci/*.html  # Windows
```

---

## Understanding Lighthouse Reports

### Reading the Summary

Each report shows:

- **Overall Score**: 0-100 for each category
- **Metrics Table**: Detailed performance timings
- **Opportunities**: Suggestions to improve performance
- **Diagnostics**: Additional information about the page
- **Passed Audits**: Things you're doing well

### Score Ranges

| Score | Rating | Color | Meaning |
|-------|--------|-------|---------|
| 90-100 | Good | Green | Excellent performance |
| 50-89 | Needs Improvement | Orange | Some issues to address |
| 0-49 | Poor | Red | Significant problems |

### Key Performance Metrics

#### First Contentful Paint (FCP)
- **Good**: < 1.8s
- **Needs Improvement**: 1.8s - 3.0s
- **Poor**: > 3.0s

#### Largest Contentful Paint (LCP)
- **Good**: < 2.5s
- **Needs Improvement**: 2.5s - 4.0s
- **Poor**: > 4.0s

#### Cumulative Layout Shift (CLS)
- **Good**: < 0.1
- **Needs Improvement**: 0.1 - 0.25
- **Poor**: > 0.25

#### Time to Interactive (TTI)
- **Good**: < 3.8s
- **Needs Improvement**: 3.8s - 7.3s
- **Poor**: > 7.3s

---

## Performance Optimization Tips

### Image Optimization

1. **Use WebP format** where possible
2. **Properly size images** - don't load 2000px images for 200px display
3. **Lazy load images** below the fold
4. **Add width and height attributes** to prevent layout shift

```tsx
// Good
<img 
  src="/images/hero.webp" 
  alt="Hero" 
  width={1200} 
  height={600}
  loading="lazy"
/>
```

### JavaScript Optimization

1. **Code splitting**: Load only what's needed for each page
2. **Tree shaking**: Remove unused code
3. **Minimize third-party scripts**: Each script adds overhead
4. **Defer non-critical scripts**: Use `defer` or `async` attributes

### CSS Optimization

1. **Remove unused CSS**: Use PurgeCSS or Tailwind's purge feature
2. **Critical CSS**: Inline critical styles
3. **Minimize render-blocking CSS**: Load CSS efficiently

### Caching and Compression

1. **Enable caching** for static assets
2. **Use Brotli/Gzip compression** for text assets
3. **Set appropriate cache headers**

### Accessibility Improvements

1. **Add alt text** to all images
2. **Use semantic HTML** (`<header>`, `<nav>`, `<main>`, `<footer>`)
3. **Ensure sufficient color contrast** (4.5:1 for normal text)
4. **Make interactive elements keyboard accessible**
5. **Add ARIA labels** where needed

### SEO Improvements

1. **Add meta descriptions** to all pages
2. **Use descriptive title tags**
3. **Include structured data** (JSON-LD)
4. **Ensure mobile responsiveness**
5. **Fix broken links**

---

## Troubleshooting

### Lighthouse CI Fails to Run

**Issue**: Workflow fails with "Cannot connect to Chrome"

**Solution**: 
- This usually resolves itself on retry
- Ensure the build step completed successfully
- Check that the `./out` directory exists

### Inconsistent Scores

**Issue**: Scores vary significantly between runs

**Causes**:
- Network conditions
- Server load
- Background processes

**Solution**:
- Lighthouse runs 3 times and takes the median score
- Focus on trends, not individual run variations
- Run locally on a quiet system for consistent results

### Low Performance Scores

**Common Causes**:
1. Large images not optimized
2. Too many third-party scripts
3. Render-blocking resources
4. No caching headers
5. Unminified JavaScript/CSS

**Actions**:
1. Review the **Opportunities** section in the report
2. Address the top 3 opportunities first
3. Re-run Lighthouse to measure improvement
4. Iterate until scores improve

### Low Accessibility Scores

**Common Issues**:
1. Missing alt text on images
2. Insufficient color contrast
3. Missing form labels
4. Non-semantic HTML
5. Missing ARIA attributes

**Actions**:
1. Review the **Accessibility** section in detail
2. Use browser extensions like axe DevTools
3. Test with screen readers
4. Fix issues one by one
5. Re-audit to verify fixes

### Reports Not Generated

**Issue**: No HTML reports in artifacts

**Solution**:
1. Check that `lhci autorun` completed without errors
2. Verify the `.lighthouseci` directory exists
3. Check workflow logs for error messages
4. Ensure the upload artifact step ran

---

## Best Practices

### Regular Monitoring

- **Review reports** after each deployment
- **Track trends** over time, not just individual scores
- **Set improvement goals** (e.g., "Improve performance from 70 to 80 over next sprint")
- **Prioritize** high-impact improvements

### Team Collaboration

- **Share reports** with the team
- **Discuss improvements** in code reviews
- **Set performance budgets** for new features
- **Celebrate wins** when scores improve

### Continuous Improvement

- **Start with critical issues** (red/orange scores)
- **Make incremental changes** to avoid regressions
- **Measure impact** of each optimization
- **Document learnings** for future reference

---

## Additional Resources

- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
- [Web.dev Performance Guide](https://web.dev/performance/)
- [Core Web Vitals](https://web.dev/vitals/)
- [Next.js Performance Optimization](https://nextjs.org/docs/app/building-your-application/optimizing)
- [WebPageTest](https://www.webpagetest.org/) - Alternative testing tool

---

## Current Status

**Last Updated**: 2025-12-03

**Pages Monitored**: 5 key pages (Home, About, Donate, Volunteer, Help for Charities)

**Monitoring Frequency**: After each deployment to main branch

**Report Retention**: 30 days in GitHub Actions artifacts

---

**Questions?** Open an issue or contact the maintainers at hello@freeforcharity.org
