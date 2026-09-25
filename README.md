<div align="center">

# 💪 FitLog — Workout Library

**A dark, no-nonsense gym companion.**
Pick a lift, lock it into today's plan, and watch the week's work add up.

[Live Demo](#) · [Report an Issue](#)

</div>

---

## Overview

FitLog is a workout library and daily planning tool built with Next.js and the App Router. Users browse a curated library of 12 workouts, review detailed instructions and specs for each one, and build out a daily training plan — complete with live progress metrics, a saved-for-later list, and persistent state across sessions.

The project was built as a hands-on exercise in App Router routing, shared client state, and responsive UI design with Tailwind CSS.

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| UI Library | [React](https://react.dev/) — Context API for shared state |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Icons | [lucide-react](https://lucide.dev/) |
| Notifications | [react-hot-toast](https://react-hot-toast.com/) |
| Fonts | Oswald + Inter, via `next/font` (Google Fonts) |
| Deployment | [Vercel](https://vercel.com/) |

---

## Features

- **Workout Library** — a responsive 3×4 card grid (3 columns desktop, 2 tablet, 1 mobile), each card showing an image, muscle-group tags, equipment and a stats row (duration, calories, rating).
- **Workout Detail Pages** — a two-column layout with a key specs panel and numbered instructions, generated automatically for every workout via a dynamic `[id]` route.
- **Today's Plan & Saved Lists** — add or save any workout from its detail page, with live badge counters in the navbar and a five-lift daily cap.
- **My Plan Dashboard** — live Exercises / Minutes / Calories totals, tabbed Today's Plan / Saved views, a Sort By dropdown (Duration, Calories, Rating), and Mark as Done / Remove actions.
- **Persistent State** — your plan, saved list and completed workouts are stored in `localStorage`, so they survive a page refresh.
- **Toast Notifications** — instant feedback on every add, save, remove and mark-done action.
- **Custom 404 Page** — a styled fallback for any invalid route.
- **Fully Responsive** — designed and tested across mobile, tablet and desktop breakpoints.

---

## Getting Started

### Prerequisites
- Node.js 18.18 or later
- npm

### Installation

```bash
git clone https://github.com/<your-username>/fitlog.git
cd fitlog
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

---

## Project Structure

```
fitlog/
├── app/                    # Pages and routes
│   ├── page.jsx            # Home (hero + library)
│   ├── workout/[id]/       # Dynamic workout detail route
│   ├── my-plan/            # My Plan dashboard
│   └── not-found.jsx       # Custom 404 page
├── components/             # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── WorkoutCard.jsx
│   ├── PlanCard.jsx
│   └── ...
├── context/
│   └── PlanContext.jsx     # Shared plan / saved / done state
├── lib/
│   └── api.js               # API helper functions
└── public/images/           # Logo and banner assets
```

---

## Testing Checklist

| Area | What to verify |
|---|---|
| **Library** | Grid renders as 3 columns on desktop, 2 on tablet, 1 on mobile |
| **Detail page** | Specs and instructions match the selected workout; both action buttons work |
| **My Plan** | Adding a 6th workout triggers a "plan full" toast; tabs and Sort By all function |
| **Persistence** | Add/save workouts, refresh the page, confirm state is retained |
| **404** | Visiting an invalid route (e.g. `/does-not-exist`) shows the custom 404 page |

---

## API Reference

FitLog consumes a public workout API:

- **All workouts:** `GET https://api.abcz.workers.dev/api/fitlog`
- **Single workout:** `GET https://api.abcz.workers.dev/api/fitlog/:id`

---

## Roadmap

Built as a 15-commit, feature-by-feature project. See [`COMMITS.md`](./COMMITS.md) for the full step-by-step build log.

---

<div align="center">

© 2026 FitLog — Workout Library. Train hard, log honest.

</div>
