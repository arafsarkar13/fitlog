import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";

export default function WorkoutCard({ workout }) {
  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;

  return (
    <Link
      href={`/workout/${id}`}
      className="border-line bg-card group block overflow-hidden rounded-xl border transition hover:brightness-110"
    >
      {/* Image */}
      <div className="relative h-40 w-full">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition group-hover:scale-105"
        />
      </div>

      {/* Text content */}
      <div className="p-4">
        {/* Category tag pills */}
        <div className="flex flex-wrap gap-1.5">
          {muscleGroups.map((tag) => (
            <span
              key={tag}
              className="bg-accent rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide text-black uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3 className="font-display mt-2 text-lg font-bold tracking-wide uppercase">
          {name}
        </h3>

        {/* Equipment */}
        <p className="text-muted text-xs">{equipment}</p>

        {/* Stats row */}
        <div className="text-muted mt-3 flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame size={14} />
            {caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star size={14} />
            {rating}
          </span>
        </div>
      </div>
    </Link>
  );
}
