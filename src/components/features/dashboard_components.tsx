import React from 'react';
import { cn } from '@/lib/utils';
import studentData from '@/data/student.json';
import challengesData from '@/data/challenges.json';
import achievementsData from '@/data/achievements.json';

export const Header = () => {
  const today = new Date();
  const weekday = today.toLocaleDateString(undefined, { weekday: 'short' });
  const month = today.toLocaleDateString(undefined, { month: 'short' });
  const day = today.getDate();

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-zinc-900/50 backdrop-blur-sm border-b border-zinc-800/50">
      <h1 className="text-2xl font-bold text-zinc-50">Welcome back</h1>
      <div className="text-sm text-zinc-400 font-mono">
        {weekday}, {month} {day}
      </div>
    </div>
  );
};

export const CurrentStreak = () => {
  const { streak, longestStreak } = studentData;

  return (
    <div className="flex items-center justify-center p-6">
      <div className="text-center">
        <div className="flex items-center justify-center mb-2">
          <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          </svg>
          <span className="text-5xl font-bold text-zinc-50 ml-3">{streak}</span>
        </div>
        <p className="text-zinc-400 text-sm mb-1">Current streak</p>
        {longestStreak > 0 && streak < longestStreak && (
          <p className="text-xs text-zinc-500">Record: {longestStreak} days</p>
        )}
      </div>
    </div>
  );
};

export const TodayChallenge = () => {
  const todayData = challengesData.find((c: any) => c.day === studentData.currentDay) || challengesData[0];

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      'Beginner': 'bg-emerald-500/20 text-emerald-300',
      'Intermediate': 'bg-amber-500/20 text-amber-300',
      'Advanced': 'bg-purple-500/20 text-purple-300'
    };
    return colors[difficulty as keyof typeof colors] || 'bg-zinc-500/20 text-zinc-300';
  };

  return (
    <div className="px-6">
      <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 mb-6">
        <h2 className="text-lg font-semibold text-zinc-50 mb-3">
          Today's Challenge
          <span className={`ml-2 inline-block px-2 py-0.5 text-xs rounded-full ${getDifficultyColor(todayData.difficulty)}`}>
            {todayData.difficulty}
          </span>
        </h2>
        <h3 className="text-xl font-bold text-zinc-100 mb-2">{todayData.title}</h3>
        <p className="text-zinc-300 text-sm mb-4">{todayData.description}</p>
        <div className="flex items-center gap-4 text-xs text-zinc-400 mb-4">
          <span>⏱ {todayData.estimatedTime}</span>
        </div>
        <a
          href={`/day/${studentData.currentDay}`}
          className="block text-center py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:opacity-90 transition-opacity"
        >
          Start Challenge
        </a>
      </div>
    </div>
  );
};

export const SixtyDaysProgress = () => {
  const { completedDays, phaseStats, totalDays = 60 } = studentData;
  const percent = Math.round((completedDays.length / totalDays) * 100);

  let currentPhase = 'honeymoon';
  let phaseLabel = 'Foundation';
  if (studentData.currentDay >= 8 && studentData.currentDay <= 21) {
    currentPhase = 'dip';
    phaseLabel = 'The Dip';
  } else if (studentData.currentDay >= 22 && studentData.currentDay <= 40) {
    currentPhase = 'grind';
    phaseLabel = 'Skill Development';
  } else if (studentData.currentDay >= 41 && studentData.currentDay <= 55) {
    currentPhase = 'flow';
    phaseLabel = 'Finding Flow';
  } else if (studentData.currentDay >= 56) {
    currentPhase = 'finalPush';
    phaseLabel = 'Final Push';
  }

  return (
    <div className="px-6">
      <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 mb-6">
        <h2 className="text-lg font-semibold text-zinc-50 mb-2">60-Day Progress</h2>
        <p className="text-zinc-400 text-sm mb-4">{phaseLabel} Phase</p>

        <div className="w-full bg-zinc-800 rounded-full h-2.5 mb-4">
          <div
            className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(percent, 100)}%` }}
          />
        </div>

        <div className="flex justify-between text-xs text-zinc-400 mb-3">
          <span>{completedDays.length}/{totalDays} days</span>
          <span>{Math.min(100 - percent, 0)} days left</span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-0.5 bg-zinc-800 text-zinc-300 rounded-full text-xs">{currentPhase}</span>
          <span className="text-zinc-500">→</span>
          <span>Day {studentData.currentDay}</span>
        </div>
      </div>
    </div>
  );
};

export const DipCompass = () => {
  const phase = studentData.phase || 'honeymoon';

  const messages: Record<string, string> = {
    honeymoon: "Enjoy the momentum—building foundational skills",
    dip: "This is where growth happens. Push through the dip.",
    grind: "Staying consistent. Skill mastery is coming.",
    flow: "You've found your groove. Keep the excellence flowing.",
    finalPush: "Almost there! Finish strong and celebrate."
  };

  return (
    <div className="px-6 mb-6">
      <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-4">
        <h2 className="text-sm font-medium text-zinc-50 mb-2">The Dip Compass</h2>
        <p className="text-zinc-300 text-sm">{messages[phase] || messages.honeymoon}</p>
      </div>
    </div>
  );
};

export const Achievements = () => {
  const earnedCount = Math.min(studentData.completedDays.length, achievementsData.length);
  const showBadges = achievementsData.slice(0, Math.min(earnedCount, 6));

  return (
    <div className="px-6 mb-6">
      <h2 className="text-lg font-semibold text-zinc-50 mb-4">Achievements ({earnedCount} earned)</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {showBadges.map((badge, index) => (
          <div
            key={(badge as any).id || index}
            className="flex items-center gap-2 p-3 bg-zinc-900/50 border border-zinc-800/50 rounded-xl"
          >
            <span className="text-xl">{badge.icon || '🏆'}</span>
            <div>
              <p className="text-xs font-medium text-zinc-300">{(badge as any).title || `Achievement ${index + 1}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Leaderboard = () => {
  const { streak } = studentData;
  const percentile = Math.min(100, Math.max(1, 100 - (streak * 5 - 25)));
  const rank = Math.max(1, Math.floor((streak) * 0.8 + 1));

  return (
    <div className="px-6 mb-6">
      <h2 className="text-lg font-semibold text-zinc-50 mb-4">Leaderboard</h2>
      <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-zinc-800 text-zinc-300 text-sm font-bold rounded-full">#{rank}</span>
          </div>
          <div className="flex-1">
            <p className="text-zinc-300 text-sm">Top {percentile}% of students</p>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-zinc-800/30">
          <p className="text-xs text-zinc-400">
            You're in the top {percentile}%! Keep coding to climb higher.
          </p>
        </div>
      </div>
    </div>
  );
};

export const RecentActivity = () => {
  const activities = [
    { type: 'github', label: 'GitHub', description: 'Pushed Day 12 solution' },
    { type: 'linkedin', label: 'LinkedIn', description: 'Shared progress update' },
    { type: 'submission', label: 'Submission', description: 'Submitted Day 11 challenge' }
  ];

  return (
    <div className="px-6 mb-6">
      <h2 className="text-lg font-semibold text-zinc-50 mb-4">Recent Activity</h2>
      <div className="space-y-2">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 bg-zinc-900/50 border border-zinc-800/50 rounded-xl"
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-900/50">
              {activity.type === 'github' && '🐱'}
              {activity.type === 'linkedin' && '💼'}
              {activity.type === 'submission' && '📤'}
            </div>
            <div className="flex-1">
              <p className="text-zinc-300 text-sm">{activity.description}</p>
              <p className="text-xs text-zinc-500">{activity.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CareerImpact = () => {
  const completed = studentData.completedDays.length;
  const projects = completed;

  return (
    <div className="px-6 mb-6">
      <h2 className="text-lg font-semibold text-zinc-50 mb-4">Why Consistency Matters</h2>
      <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xl">👨‍💻</span>
              <div>
                <p className="text-sm font-medium text-zinc-300">Portfolio</p>
                <p className="text-xs text-zinc-500">{projects} projects • Ready to showcase</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📂</span>
              <div>
                <p className="text-sm font-medium text-zinc-300">GitHub</p>
                <p className="text-xs text-zinc-500">Active commits prove dedication</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xl">🎯</span>
              <div>
                <p className="text-sm font-medium text-zinc-300">Placements</p>
                <p className="text-xs text-zinc-500">75% of past participants landed internships</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">💼</span>
              <div>
                <p className="text-sm font-medium text-zinc-300">Internships</p>
                <p className="text-xs text-zinc-500">Coding streak = interview confidence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContinueCTA = () => {
  return (
    <div className="fixed bottom-6 right-6">
      <a
        href={`/day/${studentData.currentDay}`}
        className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-2xl hover:scale-105 transition-transform"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <polyline points="20 11 12 16 4 11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 11l8 8 8-8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
      <div className="absolute -bottom-10 right-0 bg-zinc-900/90 backdrop-blur-sm px-4 py-2 rounded-full border border-zinc-800 shadow-lg">
        <span className="text-xs font-medium text-zinc-300">Continue</span>
        <span className="block text-xs text-zinc-500">Day {studentData.currentDay}</span>
      </div>
    </div>
  );
};