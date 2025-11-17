# 🚀 Deployment Guide - AI Learning Coach Lab

## Quick Deploy to GitHub Pages (Recommended)

### Method 1: GitHub Pages (Easiest - 5 minutes)

#### Step 1: Build the Project
```bash
npm run build
```
This creates a `dist` folder with your production-ready static files.

#### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Create a new repository (e.g., `ai-learning-coach-lab`)
3. **Do NOT** initialize with README (we already have files)

#### Step 3: Push to GitHub
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: AI Learning Coach Lab"

# Add your GitHub repo as remote (replace YOUR_USERNAME and YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Step 4: Deploy to GitHub Pages
```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add deploy script to package.json manually or use this command:
# Add this line to "scripts" section: "deploy": "npm run build && gh-pages -d dist"

# Deploy!
npm run deploy
```

#### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select branch: `gh-pages`
4. Save
5. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

---

## Method 2: Vercel (Professional - 2 minutes)

### Fastest Deployment Ever! 🚀

1. Go to https://vercel.com/
2. Sign up with your GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"
7. Done! You get a URL like: `https://your-project.vercel.app`

**Pros:**
- ✅ Automatic deployments on every push
- ✅ Free custom domain support
- ✅ Super fast CDN
- ✅ Zero configuration needed

---

## Method 3: Netlify (Also Great)

1. Go to https://www.netlify.com/
2. Sign up with GitHub
3. Click "Add new site" → "Import existing project"
4. Select your GitHub repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"
7. Your site is live at: `https://random-name.netlify.app`

**Pros:**
- ✅ Easy custom domain
- ✅ Auto SSL certificates
- ✅ Continuous deployment

---

## Manual Deployment (Any Web Host)

### Step 1: Build
```bash
npm run build
```

### Step 2: Upload
Upload everything in the `dist` folder to your web hosting:
- Via FTP
- Via cPanel File Manager
- Via SSH/SCP

### Step 3: Configure
Make sure your web server serves `index.html` for all routes.

---

## Testing Before Deploy

### Local Production Preview
```bash
# Build the project
npm run build

# Preview the production build locally
npm run preview
```

Visit http://localhost:4173 to see exactly how it will look in production.

---

## Troubleshooting

### Problem: Blank page after deployment
**Solution:** Check `vite.config.ts` base path:
- For GitHub Pages: `base: '/your-repo-name/'`
- For custom domain: `base: '/'`
- For relative paths: `base: './'` (current setting - works everywhere)

### Problem: Routes not working (404 on refresh)
**Solution:** This is a SPA (Single Page Application). You need to:
- **GitHub Pages:** Create `public/404.html` that redirects to `index.html`
- **Vercel/Netlify:** They handle this automatically
- **Other hosts:** Configure server to serve `index.html` for all routes

### Problem: Assets not loading
**Solution:** Check browser console, ensure base path is correct in `vite.config.ts`

---

## Recommended: Use Vercel or Netlify

These platforms are designed for modern web apps and handle everything automatically:
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Continuous deployment
- ✅ Free tier (perfect for this project)
- ✅ Custom domains
- ✅ Zero configuration

Just connect your GitHub repo and you're done!

---

## Your Project is Now Live! 🎉

Share your URL with:
- Classmates
- Professors
- Portfolio
- Resume

Good luck with your HCI project presentation! 🚀


