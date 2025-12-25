# Deployment Guide

This guide will help you deploy your Cigar and Smoke Shop website to production.

## Pre-Deployment Checklist

- [ ] All images added to `public/images/`
- [ ] Site content updated in `data/siteConfig.json`
- [ ] Environment variables configured (`.env.local`)
- [ ] Contact form email service set up
- [ ] Google Maps API key obtained
- [ ] Domain name purchased (if needed)
- [ ] SSL certificate (automatically provided by most hosts)

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is created by the Next.js team and provides the best experience.

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Add environment variables in the Vercel dashboard
   - Click "Deploy"

3. **Add Environment Variables in Vercel:**
   - Go to Project Settings > Environment Variables
   - Add all variables from `.env.example`
   - Redeploy if needed

4. **Custom Domain (Optional):**
   - Go to Project Settings > Domains
   - Add your custom domain
   - Update DNS records as instructed

**Free Tier:** Vercel offers a generous free tier perfect for this site.

### Option 2: Netlify

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder or connect GitHub
   - Set build command: `npm run build`
   - Set publish directory: `.next`
   - Add environment variables

### Option 3: AWS Amplify

1. **Push to GitHub**
2. **AWS Amplify Console:**
   - Connect GitHub repository
   - Set build settings:
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm ci
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: .next
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
     ```
   - Add environment variables
   - Deploy

### Option 4: Digital Ocean App Platform

1. **Push to GitHub**
2. **Create App:**
   - Connect repository
   - Select Node.js runtime
   - Build command: `npm run build`
   - Run command: `npm start`
   - Add environment variables

### Option 5: Traditional VPS (Advanced)

For a VPS (DigitalOcean Droplet, AWS EC2, Linode, etc.):

1. **Set up server:**
   ```bash
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install PM2 for process management
   sudo npm install -g pm2
   ```

2. **Deploy code:**
   ```bash
   # Clone repository
   git clone YOUR_REPO_URL
   cd cigar-shop
   
   # Install dependencies
   npm install
   
   # Build
   npm run build
   
   # Start with PM2
   pm2 start npm --name "cigar-shop" -- start
   pm2 save
   pm2 startup
   ```

3. **Set up Nginx:**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **SSL with Let's Encrypt:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

## Post-Deployment

### 1. Test Everything
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Contact form sends emails
- [ ] Google Maps displays
- [ ] Mobile navigation works
- [ ] Links work correctly

### 2. SEO Setup

**Google Search Console:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

**Google My Business:**
1. Claim your business listing
2. Verify location
3. Add photos, hours, and information
4. Link to website

### 3. Analytics Setup

**Google Analytics 4:**
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID
3. Add to `.env` as `NEXT_PUBLIC_GA_MEASUREMENT_ID`
4. Redeploy

### 4. Performance Monitoring

Use these tools to monitor performance:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) (in Chrome DevTools)

Target scores:
- Performance: 85+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

### 5. Set Up Monitoring

**Uptime Monitoring:**
- [UptimeRobot](https://uptimerobot.com/) (free)
- [Pingdom](https://www.pingdom.com/)

**Error Tracking:**
- [Sentry](https://sentry.io/) (free tier available)
- Configure in Next.js

## Continuous Deployment

### Automatic Deploys on Git Push

Most platforms (Vercel, Netlify, Amplify) automatically deploy when you push to your main branch:

```bash
# Make changes
git add .
git commit -m "Update store hours"
git push origin main
# Automatically triggers deployment!
```

## Updating Content

To update site content without code changes:

1. Edit `data/siteConfig.json`
2. Commit and push:
   ```bash
   git add data/siteConfig.json
   git commit -m "Update business hours"
   git push
   ```
3. Site automatically redeploys with new content

## Environment Variables Reference

Required for production:

```bash
# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIza...

# Email Service (choose one)
RESEND_API_KEY=re_...
# OR
SENDGRID_API_KEY=SG...

# Contact Email
CONTACT_EMAIL=cigarandsmokeshop@gmail.com

# Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...

# Site URL
NEXT_PUBLIC_SITE_URL=https://cigarandsmokeshop.com
```

## Troubleshooting

### Build Fails
- Check Node.js version (need 18+)
- Clear cache: `rm -rf .next node_modules && npm install`
- Check for TypeScript errors: `npm run build`

### Environment Variables Not Working
- Restart deployment after adding variables
- Check variable names match exactly
- Client-side variables must start with `NEXT_PUBLIC_`

### Images Not Loading
- Verify images exist in `public/images/`
- Check file paths are correct (case-sensitive)
- Ensure images are optimized (< 500KB each)

### Contact Form Not Working
- Verify email API credentials
- Check API route logs
- Test with curl or Postman

## Custom Domain Setup

### DNS Records

Point your domain to your hosting provider:

**For Vercel:**
- A Record: `76.76.21.21`
- CNAME: `cname.vercel-dns.com`

**For Netlify:**
- A Record: `75.2.60.5`
- CNAME: `[site-name].netlify.app`

**For custom servers:**
- A Record: Your server IP

### SSL Certificate

All recommended platforms provide automatic SSL. For custom servers:

```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Backup Strategy

1. **Code:** Backed up in Git/GitHub
2. **Images:** Keep local copies
3. **Database (if added later):** Daily automated backups

## Performance Optimization

1. **Enable CDN** (most platforms include this)
2. **Image optimization:** Already configured in Next.js
3. **Caching:** Configure in `next.config.mjs`
4. **Compression:** Enabled by default in Next.js

## Support

For deployment help:
- Vercel: [vercel.com/support](https://vercel.com/support)
- Netlify: [netlify.com/support](https://netlify.com/support)
- Community: Next.js Discord, Stack Overflow

---

**Congratulations!** Your site should now be live! 🎉

