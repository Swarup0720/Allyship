"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Play,
  ArrowRight,
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Globe,
  Building,
  Trophy,
  FileText,
  Rocket,
  CheckCircle2,
  Sparkles,
  X,
} from "lucide-react";
import { GetInvitedModal } from "@/components/GetInvitedModal";

export default function DiscoverSoaPage() {
  const [activeTab, setActiveTab] = useState<string>("Overview");
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);

  const tabs = [
    "Overview",
    "Research",
    "Innovation",
    "Talent",
    "Infrastructure",
    "Achievements",
  ];

  const universityStats = [
    { value: "25+", label: "Schools & Departments" },
    { value: "30,000+", label: "Students" },
    { value: "1,200+", label: "Faculty Members" },
    { value: "150+", label: "Research Projects" },
    { value: "50+", label: "Global Collaborations" },
  ];

  const researchProjects = [
    {
      title: "AI for Healthcare Access",
      badge: "Artificial Intelligence",
      desc: "An AI-powered platform to improve early disease detection in rural areas.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Clean Energy Solutions",
      badge: "Sustainable Tech",
      desc: "Research on affordable and scalable renewable energy systems.",
      image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Assistive Robotics",
      badge: "Robotics",
      desc: "Student-built robots to support people with disabilities.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const infrastructureItems = [
    {
      title: "Advanced Research Labs",
      desc: "State-of-the-art facilities for AI, biotechnology, and nano-materials.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Incubation & Startup Support",
      desc: "Center for Innovation and Incubation providing seed capital and labs.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Modern Learning Spaces",
      desc: "Smart lecture halls, collaborative hubs, and high-performance computing.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80",
    },
  ];

  const achievements = [
    {
      title: "Top Rankings",
      desc: "Among leading universities in India (NIRF Ranked)",
      icon: Trophy,
    },
    {
      title: "Patents & Publications",
      desc: "180+ in recent years",
      icon: FileText,
    },
    {
      title: "Global Partnerships",
      desc: "With universities and companies worldwide",
      icon: Globe,
    },
    {
      title: "Student Startups",
      desc: "50+ supported on campus",
      icon: Rocket,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#f8fafc] text-slate-900 pb-20">
      {/* 1. Dark Photographic Hero matching Reference */}
      <section className="relative bg-[#070d18] text-white pt-12 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
              MORE THAN A UNIVERSITY
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
              Discover SOA
            </h1>

            <p className="text-lg sm:text-xl font-bold text-slate-100">
              A hub of talent, research, innovation and impact.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Explore how SOA is shaping future-ready talent and real-world solutions through world-edge research, state-of-the-art infrastructure and a vibrant innovation ecosystem.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsTourOpen(true)}
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide transition-all flex items-center gap-2 shadow-md shadow-blue-600/30"
              >
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
                </div>
                <span>Take a Virtual Tour</span>
              </button>
            </div>
          </div>

          {/* Right Campus Photo matching reference domed building */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80"
                alt="SOA University Grand Campus Dome"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-5">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                  Main Academic Complex
                </span>
                <span className="text-sm font-bold text-white mt-0.5">
                  SOA Deemed to be University
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Horizontal Tabs Bar matching Reference */}
      <section className="bg-white border-b border-slate-200 sticky top-20 z-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto py-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === tab
                  ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600 font-extrabold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* 3. University Statistics Bar matching Reference */}
      <section className="bg-white border-b border-slate-200 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {universityStats.map((st) => (
            <div key={st.label} className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-sans tracking-tight">
                {st.value}
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Research & Innovation Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Research & Innovation
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Interdisciplinary breakthroughs addressing healthcare, energy and accessibility.
            </p>
          </div>
          <Link
            href="/collaborate"
            className="text-xs font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Project Cards matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchProjects.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              <div className="h-44 w-full overflow-hidden bg-slate-100 relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-600 text-white text-[10px] font-bold tracking-wide uppercase">
                    {p.badge}
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-600 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. World-Class Infrastructure Section matching Reference */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          <div className="lg:col-span-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              World-Class Infrastructure
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              Modern labs, research centres and learning spaces that foster innovation and collaboration.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              type="button"
              onClick={() => setIsTourOpen(true)}
              className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide transition-colors"
            >
              Explore Infrastructure →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {infrastructureItems.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group"
            >
              <div className="h-40 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Our Achievements Section matching Reference */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Achievements
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              National recognition, patents and global institutional standing.
            </p>
          </div>
          <span className="text-xs font-bold text-blue-600 inline-flex items-center gap-1 cursor-pointer">
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((a) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{a.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {a.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Virtual Tour Modal */}
      {isTourOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in"
        >
          <div className="relative w-full max-w-3xl bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl text-white">
            <div className="p-4 bg-slate-950 flex items-center justify-between text-xs font-bold">
              <span>SOA University Campus • Virtual 360 Tour</span>
              <button
                type="button"
                onClick={() => setIsTourOpen(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8 text-center space-y-4">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
                alt="SOA University Campus"
                className="w-full h-64 object-cover rounded-xl"
              />
              <h3 className="text-xl font-bold">Siksha 'O' Anusandhan Main Campus</h3>
              <p className="text-xs text-slate-300 max-w-lg mx-auto">
                Discover our 125-acre campus in Bhubaneswar featuring high-performance computing centers, super-specialty hospitals, research towers, and green learning pavilions.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsTourOpen(false)}
                  className="px-6 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold"
                >
                  Close Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Invitation Modal */}
      <GetInvitedModal isOpen={isInviteOpen} onClose={() => setIsInviteOpen(false)} />
    </div>
  );
}
