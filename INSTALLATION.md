# Installation & Verification Guide

## Step 1: Install Node.js

### Windows
1. Download from https://nodejs.org/ (LTS version)
2. Run installer
3. Accept all defaults
4. Restart your computer

### Mac
1. Download from https://nodejs.org/ (LTS version)
2. Run installer
3. Accept all defaults

### Linux
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Verify Installation
Open terminal/command prompt and run:
```bash
node --version
# Should show: v18.x.x or higher

npm --version
# Should show: 9.x.x or higher
```

## Step 2: Install Project Dependencies

### Open Terminal in Project Folder

**Windows:**
1. Open File Explorer
2. Navigate to `cigar-shop` folder
3. Hold Shift + Right-click in the folder
4. Select "Open PowerShell window here"

**Mac:**
1. Open Terminal
2. Type `cd ` (with a space)
3. Drag the `cigar-shop` folder onto Terminal
4. Press Enter

**Linux:**
1. Open Terminal
2. Navigate to project: `cd /path/to/cigar-shop`

### Install Dependencies
```bash
npm install
```

This will take 2-3 minutes. You should see:
- Lots of text scrolling (normal!)
- "added XXX packages"
- No red ERROR messages (warnings are OK)

### Common Installation Issues

#### "npm: command not found"
**Problem:** Node.js not installed or not in PATH
**Solution:** 
1. Reinstall Node.js
2. Restart terminal/computer
3. Try again

#### "Permission denied" (Mac/Linux)
**Problem:** Need admin rights
**Solution:** 
```bash
sudo npm install
```

#### "EACCES" error
**Problem:** npm permissions
**Solution:** 
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

#### Installation hangs
**Problem:** Network issues
**Solution:** 
1. Wait 5 minutes
2. Press Ctrl+C to cancel
3. Try again:
```bash
npm install --verbose
```

## Step 3: Create Environment File

Create a file named `.env.local` in the `cigar-shop` folder:

**Windows:**
1. Right-click in folder
2. New > Text Document
3. Name it `.env.local` (include the dot!)
4. Click "Yes" to warning about file extension

**Mac/Linux:**
```bash
touch .env.local
```

Add this content:
```env
# Google Maps API Key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_KEY_HERE

# Email Service (Resend)
RESEND_API_KEY=YOUR_KEY_HERE
CONTACT_EMAIL=cigarandsmokeshop@gmail.com

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Note:** Replace YOUR_KEY_HERE with actual keys later

## Step 4: Add Images (Optional for Testing)

### Quick Test Without Images
The site will work without images, showing placeholders.

### Add Your Images
Copy images to these locations:

```
public/images/
├── logo.png
├── hero-home.jpg
├── hero-products.jpg
├── hero-about.jpg
├── hero-contact.jpg
├── hero-location.jpg
├── hero-deals.jpg
├── hero-shop.jpg
├── store-front.jpg
├── cigar-history.jpg
├── tobacco-cultivation.jpg
├── cigar-smoking.jpg
├── categories/
│   ├── cigars.jpg
│   ├── vape.jpg
│   └── hookah.jpg
└── brands/
    ├── cohiba.png
    ├── raw.png
    └── ...
```

## Step 5: Start Development Server

```bash
npm run dev
```

You should see:
```
> cigar-and-smoke-shop@1.0.0 dev
> next dev

  ▲ Next.js 14.x.x
  - Local:        http://localhost:3000
  - Network:      http://192.168.x.x:3000

 ✓ Ready in 2.5s
```

## Step 6: Test in Browser

1. Open browser
2. Go to: `http://localhost:3000`
3. You should see your home page!

### Test All Pages
Visit each page:
- ✅ http://localhost:3000 (Home)
- ✅ http://localhost:3000/products
- ✅ http://localhost:3000/about
- ✅ http://localhost:3000/contact
- ✅ http://localhost:3000/location
- ✅ http://localhost:3000/deals
- ✅ http://localhost:3000/shop

### Test Mobile View
1. Press F12 (open DevTools)
2. Click device toolbar icon (or Ctrl+Shift+M)
3. Select iPhone or Android
4. Test navigation

## Step 7: Update Content

Edit `data/siteConfig.json`:

1. Open in text editor (VS Code recommended)
2. Update business info:
   - Phone number
   - Email
   - Address
   - Hours
3. Save file
4. Browser auto-refreshes!

## Step 8: Verify Everything Works

### Checklist
- [ ] Site loads at http://localhost:3000
- [ ] All 7 pages accessible
- [ ] Mobile menu works (hamburger icon)
- [ ] Images display (or placeholders)
- [ ] Contact form displays
- [ ] Footer shows correct info
- [ ] Navigation links work
- [ ] No console errors (F12 > Console)

## Step 9: Build for Production (Test)

```bash
npm run build
```

Should complete with:
```
✓ Compiled successfully
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization
```

Test production build:
```bash
npm start
```

Visit http://localhost:3000 again.

## Step 10: Deploy (When Ready)

See `DEPLOYMENT.md` for detailed instructions.

Quick deploy to Vercel:
1. Push to GitHub
2. Import on vercel.com
3. Deploy!

## Troubleshooting

### Port 3000 Already in Use

**Windows:**
```powershell
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F
```

**Mac/Linux:**
```bash
lsof -ti:3000 | xargs kill
```

Or use a different port:
```bash
npm run dev -- -p 3001
```

### Build Errors

1. **Check Node.js version:**
   ```bash
   node --version
   # Need 18.x or higher
   ```

2. **Clear cache and reinstall:**
   ```bash
   rm -rf .next node_modules package-lock.json
   npm install
   npm run dev
   ```

3. **Check for syntax errors:**
   ```bash
   npm run lint
   ```

### Images Not Loading

1. Check file exists in `public/images/`
2. Check filename matches exactly (case-sensitive)
3. Check path in `siteConfig.json`
4. Restart dev server

### Changes Not Appearing

1. Hard refresh: Ctrl+Shift+R (Cmd+Shift+R on Mac)
2. Clear browser cache
3. Check file saved correctly
4. Restart dev server

### TypeScript Errors

```bash
# Check for errors
npx tsc --noEmit

# If errors persist, delete and rebuild
rm -rf .next
npm run dev
```

## Verification Commands

Run these to verify everything is set up correctly:

```bash
# Check Node.js version (need 18+)
node --version

# Check npm version
npm --version

# Check dependencies installed
ls node_modules

# Check for TypeScript errors
npx tsc --noEmit

# Check for linting issues
npm run lint

# Build for production (should succeed)
npm run build

# Check build output
ls .next
```

## Getting Help

### Before Asking for Help

1. **Check documentation:**
   - START-HERE.md
   - QUICKSTART.md
   - README.md
   - STRUCTURE.md

2. **Common issues:**
   - Did you run `npm install`?
   - Is Node.js version 18 or higher?
   - Did you save your changes?
   - Did you restart the dev server?

3. **Error messages:**
   - Copy the full error message
   - Check terminal/console
   - Google the error message

### Resources

- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs
- TypeScript docs: https://www.typescriptlang.org/docs
- Next.js Discord: https://discord.gg/nextjs

### Contact Support

**Email:** cigarandsmokeshop@gmail.com
**Phone:** 443-755-5141

Include:
- What you're trying to do
- What error you're getting
- What you've already tried
- Screenshots if possible

## Success!

If you can:
- ✅ Run `npm run dev`
- ✅ Visit http://localhost:3000
- ✅ See your home page
- ✅ Navigate between pages
- ✅ Edit `siteConfig.json` and see changes

**You're ready to go!** 🎉

Next steps:
1. Add your images
2. Update all content
3. Set up API keys
4. Deploy to production

---

**Need more help?** Check QUICKSTART.md or DEPLOYMENT.md

