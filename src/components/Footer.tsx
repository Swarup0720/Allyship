"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  CheckCircle2,
  Globe,
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubscribed(true);
      setEmail("");
    }, 500);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Event", href: "/event" },
    { name: "Discover SOA", href: "/discover-soa" },
    { name: "Collaborate", href: "/collaborate" },
    { name: "Impact", href: "/impact" },
  ];

  return (
    <footer className="bg-[#070d18] text-slate-300 pt-16 pb-12 border-t border-slate-800/80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-blue-400/40 bg-gradient-to-br from-blue-950 to-slate-900 flex items-center justify-center text-blue-400 shadow-sm">
                <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
                  <ellipse
                    cx="16"
                    cy="16"
                    rx="12"
                    ry="5"
                    transform="rotate(-25 16 16)"
                    stroke="#3B82F6"
                    strokeWidth="1.8"
                    strokeDasharray="2 1.5"
                  />
                  <ellipse
                    cx="16"
                    cy="16"
                    rx="12"
                    ry="5"
                    transform="rotate(35 16 16)"
                    stroke="#60A5FA"
                    strokeWidth="1.8"
                  />
                  <circle cx="16" cy="16" r="3.2" fill="#FFFFFF" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white tracking-wider font-sans">
                  SOA UNIVERSITY
                </span>
                <span className="text-[11px] font-bold text-blue-400 tracking-widest uppercase -mt-0.5">
                  ALLYSHIP 2025
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              “Bridging Industry. Academia. A Brighter Tomorrow.”
            </p>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              A curated gathering of corporate leaders, HRs, and change-makers to discuss ideas, build partnerships, and create opportunities with SOA University.
            </p>

            {/* Newsletter form */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-200 block mb-2">
                Stay Updated with Event Announcements
              </span>
              {subscribed ? (
                <div className="p-3 bg-blue-950/60 border border-blue-600/40 rounded-xl flex items-center gap-2 text-xs text-blue-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Thank you! You are subscribed to Allyship briefings.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-1.5 max-w-sm">
                  <div className="relative flex items-center">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your corporate email"
                      className="w-full pl-4 pr-24 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="absolute right-1.5 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors"
                    >
                      {isLoading ? "Joining..." : "Subscribe"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Initiatives & Pillars */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Focus Pillars
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Exchange Ideas & Thought Leadership</li>
              <li>Research & Industry Pilots</li>
              <li>Talent Mentorship & Hiring</li>
              <li>Incubation & Startup Labs</li>
              <li>Executive Roundtables</li>
            </ul>
          </div>

          {/* Contact & Venue */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Venue & Secretariat
            </h3>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-200 font-semibold">SOA University Campus:</span>
                  <span>Khandagiri Square, Bhubaneswar, Odisha 751030, India</span>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-200 font-semibold">Inquiries:</span>
                  <a href="mailto:allyship@soa.ac.in" className="hover:text-white underline">
                    allyship@soa.ac.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Globe className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-200 font-semibold">Official Portal:</span>
                  <a href="https://www.soa.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                    www.soa.ac.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © 2025 SOA University. Allyship: Bridging Industry. Academia. A Brighter Tomorrow.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">
              Terms of Participation
            </Link>
            <span>•</span>
            <Link href="/about" className="hover:text-slate-200 transition-colors">
              About SOA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
