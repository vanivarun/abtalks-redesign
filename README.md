# ABTalks Redesign

A 60-day coding challenge platform for students — built for the hackathon.

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5** (strict)
- **Tailwind CSS v4**

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── dashboard/
│   │   └── page.tsx          # Student dashboard with "The Dip" Compass
│   ├── day/
│   │   └── [id]/
│   │       └── page.tsx      # Daily challenge view
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── ui/                   # Base UI components
│   └── features/             # Feature-specific components
├── data/
│   ├── student.json          # Student progress & phase data
│   ├── challenges.json       # 60 days of challenges
│   └── achievements.json     # Unlockable achievements
├── lib/
│   └── utils.ts              # Shared utilities (cn, formatters)
└── types/
    └── index.ts              # Shared TypeScript types
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Key Feature: "The Dip" Compass

A phase-aware motivation compass that visualizes the 5 psychological phases of a 60-day challenge:

| Phase | Days | Focus |
|-------|------|-------|
| 🌙 Honeymoon | 1–7 | Build the habit |
| 🌑 The Dip | 8–21 | Normalize the struggle |
| ⛰️ The Grind | 22–40 | Trust the reps |
| 🌊 Flow | 41–55 | Stretch & teach |
| 🏁 Final Push | 56–60 | Document the journey |

Students plant "flags" — one-sentence messages to their future self at each phase transition — creating identity continuity across 60 days.