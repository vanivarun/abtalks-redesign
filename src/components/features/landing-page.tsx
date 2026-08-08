import { Hero } from "./hero";
import { SixtyDayOverview } from "./60-day-overview";
import { WhyJoin } from "./why-join";
import { HowItWorks } from "./how-it-works";
import { Testimonials } from "./testimonials";
import { FinalCTA } from "./final-cta";
import { Footer } from "@/components/ui/footer";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Hero />
      <SixtyDayOverview />
      <WhyJoin />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}