import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="border-line bg-card mx-auto mt-6 max-w-6xl overflow-hidden rounded-2xl border">
      <div className="grid items-center gap-6 p-6 sm:p-10 md:grid-cols-2">
        {/* Left: text */}
        <div>
          <p className="text-accent text-[10px] font-bold tracking-[0.2em] sm:text-xs">
            WORKOUT LIBRARY
          </p>

          <h1 className="font-display mt-3 text-4xl leading-tight font-bold uppercase sm:text-5xl lg:text-6xl">
            Train with intent. Log every set.
          </h1>

          <p className="text-muted mt-4 max-w-md text-sm sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a
            href="#library"
            className="bg-accent mt-6 inline-flex items-center gap-2 rounded-md px-5 py-3 text-xs font-bold tracking-wide text-black transition hover:brightness-110"
          >
            BROWSE WORKOUTS
            <ArrowDown size={16} />
          </a>
        </div>

        {/* Right: banner image */}
        <div className="relative h-56 sm:h-72 md:h-80">
          <Image
            src="/images/banner.png"
            alt="Athlete training on an exercise bike"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
