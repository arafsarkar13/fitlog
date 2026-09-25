"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { getWorkouts } from "@/lib/api";
import { usePlan } from "@/context/PlanContext";
import PlanMetrics from "@/components/PlanMetrics";
import PlanTabs from "@/components/PlanTabs";
import SortDropdown from "@/components/SortDropdown";
import PlanCard from "@/components/PlanCard";
import PlanEmptyState from "@/components/PlanEmptyState";

export default function MyPlanView() {
  const {
    planIds,
    savedIds,
    doneIds,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = usePlan();
  const [allWorkouts, setAllWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("duration");

  const router = useRouter();
  const searchParams = useSearchParams();

  // The URL is the single source of truth for which tab is active.
  const activeTab = searchParams.get("tab") === "saved" ? "saved" : "plan";
  const isPlanTab = activeTab === "plan";

  useEffect(() => {
    getWorkouts()
      .then((data) => setAllWorkouts(data))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  function handleTabChange(tab) {
    router.replace(`/my-plan?tab=${tab}`, { scroll: false });
  }

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

  const currentTabWorkouts = isPlanTab ? planWorkouts : savedWorkouts;

  // Sort a copy of the list (never mutate the original array) by the chosen field,
  // highest first — a higher duration, calorie burn or rating shows up on top
  const visibleWorkouts = [...currentTabWorkouts].sort(
    (a, b) => b[sortBy] - a[sortBy],
  );

  function handleRemove(id) {
    if (isPlanTab) {
      removeFromPlan(id);
      toast("Removed from today's plan");
    } else {
      removeFromSaved(id);
      toast("Removed from saved");
    }
  }

  function handleMarkDone(id) {
    const result = markAsDone(id);
    if (result === "marked") {
      toast.success("Marked as done!");
    }
  }

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

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <PlanTabs activeTab={activeTab} onChange={handleTabChange} />
        <SortDropdown sortBy={sortBy} onChange={setSortBy} />
      </div>

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
                showMarkDone={isPlanTab}
                isDone={doneIds.includes(workout.id)}
                onMarkDone={handleMarkDone}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
