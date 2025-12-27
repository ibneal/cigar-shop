# Koyeb Deployment Guide

This guide will help you deploy the Cigar & Smoke Shop website on Koyeb while avoiding common Out Of Memory (OOM) errors.

## Prerequisites

- A [Koyeb account](https://app.koyeb.com/)
- Your repository connected to Koyeb (GitHub, GitLab, or Bitbucket)

## Memory Optimization Setup

This project has been configured with several optimizations to reduce memory usage:

### 1. **Sharp Package** (✅ Already configured)
- The `sharp` package is now included in `package.json`
- This provides highly optimized image processing with ~4x less memory usage
- Next.js will automatically use it for Image Optimization

### 2. **Next.js Configuration** (✅ Already configured)
The `next.config.mjs` has been optimized with:
- WebP image format support (smaller file sizes)
- Optimized device sizes and image sizes
- Package import optimization for `react-icons`
- Compression enabled
- React strict mode enabled

### 3. **Memory Limits** (✅ Already configured)
The start script now includes memory limits:
```json
"start": "NODE_OPTIONS='--max-old-space-size=512' next start"
```

## Deployment Steps

### Step 1: Install Dependencies Locally
Before deploying, make sure to install the new dependencies:

```bash
npm install
```

### Step 2: Commit and Push Changes
```bash
git add .
git commit -m "Add memory optimizations for Koyeb deployment"
git push origin main
```

### Step 3: Configure Koyeb Service

1. **Go to your Koyeb Dashboard**
2. **Select or create your service**
3. **Configure the following settings:**

#### Build Settings:
- **Build command**: `npm run build`
- **Run command**: `npm start`

#### Instance Type:
- **Minimum recommended**: `nano` (512MB RAM) - **FREE tier**
- **Recommended for better performance**: `micro` (1GB RAM)

> ⚠️ **Important**: The free `nano` instance should now work with our optimizations. If you still experience issues, consider upgrading to `micro`.

#### Environment Variables:
Add these in the Koyeb dashboard under "Environment Variables":

| Variable | Value | Description |
|----------|-------|-------------|
| `NODE_OPTIONS` | `--max-old-space-size=512` | Limits Node.js heap to 512MB |
| `NEXT_TELEMETRY_DISABLED` | `1` | Disables Next.js telemetry to save memory |
| `NODE_ENV` | `production` | Ensures production mode |

#### Port Configuration:
- **Port**: `8000` (or `3000` depending on your setup)

### Step 4: Deploy
Click "Deploy" and monitor the deployment logs.

## Troubleshooting

### Still Getting OOM Errors?

If you're still experiencing memory issues, try these additional steps:

#### 1. Upgrade Instance Size
Even though nano should work now, micro (1GB) provides better headroom:
- Go to Service → Settings → Instance
- Change from `nano` to `micro`

#### 2. Optimize Images Further
Consider compressing your images before deployment:

```bash
# Install image optimization tool
npm install -g @squoosh/cli

# Optimize all images in public folder
npx @squoosh/cli --webp auto public/images/**/*.jpg
```

#### 3. Enable Caching
In your Koyeb service settings:
- Enable "Persistent Storage" for the `.next/cache` directory
- This reduces rebuild memory usage

#### 4. Check Build Logs
Look for memory-intensive operations during build:
- Large image processing
- Heavy dependencies
- Multiple concurrent builds

### Monitoring Memory Usage

To monitor your deployment:

1. **Koyeb Metrics**:
   - Go to Service → Metrics
   - Watch "Memory Usage" graph
   - Look for spikes near the limit

2. **Deployment Logs**:
   - Check for warnings about memory
   - Look for "Killed" or exit code 137 (OOM)

## What Changed?

Here's a summary of the optimizations applied:

### package.json
```json
{
  "dependencies": {
    "sharp": "^0.33.5"  // Added for efficient image processing
  },
  "scripts": {
    "start": "NODE_OPTIONS='--max-old-space-size=512' next start"  // Memory limit
  }
}
```

### next.config.mjs
```javascript
{
  images: {
    minimumCacheTTL: 60,
    formats: ['image/webp'],  // Use efficient WebP format
    // Optimized sizes to reduce processing
  },
  experimental: {
    optimizePackageImports: ['react-icons'],  // Reduce bundle size
  },
  compress: true,  // Enable compression
}
```

## Performance Tips

1. **Image Optimization**:
   - Use `.webp` format when possible
   - Compress images before uploading
   - Keep images under 1MB each

2. **Code Optimization**:
   - Use dynamic imports for large components
   - Implement code splitting
   - Remove unused dependencies

3. **Caching**:
   - Leverage Next.js built-in caching
   - Use CDN for static assets
   - Enable browser caching headers

## Support

If you continue to experience issues:

1. Check [Koyeb Status](https://status.koyeb.com/)
2. Review [Koyeb Documentation](https://www.koyeb.com/docs)
3. Contact Koyeb Support through their dashboard

## Additional Resources

- [Next.js Memory Optimization](https://nextjs.org/docs/advanced-features/measuring-performance)
- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [Koyeb Instance Types](https://www.koyeb.com/pricing)

---

**Last Updated**: December 2025
**Next.js Version**: 14.2.0
**Tested Instance**: Koyeb nano (512MB RAM)

