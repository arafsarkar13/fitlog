import { Inter, Oswald } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PlanProvider } from "@/context/PlanContext";
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
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${oswald.variable} font-body flex min-h-screen flex-col antialiased`}
      >
        <PlanProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </PlanProvider>
      </body>
    </html>
  );
}
