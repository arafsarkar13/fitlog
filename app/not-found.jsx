import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-bold uppercase">
        Page not found
      </h1>
      <p className="text-muted mt-2 text-sm">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="bg-accent mt-6 rounded-full px-5 py-2 text-xs font-bold text-black"
      >
        Go to workouts
      </Link>
    </main>
  );
}
