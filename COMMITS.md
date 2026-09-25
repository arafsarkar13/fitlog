# Build Log — 15-Step Commit Plan

FitLog was built incrementally, one testable feature per commit, in the order below.

| # | Commit | What it added |
|---|---|---|
| 1 | `chore: set up Next.js app, clean boilerplate and add README plan` | Project scaffold, cleaned boilerplate |
| 2 | `style: add logo/banner assets, Oswald + Inter fonts and dark theme colors` | Brand assets, typography, Tailwind theme |
| 3 | `feat: add responsive navbar with active links and plan/saved badges` | Navbar with active-link highlighting |
| 4 | `feat: add footer with logo and copyright, keep it pinned to the bottom` | Site footer |
| 5 | `feat: add shared plan/saved context and connect live navbar badges` | React Context for shared state |
| 6 | `feat: add hero section with banner image and scroll-to-library button` | Home page hero |
| 7 | `feat: fetch workouts from the API and show a loading skeleton` | API integration, loading state |
| 8 | `feat: add workout card component and responsive 3x4 library grid` | Library grid |
| 9 | `feat: add workout detail page with specs panel and instructions` | Dynamic `[id]` detail route |
| 10 | `feat: wire up add-to-plan and save-for-later buttons with toasts` | Plan/save actions, 5-lift cap |
| 11 | `feat: add My Plan header, live metrics row and today's plan/saved tabs` | My Plan metrics + tabs |
| 12 | `feat: add My Plan card list with loading and empty states` | Plan card list, empty state |
| 13 | `feat: add mark-as-done button on plan cards with toast and remove toasts` | Mark as Done, Remove |
| 14 | `feat: add Sort By dropdown on My Plan and persist plan data in localStorage` | Sorting, persistence |
| 15 | `polish: style 404 page, clean up Tailwind classes and finalize README` | 404 page, final cleanup |

Two follow-up fixes were made along the way:
- `fix: navbar plan/saved badges open and highlight the correct my-plan tab`
- `fix: silence set-state-in-effect lint warning for localStorage load`
