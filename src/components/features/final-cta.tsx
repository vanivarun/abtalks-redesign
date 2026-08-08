'use client';

import { Button } from "@/components/ui/button";


export function FinalCTA() {
  const handleGetStarted = () => {
    const element = document.getElementById("how");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600" />

      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 mb-6">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          <span className="text-sm font-medium">Join 2,500+ students already building</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Ready to Build in Public?
        </h2>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          The 60-Day Coding Challenge starts today. Build your first project, earn your badge, and join the community.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="primary"
            size="lg"
            onClick={handleGetStarted}
            className="text-lg font-semibold"
          >
            Start Building
          </Button>

          <a
            href="https://github.com/abtalks-community"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 text-white/90 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            GitHub Community
          </a>
        </div>
      </div>
    </section>
  );
}