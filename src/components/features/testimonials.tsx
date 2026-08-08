import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Priya Sharma",
    college: "IIT Madras",
    year: "3rd Year CSE",
    role: "Frontend Engineer @ Microsoft (Intern)",
    avatar: "/avatars/priya.jpg",
    quote:
      "Before ABTalks, I struggled to complete tutorials. Building one small project daily for 60 days gave me the confidence to build my LinkedIn clone in React. Got selected for Microsoft internship after showing my GitHub streak during interviews.",
    results: ["60/60 challenges", "GitHub streak: 60 days", "Microsoft SDE internship"],
  },
  {
    name: "Rohan Patel",
    college: "NIT Surat",
    year: "4th Year IT",
    role: "Backend Developer @ Amazon (Intern)",
    avatar: "/avatars/rohan.jpg",
    quote:
      "The dip at Day 8 almost made me quit. But seeing others post their struggles kept me going. By Day 30 I had a working todo app with localStorage. Day 40 weather app got me noticed by Amazon recruiters at a virtual career fair.",
    results: ["Completed Days 1-45", "Amazon SDE internship", "Built 5+ production projects"],
  },
  {
    name: "Ananya Reddy",
    college: "BITS Pilani Hyderabad",
    year: "2nd Year ECE",
    role: "Full Stack Intern @ Flipkart",
    avatar: "/avatars/ananya.jpg",
    quote:
      "As an electronics student, I was intimidated by coding. ABTalks made it approachable. Started with Python on Day 1, now I'm building full-stack apps. My Day 50 chat app helped me secure a Flipkart internship.",
    results: ["Switched from ECE to CS minor", "Flipkart internship", "Day 60 capstone: E-commerce platform"],
  },
  {
    name: "Arjun Mehta",
    college: "DTU Delhi",
    year: "3rd Year CSE",
    role: "SDE Intern @ Google",
    avatar: "/avatars/arjun.jpg",
    quote:
      "The structured progression is genius. Day 10 functions felt impossible until Day 20 calculator made it click. By Day 60 I had built a MERN stack food delivery app. Google recruiter said my GitHub showed 'rare consistency'.",
    results: ["Google SDE internship", "MERN stack food delivery app", "LinkedIn followers: 2.1K"],
  },
  {
    name: "Sneha Kulkarni",
    college: "VIT Vellore",
    year: "4th Year CSE",
    role: "Product Engineer @ Adobe (Intern)",
    avatar: "/avatars/sneha.jpg",
    quote:
      "What separates ABTalks is the community. When I was stuck on recursion at Day 22, three people explained it differently in Discord. That moment taught me more than any lecture ever could.",
    results: ["Adobe internship", "Solved 20+ LeetCode medium problems", "Built personal portfolio site"],
  },
  {
    name: "Vikram Singh",
    college: "IIIT Bangalore",
    year: "3rd Year ECE",
    role: "Backend Intern @ Ola",
    avatar: "/avatars/vikram.jpg",
    quote:
      "I joined ABTalks to learn backend development. The Day 32 Fetch API challenge was my first HTTP request. By Day 50 I had built a real-time chat app with WebSockets. Ola noticed my commitment to learning.",
    results: ["Ola backend internship", "Real-time chat app with WebSockets", "45/60 challenges completed"],
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">
            Real Stories from Real Students
          </h2>
          <p className="mt-3 text-xl text-zinc-400 max-w-2xl mx-auto">
            From Indian college campuses to tech internships — their journeys started with Day 1.
          </p>
        </div>

        <div className="space-y-8">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="border-zinc-800 hover:border-indigo-500/30 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full border border-indigo-500/20"
                    />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-lg font-semibold text-zinc-50">
                        {t.name}
                      </span>
                      <span className="text-xs text-zinc-500">•</span>
                      <span className="text-sm text-zinc-400">{t.college}</span>
                    </div>
                    <p className="text-xs text-zinc-500">{t.year}</p>
                    <p className="text-sm font-medium text-indigo-300">{t.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-zinc-400 mb-4">
                  "{t.quote}"
                </p>
                <div className="space-y-1">
                  {t.results.map((result, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-500">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-indigo-400/50 mt-0.5" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}