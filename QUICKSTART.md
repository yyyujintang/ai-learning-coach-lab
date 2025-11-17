# Quick Start Guide

## Getting Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Application
```bash
npm run dev
```

### 3. Open in Browser
Navigate to: `http://localhost:5173`

## What You'll See

The application showcases three interactive prototypes:

### 🤖 Default Path
- Click "Accept" or "Reject" to interact with AI recommendations
- See your decision history build up
- Experience the traditional AI-driven approach

### 🤝 Co-Creation Path
1. Select your preferred topics (Algebra, Functions, Limits)
2. Choose difficulty level (Easy, Medium, Hard)
3. Set available study time (15-60 minutes)
4. Click "Generate Recommendations"
5. Select multiple activities from the AI-generated list
6. Confirm your personalized learning plan

### 💡 Explainable Path
- View AI recommendations with detailed explanations
- Toggle explanation visibility with "Show/Hide AI Explanation"
- See confidence metrics for each recommendation factor
- Understand the reasoning behind AI decisions

## Testing the Application

### Suggested Test Flow:
1. **Start with Default Path** - Experience the baseline approach
2. **Switch to Co-Creation** - Try setting different preferences
3. **Explore Explainable Path** - Read the AI explanations

### Things to Try:
- Accept/reject multiple recommendations in Default Path
- Set different preference combinations in Co-Creation
- Compare activities across different difficulty levels
- Toggle explanations on/off in Explainable Path

## Project Structure Overview

```
src/
├── components/
│   ├── DefaultPath.tsx       - Baseline AI recommendation
│   ├── CoCreationPath.tsx    - Collaborative preference setting
│   └── ExplainablePath.tsx   - Transparent AI explanations
├── data/
│   └── activities.ts         - 12 mock learning activities
├── types.ts                  - TypeScript interfaces
└── App.tsx                   - Main app with navigation
```

## Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will automatically use the next available port.

### Dependencies Not Installing
Try:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
Ensure you have Node.js v18+ installed:
```bash
node --version
```

## Development Tips

- The navigation bar is sticky and always visible
- All data is stored client-side (localStorage could be added)
- The app is fully responsive for mobile/tablet/desktop
- No backend server required

## Demo Data

The application includes 12 pre-configured learning activities:
- **4 Algebra topics** (easy to hard)
- **4 Functions topics** (easy to hard)
- **4 Limits topics** (medium to hard)

Each activity includes:
- Title and description
- Difficulty level
- Estimated completion time
- Topic category

---

**Enjoy exploring the different AI interaction patterns!** 🎓


