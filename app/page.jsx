import Hero from "@/components/Hero";
import Library from "@/components/Library";

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* The button in the hero scrolls to this section */}
      <section
        id="library"
        className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12"
      >
        <h2 className="font-display text-2xl font-bold uppercase sm:text-3xl">
          The Library
        </h2>
        <p className="text-muted mt-1 text-sm">
          Twelve lifts covering every major muscle group.
        </p>

        <Library />
      </section>
    </main>
  );
}
