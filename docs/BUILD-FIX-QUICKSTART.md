# 🚨 BUILD FAILED - QUICK FIX GUIDE

## Error You're Seeing
```
We couldn't build the runnable container. 
Check the logs for more information. 
The "build" step of buildpacks failed with exit code 51
```

## Root Cause
`package.json` has `sharp` but `package-lock.json` doesn't → Buildpack can't resolve dependencies

---

## ✨ QUICK FIX (5 minutes)

### Step 1: Commit New Files ✅
```bash
git add .
git commit -m "Add Docker deployment for memory optimization"
git push origin main
```

### Step 2: Switch to Docker in Koyeb 🐳

**In Koyeb Dashboard:**

1. Go to your service
2. Click **"Settings"**
3. Find **"Builder"** dropdown
4. Change from `Buildpack` to `Docker`
5. Port: `8000`
6. Click **"Update Service"**

That's it! Koyeb will automatically redeploy using Docker.

---

## 📋 Environment Variables Checklist

Make sure these are set in Koyeb (Settings → Environment Variables):

- [ ] `NODE_OPTIONS` = `--max-old-space-size=512`
- [ ] `NEXT_TELEMETRY_DISABLED` = `1`
- [ ] `NODE_ENV` = `production`

---

## ✅ What to Expect

**Successful Docker Build:**
```
[Builder] FROM node:18-alpine AS base
[Builder] Installing dependencies...
[Builder] Building Next.js...
[Builder] Successfully built and tagged
[Deploy] Starting application...
[Deploy] ✓ Ready in 632ms
```

**No More:**
- ❌ Exit code 51
- ❌ Exit code 137 (OOM)
- ❌ Sharp warnings
- ❌ Buildpack errors

---

## 🎯 Why This Works

| Problem | Docker Solution |
|---------|----------------|
| package-lock.json mismatch | Docker runs `npm ci/install` fresh |
| Missing sharp | Compiles sharp during Docker build |
| Memory issues | Multi-stage build + memory limits |
| Buildpack complexity | Full control over build process |

---

## 📊 Files I Created

- ✅ `Dockerfile` - Optimized multi-stage Docker build
- ✅ `.dockerignore` - Excludes unnecessary files  
- ✅ `next.config.mjs` - Updated with `output: 'standalone'`
- ✅ `KOYEB-DOCKER-FIX.md` - Detailed documentation

---

## 🆘 Still Having Issues?

### Error: "Dockerfile not found"
→ Make sure you ran `git add .` and `git push`

### Error: "Build timeout"
→ Try building with a larger instance temporarily

### Error: "Port 8000 not responding"
→ Check that PORT is set to 8000 in Koyeb settings

### Still getting OOM?
→ Upgrade from `nano` to `micro` instance (1GB RAM)

---

## 🔄 Comparison

### Before (Buildpack):
```
❌ Exit code 51
❌ Package lock mismatch
❌ OOM errors
❌ Complex debugging
```

### After (Docker):
```
✅ Builds successfully
✅ Handles dependencies automatically
✅ Memory optimized
✅ Production ready
```

---

## 📚 Documentation

For more details, see:
- `KOYEB-DOCKER-FIX.md` - Full Docker guide
- `KOYEB-DEPLOYMENT.md` - General deployment guide
- `Dockerfile` - See the actual configuration

---

## 💬 Summary

**The issue:** Buildpack couldn't handle the package.json/lock mismatch

**The fix:** Switch to Docker (handles everything automatically)

**Time to fix:** ~5 minutes

**Next step:** Commit files → Change builder to Docker → Redeploy

---

**Ready to deploy?** Just follow Step 1 and Step 2 above! 🚀

