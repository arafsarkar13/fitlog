"use client";

import { usePlan } from "@/context/PlanContext";

export default function HomePage() {
  const { planIds, savedIds, addToPlan, saveForLater } = usePlan();

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="font-display text-3xl font-bold uppercase">Home</h1>
      <p className="text-muted mt-2">
        Temporary test area for the shared state.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {/* We pass a different id each click so duplicates don't block the test */}
        <button
          onClick={() => addToPlan(planIds.length + 1)}
          className="bg-accent rounded-full px-4 py-2 text-sm font-bold text-black"
        >
          Test: add to plan
        </button>
        <button
          onClick={() => saveForLater(savedIds.length + 1)}
          className="border-muted rounded-full border px-4 py-2 text-sm font-semibold"
        >
          Test: save for later
        </button>
      </div>

      <p className="text-muted mt-4 text-sm">
        Plan ids: [{planIds.join(", ")}] | Saved ids: [{savedIds.join(", ")}]
      </p>
    </main>
  );
}
