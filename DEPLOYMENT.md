# Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   ```

2. **Deploy via CLI**
   ```bash
   cd "/Users/tangyujin/01文件盘/04 Dartmouth-Life/01 上课/COSC267 HCI/2 assesment/final"
   vercel
   ```

3. **Or Deploy via Web**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repo
   - Vercel auto-detects Vite configuration
   - Deploy with one click

**Settings:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Node Version: 18.x

### Option 2: Netlify

1. **Via Netlify CLI**
   ```bash
   npm i -g netlify-cli
   npm run build
   netlify deploy --prod
   ```

2. **Via Netlify Web**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your `dist` folder
   - Or connect GitHub repo

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `dist`

### Option 3: GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add to scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Update vite.config.ts**
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/'
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

### Option 4: Local Server

For local presentation without internet:

```bash
# Build the project
npm run build

# Serve the dist folder
npx serve dist

# Or use Python
cd dist
python3 -m http.server 8000
```

## Pre-Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test the production build with `npm run preview`
- [ ] Verify all three prototypes work
- [ ] Check responsive design on different screens
- [ ] Test in multiple browsers (Chrome, Firefox, Safari)
- [ ] Verify no console errors
- [ ] Check all links and navigation
- [ ] Ensure README and documentation are up to date

## Environment Variables

This project doesn't require environment variables. All configuration is static.

## Custom Domain (Optional)

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Update DNS records

## Troubleshooting

### Build Fails

**Error: TypeScript errors**
```bash
npm run lint
# Fix any reported issues
```

**Error: Out of memory**
```bash
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

### Preview Works But Deployed Site Doesn't

**Issue: Routes not working**
- Add `_redirects` file in `public/` folder:
  ```
  /*    /index.html   200
  ```

**Issue: Assets not loading**
- Check `base` path in `vite.config.ts`
- Ensure paths are relative

### Performance Optimization

**Before deploying, consider:**

1. **Optimize images** (if you add any)
   ```bash
   npm install --save-dev vite-plugin-image-optimizer
   ```

2. **Enable compression**
   Most hosting platforms do this automatically

3. **Check bundle size**
   ```bash
   npm run build
   # Check dist/ folder size
   ```

## Monitoring & Analytics (Optional)

### Add Google Analytics

1. **Create GA4 property**
2. **Add to index.html**
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Add Hotjar for User Testing

1. Create Hotjar account
2. Add tracking code to `index.html`
3. Set up heatmaps and recordings

## Security Considerations

✅ No sensitive data exposed  
✅ No backend APIs to secure  
✅ All data client-side  
✅ No user authentication needed  
✅ Static site is inherently secure  

## Cost

**All recommended options are FREE for this project:**
- Vercel: Free tier includes unlimited static deployments
- Netlify: Free tier includes 100GB bandwidth/month
- GitHub Pages: Free for public repositories
- Local: No cost

## Post-Deployment

### Share Your Project
Once deployed, share the URL with:
- Course instructor
- Classmates for feedback
- User testing participants
- Portfolio/LinkedIn

### Example URLs
- Vercel: `https://ai-learning-coach-lab.vercel.app`
- Netlify: `https://ai-learning-coach-lab.netlify.app`
- GitHub Pages: `https://yourusername.github.io/ai-learning-coach-lab`

## Continuous Deployment

Connect your GitHub repository to enable automatic deployments:

**Vercel:**
- Every git push to main branch triggers automatic deployment
- Preview deployments for pull requests

**Netlify:**
- Automatic deploys on git push
- Deploy previews for branches

## Rollback

If deployment has issues:

**Vercel:**
```bash
vercel rollback
```

**Netlify:**
- Go to Deploys tab
- Click on previous successful deploy
- Click "Publish deploy"

---

**Ready to deploy!** 🚀 Choose your preferred platform and follow the steps above.


