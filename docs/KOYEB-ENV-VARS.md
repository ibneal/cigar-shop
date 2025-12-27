# Koyeb Environment Variables

Copy and paste these into your Koyeb service settings:

## Required Environment Variables

### Memory Optimization
```
NODE_OPTIONS=--max-old-space-size=512
```
Limits Node.js heap to 512MB to prevent OOM errors.

### Disable Telemetry
```
NEXT_TELEMETRY_DISABLED=1
```
Disables Next.js anonymous telemetry to save memory.

### Production Mode
```
NODE_ENV=production
```
Ensures Next.js runs in production mode.

---

## How to Add in Koyeb

1. Go to your Koyeb dashboard
2. Select your service
3. Click **"Settings"**
4. Navigate to **"Environment Variables"**
5. For each variable above:
   - Click **"Add Variable"**
   - Enter the **Name** (left column)
   - Enter the **Value** (right column)
   - Click **"Add"**
6. Click **"Update Service"** at the bottom
7. Wait for automatic redeployment

---

## Build Configuration

Make sure these are set in your Koyeb service:

- **Builder**: Docker or Buildpack
- **Build command**: `npm run build`
- **Run command**: `npm start`
- **Port**: `8000` (or `3000` depending on your config)

---

## Instance Size

**Recommended**: 
- **Free tier**: `nano` (512MB RAM) - should work with optimizations
- **Paid tier**: `micro` (1GB RAM) - recommended for better performance

The optimizations we've added should allow the free `nano` instance to work, but upgrading to `micro` provides better stability and performance.

---

## Verification

After deploying, check the logs. You should see:

✅ **Success indicators:**
```
✓ Starting...
✓ Ready in XXXms
```

❌ **Error indicators (shouldn't see these anymore):**
```
Killed
Application exited with code 137
Instance runs out of memory (OOM)
```

If you still see OOM errors, consider upgrading to `micro` instance or contact support with the KOYEB-DEPLOYMENT.md guide.

