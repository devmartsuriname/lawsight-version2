# Deployment Guide
## VP Gregory Allan Rusland Website

---

## Deployment Platform

**Primary:** Lovable Hosting (Recommended)  
**Alternative:** Vercel, Netlify, or custom server

---

## Pre-Deployment Checklist

### 1. Code Quality
- [ ] No console errors in production build
- [ ] All images optimized and loading correctly
- [ ] Responsive design verified on all devices
- [ ] SEO meta tags configured
- [ ] Favicon and social share images set

### 2. Performance
- [ ] Lighthouse score > 90
- [ ] All routes load under 3 seconds
- [ ] Images lazy-loaded
- [ ] Unused code removed

### 3. Content
- [ ] All placeholder text replaced
- [ ] Contact information verified
- [ ] Social media links working
- [ ] Legal pages (Privacy, Terms) added

### 4. Security
- [ ] Environment variables configured
- [ ] API keys secured (if backend enabled)
- [ ] HTTPS enforced
- [ ] CORS properly configured

---

## Deployment via Lovable

### Step 1: Click "Publish" Button
Located in top-right of Lovable editor

### Step 2: Choose Deployment Type
- **Staging:** `yoursite.lovable.app`
- **Production:** Connect custom domain

### Step 3: Configure Custom Domain (Optional)
1. Go to Project > Settings > Domains
2. Add your domain: `vprusland.com`
3. Update DNS records:
   ```
   Type: CNAME
   Name: @
   Value: [provided by Lovable]
   ```

### Step 4: Deploy
- Click "Deploy to Production"
- Wait for build to complete (2-5 minutes)
- Verify deployment at your URL

---

## Environment Variables

If backend enabled, configure in Project Settings:

```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

⚠️ **Never commit these to Git!**

---

## Post-Deployment Verification

### Functionality Tests
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Contact form submits (if backend enabled)
- [ ] Newsletter signup works (if backend enabled)
- [ ] Mobile menu functions properly
- [ ] Image carousels work smoothly

### Performance Tests
- [ ] Run Lighthouse audit
- [ ] Check mobile performance
- [ ] Verify image loading
- [ ] Test on slow 3G connection

### Cross-Browser Tests
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## Rollback Procedure

If issues occur after deployment:

1. **Via Lovable:**
   - Go to project history
   - Click "Restore" on previous working version
   - Redeploy

2. **Via Git:**
   ```bash
   git revert HEAD
   git push origin main
   ```

---

## Monitoring & Analytics

### Recommended Tools
- **Google Analytics 4** - Traffic & user behavior
- **Google Search Console** - SEO monitoring
- **Sentry** - Error tracking (optional)
- **Cloudflare** - CDN & DDoS protection (optional)

### Setup Instructions
Add GA4 script to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## Continuous Deployment

### Automatic Deploys (GitHub Integration)
1. Connect GitHub to Lovable
2. Push to `main` branch triggers auto-deploy
3. Pull requests create preview deployments

### Manual Deploys
- Use "Publish" button in Lovable editor
- Deploys current state immediately

---

## SSL/HTTPS

- ✅ Automatically enabled on Lovable hosting
- ✅ Free SSL certificates
- ✅ Auto-renewal handled

---

## Backup Strategy

### Code Backups
- Git repository (primary)
- Lovable project history (secondary)
- Local clones (tertiary)

### Database Backups (When Backend Enabled)
- Supabase automatic daily backups
- Manual exports before major changes
- Point-in-time recovery available

---

## Domain Configuration

### DNS Records Example
```
# Root domain
Type: CNAME
Name: @
Value: cname.lovable.app

# www subdomain
Type: CNAME  
Name: www
Value: cname.lovable.app

# Email (if applicable)
Type: MX
Priority: 10
Value: [your email provider]
```

### Propagation Time
DNS changes can take 24-48 hours to fully propagate globally.

---

## Troubleshooting

### Common Issues

**Issue:** Images not loading  
**Solution:** Check file paths, ensure images in `/public/` directory

**Issue:** 404 on refresh  
**Solution:** Configure server for SPA routing (handled by Lovable)

**Issue:** Slow load times  
**Solution:** Optimize images, enable lazy loading, check network requests

**Issue:** Mobile menu not working  
**Solution:** Verify jQuery scripts loaded, check console for errors

---

## Support Resources

- [Lovable Documentation](https://docs.lovable.dev)
- [Lovable Discord Community](https://discord.gg/lovable)
- Project-specific issues: Contact development team

---

**Last Updated:** 2025-01-09
