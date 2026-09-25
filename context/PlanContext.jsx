"use client";

import { createContext, useContext, useState } from "react";

const PlanContext = createContext(null);

// Today's plan can hold at most 5 lifts
const MAX_PLAN = 5;

export function PlanProvider({ children }) {
  const [planIds, setPlanIds] = useState([]);
  const [savedIds, setSavedIds] = useState([]);
  const [doneIds, setDoneIds] = useState([]);

  // Returns "added", "duplicate" or "full" so the caller can show the right toast
  function addToPlan(id) {
    if (planIds.includes(id)) return "duplicate";
    if (planIds.length >= MAX_PLAN) return "full";
    setPlanIds([...planIds, id]);
    return "added";
  }

  // Returns "added" or "duplicate"
  function saveForLater(id) {
    if (savedIds.includes(id)) return "duplicate";
    setSavedIds([...savedIds, id]);
    return "added";
  }

  function removeFromPlan(id) {
    setPlanIds(planIds.filter((planId) => planId !== id));
    setDoneIds(doneIds.filter((doneId) => doneId !== id));
  }

  function removeFromSaved(id) {
    setSavedIds(savedIds.filter((savedId) => savedId !== id));
  }

  // Returns "marked" or "already-done"
  function markAsDone(id) {
    if (doneIds.includes(id)) return "already-done";
    setDoneIds([...doneIds, id]);
    return "marked";
  }

  const value = {
    planIds,
    savedIds,
    doneIds,
    addToPlan,
    saveForLater,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
    maxPlan: MAX_PLAN,
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
}

// A small helper so other files can write: const { planIds } = usePlan();
export function usePlan() {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("usePlan must be used inside <PlanProvider>");
  }
  return context;
}
