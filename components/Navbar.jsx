"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";

const links = [
  { href: "/", label: "Workout" },
  { href: "/my-plan", label: "My Plan" },
];

// Decides which link should look highlighted
function isActive(href, pathname) {
  if (href === "/") {
    // "Workout" is active on the home page and on any workout detail page
    return pathname === "/" || pathname.startsWith("/workout");
  }
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const { planIds, savedIds } = usePlan();

  // The badge numbers are simply how many items are in each list
  const planCount = planIds.length;
  const savedCount = savedIds.length;

  return (
    <header className="border-line bg-page/90 sticky top-0 z-50 border-b backdrop-blur">
      <nav className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 py-3">
        {/* Left: logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="FitLog logo"
            width={24}
            height={24}
          />
          <span className="font-display hidden text-lg font-bold tracking-wide sm:inline">
            FITLOG
          </span>
        </Link>

        {/* Middle: page links */}
        <ul className="flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  isActive(link.href, pathname)
                    ? "bg-accent rounded-full px-3 py-1 text-xs font-semibold text-black sm:text-sm"
                    : "text-muted rounded-full px-3 py-1 text-xs font-medium hover:text-white sm:text-sm"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Plan and Saved counters (both go to /my-plan) */}
        <div className="flex items-center justify-end gap-2">
          <Link
            href="/my-plan"
            className="bg-accent flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-black"
          >
            Plan <span>{planCount}</span>
          </Link>
          <Link
            href="/my-plan"
            className="border-muted flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold text-white"
          >
            Saved <span>{savedCount}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
