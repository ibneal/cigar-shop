# Cigar and Smoke Shop Website - Quick Start

Welcome! This is your new website for Cigar and Smoke Shop.

## 🚀 Get Started in 5 Minutes

### Step 1: Install Node.js (if not already installed)

**Download and install Node.js from:** https://nodejs.org/

Choose the LTS (Long Term Support) version.

Verify installation:
```bash
node --version
npm --version
```

### Step 2: Install Dependencies

Open your terminal/command prompt, navigate to the `cigar-shop` folder, and run:

```bash
cd cigar-shop
npm install
```

This will install all required packages (may take 2-3 minutes).

### Step 3: Add Your Images

Copy your images to the `public/images/` folder:

**Required images:**
- `logo.png` - Your store logo
- `hero-home.jpg` - Home page banner
- `hero-products.jpg` - Products page banner
- `hero-about.jpg` - About page banner
- `hero-contact.jpg` - Contact page banner
- `hero-location.jpg` - Location page banner
- `hero-deals.jpg` - Deals page banner
- `hero-shop.jpg` - Shop page banner

See `public/images/README.md` for a complete list.

**Don't have images yet?** The site will work with placeholder text. You can add images later.

### Step 4: Start the Development Server

```bash
npm run dev
```

Open your browser and go to: **http://localhost:3000**

You should see your website! 🎉

### Step 5: Customize Content

Edit `data/siteConfig.json` to update:
- Business hours
- Phone number
- Address
- Email
- Featured brands
- Product categories
- Deals

**Example: Change phone number**
```json
"contact": {
  "phone": "443-755-5141",
  "email": "cigarandsmokeshop@gmail.com"
}
```

Save the file, and the website will update automatically!

## 📝 Common Tasks

### Update Store Hours
Edit `data/siteConfig.json` → `businessInfo` → `hours`

### Add a Featured Brand
1. Add logo to `public/images/brands/`
2. Add entry to `featuredBrands` in `siteConfig.json`

### Change Hero Images
Replace images in `public/images/` (keep the same filenames)

See **CONTENT-GUIDE.md** for detailed instructions.

## 🚀 Deploy to Production

### Easiest: Vercel (Free)

1. **Create GitHub account** (if you don't have one): https://github.com
2. **Push your code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```
3. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Sign in with GitHub
   - Click "Import Project"
   - Select your repository
   - Click "Deploy"
   
Your site will be live in 2-3 minutes! 🎉

See **DEPLOYMENT.md** for other deployment options.

## 📧 Set Up Contact Form

The contact form needs an email service to work:

### Option 1: Resend (Easiest - Recommended)

1. Sign up at https://resend.com (free tier available)
2. Get your API key
3. Create `.env.local` file in the `cigar-shop` folder:
   ```
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=cigarandsmokeshop@gmail.com
   ```
4. Restart the dev server

See **README.md** for other email service options.

## 🗺️ Set Up Google Maps

1. Get a Google Maps API key: https://console.cloud.google.com
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
   ```
3. Restart the dev server

## 📱 Pages Included

- **Home** (`/`) - Main landing page
- **Products** (`/products`) - Product catalog
- **About Us** (`/about`) - Company information
- **Contact** (`/contact`) - Contact form
- **Location** (`/location`) - Store location with map
- **Deals** (`/deals`) - Current promotions
- **Shop** (`/shop`) - Shopping information

## 🆘 Troubleshooting

### Port Already in Use
If you see "Port 3000 is already in use":
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

### Images Not Loading
- Check file names (case-sensitive)
- Verify images are in `public/images/`
- Check paths in `siteConfig.json`

### Changes Not Appearing
- Make sure you saved the file
- Refresh browser (Ctrl+R or Cmd+R)
- Check terminal for errors

### npm install Fails
- Delete `node_modules` folder
- Delete `package-lock.json`
- Run `npm install` again

## 📚 Documentation

- **README.md** - Complete technical documentation
- **CONTENT-GUIDE.md** - How to update content (non-technical)
- **DEPLOYMENT.md** - How to deploy to production
- **public/images/README.md** - Image requirements

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Add your images
3. ✅ Update `siteConfig.json` with your information
4. ✅ Test the contact form
5. ✅ Set up Google Maps
6. ✅ Deploy to production
7. ✅ Set up custom domain (optional)
8. ✅ Submit to Google Search Console

## 💡 Tips

- **Test locally first** before deploying
- **Back up `siteConfig.json`** before editing
- **Optimize images** before uploading (use TinyPNG)
- **Use VS Code** as your text editor (free)

## 🤝 Need Help?

- Check the documentation files
- Review the code comments
- Search Next.js documentation: https://nextjs.org/docs
- Ask in Next.js Discord: https://discord.gg/nextjs

## 🎉 You're Ready!

Your website is professional, fast, and easy to maintain. 

**Key Features:**
- ✅ Mobile responsive
- ✅ SEO optimized
- ✅ Fast loading
- ✅ Easy to update
- ✅ Professional design
- ✅ Contact form
- ✅ Google Maps integration
- ✅ All pages complete

---

**Questions?** Review the documentation or contact your developer.

**Happy with the site?** Consider leaving a review! ⭐

