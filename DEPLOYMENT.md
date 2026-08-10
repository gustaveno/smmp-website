# Deployment Guide

## Pre-Deployment Checklist

- [ ] All environment variables set in `.env.local`
- [ ] Run `pnpm build` locally - no errors
- [ ] Test app locally: `pnpm dev`
- [ ] Verify all pages load correctly
- [ ] Test language switching works
- [ ] Admin page accessible at `/[locale]/admin`
- [ ] Created test content in Sanity
- [ ] Images optimize correctly
- [ ] No console errors in browser

## Deploy to Vercel

### 1. Connect GitHub Repository

1. Push code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Click "Import Git Repository"
4. Select your repository
5. Click "Import"

### 2. Configure Project Settings

**Root Directory**: Leave blank (default)

**Build & Dev Settings**:
- Framework: Next.js (auto-detected)
- Build Command: `pnpm run build`
- Output Directory: `.next`

### 3. Set Environment Variables

Click "Environment Variables" and add:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_api_token
```

### 4. Deploy

1. Click "Deploy"
2. Wait for build to complete (3-5 minutes)
3. Site URL appears when ready
4. Visit URL to confirm deployment

## Post-Deployment

### 1. Test Site

- [ ] Home page loads
- [ ] All pages accessible
- [ ] Language switching works
- [ ] Images load correctly
- [ ] Forms work (if any)
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Admin page works

### 2. Setup Custom Domain

1. In Vercel project settings, go to "Domains"
2. Click "Add" and enter your domain
3. Update DNS records with provider (follow Vercel instructions)
4. DNS propagation takes 24-48 hours

### 3. Setup ISR Webhook (Optional)

For automatic page revalidation when content changes:

1. In Sanity dashboard, go to **API** → **Webhooks**
2. Create new webhook:
   - **URL**: `https://yourdomain.com/api/revalidate`
   - **Events**: Select "Create", "Update", "Delete", "Publish"
3. Save webhook
4. Test by publishing content in Sanity

### 4. Verify HTTPS

- All pages should show 🔒 lock icon
- Vercel provides free SSL certificate
- Enable "Automatic HTTPS" in project settings

### 5. Setup Analytics (Optional)

1. Create Google Analytics account
2. Get tracking ID (GA-XXXXXXXXX or G-XXXXXXXXXX)
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=your_tracking_id
   ```
4. Redeploy

## Monitoring

### Vercel Dashboard

- Check build status and logs
- View deployment history
- Monitor performance metrics
- Check error rates

### Google Search Console

1. Add site property
2. Verify ownership
3. Submit sitemap: `https://yourdomain.com/sitemap.xml`
4. Monitor search performance

### Lighthouse

Run Lighthouse audit regularly:
1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Run audit for mobile and desktop
4. Target scores: > 90 for all categories

## Updating Site After Deployment

### When You Update Code

1. Make changes locally
2. Test with `pnpm dev`
3. Commit and push to GitHub
4. Vercel auto-deploys (watch for deployment badge)
5. Site updates automatically

### When Content Editors Update Content

1. Editors make changes in Sanity Studio
2. Content publishes immediately
3. ISR revalidates pages (if webhook configured)
4. Changes visible on site within seconds

### When You Update Translations

1. Update `src/messages/[locale].json`
2. Commit and push
3. Vercel rebuilds automatically
4. New translations appear

## Rollback (Emergency Only)

If something breaks after deployment:

1. Go to Vercel project
2. Click "Deployments"
3. Find previous working deployment
4. Click "..." menu
5. Select "Promote to Production"

Site reverts to previous version instantly.

## Troubleshooting Deployment

### Build Fails

**Error: "Cannot find module X"**
- Ensure all dependencies installed: `pnpm install`
- Check imports are correct
- Verify `.env.local` variables set

**Error: "TypeScript compilation failed"**
- Run `pnpm type-check` locally
- Fix type errors
- Push fix to GitHub

### Site Doesn't Show Content

- Verify `SANITY_API_TOKEN` is valid
- Check `NEXT_PUBLIC_SANITY_PROJECT_ID` matches Sanity
- Confirm Sanity dataset is "production"
- Check ISR webhook URL is correct

### Styles Not Loading

- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R)
- Verify Tailwind CSS compiled correctly
- Check `app/globals.css` is imported

### Images Not Showing

- Verify Sanity image URLs are publicly accessible
- Check remote pattern is configured in `next.config.mjs`
- Ensure images are published in Sanity (not draft)
- Try incognito/private browsing

### Admin Page Gives 404

- URL must include locale: `/id/admin`, not just `/admin`
- Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` is set
- Hard refresh browser cache
- Check browser console for errors

## Performance Optimization

### Check Metrics

View real user metrics in Vercel dashboard:
- **FCP** (First Contentful Paint) - < 1.8s
- **LCP** (Largest Contentful Paint) - < 2.5s
- **CLS** (Cumulative Layout Shift) - < 0.1
- **FID** (First Input Delay) - < 100ms

### Improve Performance

- Optimize images (compress, right size)
- Enable ISR for static pages
- Use dynamic imports for large components
- Minimize JavaScript bundle
- Cache headers properly configured

## Backing Up Content

### Sanity Content

Your content is safely stored in Sanity cloud:
1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Your content persists indefinitely
3. Export data if needed via Sanity API

### Site Configuration

Keep these in version control:
- `.env.example` (not actual tokens)
- All code in Git
- Sanity schemas in `src/sanity/`

## Security Checklist

- [ ] API token never in public code
- [ ] HTTPS enabled (Vercel auto)
- [ ] Security headers configured
- [ ] CORS properly configured
- [ ] Environment variables protected
- [ ] No secrets in Git history
- [ ] Admin routes protected (if needed)

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Sanity Docs**: https://www.sanity.io/docs
- **next-intl Docs**: https://next-intl-docs.vercel.app

---

**Need help?** Check deployment logs in Vercel dashboard or review error messages in browser console.
