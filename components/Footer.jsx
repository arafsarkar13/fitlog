import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-line bg-page border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row sm:text-left">
        {/* Left: logo icon + brand name */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="FitLog logo"
            width={20}
            height={20}
          />
          <span className="font-display text-base font-bold tracking-wide">
            FITLOG
          </span>
        </Link>

        {/* Right: copyright line */}
        <p className="text-muted text-xs">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
