# GitHub Pages Deployment Guide

## Initial Setup (One-time)

### 1. Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `julianlopez-site` (or your preferred name)
3. Set to **Public** (required for free GitHub Pages)
4. Don't initialize with README (we'll push existing code)
5. Click "Create repository"

### 2. Configure Repository Settings
1. Go to repository **Settings** → **Pages**
2. Source: Select **GitHub Actions**
3. Custom domain: Enter `julianlopez.site`
4. Enforce HTTPS: Enable it (auto-enabled after domain verification)

### 3. DNS Configuration
For custom domain `julianlopez.site`, add these DNS records:

**A Records:**
```
julianlopez.site     A     185.199.108.153
julianlopez.site     A     185.199.109.153
julianlopez.site     A     185.199.110.153
julianlopez.site     A     185.199.111.153
```

**CNAME Record:**
```
www.julianlopez.site  CNAME  julianlopez.github.io
```

## Deployment Steps

### First Time Setup
```bash
cd "H:\Vibes\Authority website-Julian\01_Active_Projects\authority_hub"
git init
git add .
git commit -m "Initial commit - Agent-first Authority Hub"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/julianlopez-site.git
git push -u origin main
```

### Ongoing Deployments
After any code changes:
```bash
cd "H:\Vibes\Authority website-Julian\01_Active_Projects\authority_hub"
git add .
git commit -m "Your commit message"
git push
```

The GitHub Actions workflow will automatically:
- Build your Next.js site
- Deploy to GitHub Pages
- Make it available at https://julianlopez.site

## Features Included

✅ **Automated Deployment** - Every push to main branch triggers deployment
✅ **SEO Optimization** - All AEO features maintained
✅ **HTTPS** - Automatic SSL certificate
✅ **CDN Delivery** - Fast global content distribution
✅ **Custom Domain** - julianlopez.site configured
✅ **View Toggle** - Agent-first dual-view system preserved

## Troubleshooting

### Build Fails
- Check GitHub Actions tab in repository
- Review error logs in workflow runs
- Ensure `npm run build` works locally

### Domain Not Resolving
- Verify DNS records are correct
- Wait up to 24 hours for DNS propagation
- Check GitHub Pages settings for domain verification

### View Toggle Not Working
- Ensure `/view-toggle.js` is in the build output
- Check browser console for JavaScript errors
- Verify both views exist in the HTML

## Monitoring Your Deployment

1. **Actions Tab** - Watch deployment progress
2. **Pages Tab** - View deployment status and logs
3. **Analytics** - Use GitHub Pages insights or add Google Analytics

## Next Steps

After successful deployment:
1. Test all pages and functionality
2. Verify SEO and AEO features work
3. Check mobile responsiveness
4. Validate custom domain SSL
5. Set up analytics if needed

**Your site will be live at: https://julianlopez.site**