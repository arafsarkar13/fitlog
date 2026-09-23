import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: "FitLog — Workout Library",
  description: "A dark, no-nonsense gym companion. Train hard, log honest.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oswald.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
