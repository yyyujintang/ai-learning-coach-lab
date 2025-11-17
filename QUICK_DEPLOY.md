# ⚡ Quick Deploy - 2 Minutes

## Option 1: Vercel (Easiest - Recommended) 🚀

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "AI Learning Coach Lab - HCI Final Project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Deploy with Vercel
1. Visit: https://vercel.com/
2. Click "Sign Up" → Use GitHub account
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"
6. **Done!** Get your URL: `https://your-project.vercel.app`

⏱️ **Total time: 2 minutes**

---

## Option 2: Netlify (Also Super Easy) 🎨

Same as Vercel, but use https://netlify.com/

---

## Option 3: GitHub Pages (Free, 5 minutes) 📄

### Quick Commands:
```bash
# 1. Build
npm run build

# 2. Install deployment tool
npm install --save-dev gh-pages

# 3. Add to package.json scripts section:
#    "deploy": "npm run build && gh-pages -d dist"

# 4. Deploy
npm run deploy

# 5. Enable in GitHub Settings → Pages → Source: gh-pages branch
```

Your site will be at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

---

## 🎯 My Recommendation: Use Vercel

**Why?**
- ✅ Zero configuration
- ✅ Automatic HTTPS
- ✅ Super fast (global CDN)
- ✅ Auto-deploy on every git push
- ✅ Free forever for this project
- ✅ Professional URL
- ✅ Perfect for portfolio/resume

**Vercel or Netlify are used by:** Meta, TikTok, Nike, Notion, and thousands of developers.

---

## Need Help?

Read `DEPLOYMENT_GUIDE.md` for detailed instructions and troubleshooting.


