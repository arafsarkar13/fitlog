import Link from "next/link";

export default function PlanEmptyState() {
  return (
    <div className="border-line mt-6 flex flex-col items-center rounded-xl border px-4 py-16 text-center">
      <h3 className="font-display text-lg font-bold tracking-wide uppercase">
        Nothing here yet
      </h3>
      <p className="text-muted mt-2 max-w-sm text-sm">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="bg-accent mt-5 rounded-full px-5 py-2 text-xs font-bold text-black"
      >
        Go to workouts
      </Link>
    </div>
  );
}
