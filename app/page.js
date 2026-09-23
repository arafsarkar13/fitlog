import Image from "next/image";

export default function HomePage() {
  return (
    <main className="p-8">
      <Image src="/images/logo.png" alt="FitLog logo" width={32} height={32} />

      <h1 className="font-display mt-6 text-4xl font-bold uppercase">
        Train with intent. Log every set.
      </h1>

      <p className="text-muted mt-2">Fonts and colors are working.</p>

      <button className="bg-accent mt-4 rounded-full px-5 py-2 text-sm font-bold text-black">
        BROWSE WORKOUTS
      </button>

      <div className="bg-card border-line mt-6 w-64 rounded-xl border p-4">
        A card color test
      </div>
    </main>
  );
}
