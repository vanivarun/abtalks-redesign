import React from 'react';
import { Header, CurrentStreak, TodayChallenge, SixtyDaysProgress, DipCompass, Achievements, Leaderboard, CareerImpact, ContinueCTA } from '@/components/features/dashboard_components';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      <div className="px-4 pt-12 pb-16">
        <CurrentStreak />
        <TodayChallenge />
        <SixtyDaysProgress />
        <DipCompass />
        <Achievements />
        <Leaderboard />
        <CareerImpact />
      </div>
      <div className="fixed bottom-6 right-6">
        <ContinueCTA />
      </div>
    </div>
  );
};

export default DashboardPage;