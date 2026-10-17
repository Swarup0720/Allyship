import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "ALLYSHIP — Bridging Industry. Academia. A Brighter Tomorrow. | SOA University",
    template: "%s | ALLYSHIP — SOA University",
  },
  description:
    "A curated gathering of corporate leaders, HRs, and change-makers to discuss ideas, build partnerships, and create opportunities with SOA University.",
  keywords: [
    "ALLYSHIP",
    "SOA University",
    "Industry Academia Collaboration",
    "Bhubaneswar",
    "Engineering and Technology",
    "Corporate Partnerships",
    "Research Innovation",
    "Student Talent",
  ],
  authors: [{ name: "SOA University" }],
  creator: "SOA University",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://allyship.soa.ac.in",
    siteName: "ALLYSHIP — SOA University",
    title: "ALLYSHIP — Bridging Industry. Academia. A Brighter Tomorrow.",
    description:
      "A curated gathering of corporate leaders, HRs, and change-makers to discuss ideas, build partnerships, and create opportunities with SOA University.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allyship — Together, We Make Belonging Possible",
    description:
      "Building a world where everyone feels supported, included, and empowered through empathy, understanding, and meaningful action.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${outfit.variable} scroll-smooth`}>
      <body className="font-sans bg-[#FCFCFB] text-slate-900 antialiased min-h-screen flex flex-col selection:bg-orange-100 selection:text-orange-900">
        {/* Skip to Main Content Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-indigo-600 text-white rounded-xl shadow-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Skip to main content
        </a>

        <Suspense fallback={<div className="h-20 bg-white/90 border-b border-slate-200/80" />}>
          <Navbar />
        </Suspense>
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
