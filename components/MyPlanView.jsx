"use client";

import { useEffect, useState } from "react";
import { getWorkouts } from "@/lib/api";
import { usePlan } from "@/context/PlanContext";
import PlanMetrics from "@/components/PlanMetrics";
import PlanTabs from "@/components/PlanTabs";
import PlanCard from "@/components/PlanCard";
import PlanEmptyState from "@/components/PlanEmptyState";

export default function MyPlanView() {
  const { planIds, savedIds, removeFromPlan, removeFromSaved } = usePlan();
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

  const isPlanTab = activeTab === "plan";
  const visibleWorkouts = isPlanTab ? planWorkouts : savedWorkouts;
  const handleRemove = isPlanTab ? removeFromPlan : removeFromSaved;

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

      <div className="mt-6">
        {isLoading ? (
          <p className="text-muted text-sm">Loading workouts…</p>
        ) : visibleWorkouts.length === 0 ? (
          <PlanEmptyState />
        ) : (
          <div className="flex flex-col gap-4">
            {visibleWorkouts.map((workout) => (
              <PlanCard
                key={workout.id}
                workout={workout}
                onRemove={handleRemove}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
