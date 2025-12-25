# Content Management Guide

This guide explains how to update content on your website without coding knowledge.

## Quick Updates

All content is stored in one file: `data/siteConfig.json`

## Updating Business Information

### Change Address
```json
"address": {
  "street": "7000 Arundel Mills Circle",
  "city": "Hanover",
  "state": "MD",
  "zip": "21076",
  "fullAddress": "7000 Arundel Mills Circle, Hanover, MD, 21076, United States",
  "locationHint": "At entrance #3",
  "nearbyLandmarks": "Across \"Book-A-Million\" and \"Suh and Ski Sports\""
}
```

### Change Phone or Email
```json
"contact": {
  "phone": "443-755-5141",
  "email": "cigarandsmokeshop@gmail.com"
}
```

### Update Store Hours
```json
"hours": {
  "monday": "10:00 AM - 8:00 PM",
  "tuesday": "11:00 AM - 8:00 PM",
  "wednesday": "11:00 AM - 8:00 PM",
  "thursday": "11:00 AM - 8:00 PM",
  "friday": "10:00 AM - 9:30 PM",
  "saturday": "10:00 AM - 9:30 PM",
  "sunday": "11:00 AM - 7:00 PM"
}
```

### Update Social Links
```json
"social": {
  "facebook": "https://facebook.com/yourpage",
  "instagram": "https://instagram.com/yourpage"
}
```

### Change Discount Amount
```json
"discount": {
  "text": "10% DISCOUNT STOREWIDE: STUDENTS - MILITARY - POLICE - FIRE/EMS WITH ID",
  "percentage": 5,
  "eligibility": ["Students", "Military", "Police", "Fire/EMS"]
}
```

## Managing Featured Brands

### Add a Brand
1. Add brand logo to `public/images/brands/brandname.png`
2. Add to config:
```json
{
  "id": "brand-id",
  "name": "Brand Name",
  "logo": "/images/brands/brandname.png",
  "order": 8
}
```

### Remove a Brand
Simply delete the brand entry from the `featuredBrands` array.

### Reorder Brands
Change the `order` number (1 = first, 2 = second, etc.)

## Managing Product Categories

### Update Category Description
```json
{
  "id": "cigars",
  "name": "Premium Cigars",
  "slug": "cigars",
  "description": "Your new description here...",
  "image": "/images/categories/cigars.jpg",
  "ctaText": "Learn More",
  "ctaLink": "/products#cigars"
}
```

### Change Category Image
1. Upload new image to `public/images/categories/`
2. Update the `image` path in config

### Change Button Text
Update the `ctaText` field to change what the button says.

## Managing Deals

### Add a New Deal
```json
{
  "id": "new-deal",
  "title": "Summer Sale",
  "description": "20% off all vaporizers this summer!",
  "active": true,
  "image": "/images/deals/summer-sale.jpg",
  "startDate": "2024-06-01",
  "endDate": "2024-08-31"
}
```

### Deactivate a Deal
Change `"active": true` to `"active": false`

### Remove a Deal
Delete the entire deal object from the `deals` array.

## Changing Images

### Hero Images (Page Banners)
Replace files in `public/images/`:
- `hero-home.jpg` - Home page
- `hero-products.jpg` - Products page
- `hero-about.jpg` - About page
- `hero-contact.jpg` - Contact page
- `hero-location.jpg` - Location page
- `hero-deals.jpg` - Deals page
- `hero-shop.jpg` - Shop page

**Image Requirements:**
- Format: JPG or WebP
- Size: 1920px wide minimum
- Keep file names the same (or update references)

### Logo
Replace `public/images/logo.png`
- Format: PNG (transparent background)
- Size: 200x200px recommended

### Category Images
Replace files in `public/images/categories/`:
- `cigars.jpg`
- `vape.jpg`
- `hookah.jpg`

**Image Requirements:**
- Format: JPG or WebP
- Size: 800x800px recommended
- Square aspect ratio works best

## Step-by-Step: Updating Hours

1. Open `data/siteConfig.json` in a text editor
2. Find the `hours` section
3. Change the times:
   ```json
   "monday": "10:00 AM - 9:00 PM"
   ```
4. Save the file
5. If deployed, push changes:
   ```bash
   git add data/siteConfig.json
   git commit -m "Updated store hours"
   git push
   ```

## Step-by-Step: Adding a Featured Brand

1. **Add logo image:**
   - Save logo as PNG to `public/images/brands/`
   - Example: `public/images/brands/newbrand.png`

2. **Update config:**
   Open `data/siteConfig.json` and add to `featuredBrands`:
   ```json
   {
     "id": "newbrand",
     "name": "New Brand",
     "logo": "/images/brands/newbrand.png",
     "order": 8
   }
   ```

3. **Save and deploy**

## Tips

### Editing JSON
- Use a proper code editor (VS Code, Sublime Text)
- Be careful with commas (every item except the last needs a comma)
- Don't use smart quotes (" or ") - use straight quotes (" or ')
- Validate JSON: [jsonlint.com](https://jsonlint.com/)

### Image Optimization
Before uploading images:
1. Resize to appropriate dimensions
2. Compress with [TinyPNG](https://tinypng.com/)
3. Convert to WebP if possible (better compression)

### Testing Changes Locally
```bash
cd cigar-shop
npm run dev
```
Open http://localhost:3000 to preview changes

### Making Changes Live
```bash
git add .
git commit -m "Describe your changes"
git push
```

## Common Tasks Quick Reference

| Task | File to Edit | Section |
|------|-------------|---------|
| Change phone number | `siteConfig.json` | `businessInfo.contact.phone` |
| Update hours | `siteConfig.json` | `businessInfo.hours` |
| Add/remove brand | `siteConfig.json` | `featuredBrands` |
| Change logo | Replace file | `public/images/logo.png` |
| Update hero image | Replace file | `public/images/hero-*.jpg` |
| Add deal | `siteConfig.json` | `deals` |
| Change address | `siteConfig.json` | `businessInfo.address` |

## Getting Help

If you need to make changes that aren't covered here:
1. Check the main README.md
2. Search Next.js documentation
3. Contact your developer
4. Post in Next.js community forums

## Backup Before Editing

Always make a backup copy of `siteConfig.json` before editing:
```bash
cp data/siteConfig.json data/siteConfig.json.backup
```

## Video Tutorials

Consider creating screen recordings of:
- Updating store hours
- Adding a new brand
- Changing hero images
- Activating/deactivating deals

---

**Remember:** Test changes locally before deploying to production!

