# Project File Structure

```
cigar-shop/
├── app/                          # Next.js App Router
│   ├── about/
│   │   └── page.tsx             # About Us page
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Contact form API endpoint
│   ├── contact/
│   │   └── page.tsx             # Contact page
│   ├── deals/
│   │   └── page.tsx             # Deals page
│   ├── location/
│   │   └── page.tsx             # Location page
│   ├── products/
│   │   └── page.tsx             # Products page
│   ├── shop/
│   │   └── page.tsx             # Shop page
│   ├── favicon.ico              # Site favicon
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout (Header/Footer)
│   ├── manifest.json            # PWA manifest
│   ├── page.tsx                 # Home page
│   └── sitemap.ts               # Dynamic sitemap generation
│
├── components/                   # Reusable React components
│   ├── BrandCarousel.tsx        # Featured brands carousel
│   ├── Footer.tsx               # Site footer
│   ├── Header.tsx               # Site header with navigation
│   ├── Hero.tsx                 # Hero banner component
│   └── ProductCategoryCard.tsx  # Product category cards
│
├── data/
│   └── siteConfig.json          # All site content (EDIT THIS!)
│
├── lib/
│   └── analytics.ts             # Analytics helper functions
│
├── public/                       # Static files
│   ├── images/                  # All images
│   │   ├── brands/              # Brand logos
│   │   ├── categories/          # Product category images
│   │   ├── hero-*.jpg           # Hero banner images
│   │   ├── logo.png             # Company logo
│   │   └── README.md            # Image requirements guide
│   └── robots.txt               # SEO robots file
│
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Git ignore rules
├── CONTENT-GUIDE.md             # How to update content
├── DEPLOYMENT.md                # Deployment instructions
├── next.config.mjs              # Next.js configuration
├── package.json                 # Dependencies and scripts
├── postcss.config.mjs           # PostCSS configuration
├── QUICKSTART.md                # Quick start guide
├── README.md                    # Main documentation
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## Key Files to Edit

### 🎯 Most Important (You'll Edit These Often)

1. **`data/siteConfig.json`**
   - Business information (hours, phone, address)
   - Featured brands
   - Product categories
   - Deals and promotions
   - **This is where 90% of content updates happen!**

2. **`public/images/`**
   - Add/replace all website images here
   - Maintain the directory structure

### ⚙️ Configuration (Edit Once During Setup)

3. **`.env.local`** (create this file)
   - API keys (Google Maps, email service)
   - Environment-specific settings

### 📝 Content Pages (Rarely Need Editing)

- `app/page.tsx` - Home page layout
- `app/about/page.tsx` - About page layout
- `app/products/page.tsx` - Products page layout
- `app/contact/page.tsx` - Contact form
- `app/location/page.tsx` - Location/map page
- `app/deals/page.tsx` - Deals page
- `app/shop/page.tsx` - Shop page

### 🎨 Styling (Rarely Need Editing)

- `app/globals.css` - Global styles
- `tailwind.config.ts` - Tailwind customization
- `components/*.tsx` - Component styling

### 🔧 Advanced Configuration (Developer Only)

- `next.config.mjs` - Next.js settings
- `tsconfig.json` - TypeScript settings
- `.eslintrc.json` - Code quality rules
- `app/api/contact/route.ts` - Contact form backend

## File Naming Conventions

- **Pages:** `page.tsx` (Next.js convention)
- **Components:** `PascalCase.tsx` (e.g., `Header.tsx`)
- **Images:** `kebab-case.jpg` (e.g., `hero-home.jpg`)
- **Config files:** `kebab-case.json` (e.g., `siteConfig.json`)

## Where to Find What

| What You Want to Change | File to Edit |
|------------------------|--------------|
| Store hours | `data/siteConfig.json` |
| Phone number | `data/siteConfig.json` |
| Address | `data/siteConfig.json` |
| Featured brands | `data/siteConfig.json` |
| Product descriptions | `data/siteConfig.json` |
| Deals/promotions | `data/siteConfig.json` |
| Logo | `public/images/logo.png` |
| Hero images | `public/images/hero-*.jpg` |
| Navigation links | `components/Header.tsx` |
| Footer content | `components/Footer.tsx` |
| Page layouts | `app/*/page.tsx` |
| Contact form logic | `app/api/contact/route.ts` |
| Site colors | `tailwind.config.ts` |
| Meta tags | `app/layout.tsx` and page files |

## Build Output (Don't Edit)

- `.next/` - Build output (auto-generated)
- `node_modules/` - Dependencies (auto-generated)

These folders are automatically created and should not be edited manually.

## Documentation Files

- **QUICKSTART.md** - Get started in 5 minutes
- **README.md** - Complete technical docs
- **CONTENT-GUIDE.md** - Non-technical content editing
- **DEPLOYMENT.md** - How to deploy
- **STRUCTURE.md** - This file!

---

**Pro Tip:** Bookmark `data/siteConfig.json` - that's where most content updates happen!

