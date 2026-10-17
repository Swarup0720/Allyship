"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { GetInvitedModal } from "./GetInvitedModal";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Event", href: "/event" },
    { name: "Discover SOA", href: "/discover-soa" },
    { name: "Collaborate", href: "/collaborate" },
    { name: "Impact", href: "/impact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#070d18]/95 backdrop-blur-md border-b border-slate-800/80 text-white transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo matching Reference Image: SOA UNIVERSITY */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl py-1 px-1.5"
            >
              {/* SOA University Orbital Emblem */}
              <div className="w-10 h-10 rounded-full border border-blue-400/40 bg-gradient-to-br from-blue-950 to-slate-900 flex items-center justify-center text-blue-400 shadow-sm group-hover:border-blue-400 transition-colors">
                <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
                  {/* Orbiting rings */}
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
                  {/* Core hub */}
                  <circle cx="16" cy="16" r="3.2" fill="#FFFFFF" />
                </svg>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-base sm:text-lg font-extrabold tracking-wider text-white font-sans uppercase">
                    SOA
                  </span>
                  <span className="text-xs sm:text-sm font-semibold tracking-widest text-slate-300 font-sans uppercase">
                    UNIVERSITY
                  </span>
                </div>
                <span className="text-[10px] tracking-wider text-blue-400 font-mono font-medium -mt-1 hidden sm:block">
                  ALLYSHIP 2025
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links in EXACT required order */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-xs font-semibold tracking-wide transition-colors relative py-1 ${
                      active
                        ? "text-blue-400 font-bold"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button: Get Invited in bright blue */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsInviteOpen(true)}
                className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold tracking-wide shadow-md shadow-blue-600/30 hover:shadow-blue-600/40 transition-all flex items-center gap-2"
              >
                <span>Get Invited</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setIsInviteOpen(true)}
                className="px-3.5 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold"
              >
                Get Invited
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-[#070d18]/98 backdrop-blur-2xl animate-in slide-in-from-top-4 duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-3">
              <div className="grid grid-cols-1 gap-1">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                        active
                          ? "bg-blue-950/60 text-blue-400 font-bold border border-blue-800/40"
                          : "text-slate-300 hover:bg-slate-900"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 text-slate-500" />
                    </Link>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsInviteOpen(true);
                  }}
                  className="w-full py-3 rounded-xl bg-blue-600 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Invitation (Get Invited)</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Invitation Request Modal */}
      <GetInvitedModal isOpen={isInviteOpen} onClose={() => setIsInviteOpen(false)} />
    </>
  );
}
