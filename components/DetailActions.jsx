"use client";

import { CalendarPlus, Bookmark } from "lucide-react";
import toast from "react-hot-toast";
import { usePlan } from "@/context/PlanContext";

export default function DetailActions({ workoutId }) {
  const { addToPlan, saveForLater } = usePlan();

  function handleAddToPlan() {
    const result = addToPlan(workoutId);

    if (result === "added") {
      toast.success("Added to today's plan");
    } else if (result === "duplicate") {
      toast("Already in today's plan");
    } else if (result === "full") {
      toast.error("Today's plan is full (5 max)");
    }
  }

  function handleSaveForLater() {
    const result = saveForLater(workoutId);

    if (result === "added") {
      toast.success("Saved for later");
    } else if (result === "duplicate") {
      toast("Already saved");
    }
  }

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <button
        onClick={handleAddToPlan}
        className="bg-accent flex items-center gap-2 rounded-md px-5 py-3 text-xs font-bold tracking-wide text-black transition hover:brightness-110"
      >
        <CalendarPlus size={16} />
        Add to today&apos;s plan
      </button>
      <button
        onClick={handleSaveForLater}
        className="border-muted flex items-center gap-2 rounded-md border px-5 py-3 text-xs font-semibold tracking-wide transition hover:border-white"
      >
        <Bookmark size={16} />
        Save for later
      </button>
    </div>
  );
}
