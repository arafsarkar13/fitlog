"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star, X, Check } from "lucide-react";

export default function PlanCard({
  workout,
  onRemove,
  showMarkDone,
  isDone,
  onMarkDone,
}) {
  const { id, name, image, equipment, duration, caloriesBurned, rating } =
    workout;

  return (
    <div
      className={
        isDone
          ? "border-accent bg-card flex flex-col gap-4 rounded-xl border p-4 opacity-60 sm:flex-row sm:items-center"
          : "border-line bg-card flex flex-col gap-4 rounded-xl border p-4 sm:flex-row sm:items-center"
      }
    >
      {/* Thumbnail */}
      <div className="relative h-20 w-full shrink-0 overflow-hidden rounded-lg sm:w-24">
        <Image
          src={image}
          alt={name}
          fill
          sizes="96px"
          className="object-cover"
        />
      </div>

      {/* Title, equipment, stats */}
      <div className="flex-1">
        <h3 className="font-display text-base font-bold tracking-wide uppercase">
          {name}
          {isDone && (
            <span className="text-accent ml-2 text-xs normal-case">✓ Done</span>
          )}
        </h3>
        <p className="text-muted text-xs">{equipment}</p>
        <div className="text-muted mt-2 flex items-center gap-4 text-xs">
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

      {/* Actions */}
      <div className="flex items-center gap-2">
        <Link
          href={`/workout/${id}`}
          className="border-muted rounded-md border px-3 py-2 text-xs font-semibold whitespace-nowrap transition hover:border-white"
        >
          View Details
        </Link>

        {/* Only shown on Today's Plan cards, not on Saved cards */}
        {showMarkDone && (
          <button
            onClick={() => onMarkDone(id)}
            disabled={isDone}
            className="bg-accent flex items-center gap-1 rounded-md px-3 py-2 text-xs font-bold whitespace-nowrap text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Check size={14} />
            Mark as Done
          </button>
        )}

        <button
          onClick={() => onRemove(id)}
          className="border-muted rounded-md border p-2 transition hover:border-white"
          aria-label={`Remove ${name}`}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
