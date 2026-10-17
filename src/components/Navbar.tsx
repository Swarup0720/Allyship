"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Home,
  Calendar,
  TrendingUp,
  Compass,
  Users,
} from "lucide-react";
import { GetInvitedModal } from "./GetInvitedModal";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Event", href: "/event", icon: Calendar },
    { name: "Impact", href: "/impact", icon: TrendingUp },
    { name: "Discover", href: "/discover-soa", icon: Compass },
    { name: "Collaborate", href: "/collaborate", icon: Users },
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
            {/* Brand Logo with official SOA University Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl py-1 px-1.5"
            >
              {/* SOA University Official Emblem */}
              <div className="w-11 h-11 relative flex items-center justify-center rounded-full bg-white p-1 shadow-md shadow-blue-500/10 border border-slate-700/60 group-hover:border-blue-400/60 transition-all">
                <img
                  src="/soa-logo.png"
                  alt="Siksha 'O' Anusandhan (SOA) University Logo"
                  className="w-full h-full object-contain"
                />
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
                <span className="text-[10px] tracking-wider text-cyan-400 font-mono font-bold -mt-1 hidden sm:block">
                  ALLYSHIP++
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links — Fancy Floating Capsule Dock */}
            <nav className="hidden lg:flex items-center p-1.5 rounded-full bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 shadow-xl shadow-black/40 gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 group ${
                      active
                        ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white font-bold shadow-lg shadow-blue-500/35 border border-blue-400/50 scale-[1.03]"
                        : "text-slate-300 hover:text-white hover:bg-white/10 hover:border-slate-700/60 border border-transparent"
                    }`}
                  >
                    <Icon
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        active
                          ? "text-cyan-300 scale-110"
                          : "text-slate-400 group-hover:text-cyan-300 group-hover:scale-110"
                      }`}
                    />
                    <span>{link.name}</span>
                    {active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#67e8f9] animate-pulse" />
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
                className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold tracking-wide shadow-md shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-105 transition-all flex items-center gap-2 border border-blue-400/30"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
                <span>Get Invited</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setIsInviteOpen(true)}
                className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-md shadow-blue-600/30"
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-4">
              <div className="grid grid-cols-1 gap-2">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`px-4 py-3 rounded-2xl text-sm font-semibold flex items-center justify-between transition-all duration-200 ${
                        active
                          ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white font-bold shadow-lg shadow-blue-600/30 border border-blue-400/40"
                          : "text-slate-300 hover:bg-slate-900/80 hover:text-white border border-slate-800/60"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                            active
                              ? "bg-white/20 text-white"
                              : "bg-slate-800 text-slate-400"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span>{link.name}</span>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 ${
                          active ? "text-cyan-300" : "text-slate-500"
                        }`}
                      />
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
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
                >
                  <Sparkles className="w-4 h-4 text-cyan-300" />
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
