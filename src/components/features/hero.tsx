import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const iconSets = [
  {
    primary: "#6366f1",
    secondary: "#818cf8",
    bg: "bg-indigo-500/20",
    icon: "📊",
    desc: "Data visualization",
  },
  {
    primary: "#10b981",
    secondary: "#34d399",
    bg: "bg-emerald-500/20",
    icon: "🎯",
    desc: "Goal tracking",
  },
  {
    primary: "#f59e0b",
    secondary: "#fbbf24",
    bg: "bg-amber-500/20",
    icon: "🚀",
    desc: "Growth momentum",
  },
  {
    primary: "#f43f5e",
    secondary: "#fb7185",
    bg: "bg-rose-500/20",
    icon: "🎓",
    desc: "Learning outcomes",
  },
];

const icons = [
  "M9.663 17h-4.37c-1.086-1.94-2.73-3.35-5.48-3.37 1.18-2.4 3.34-4.04 5.76-4.12 1.63.08 3.05 1.02 4.25 2.52 1.08-1.55 2.43-2.5 3.6-3.57L21.34 14H22l-3.88 13.78z",
  "M12 2l10 8-10 8V3z",
  "M5 3v18h14V3z",
  "M8 2l4 10 3 9-7 4-3-12 7-4 3 9-4 10z",
];

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 800" fill="none">
          {icons.map((icon, i) => (
            <path
              key={i}
              d={icon}
              stroke="currentColor"
              strokeWidth="1.5"
              className="stroke-white"
              style={{ animation: `draw 2s ease-out ${i * 0.3}s forwards` }}
            />
          ))}
        </svg>
      </div>
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6">
          The 60-Day Coding{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">
            Challenge
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
          Build a real project every day. Grow your skills, portfolio, and confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg">
            Start Your Challenge
          </Button>
          <a
            href="#how"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
          >
            How it works
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
      <style>{`
        @keyframes draw {
          from { stroke-dashoffset: 2000; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
}
