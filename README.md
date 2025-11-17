# 🎓 AI Learning Coach Lab

COSC 267 - Human-Computer Interaction Final Project

## Project Overview

This is an interactive web application for HCI research, comparing three different AI learning coach prototype designs. The application demonstrates how different human-computer interaction modes affect user learning experiences.

## Three Prototypes

### 1. 🤖 Default Path (Baseline)
Traditional AI recommendation system where the AI automatically recommends learning activities, and users can only accept or reject them.

**Features:**
- Completely AI-driven decision making
- Minimal user input required
- Quick recommendations
- Limited user control

### 2. 🤝 Co-Creation Path (Collaborative)
Users and AI co-create learning plans. Users can set preferences, and AI provides multiple options based on those preferences.

**Features:**
- Users set learning preferences (topics, difficulty, time)
- AI generates multiple recommendation options
- Users select combinations from recommendations
- Balanced control distribution

### 3. 💡 Explainable Path (Transparent AI)
AI not only recommends learning activities but also explains the reasoning and decision-making process in detail.

**Features:**
- Shows AI recommendation rationale
- Displays data evidence and algorithm logic
- Visualizes confidence analysis
- Increases transparency and trust

## Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Inline CSS + CSS Modules
- **Data:** Client-side local data (no backend)

## Installation and Running

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Install Dependencies
```bash
npm install
```

### Run in Development Mode
```bash
npm run dev
```

The app will start at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure

```
final/
├── src/
│   ├── components/          # React components
│   │   ├── DefaultPath.tsx      # Baseline prototype
│   │   ├── CoCreationPath.tsx   # Collaborative prototype
│   │   └── ExplainablePath.tsx  # Explainable prototype
│   ├── data/                # Data files
│   │   └── activities.ts        # Learning activity data
│   ├── types.ts             # TypeScript type definitions
│   ├── App.tsx              # Main app component
│   ├── App.css              # App styles
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Project configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── README.md                # Project documentation
```

## Data Models

### LearningActivity
- `id`: Unique identifier
- `title`: Activity title
- `description`: Activity description
- `topic`: Topic (Algebra, Functions, Limits)
- `difficulty`: Difficulty level (easy, medium, hard)
- `estimatedTime`: Estimated time (minutes)
- `completed`: Completion status

### UserPreference
- `topics`: List of topics of interest
- `difficulty`: Preferred difficulty level
- `timeAvailable`: Available study time
- `learningStyle`: Learning style (optional)

### Explanation
- `title`: Explanation title
- `content`: Explanation content
- `type`: Explanation type (reasoning, data, algorithm)
- `visualization`: Visualization data (optional)

## Research Goals

This project aims to explore:

1. **User Autonomy:** How different levels of user control affect satisfaction
2. **Transparency:** Impact of AI decision explainability on trust
3. **Collaborative Design:** Effectiveness of human-AI collaboration modes
4. **Learning Experience:** Impact of different interaction modes on learning outcomes

## Features

✅ Single Page Application (SPA)  
✅ Responsive design  
✅ No backend required  
✅ Three fully functional prototypes  
✅ Intuitive navigation system  
✅ Modern UI design  
✅ TypeScript type safety  

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Developers

COSC 267 HCI Final Project Team

## License

MIT License

---

**Note:** This is a research prototype project for an HCI course, used for learning and demonstration purposes. All data is simulated and intended for educational purposes only.
