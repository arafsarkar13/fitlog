import "./globals.css";

export const metadata = {
  title: "FitLog — Workout Library",
  description: "A dark, no-nonsense gym companion. Train hard, log honest.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
