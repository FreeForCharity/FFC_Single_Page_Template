# Template Setup Checklist

Quick reference checklist for setting up a new repository from the FFC Single Page Template.

**For complete instructions, see [TEMPLATE_USAGE.md](./TEMPLATE_USAGE.md)**

---

## Initial Repository Creation

- [ ] Click "Use this template" button on GitHub
- [ ] Create new repository with kebab-case name
- [ ] Add repository description and topics
- [ ] Clone repository locally
- [ ] Run `npm install` to verify dependencies
- [ ] Run `npm run build` to verify build works
- [ ] Run `npm run dev` to test locally

---

## Essential GitHub Settings (Required)

### General Settings (Settings → General)

- [ ] Set repository description
- [ ] Add topics (nextjs, nonprofit, static-site, etc.)
- [ ] Enable Issues
- [ ] Enable Discussions (optional)

### GitHub Pages (Settings → Pages)

- [ ] Source: Deploy from a branch
- [ ] Branch: Select `gh-pages` and `/ (root)`
- [ ] Custom domain (if applicable): Enter domain name
- [ ] Wait for DNS check to complete
- [ ] Enable "Enforce HTTPS" (after DNS configured)

### Actions Permissions (Settings → Actions → General)

- [ ] Allow all actions and reusable workflows
- [ ] Workflow permissions: Read and write permissions
- [ ] Allow GitHub Actions to create and approve pull requests ✅

### Security & Analysis (Settings → Security & Analysis)

- [ ] Enable Dependency graph ✅
- [ ] Enable Dependabot alerts ✅
- [ ] Enable Dependabot security updates ✅
- [ ] Enable Code scanning (CodeQL) - auto-configured by workflow
- [ ] Enable Secret scanning (if available)

---

## Branch Protection Rules (Settings → Rules → Rulesets)

Create ruleset named "Protect Main":

- [ ] Target branches: Include default branch (main)
- [ ] Restrict deletions ✅
- [ ] Require pull request before merging ✅
- [ ] Require status checks to pass:
  - [ ] Test and Build (CI workflow)
  - [ ] Analyze (javascript-typescript)
  - [ ] Analyze (actions)
- [ ] Require branches to be up to date ✅
- [ ] Require signed commits ✅
- [ ] Block force pushes ✅

**Set up commit signing**: https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits

---

## Update Repository Configuration Files

### Update basePath in Workflows

- [ ] Edit `.github/workflows/deploy.yml`
  - In the job that builds the Next.js site (look for the `env` section where `NEXT_PUBLIC_BASE_PATH` is set), change `/FFC_Single_Page_Template` to `/YOUR-REPO-NAME`
- [ ] Edit `.github/workflows/lighthouse.yml`
  - In the job that runs the Lighthouse checks (look for the `env` section where `NEXT_PUBLIC_BASE_PATH` is set), change `/FFC_Single_Page_Template` to `/YOUR-REPO-NAME`
- [ ] OR remove `NEXT_PUBLIC_BASE_PATH` if using custom domain

### Update CODEOWNERS

- [ ] Edit `.github/CODEOWNERS`
- [ ] Replace `@clarkemoyer` with your GitHub usernames/teams

### Update FUNDING.yml (Optional)

- [ ] Edit `.github/FUNDING.yml`
- [ ] Update GitHub Sponsors username
- [ ] Update custom donation links

---

## Customize Content and Branding

### Organization Information

- [ ] Search and replace "Free For Charity" with your org name
- [ ] Search and replace EIN "46-2471893" with your EIN
- [ ] Search and replace "ffcworkingsite1.org" with your domain

### Contact Information

- [ ] Update `src/components/footer/index.tsx` - Footer contact
- [ ] Update `SECURITY.md` - Security contact
- [ ] Update `CODE_OF_CONDUCT.md` - Conduct reporting contact
- [ ] Update `SUPPORT.md` - Support resources

### Branding Assets

- [ ] Replace `/public/logo.svg` with your logo
- [ ] Replace `/public/favicon.ico` with your favicon
- [ ] Update Open Graph images (if present)
- [ ] Update color scheme in `src/app/globals.css`
- [ ] Update fonts in `src/app/layout.tsx` (if needed)

### Content Data

- [ ] Update team members in `src/data/team/`
- [ ] Update team photos in `/public/team/`
- [ ] Update FAQs in `src/data/faqs/`
- [ ] Update testimonials in `src/data/testimonials/`

### Documentation

- [ ] Update `README.md` with your information
- [ ] Update `MAINTAINERS.md` with your maintainers
- [ ] Update `GOVERNANCE.md` for your processes
- [ ] Update `CITATION.cff` with your details
- [ ] Review and customize `CONTRIBUTING.md`

---

## Optional Features

### Lighthouse CI GitHub Integration

- [ ] Create a **fine-grained** or **repository-scoped** GitHub token limited to this repository with the minimal permissions Lighthouse CI needs (for example, read access to contents and pull requests; avoid classic PATs with broad `repo` scope).
- [ ] Add this least-privilege token to repository secrets as `LHCI_GITHUB_APP_TOKEN`
- [ ] Note: This enables PR comments and status checks; without it, Lighthouse runs but only stores results locally

### Preview Deployments

**Option A: Cloudflare Pages (Recommended)**

- [ ] Sign up at pages.cloudflare.com
- [ ] Connect GitHub repository
- [ ] Configure build settings:
  - Framework: Next.js (Static HTML Export)
  - Build command: `npm run build`
  - Output: `out`
- [ ] Enable automatic preview deployments
- [ ] Enable PR comments

**Option B: Vercel**

- [ ] Sign up at vercel.com
- [ ] Import GitHub repository
- [ ] Configure settings (auto-detected for Next.js)
- [ ] Deploy

### Merge Queue

- [ ] Enable merge queue in Settings → Pull Requests
- [ ] Configure maximum queue size (5-10)
- [ ] Set check interval (5 minutes)

---

## Verification Steps

### Test Local Development

- [ ] Run `npm run dev` - Site loads at http://localhost:3000
- [ ] Run `npm run lint` - Only expected warnings (16 total)
- [ ] Run `npm test` - All tests pass
- [ ] Run `npm run build` - Build succeeds
- [ ] Run `npm run preview` - Built site works

### Test GitHub Pages Deployment

- [ ] Push changes to main branch
- [ ] Check Actions tab - CI workflow passes
- [ ] Check Actions tab - Deploy workflow succeeds
- [ ] Visit GitHub Pages URL - Site loads correctly
- [ ] Check custom domain (if configured) - Site loads
- [ ] Verify images load correctly
- [ ] Test navigation and mobile menu

### Verify Security Features

- [ ] Check Security tab - CodeQL scans are running
- [ ] Check Security tab - Dependabot alerts enabled
- [ ] Try pushing unsigned commit - Should be blocked
- [ ] Try pushing directly to main - Should be blocked
- [ ] Open test PR - Branch protection rules enforced

### Verify Dependabot

- [ ] Check Pull Requests - Look for Dependabot PRs
- [ ] Check Insights → Dependency graph → Dependabot
- [ ] Verify alerts appear in Security tab

---

## Post-Setup Tasks

### Documentation Review

- [ ] Read QUICK_START.md for development workflow
- [ ] Read CONTRIBUTING.md for contribution guidelines
- [ ] Read DEPLOYMENT.md for deployment details
- [ ] Read TESTING.md for testing practices
- [ ] Read SECURITY.md for security policies

### Community Setup

- [ ] Announce repository to team members
- [ ] Share contribution guidelines
- [ ] Set up team communication channels
- [ ] Plan first sprint or iteration

### Monitoring Setup

- [ ] Add repository to monitoring dashboard (if applicable)
- [ ] Set up notifications for security alerts
- [ ] Configure PR review notifications
- [ ] Set up deployment notifications

---

## Common Issues and Solutions

### Deployment fails with "Resource not accessible"

✅ **Solution**: Enable "Read and write permissions" and "Allow GitHub Actions to create and approve pull requests" in Settings → Actions → General

### GitHub Pages shows 404

✅ **Solution**:

1. Verify Pages source is `gh-pages` branch
2. Wait 2-5 minutes for propagation
3. Check Actions tab for deployment status
4. Verify `NEXT_PUBLIC_BASE_PATH` matches repo name

### Images don't load on GitHub Pages

✅ **Solution**:

1. Verify `NEXT_PUBLIC_BASE_PATH` is correct in deploy.yml
2. Check images use `assetPath()` helper
3. Rebuild and redeploy

### Commits rejected (unsigned)

✅ **Solution**: Set up GPG commit signing - https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits

### Dependabot PRs not created

✅ **Solution**:

1. Enable Dependabot alerts in Settings → Security & Analysis
2. Enable Dependabot security updates
3. Wait for scheduled run (Mondays 9:00 AM UTC)
4. Check Insights → Dependency graph for errors

---

## Need Help?

- 📖 **Complete Guide**: [TEMPLATE_USAGE.md](./TEMPLATE_USAGE.md)
- 🐛 **Report Issues**: [GitHub Issues](https://github.com/FreeForCharity/FFC_Single_Page_Template/issues)
- 💬 **Ask Questions**: [GitHub Discussions](https://github.com/FreeForCharity/FFC_Single_Page_Template/discussions)
- 📚 **Documentation**: Review all `.md` files in repository root

---

**Last Updated**: 2025-12-19  
**Template Version**: 0.3.0  
**Compatible with**: Next.js 16.0.7, Node.js 20.x
