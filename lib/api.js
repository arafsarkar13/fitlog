const API_URL = "https://api.abcz.workers.dev/api/fitlog";

// Fetches all workouts. Used on the Home page library section.
export async function getWorkouts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
}

// Fetches one workout by id. Used on the workout detail page (Commit 9).
export async function getWorkoutById(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch workout");
  }

  return response.json();
}
