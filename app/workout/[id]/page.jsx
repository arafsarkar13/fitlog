import Image from "next/image";
import { notFound } from "next/navigation";
import { getWorkoutById } from "@/lib/api";
import DetailActions from "@/components/DetailActions";

export default async function WorkoutDetailPage({ params }) {
  const { id } = await params;

  let workout;
  try {
    workout = await getWorkoutById(id);
  } catch (error) {
    notFound();
  }

  const {
    name,
    image,
    description,
    muscleGroups,
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    instructions,
  } = workout;

  // Rows for the key specs panel, in the order the README lists them
  const specs = [
    { label: "Equipment", value: equipment },
    { label: "Difficulty", value: difficulty },
    { label: "Sets", value: sets },
    { label: "Reps", value: reps },
    { label: "Duration", value: `${duration} min` },
    { label: "Calories", value: `${caloriesBurned} kcal` },
    { label: "Rating", value: rating },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Left: image */}
        <div className="relative h-72 w-full overflow-hidden rounded-2xl sm:h-96 md:h-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Right: details */}
        <div>
          <h1 className="font-display text-3xl font-bold uppercase sm:text-4xl">
            {name}
          </h1>
          <p className="text-muted mt-2 text-sm sm:text-base">{description}</p>

          {/* Category tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {muscleGroups.map((tag) => (
              <span
                key={tag}
                className="bg-accent rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide text-black uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Key specs panel */}
          <div className="border-line bg-card mt-6 divide-y divide-[var(--color-line)] rounded-xl border">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-center justify-between px-4 py-3 text-sm"
              >
                <span className="text-muted uppercase">{spec.label}</span>
                <span className="font-semibold">{spec.value}</span>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <h2 className="font-display mt-6 text-lg font-bold tracking-wide uppercase">
            Instructions
          </h2>
          <ol className="mt-2 list-inside list-decimal space-y-2 text-sm">
            {instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>

          {/* Add to plan / Save for later buttons, with toasts and the 5-lift cap */}
          <DetailActions workoutId={workout.id} />
        </div>
      </div>
    </main>
  );
}
