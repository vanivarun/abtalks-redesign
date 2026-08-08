import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const phases = [
  {
    day: 1,
    title: "Days 1-7",
    label: "Foundation",
    description: "Setup, basics, and confidence building",
    skills: ["Environment setup", "Basic syntax", "Variables", "User input"],
    icon: "🚀",
  },
  {
    day: 8,
    title: "Days 8-20",
    label: "Beginner Projects",
    description: "Small projects to solidify core concepts",
    skills: ["Arrays & loops", "Functions", "Objects", "Calculator app"],
    icon: "🛠️",
  },
  {
    day: 21,
    title: "Days 21-40",
    label: "Intermediate",
    description: "Advanced concepts and bigger projects",
    skills: ["Recursion", "Async/await", "DOM manipulation", "Todo app"],
    icon: "🔧",
  },
  {
    day: 41,
    title: "Days 41-55",
    label: "Data Structures",
    description: "Core algorithms and patterns",
    skills: ["Trees, Graphs", "Sorting", "Design patterns", "Chat app"],
    icon: "📚",
  },
  {
    day: 56,
    title: "Days 56-60",
    label: "Capstone",
    description: "Polish, deploy, showcase",
    skills: ["Git", "Testing", "Deployment", "Final project"],
    icon: "🏆",
  },
];

export function SixtyDayOverview() {
  const challengeStats = {
    currentDay: 12,
    streak: 12,
    totalHoursCoded: 28.5,
    completedDays: 12,
    nextChallenge: "Object Basics",
  };

  return (
    <section className="py-20 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <Badge variant="success" size="md">
            {challengeStats.completedDays}/{phases[phases.length - 1].day + 48} days completed
          </Badge>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-zinc-50">
            60-Day Challenge Overview
          </h2>
          <p className="mt-3 text-xl text-zinc-400 max-w-2xl mx-auto">
            A structured journey from absolute beginner to job-ready developer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-16">
          {phases.map((phase, i) => (
            <Card key={phase.day} className="bg-zinc-900/50 border-zinc-800 hover:scale-[1.02] transition-transform duration-300">
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-4 text-2xl">
                  {phase.icon}
                </div>
                <div className="text-xs font-semibold text-zinc-500 mb-2">{phase.title}</div>
                <h3 className="text-lg font-bold text-zinc-100 mb-3">{phase.label}</h3>
                <p className="text-sm text-zinc-400 mb-4">{phase.description}</p>
                <div className="space-y-2">
                  {phase.skills.slice(0, 3).map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-xs text-zinc-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400/50" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-zinc-900/50 rounded-3xl p-6 md:p-10 border border-zinc-800">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">{challengeStats.totalHoursCoded}+</div>
              <p className="text-zinc-400 text-sm">Hours of coding</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">{challengeStats.streak}+</div>
              <p className="text-zinc-400 text-sm">Day streaks</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">60</div>
              <p className="text-zinc-400 text-sm">Projects built</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}