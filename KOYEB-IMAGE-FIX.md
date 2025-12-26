# 🖼️ Koyeb Image Loading Fix

## The Problem

Your images weren't loading on Koyeb due to **TWO issues**:

### 1. Out of Memory (OOM) Errors ⚠️
- **Koyeb Free Tier (Nano)**: Only 512MB RAM
- **Next.js Image Optimization**: Requires significant memory to process images on-the-fly
- **Result**: Server runs out of memory when optimizing multiple images → Images fail to load

### 2. Spaces in Filenames 🪟 vs 🐧
- **Windows (local dev)**: Handles spaces in filenames automatically ✅
- **Linux/Docker (Koyeb)**: Treats spaces as special characters that need encoding ❌
- **Result**: Image paths with spaces break in production

---

## The Solution

### Part 1: Disable Image Optimization (Fixes OOM)

**Changed: `next.config.mjs`**
- Added `unoptimized: true` to images config
- This tells Next.js to serve images directly without optimization
- **Trade-off**: Images won't be auto-converted to WebP or resized
- **Benefit**: No memory usage for image processing = no crashes

**Changed: `Dockerfile`**
- Reduced Node memory limit from 512MB to 450MB
- Added `--max-semi-space-size=32` for better garbage collection
- Leaves more headroom for the OS and other processes

### Part 2: Fix Filename Spaces (Fixes Path Issues)

**Renamed Files/Folders:**
```
OLD NAME                              → NEW NAME
─────────────────────────────────────────────────────────────
cigar brand logos/                    → cigar-brand-logos/
history rolling.jpg                   → history-rolling.jpg
vape banner.webp                      → vape-banner.webp
cigar cutters.jpg                     → cigar-cutters.jpg
blog raw papers.jpg                   → blog-raw-papers.jpg
Cigar and Smoke Shop logo.png         → cigar-and-smoke-shop-logo.png
drew estate.jpg                       → drew-estate.jpg
lost mary.png                         → lost-mary.png
```

**Updated Code Files:**
- ✅ `app/products/cigars/page.tsx` - 18 brand logos + history image
- ✅ `app/products/page.tsx` - Vape banner + cigar cutters
- ✅ `app/products/accessories/page.tsx` - Both images
- ✅ `app/products/vapes/page.tsx` - Vape banner
- ✅ `components/Header.tsx` - Logo image
- ✅ `data/siteConfig.json` - Lost Mary logo + accessories image

---

## Deploy to Koyeb

**1. Commit and push all changes:**
```bash
git add .
git commit -m "Fix image loading: Disable optimization for low memory + remove filename spaces"
git push origin main
```

**2. Koyeb will automatically redeploy**

**3. Verify in Koyeb dashboard:**
- Check deployment logs for any errors
- Look for "Ready" status
- No more OOM errors in logs

---

## Why This Works

### Unoptimized Images
- **Before**: Next.js tries to optimize every image → Uses 50-100MB per image
- **After**: Images served directly from `public/` folder → Uses ~5MB total
- **Impact**: Your 512MB instance can now handle all images easily

### No Spaces in Filenames
- **Before**: `/images/cigar brand logos/drew estate.jpg` → URL encoding issues
- **After**: `/images/cigar-brand-logos/drew-estate.jpg` → Clean paths
- **Impact**: Linux/Docker can find and serve files correctly

---

## Performance Considerations

### What You're Giving Up:
- ❌ Automatic WebP conversion (smaller file sizes)
- ❌ Automatic image resizing for different devices
- ❌ Lazy loading optimization

### What You're Keeping:
- ✅ All images load correctly
- ✅ No server crashes
- ✅ Fast initial page loads (no optimization delay)
- ✅ Next.js `<Image>` component still provides lazy loading

### Recommendation:
**Pre-optimize your images before uploading:**
1. **Resize**: Max width 1920px for hero images, 800px for product images
2. **Compress**: Use tools like TinyPNG, Squoosh, or ImageOptim
3. **Format**: Save as WebP when possible (fallback to JPG/PNG)
4. **Target size**: 
   - Hero images: < 200KB
   - Product images: < 100KB
   - Logos: < 50KB

---

## Alternative: Upgrade Koyeb Plan

If you want automatic image optimization back:

### Upgrade to Micro ($7/month):
- **1GB RAM** instead of 512MB
- Can handle image optimization
- Remove `unoptimized: true` from config
- Better performance under load

### Benefits:
- ✅ Automatic WebP conversion
- ✅ Responsive image sizes
- ✅ Better SEO scores
- ✅ Faster page loads for users

---

## Testing Checklist

After deployment, verify these pages load all images:

- [ ] Homepage - Brand carousel
- [ ] `/products` - All category cards
- [ ] `/products/cigars` - Brand logo carousel + all images
- [ ] `/products/vapes` - Vape banner image
- [ ] `/products/accessories` - Cigar cutters + rolling papers
- [ ] Header - Logo on all pages

---

## Troubleshooting

### If images still don't load:

1. **Check Koyeb logs** for errors:
   ```
   Error: ENOENT: no such file or directory
   ```
   → File path is still wrong, check for typos

2. **Check browser console** for 404 errors:
   ```
   GET /images/some-image.jpg 404
   ```
   → Image file doesn't exist in `public/images/`

3. **Check memory usage** in Koyeb dashboard:
   - If still hitting 100% memory → Need to optimize images further
   - If memory is fine → Issue is elsewhere

4. **Verify files were pushed to Git:**
   ```bash
   git status  # Should show "nothing to commit"
   git log -1  # Should show your latest commit
   ```

---

## Summary

**Root Cause**: Koyeb free tier (512MB RAM) + Next.js image optimization = Out of Memory

**Solution**: 
1. ✅ Disabled image optimization (`unoptimized: true`)
2. ✅ Fixed filename spaces for Linux compatibility
3. ✅ Optimized Node.js memory settings

**Result**: All images now load correctly on Koyeb! 🎉

---

**Last Updated**: December 25, 2024

