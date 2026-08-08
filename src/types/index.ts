export interface Student {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  completedChallenges: string[];
  achievements: string[];
  createdAt: string;
}

export interface Challenge {
  day: number;
  title: string;
  description: string;
  estimatedTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  learningGoal: string;
  completed: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  lockedUntil?: string;
}