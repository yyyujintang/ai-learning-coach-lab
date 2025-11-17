# Installation Instructions

## Step-by-Step Setup

### 1. Prerequisites Check

Verify you have Node.js installed:
```bash
node --version
# Should be v18.0.0 or higher
```

If not installed, download from: https://nodejs.org/

### 2. Navigate to Project Directory

```bash
cd "/Users/tangyujin/01文件盘/04 Dartmouth-Life/01 上课/COSC267 HCI/2 assesment/final"
```

### 3. Install Dependencies

```bash
npm install
```

This will install:
- React 18.2.0
- React DOM 18.2.0
- TypeScript 5.2.2
- Vite 5.0.8
- ESLint and plugins
- Type definitions

**Expected output:**
```
added XXX packages in XXs
```

### 4. Start Development Server

```bash
npm run dev
```

**Expected output:**
```
  VITE v5.0.8  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

### 5. Open in Browser

Navigate to: **http://localhost:5173**

You should see:
- Header: "🎓 AI Learning Coach Lab"
- Three navigation tabs
- Default Path prototype displayed

## Verify Installation

### Test Each Prototype

1. **Default Path (🤖)**
   - Click "Accept" button → Should show new activity
   - Click "Reject" button → Should show new activity
   - Check "History" section → Should show your choices

2. **Co-Creation Path (🤝)**
   - Select topics (Algebra, Functions, Limits)
   - Choose difficulty level
   - Adjust time slider
   - Click "Generate Recommendations" → Should show filtered activities
   - Select activities → Should highlight selected
   - Click "Confirm Learning Plan" → Should show confirmation

3. **Explainable Path (💡)**
   - View recommendation
   - Read AI explanations
   - Toggle "Show/Hide AI Explanation"
   - Check confidence bars
   - Click "Accept" → Should increment counter and show new activity

## Common Issues & Solutions

### Issue: `npm install` fails

**Solution 1: Clear npm cache**
```bash
npm cache clean --force
npm install
```

**Solution 2: Delete lock file**
```bash
rm package-lock.json
npm install
```

**Solution 3: Use different registry**
```bash
npm install --registry=https://registry.npmjs.org/
```

### Issue: Port 5173 already in use

**Solution 1: Use different port**
```bash
npm run dev -- --port 3000
```

**Solution 2: Kill process using port**
```bash
# macOS/Linux
lsof -ti:5173 | xargs kill -9

# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

### Issue: TypeScript errors

**Solution: Check TypeScript version**
```bash
npx tsc --version
```

If outdated:
```bash
npm install -D typescript@latest
```

### Issue: React warnings in console

These are typically harmless development warnings. To suppress:
- Check browser console (F12)
- Read warning message
- Usually safe to ignore in development

### Issue: Blank page after `npm run dev`

**Check:**
1. Browser console for errors (F12)
2. Terminal for error messages
3. Ensure all files are present:
   ```bash
   ls src/
   # Should show: App.tsx, main.tsx, types.ts, etc.
   ```

### Issue: Styles not loading

**Solution:**
```bash
# Restart dev server
# Press Ctrl+C to stop
npm run dev
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Type check
npx tsc --noEmit
```

## System Requirements

**Minimum:**
- Node.js 16.x
- 2GB RAM
- Modern browser (Chrome 90+, Firefox 88+, Safari 14+)

**Recommended:**
- Node.js 18.x or higher
- 4GB RAM
- Latest version of Chrome or Firefox

## File Structure Verification

Ensure all files are present:

```
final/
├── .eslintrc.cjs          ✓
├── .gitignore             ✓
├── DEPLOYMENT.md          ✓
├── INSTALL.md            ✓
├── PROJECT_SUMMARY.md    ✓
├── QUICKSTART.md         ✓
├── README.md             ✓
├── index.html            ✓
├── package.json          ✓
├── tsconfig.json         ✓
├── tsconfig.node.json    ✓
├── vite.config.ts        ✓
└── src/
    ├── App.css           ✓
    ├── App.tsx           ✓
    ├── index.css         ✓
    ├── main.tsx          ✓
    ├── types.ts          ✓
    ├── vite-env.d.ts     ✓
    ├── components/
    │   ├── CoCreationPath.tsx     ✓
    │   ├── DefaultPath.tsx        ✓
    │   └── ExplainablePath.tsx    ✓
    └── data/
        └── activities.ts           ✓
```

## Next Steps

After successful installation:

1. **Explore the Application**
   - Read QUICKSTART.md for usage guide
   - Test all three prototypes
   - Interact with each feature

2. **Review Code**
   - Open in your IDE (VS Code recommended)
   - Explore component structure
   - Understand data flow

3. **Prepare for Demo**
   - Practice explaining each prototype
   - Prepare talking points
   - Test on different devices

4. **Deploy (Optional)**
   - Follow DEPLOYMENT.md
   - Host on Vercel or Netlify
   - Share link with instructor

## Getting Help

If issues persist:

1. **Check documentation**
   - README.md for overview
   - QUICKSTART.md for usage
   - DEPLOYMENT.md for hosting

2. **Verify Node version**
   ```bash
   node --version
   npm --version
   ```

3. **Clean install**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

4. **Check for typos**
   - Ensure you're in correct directory
   - Verify file names are correct

## Success Indicators

✅ No error messages in terminal  
✅ Browser opens to localhost:5173  
✅ All three tabs are clickable  
✅ Each prototype is interactive  
✅ No console errors (F12)  
✅ Responsive design works on resize  

---

**Installation complete!** 🎉 Start exploring the prototypes.


