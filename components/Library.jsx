"use client";

import { useEffect, useState } from "react";
import { getWorkouts } from "@/lib/api";
import LibrarySkeleton from "@/components/LibrarySkeleton";

export default function Library() {
  const [workouts, setWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getWorkouts()
      .then((data) => setWorkouts(data))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <LibrarySkeleton />;
  }

  // Temporary plain list. Commit 8 replaces this with real workout cards.
  return (
    <ul className="mt-6 space-y-2">
      {workouts.map((workout) => (
        <li key={workout.id} className="text-muted text-sm">
          {workout.name}
        </li>
      ))}
    </ul>
  );
}
