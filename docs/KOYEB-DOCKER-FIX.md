# 🐳 Koyeb Docker Deployment Fix

## The Problem

Your build failed with exit code 51 because:
- `package.json` was updated with `sharp` dependency
- `package-lock.json` wasn't regenerated (requires Node.js installed locally)
- Koyeb buildpack can't resolve the mismatch

## The Solution

Switch from **Buildpack** to **Docker** deployment. This is actually BETTER because:
- ✅ More control over the build process
- ✅ Better caching and faster deployments
- ✅ Works without regenerating package-lock.json locally
- ✅ Docker will install sharp automatically during build

---

## 🚀 Deployment Steps

### Step 1: Commit the New Files

I've created two new files for you:
- `Dockerfile` - Docker configuration
- `.dockerignore` - Excludes unnecessary files from Docker build

Commit these changes:

```bash
git add .
git commit -m "Switch to Docker deployment for better memory management"
git push origin main
```

### Step 2: Update Koyeb Service to Use Docker

1. **Go to your Koyeb service** in the dashboard
2. **Click "Settings"**
3. **Under "Build & Deploy" section:**
   - Change **Builder** from `Buildpack` to `Docker`
   - **Dockerfile path**: `Dockerfile` (default)
   - **Docker target**: leave empty (uses the final stage)

4. **Under "Deployment" section:**
   - **Port**: `8000`
   - No need to specify build or run commands (Docker handles this)

5. **Environment Variables** (if not already added):
   Add these in the Environment Variables section:

   | Variable | Value |
   |----------|-------|
   | `NODE_OPTIONS` | `--max-old-space-size=512` |
   | `NEXT_TELEMETRY_DISABLED` | `1` |
   | `NODE_ENV` | `production` |

6. **Click "Update Service"**

### Step 3: Redeploy

Koyeb will automatically trigger a new deployment using Docker.

---

## 📊 What the Dockerfile Does

The Dockerfile is optimized for memory efficiency:

1. **Multi-stage build** - Keeps final image small
2. **Alpine Linux** - Lightweight base (only ~5MB)
3. **Optimized layers** - Better caching
4. **Memory limit** - Built into the runtime
5. **Security** - Runs as non-root user

### Build Process:
```
1. Install dependencies (with sharp)
2. Build Next.js app
3. Create minimal production image
4. Start server on port 8000
```

---

## ✅ Expected Results

After Docker deployment:

```
Step 1/X : FROM node:18-alpine AS base
Step 2/X : WORKDIR /app
...
Step X/X : CMD ["node", "server.js"]
Successfully built xxxxx
Successfully tagged koyeb/your-app:latest

Starting application...
✓ Starting...
✓ Ready in 632ms
```

No more:
- ❌ Exit code 51
- ❌ Buildpack failures
- ❌ OOM errors
- ❌ Sharp warnings

---

## 🔍 Troubleshooting

### If build still fails:

1. **Check Dockerfile syntax**
   - Make sure the Dockerfile was created correctly
   - No extra spaces or formatting issues

2. **Verify Git push**
   ```bash
   git status  # Should be clean
   git log -1  # Should show your commit
   ```

3. **Check Koyeb logs**
   - Look for Docker build output
   - Any error messages during build

### If app crashes after build:

1. **Check memory limit in Koyeb**
   - Ensure you're using at least `nano` (512MB)
   - Consider upgrading to `micro` (1GB)

2. **Verify environment variables**
   - All three variables should be set
   - Values should match exactly

---

## 💡 Why Docker is Better for Your Case

1. **Handles Dependencies Automatically**
   - Docker npm installs will regenerate package-lock.json
   - Sharp compiles native binaries for the target platform
   - No local Node.js installation needed

2. **Optimized for Production**
   - Multi-stage builds reduce final image size
   - Better layer caching = faster rebuilds
   - Consistent across all environments

3. **Better Resource Control**
   - Memory limits baked into image
   - Predictable performance
   - Easier to debug issues

---

## 🎯 Alternative: Fix package-lock.json

If you prefer to stay with buildpack, you need to regenerate `package-lock.json`:

### Option A: Install Node.js locally
1. Download Node.js from https://nodejs.org/
2. Install it
3. Open a new terminal
4. Run: `npm install`
5. Commit: `git add package-lock.json && git commit -m "Update package-lock.json" && git push`

### Option B: Use GitHub Codespaces or Gitpod
1. Open your repo in Codespaces/Gitpod
2. Run: `npm install`
3. Commit and push the updated package-lock.json

### Option C: Remove package-lock.json (not recommended)
1. Delete `package-lock.json`
2. Commit and push
3. Koyeb will regenerate it (but versions might differ)

---

## 🎉 Recommended Approach

**Use Docker!** It's the cleanest solution and gives you:
- No need to install Node.js locally
- Better production setup
- More reliable deployments
- Smaller attack surface

Just follow Steps 1-3 above.

---

## 📝 Configuration Summary

### Files Created:
- ✅ `Dockerfile` - Multi-stage Docker build
- ✅ `.dockerignore` - Excludes unnecessary files
- ✅ `next.config.mjs` - Added `output: 'standalone'` for Docker

### Koyeb Settings:
- Builder: **Docker** (not Buildpack)
- Port: **8000**
- Instance: **nano** (512MB) or **micro** (1GB)
- Environment Variables: 3 added

---

## 📚 References

- [Next.js Docker Documentation](https://nextjs.org/docs/deployment#docker-image)
- [Koyeb Docker Guide](https://www.koyeb.com/docs/build-and-deploy/build-from-dockerfile)
- [Docker Multi-stage Builds](https://docs.docker.com/build/building/multi-stage/)

---

**Ready?** Commit the files and update your Koyeb service to use Docker!

