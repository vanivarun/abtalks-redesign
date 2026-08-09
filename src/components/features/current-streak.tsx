import React from 'react';
import { cn } from '@/lib/utils';
import studentData from '@/data/student.json';

const CurrentStreak = () => {
  const { streak, longestStreak } = studentData;

  return (
    <div className="p-6 text-center">
      <div className="flex items-center mb-4">
        <svg className="text-5xl text-red-500" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 2l3 6h4l-5 5 2 6-6-3-6 3 2-6-5-5h4z"/>
        </svg>
        <span className="text-zinc-50 font-bold">{streak}</span>
      </div>
      <p className="text-zinc-400 text-sm mt-2">Current streak</p>
      {longestStreak && (
        <p className="text-xs text-zinc-500">Best: {longestStreak} days</p>
      )}
    </div>
  );
};

export default CurrentStreak;