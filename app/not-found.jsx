import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center">
      <Image src="/images/logo.png" alt="FitLog logo" width={40} height={40} />

      <p className="text-accent mt-6 text-xs font-bold tracking-[0.2em]">404</p>
      <h1 className="font-display mt-2 text-3xl font-bold uppercase sm:text-4xl">
        Page not found
      </h1>
      <p className="text-muted mt-3 max-w-sm text-sm sm:text-base">
        The page you&apos;re looking for doesn&apos;t exist. It may have been
        moved, or the link might be broken.
      </p>

      <Link
        href="/"
        className="bg-accent mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold text-black transition hover:brightness-110"
      >
        <ArrowLeft size={16} />
        Go to workouts
      </Link>
    </main>
  );
}
