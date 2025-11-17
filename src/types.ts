// Learning Activity Type
export interface LearningActivity {
  id: string;
  title: string;
  description: string;
  topic: string; // e.g., "Algebra", "Functions", "Limits"
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedTime: number; // in minutes
  completed: boolean;
  exercises?: Exercise[]; // Specific practice problems
}

// Exercise/Problem Type
export interface Exercise {
  id: string;
  question: string;
  answer?: string;
  hint?: string;
}

// AI Recommendation Result
export interface Recommendation {
  activity: LearningActivity;
  reason: string;
  confidence: number; // 0-1
}

// User Preference (for Co-Creation Path)
export interface UserPreference {
  topics: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  timeAvailable: number;
  learningStyle?: string;
}

// AI Explanation (for Explainable Path)
export interface Explanation {
  title: string;
  content: string;
  type: 'reasoning' | 'data' | 'algorithm';
  visualization?: string;
}

// Prototype Type
export type PrototypeType = 'default' | 'co-creation' | 'explainable';
