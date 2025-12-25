# Cigar and Smoke Shop Website

A modern, responsive website for Cigar and Smoke Shop - Maryland's premier destination for cigars, vapes, and hookah products.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Fully Responsive**: Mobile-first design with hamburger navigation
- **SEO Optimized**: Meta tags, sitemap, robots.txt, and LocalBusiness schema
- **Performance Focused**: Optimized images, fast loading times
- **Easy to Update**: Centralized configuration in JSON file
- **Contact Form**: Built-in contact form with rate limiting and spam protection
- **Google Maps Integration**: Interactive location map
- **Accessible**: WCAG compliant with proper ARIA labels

## 📦 Prerequisites

Before you begin, ensure you have installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**

[Download Node.js](https://nodejs.org/)

## 🛠️ Installation

1. **Navigate to the project directory:**
   ```bash
   cd cigar-shop
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your API keys:
   - Google Maps API key (for location page)
   - Email service credentials (Resend, SendGrid, or SMTP)
   - Google Analytics ID (optional)

## 🎨 Configuration

### Site Content

All site content is managed in `data/siteConfig.json`:

- **Business Information**: Name, address, phone, email, hours
- **Featured Brands**: Logo images and brand names
- **Product Categories**: Names, descriptions, images, and links
- **Deals**: Active promotions and discounts

### Images

Place images in the `public/images/` directory:

```
public/images/
├── logo.png                  # Company logo
├── hero-home.jpg            # Home page hero
├── hero-products.jpg        # Products page hero
├── hero-about.jpg           # About page hero
├── hero-contact.jpg         # Contact page hero
├── hero-location.jpg        # Location page hero
├── hero-deals.jpg           # Deals page hero
├── hero-shop.jpg            # Shop page hero
├── store-front.jpg          # Store photo
├── categories/
│   ├── cigars.jpg
│   ├── vape.jpg
│   └── hookah.jpg
├── brands/
│   ├── cohiba.png
│   ├── raw.png
│   └── ... (other brand logos)
└── ... (other images)
```

## 🚀 Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Building for Production

```bash
npm run build
npm start
```

## 📱 Pages

- **Home** (`/`) - Hero banner, store info, brands, product categories
- **Products** (`/products`) - Detailed product information with sidebar navigation
- **About Us** (`/about`) - Company mission and values
- **Contact** (`/contact`) - Contact form with validation
- **Location** (`/location`) - Interactive map and directions
- **Deals** (`/deals`) - Current promotions and discounts
- **Shop** (`/shop`) - In-store shopping information (e-commerce ready)

## 🔧 Customization

### Update Business Hours

Edit `data/siteConfig.json`:

```json
{
  "businessInfo": {
    "hours": {
      "monday": "11:00 AM - 8:00 PM",
      "tuesday": "11:00 AM - 8:00 PM",
      ...
    }
  }
}
```

### Add/Remove Featured Brands

Edit `data/siteConfig.json`:

```json
{
  "featuredBrands": [
    {
      "id": "brand-id",
      "name": "Brand Name",
      "logo": "/images/brands/logo.png",
      "order": 1
    }
  ]
}
```

### Update Product Categories

Edit `data/siteConfig.json`:

```json
{
  "productCategories": [
    {
      "id": "category-id",
      "name": "Category Name",
      "slug": "category-slug",
      "description": "Category description...",
      "image": "/images/categories/image.jpg",
      "ctaText": "Learn More",
      "ctaLink": "/products#category"
    }
  ]
}
```

## 📧 Contact Form Setup

The contact form requires an email service to function. Choose one:

### Option 1: Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   ```
4. Update `app/api/contact/route.ts` with Resend integration (commented code included)

### Option 2: SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create an API key
3. Add to `.env.local` and update the route handler

### Option 3: SMTP

Configure SMTP settings in `.env.local` and use Nodemailer in the route handler.

## 🗺️ Google Maps Setup

1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com)
2. Enable Maps JavaScript API
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyXXXXXXXXXXXXX
   ```
4. Update the API key in `app/location/page.tsx`

## 📊 Analytics

### Google Analytics 4

1. Create a GA4 property
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
4. Add Google Analytics script to `app/layout.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Add environment variables
4. Deploy!

### Other Platforms

The site can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Any Node.js hosting

## 📝 SEO Checklist

- ✅ Unique meta titles and descriptions for each page
- ✅ LocalBusiness schema markup
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ OpenGraph tags for social sharing
- ✅ Alt text for all images
- ✅ Semantic HTML structure
- ✅ Mobile responsive

## 🔒 Security Features

- Rate limiting on contact form (5 requests/minute per IP)
- Honeypot field for spam prevention
- Input validation and sanitization
- HTTPS enforced in production

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Images not loading
- Check that images exist in `public/images/`
- Verify file paths in `siteConfig.json`
- Check file extensions (.jpg, .png, .webp)

### Contact form not sending
- Verify email service credentials in `.env.local`
- Check API route at `app/api/contact/route.ts`
- Review server logs for errors

### Map not displaying
- Verify Google Maps API key is correct
- Check that Maps JavaScript API is enabled
- Review browser console for errors

## 📄 License

© 2024 Cigar and Smoke Shop. All rights reserved.

## 🤝 Support

For support, email cigarandsmokeshop@gmail.com or call 443-755-5141.

## 🔄 Future Enhancements

- [ ] E-commerce integration (Shopify, Square)
- [ ] Product inventory management
- [ ] Age verification modal
- [ ] Customer reviews system
- [ ] Newsletter signup
- [ ] Blog/news section
- [ ] Multi-language support

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS

