import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    step: 1,
    title: "Pick your language",
    description:
      "Choose from JavaScript, Python, C++, Java, or TypeScript. All challenges work in any language — write your first line of code in 30 minutes.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.894A11.975 11.975 0 0112 4.75c2.345 0 4.546.694 6.325 1.894a.75.75 0 01-.918 1.125 9.945 9.945 0 00-2.707-1.042V12a.75.75 0 01-1.5 0V5.828a9.94 9.94 0 00-2.707 1.042.75.75 0 01-.918-1.125z" />
      </svg>
    ),
    image: "/gradient-1",
  },
  {
    step: 2,
    title: "Build a project daily",
    description:
      "A new challenge drops every midnight. Spend 15-60 minutes coding, then push to GitHub. No skipping — streaks keep you honest.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 9h10m-3-3l3 3m0 0l-3 3m3-3z" />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Post & reflect",
    description:
      "Share your daily progress on LinkedIn with #ABTalks. By Day 60 you'll have 60 posts documenting your growth — and a portfolio that speaks for itself.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l9-7v14l-9-7z" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">
            How It Works
          </h2>
          <p className="mt-3 text-xl text-zinc-400 max-w-2xl mx-auto">
            Three simple steps. Sixty days. One habit that changes everything.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <Card
              key={step.step}
              className="relative overflow-hidden border-zinc-800 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 bg-gradient-to-r from-indigo-500 to-purple-600 h-2" style={{ width: `${step.step * 33.33}%` }} />
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/30">
                    {step.icon}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-indigo-400">
                      STEP {step.step}
                    </span>
                    <CardTitle className="text-2xl">{step.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}