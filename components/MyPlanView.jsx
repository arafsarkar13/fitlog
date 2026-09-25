"use client";

import { useEffect, useState } from "react";
import { getWorkouts } from "@/lib/api";
import { usePlan } from "@/context/PlanContext";
import PlanMetrics from "@/components/PlanMetrics";
import PlanTabs from "@/components/PlanTabs";

export default function MyPlanView() {
  const { planIds, savedIds } = usePlan();
  const [allWorkouts, setAllWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("plan");

  useEffect(() => {
    getWorkouts()
      .then((data) => setAllWorkouts(data))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  // Turn the stored ids into full workout objects
  const planWorkouts = allWorkouts.filter((w) => planIds.includes(w.id));
  const savedWorkouts = allWorkouts.filter((w) => savedIds.includes(w.id));

  // The metrics row always totals Today's Plan, no matter which tab is open
  const exercises = planWorkouts.length;
  const minutes = planWorkouts.reduce((total, w) => total + w.duration, 0);
  const calories = planWorkouts.reduce(
    (total, w) => total + w.caloriesBurned,
    0,
  );

  // Which list the (future) card list should show, based on the active tab
  const visibleWorkouts = activeTab === "plan" ? planWorkouts : savedWorkouts;

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="font-display text-3xl font-bold uppercase">My Plan</h1>
      <p className="text-muted mt-1 text-sm">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <PlanMetrics
        exercises={exercises}
        minutes={minutes}
        calories={calories}
      />

      <PlanTabs activeTab={activeTab} onChange={setActiveTab} />

      {/* Commit 12 replaces this with the real card list, loading state and empty state */}
      <div className="mt-6">
        {isLoading ? (
          <p className="text-muted text-sm">Loading workouts…</p>
        ) : (
          <p className="text-muted text-sm">
            {visibleWorkouts.length} workout(s) in this tab.
          </p>
        )}
      </div>
    </main>
  );
}
