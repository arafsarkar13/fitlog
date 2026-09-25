"use client";

import { createContext, useContext, useEffect, useState } from "react";

const PlanContext = createContext(null);

// Today's plan can hold at most 5 lifts
const MAX_PLAN = 5;

// Key used in localStorage
const STORAGE_KEY = "fitlog-plan-data";

export function PlanProvider({ children }) {
  const [planIds, setPlanIds] = useState([]);
  const [savedIds, setSavedIds] = useState([]);
  const [doneIds, setDoneIds] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved data once, right after the app starts in the browser.
  // localStorage only exists in the browser, so syncing it into React state
  // here (once, on mount) is the correct pattern — not the kind of case
  // the lint rule below is meant to catch.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        /* eslint-disable react-hooks/set-state-in-effect */
        setPlanIds(saved.planIds || []);
        setSavedIds(saved.savedIds || []);
        setDoneIds(saved.doneIds || []);
        /* eslint-enable react-hooks/set-state-in-effect */
      }
    } catch (error) {
      console.error("Could not read saved plan data:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Write to localStorage whenever any list changes, but only after the
  // initial load above, so we don't overwrite saved data with empty arrays
  useEffect(() => {
    if (!isLoaded) return;
    const data = { planIds, savedIds, doneIds };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [planIds, savedIds, doneIds, isLoaded]);

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
