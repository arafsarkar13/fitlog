// Three stat cards: Exercises, Minutes, Calories — all totaled from Today's Plan
export default function PlanMetrics({ exercises, minutes, calories }) {
  const stats = [
    { label: "Exercises", value: exercises },
    { label: "Minutes", value: minutes },
    { label: "Calories", value: calories },
  ];

  return (
    <div className="border-line bg-card mt-6 grid grid-cols-3 divide-x divide-[var(--color-line)] rounded-xl border">
      {stats.map((stat) => (
        <div key={stat.label} className="px-4 py-5 text-center sm:text-left">
          <p className="text-muted text-[10px] tracking-wide uppercase sm:text-xs">
            {stat.label}
          </p>
          <p className="text-accent font-display mt-1 text-2xl font-bold sm:text-3xl">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}
