import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const reasons = [
  {
    title: "Real portfolio, not tutorials",
    description:
      "Every day you ship a real GitHub commit. By Day 60, you have 60 projects proving you can build end-to-end applications.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 16l4-16M6 16l-4-8 4-8m16 0l-4 8 4 8" />
      </svg>
    ),
  },
  {
    title: "LinkedIn presence that matters",
    description:
      "Daily posts document your learning journey. Recruiters see consistency, problem-solving, and communication skills — not just a certificate.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Structure that prevents quitting",
    description:
      "The 5-phase design mirrors how habits actually form. You start small (Days 1-7), survive the dip (Days 8-21), and build momentum through to capstone.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Community accountability",
    description:
      "Join 1000+ Indian students on the same path. Discord for doubts, weekly AMAs with alumni placed at Google, Amazon, Microsoft. You're never stuck alone.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1zm18 0a6 6 0 01-12 0v1h12v-1z" />
      </svg>
    ),
  },
  {
    title: "Interview-ready projects",
    description:
      "Day 20 Calculator, Day 30 Todo App, Day 40 Weather App, Day 50 Chat App, Day 60 Capstone — each builds toward a technical interview talking point.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Free forever",
    description:
      "No hidden costs, no premium tiers, no upsells. The curriculum, community, and platform are completely free — built by alumni who remember what it's like to be a broke student.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function WhyJoin() {
  return (
    <section id="why" className="py-20 bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">
            Why Students Join ABTalks
          </h2>
          <p className="mt-3 text-xl text-zinc-400 max-w-2xl mx-auto">
            Not another tutorial hell. A system that turns consistency into competence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <Card key={i} className="hover:border-indigo-500/30 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                  {reason.icon}
                </div>
                <CardTitle>{reason.title}</CardTitle>
                <CardDescription>{reason.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}