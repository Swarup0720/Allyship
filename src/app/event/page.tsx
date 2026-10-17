"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
  Users,
  CheckCircle2,
  Building,
  HelpCircle,
  Play,
  Award,
  Medal,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { GetInvitedModal } from "@/components/GetInvitedModal";

export default function EventPage() {
  const [activeTab, setActiveTab] = useState<"Chapters" | "Speakers" | "Themes" | "Videos">("Chapters");
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const conclaves = [
    {
      id: "bengaluru-1",
      city: "Bengaluru",
      edition: "Allyship++ 1.0 — 1st Edition",
      date: "June 2024",
      venue: "Bengaluru Metropolitan Hub",
      turnout: "~70 Corporate Leaders (incl. Microsoft, Dell, Zscaler)",
      title: "Leadership and Collaboration Across Disciplines",
      desc: "SOA Vice-Chancellor Prof. Pradipta Kumar Nanda delivered the inaugural address on collaborative leadership, followed by an inspiring virtual keynote on ‘Leadership in Sports’ by Olympian and World Championship medalist Anju Bobby George. Senior leaders from Microsoft, Dell, Zscaler, and major global capability centres deliberated on engineering cultures, tech-worker burnout, and hybrid global teams.",
      sportsGuests: [
        { name: "Anju Bobby George", role: "Olympian & First Indian World Athletics Championship Medalist", note: "Virtual Keynote on 'Leadership in Sports'" },
      ],
      leadership: [
        { name: "Prof. Pradipta Kumar Nanda", role: "Vice-Chancellor, SOA University (Inaugural Address)" },
        { name: "Prof. (Dr.) Raj Kumar Hota", role: "Dean, Corporate Relations and Placement, SOA (Convener)" },
      ],
      moderators: [
        { name: "Rajeev Kumar Singh", role: "Chief Strategist, Open Link Foundation" },
      ],
      panelists: [
        { name: "Dr. P.B. Kotur", role: "Global Head, Engineering Academy, L&T Technology Services" },
        { name: "C. Aparna", role: "CHRO, Torry Harris Integration Solutions" },
        { name: "Baliram Mutagekar", role: "Vice President, BNY Mellon" },
        { name: "Dr. S.J. Naganagouda", role: "Chief People Officer, Tally Solutions Pvt Ltd" },
        { name: "Arun Parija", role: "Partner, Coserve Software Solutions" },
      ],
      focus: "Engineering cultures, mitigating tech-worker burnout, hybrid global teams, and cross-disciplinary leadership.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "hyderabad-1",
      city: "Hyderabad (1.0)",
      edition: "Allyship++ 1.0 — 2nd Edition",
      date: "July 26, 2024",
      venue: "Hyderabad Tech Corridor",
      turnout: "60+ Corporate Leaders & HR Professionals",
      title: "Practicing Allyship at the Organizational Level",
      desc: "Former Indian Test cricketer Arshad Ayub joined as Chief Guest to highlight leadership and collaboration in dynamic business environments. Convened by Prof. (Dr.) Raj Kumar Hota alongside Prof. P.K. Patra (Dean, Sponsored Research and Industry Consultancy), CXO advisors, engineering VPs, and CSIR scientists examined how to practice allyship in both professional and personal spheres while accelerating industry-academia R&D.",
      sportsGuests: [
        { name: "Arshad Ayub", role: "Former Indian International Cricketer (Test & ODI)", note: "Chief Guest on Leadership & Collaboration in Dynamic Environments" },
      ],
      leadership: [
        { name: "Prof. (Dr.) Raj Kumar Hota", role: "Dean, Placement, Career Development & Industry Collaboration, SOA (Convener)" },
        { name: "Dr. P.K. Patra", role: "Dean, Sponsored Research & Industry Consultancy, SOA" },
      ],
      moderators: [
        { name: "Collective CXO & Scientific Roundtable", role: "Strategic High-Level Deliberation Format" },
      ],
      panelists: [
        { name: "Rohit Adlakha", role: "CXO Advisor, Human Edge (Enterprises)" },
        { name: "Lavanam Amballa", role: "Talent Acquisition Strategist, Integraminds" },
        { name: "Pushkala Balasubramanian", role: "Vice-President (Engineering), Kloudgin" },
        { name: "Kiranmal Pendyala", role: "Former Strategic Thought Leader, UPS" },
        { name: "Dr. Umesh Udayaprakash", role: "Group Vice-President, Innova" },
        { name: "Dr. Bapuji Maringanti", role: "Scientist, CSIR" },
      ],
      focus: "Practicing allyship at both organizational and personal levels; closer academic-corporate R&D cooperation.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "kolkata-1",
      city: "Kolkata",
      edition: "Allyship++ 1.0 — 3rd Edition",
      date: "September 27, 2024",
      venue: "Kolkata City Hub",
      turnout: "Dual-Panel Conclave & Sports Legends Tribute",
      title: "Bridging Legacy Business, Digital Transformation & DEI",
      desc: "Featuring two powerhouse industry panels spanning cloud consulting, fintech, telecom, and Fortune 500 DEI advisory, the Kolkata chapter also celebrated sporting greatness with 1964 Olympic hockey gold medalist Gurbux Singh, football legend Gautam Sarkar (‘Indian Beckenbauer’), and Satyaprakash Krishna (mentor to M.S. Dhoni), alongside senior IAS officer and SOA alumnus Smruti Ranjan Mohanty.",
      sportsGuests: [
        { name: "Gurbux Singh", role: "1964 Olympic Hockey Gold Medalist", note: "Sports Legend Tribute" },
        { name: "Gautam Sarkar", role: "Former Indian Footballer ('Indian Beckenbauer')", note: "Sports Legend Tribute" },
        { name: "Satyaprakash Krishna", role: "Mentor to Former Indian Cricket Captain M.S. Dhoni", note: "Sponsorship & Grassroots Talent Identification" },
        { name: "Smruti Ranjan Mohanty, IAS", role: "Director of Fisheries & MD of SFDC, Govt. of West Bengal (SOA Alumnus)", note: "Distinguished Public Sector Guest" },
      ],
      leadership: [
        { name: "Prof. (Dr.) Raj Kumar Hota", role: "Dean, Corporate Relations and Placement, SOA (Convener)" },
        { name: "Dr. P.K. Patra", role: "Dean, Sponsored Research & Industry Consultancy, SOA" },
        { name: "Ms. Kajal Panda", role: "Deputy Director, Corporate Relations, SOA" },
      ],
      moderators: [
        { name: "Pradip Bandyopadhyay", role: "Moderator, Panel Two" },
      ],
      panelists: [
        { name: "Brishti Mondal", role: "Vice-President, NRI FinTech" },
        { name: "Rashmita Parija", role: "Country HR Manager, Lexmark India" },
        { name: "Sumit Agarwal", role: "DEI Advisor to Fortune 500 Companies" },
        { name: "Nadeem Kazim", role: "CEO and Founder, Splice HR Works" },
        { name: "Sudipto Ray", role: "Managing Director – Cloud and Digital, PwC" },
        { name: "Amrita Das Gupta", role: "Swayam" },
        { name: "Tumpa Sarkar", role: "President, WICCI" },
        { name: "Debalina Roy", role: "Vodafone" },
        { name: "Saurabh Roy", role: "Deputy General Manager, Reliance Jio Infocom" },
      ],
      focus: "Bridging legacy business and digital transformation, Fortune 500 DEI advisory, and supportive workplace environments.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "mumbai-1",
      city: "Mumbai",
      edition: "Allyship++ 1.0 — 4th Edition",
      date: "October 2025",
      venue: "Mumbai Financial Capital",
      turnout: "~60 Senior Leaders & HR Executives",
      title: "Building Inclusive and Empowered Workplaces",
      desc: "Following an inaugural address on community and leadership by SOA Vice-Chancellor Prof. Pradipta Kumar Nanda, former Indian Test cricketer Nilesh Kulkarni led a fireside conversation on resilience and the evolving landscape of sports and education, joined by Olympian Anand Menezes. Dr. P.B. Kotur moderated a dynamic panel on balancing quarterly growth with employee well-being and psychological safety for junior analysts.",
      sportsGuests: [
        { name: "Nilesh Kulkarni", role: "Former Indian Test Cricketer", note: "Fireside Chat on Leadership, Resilience & Sports Education" },
        { name: "Anand Menezes", role: "Olympian & Senior Consultant, Athletics Federation of India", note: "Keynote on High Performance & Discipline" },
      ],
      leadership: [
        { name: "Prof. Pradipta Kumar Nanda", role: "Vice-Chancellor, SOA University (Inaugural Speech)" },
        { name: "Prof. (Dr.) Raj Kumar Hota", role: "Dean, Corporate Relations and Placement, SOA (Convener)" },
        { name: "Ms. Kajal Panda", role: "Deputy Director, L&D, SOA (Vote of Thanks)" },
      ],
      moderators: [
        { name: "Dr. P.B. Kotur", role: "Author, Motivational Speaker and Corporate Executive" },
      ],
      panelists: [
        { name: "Dr. Brillian S.K.", role: "EVP and Head of HR, Times Professional Learning" },
        { name: "Dr. Meenakshi Banerjee", role: "VP, People and Development, Business Next" },
        { name: "Swapnakant Samal", role: "Head of Talent and Transformation, Protiviti" },
        { name: "Gauri Das", role: "SVP and Head of HR, India Factoring and Finance Solutions Pvt Ltd" },
      ],
      focus: "Allyship: Building Inclusive and Empowered Workplaces; balancing quarterly growth with employee well-being and psychological safety.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "hyderabad-2",
      city: "Hyderabad (2.0)",
      edition: "Allyship++ 2.0 — 1st Edition of 2.0",
      date: "May 15, 2026",
      venue: "Le Meridien, Gachibowli, Hyderabad",
      turnout: "Regional CXOs, Capability Heads & IIT Faculty",
      title: "Practicing Allyship in Gen-Z Leadership",
      desc: "Launching the 2.0 cycle, this conclave explored workforce transformation, psychological safety, learning agility, and the campus-to-corporate transition for Gen-Z professionals. Dr. G. Srinivas Patnaik (Secretary, Athletics Federation of India) shared insights on discipline, trust, and mentorship in nurturing young talent, while SOA Pro-Vice Chancellor Prof. Prasanta Kumar Patra highlighted institutional research milestones.",
      sportsGuests: [
        { name: "Dr. G. Srinivas Patnaik", role: "Secretary, Athletics Federation of India", note: "Fireside Chat on Discipline, Mentorship, Trust & Resilience in Young Talent" },
      ],
      leadership: [
        { name: "Prof. Prasanta Kumar Patra", role: "Pro-Vice Chancellor, SOA University (Institutional Address)" },
        { name: "Prof. (Dr.) Raj Kumar Hota", role: "Dean, Corporate Relations and Placement, SOA (Convener)" },
        { name: "Ms. Kajal Panda", role: "Deputy Director, Corporate Relations, SOA (Vote of Thanks)" },
      ],
      moderators: [
        { name: "Prof. Sanjay Dhir", role: "Professor, IIT Delhi" },
      ],
      panelists: [
        { name: "Rachita Mahadev", role: "Emerging Talent Lead – India and APJ, Akamai Technologies" },
        { name: "Bikram K. Nayak", role: "Vice President – Human Resources, NCC Ltd" },
        { name: "Dr. Reena Das", role: "Chief Human Resource Officer, Keolis Hyderabad" },
        { name: "Ishadarshi P. Mishra", role: "Head of HR – Global Hub, Reckitt" },
      ],
      focus: "Practicing Allyship in Gen-Z Leadership; learning agility, campus-to-corporate transition, and empathetic leadership models.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "chennai-2",
      city: "Chennai (2.0)",
      edition: "Allyship++ 2.0 — 2nd Edition of 2.0",
      date: "July 31, 2026",
      venue: "Chennai Executive Hub",
      turnout: "60+ Industry Leaders, HR Heads & Academicians",
      title: "Practicing Allyship as a Leadership Responsibility",
      desc: "Featuring a fireside chat with high-performance athletics coach and former international sprinter Premanand J. (who trained the Indian national sprint team for the Paris Olympics) on discipline and mentorship, followed by a panel moderated by Standard Chartered’s Global Head Archana Grover. Panelists declared that allyship is not merely an initiative, but a core leadership responsibility driving innovation, trust, and sustainable success.",
      sportsGuests: [
        { name: "Premanand J.", role: "Paris Olympics National Sprint Coach & Former International Sprinter", note: "Fireside Chat on Discipline, High Performance & Mentorship" },
      ],
      leadership: [
        { name: "Prof. Pradipta Kumar Nanda", role: "Vice-Chancellor, SOA University (Address on Future-Ready Workplaces)" },
        { name: "Prof. (Dr.) Raj Kumar Hota", role: "Dean, Corporate Relations and Placement, SOA (Convener)" },
      ],
      moderators: [
        { name: "Archana Grover", role: "Global Head – Capabilities, Transformation and Culture, Standard Chartered" },
      ],
      panelists: [
        { name: "Suganya Veeraraghavan", role: "Assistant Vice-President, Rocket India" },
        { name: "Suresh Aade", role: "Head of Human Resources, Foodhub" },
        { name: "Archana Mukunthan", role: "Senior Manager, Nordex Group" },
        { name: "R.K. Ramachandran", role: "Global Talent Head, KaarTech" },
        { name: "M.D. Joshua David", role: "India Campus Head, Mphasis" },
      ],
      focus: "Practicing Allyship; embedding allyship into everyday culture as a leadership responsibility driving innovation, trust, and sustainable success.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const videos = [
    {
      title: "Chennai Chapter 2.0 | Panel Discussion on Practicing Allyship",
      desc: "Moderated by Standard Chartered's Global Head Archana Grover with talent heads from Rocket India, Foodhub, Nordex, KaarTech, and Mphasis.",
      youtubeId: "yD0eEo0oh7A",
      tag: "Chennai 2.0",
    },
    {
      title: "Chennai Chapter | Fireside Chat with National Coach J. Premanand",
      desc: "High-performance athletics coach for the Paris Olympics sprint team on connecting athletic resilience with Gen-Z mentorship.",
      youtubeId: "0vOCqqE4zbI",
      tag: "Olympics & Leadership",
    },
    {
      title: "Hyderabad Chapter | Allyship++ Conclave Film",
      desc: "Official highlights from the Hyderabad conclave deliberating Gen-Z workforce expectations, learning agility, and industry-academia CoEs.",
      youtubeId: "8wSGKsWyQwk",
      tag: "Hyderabad Conclave",
    },
  ];

  const currentConclave = conclaves[selectedChapter];

  return (
    <div className="flex flex-col w-full bg-[#f8fafc] text-slate-900 pb-20">
      {/* 1. Dark Photographic Hero Section */}
      <section className="relative bg-[#070d18] text-white pt-12 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-block">
              <span className="px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/60 text-blue-400 text-[11px] font-mono font-bold tracking-widest uppercase">
                Master Conclave Series · 2024–2026
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
              Allyship<span className="text-cyan-400 font-mono">++</span> Conclaves
            </h1>

            <p className="text-lg sm:text-xl font-bold text-slate-200">
              6 Conclaves Across 5 Metropolitan Capitals
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              From Bengaluru and Hyderabad to Kolkata, Mumbai, and Chennai, Siksha ‘O’ Anusandhan has built a continuous national bridge connecting over 400 corporate CXOs, Olympic medalists, and academic leaders.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsInviteOpen(true)}
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide shadow-md shadow-blue-600/30 transition-all flex items-center gap-2"
              >
                <span>Request Executive Invitation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80"
                alt="Allyship++ National Conclave Main Stage"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-5">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  Editions 1.0 & 2.0
                </span>
                <span className="text-sm font-bold text-white mt-0.5">
                  Bridging Industry, Sports & Academia
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Top-Level Tab Switcher */}
      <section className="bg-white border-b border-slate-200 sticky top-20 z-30 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto py-2.5">
          {(["Chapters", "Speakers", "Themes", "Videos"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setActiveTab(t)}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === t
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {t === "Chapters" && "All 6 Chapters (1.0 & 2.0)"}
              {t === "Speakers" && "Marquee Speakers Roster"}
              {t === "Themes" && "Strategic Themes & Evolution"}
              {t === "Videos" && "Official Conclave Videos"}
            </button>
          ))}
        </div>
      </section>

      {/* 3. MAIN TAB CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* TAB 1: ALL 6 CHAPTERS */}
        {activeTab === "Chapters" && (
          <div className="space-y-8">
            {/* City Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {conclaves.map((c, idx) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedChapter(idx)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedChapter === idx
                      ? "bg-blue-50 border-blue-600 ring-2 ring-blue-500/20"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold text-blue-600 block">
                    {c.date}
                  </span>
                  <span className="text-xs font-bold text-slate-900 block truncate mt-0.5">
                    {c.city}
                  </span>
                  <span className="text-[10px] text-slate-500 block truncate">
                    {c.edition.includes("2.0") ? "Edition 2.0" : "Edition 1.0"}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Conclave Detail Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-8">
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold">
                      {currentConclave.edition}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                      {currentConclave.date}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {currentConclave.city}: {currentConclave.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" />
                      {currentConclave.venue}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-blue-600" />
                      {currentConclave.turnout}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsInviteOpen(true)}
                  className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide shrink-0 transition-all shadow-sm"
                >
                  Join Future Conclaves
                </button>
              </div>

              {/* Narrative Description */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Conclave Overview & Strategic Dialogue
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {currentConclave.desc}
                </p>
                <div className="pt-2">
                  <span className="inline-block text-xs font-semibold text-blue-900 bg-blue-50/80 px-3 py-1 rounded-lg border border-blue-200">
                    Key Focus: {currentConclave.focus}
                  </span>
                </div>
              </div>

              {/* Sports Legends & Special Chief Guests */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-amber-600">
                  <Medal className="w-4 h-4" />
                  <h3 className="text-xs font-bold uppercase tracking-wider font-mono">
                    Sports Icons & Keynote Guests
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentConclave.sportsGuests.map((sg) => (
                    <div key={sg.name} className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-1">
                      <div className="text-sm font-bold text-slate-900">{sg.name}</div>
                      <div className="text-xs font-medium text-amber-800">{sg.role}</div>
                      <div className="text-[11px] text-slate-600 italic">{sg.note}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Moderators & Corporate Panelists */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-blue-600">
                  <Users className="w-4 h-4" />
                  <h3 className="text-xs font-bold uppercase tracking-wider font-mono">
                    Moderator & Corporate Panelists
                  </h3>
                </div>
                
                {/* Moderators */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentConclave.moderators.map((m) => (
                    <div key={m.name} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] font-mono font-bold text-blue-600 uppercase">Moderator</span>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">{m.name}</div>
                      <div className="text-xs text-slate-500">{m.role}</div>
                    </div>
                  ))}
                </div>

                {/* Panelists */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                  {currentConclave.panelists.map((p) => (
                    <div key={p.name} className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-blue-300 transition-colors">
                      <span className="text-[10px] font-mono text-slate-400 uppercase">Panelist</span>
                      <div className="text-xs font-bold text-slate-900 mt-0.5">{p.name}</div>
                      <div className="text-[11px] text-slate-600 mt-0.5 leading-snug">{p.role}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SOA Leadership Delegation */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-indigo-600">
                  <Building className="w-4 h-4" />
                  <h3 className="text-xs font-bold uppercase tracking-wider font-mono">
                    SOA University Institutional Delegation
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentConclave.leadership.map((l) => (
                    <div key={l.name} className="p-3.5 rounded-xl bg-indigo-50/50 border border-indigo-200/60">
                      <div className="text-xs font-bold text-slate-900">{l.name}</div>
                      <div className="text-[11px] text-indigo-700 mt-0.5">{l.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MARQUEE SPEAKERS ROSTER */}
        {activeTab === "Speakers" && (
          <div className="space-y-8">
            <div className="max-w-3xl space-y-2">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Marquee Speakers, Sports Icons & CXO Leaders
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Over 40 distinguished corporate leaders, Olympic medalists, international athletes, and academic dignitaries across all six Allyship++ conclaves.
              </p>
            </div>

            {/* Sports & Keynote Icons */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-700">
                <Medal className="w-5 h-5" />
                <h3 className="text-sm font-bold uppercase tracking-wider font-mono">
                  Olympic Champions & Indian Sports Legends
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: "Anju Bobby George", chapter: "Bengaluru 1.0", role: "Olympian & World Athletics Medalist", note: "Keynote on Leadership in Sports" },
                  { name: "Arshad Ayub", chapter: "Hyderabad 1.0", role: "Former Indian Test & ODI Cricketer", note: "Chief Guest on Collaborative Leadership" },
                  { name: "Gurbux Singh", chapter: "Kolkata 1.0", role: "1964 Olympic Hockey Gold Medalist", note: "Sports Legend Tribute" },
                  { name: "Gautam Sarkar", chapter: "Kolkata 1.0", role: "Former Indian Footballer ('Indian Beckenbauer')", note: "Sports Legend Tribute" },
                  { name: "Satyaprakash Krishna", chapter: "Kolkata 1.0", role: "Mentor to Former Indian Cricket Captain M.S. Dhoni", note: "Sponsorship & Talent Spotting" },
                  { name: "Nilesh Kulkarni", chapter: "Mumbai 1.0", role: "Former Indian Test Cricketer", note: "Fireside Chat on Resilience & Education" },
                  { name: "Anand Menezes", chapter: "Mumbai 1.0", role: "Olympian & Senior Consultant, AFI", note: "Keynote on Athletic High-Performance" },
                  { name: "Dr. G. Srinivas Patnaik", chapter: "Hyderabad 2.0", role: "Secretary, Athletics Federation of India", note: "Mentorship & Resilience in Young Talent" },
                  { name: "Premanand J.", chapter: "Chennai 2.0", role: "Paris Olympics National Sprint Coach", note: "Discipline, Mentorship & Gen-Z Leadership" },
                ].map((s) => (
                  <div key={s.name} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-amber-400 transition-colors">
                    <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                      {s.chapter}
                    </span>
                    <div className="text-sm font-bold text-slate-900 mt-2">{s.name}</div>
                    <div className="text-xs font-medium text-slate-700 mt-0.5">{s.role}</div>
                    <div className="text-[11px] text-slate-500 mt-1 italic">{s.note}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate & CXO Leaders */}
            <div className="space-y-4 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 text-blue-700">
                <Users className="w-5 h-5" />
                <h3 className="text-sm font-bold uppercase tracking-wider font-mono">
                  Corporate CXOs, CHROs & Capability Heads
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Dr. P.B. Kotur", role: "Global Head, Engineering Academy, LTTS", chapter: "Bengaluru & Mumbai" },
                  { name: "Archana Grover", role: "Global Head – Capabilities, Standard Chartered", chapter: "Chennai 2.0" },
                  { name: "Prof. Sanjay Dhir", role: "Professor, IIT Delhi", chapter: "Hyderabad 2.0" },
                  { name: "C. Aparna", role: "CHRO, Torry Harris Integration Solutions", chapter: "Bengaluru 1.0" },
                  { name: "Baliram Mutagekar", role: "Vice President, BNY Mellon", chapter: "Bengaluru 1.0" },
                  { name: "Pushkala Balasubramanian", role: "VP – Engineering, Kloudgin", chapter: "Hyderabad 1.0" },
                  { name: "Rohit Adlakha", role: "CXO Advisor, Human Edge Enterprises", chapter: "Hyderabad 1.0" },
                  { name: "Kiranmal Pendyala", role: "Former Strategic Thought Leader, UPS", chapter: "Hyderabad 1.0" },
                  { name: "Sudipto Ray", role: "MD – Cloud & Digital, PwC", chapter: "Kolkata 1.0" },
                  { name: "Brishti Mondal", role: "Vice President, NRI FinTech", chapter: "Kolkata 1.0" },
                  { name: "Sumit Agarwal", role: "DEI Advisor to Fortune 500 Companies", chapter: "Kolkata 1.0" },
                  { name: "Dr. Brillian S.K.", role: "EVP & Head HR, Times Professional Learning", chapter: "Mumbai 1.0" },
                  { name: "Rachita Mahadev", role: "Emerging Talent Lead – APJ, Akamai Technologies", chapter: "Hyderabad 2.0" },
                  { name: "Dr. Reena Das", role: "CHRO, Keolis Hyderabad", chapter: "Hyderabad 2.0" },
                  { name: "Suganya Veeraraghavan", role: "AVP, Rocket India", chapter: "Chennai 2.0" },
                  { name: "Suresh Aade", role: "Head HR, Foodhub", chapter: "Chennai 2.0" },
                  { name: "R.K. Ramachandran", role: "Global Talent Head, KaarTech", chapter: "Chennai 2.0" },
                  { name: "M.D. Joshua David", role: "India Campus Head, Mphasis", chapter: "Chennai 2.0" },
                ].map((c) => (
                  <div key={c.name} className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 transition-colors">
                    <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {c.chapter}
                    </span>
                    <div className="text-xs font-bold text-slate-900 mt-2">{c.name}</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">{c.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: THEMES & STRATEGIC EVOLUTION */}
        {activeTab === "Themes" && (
          <div className="space-y-8">
            <div className="max-w-3xl space-y-2">
              <h2 className="text-2xl font-extrabold text-slate-900">
                The Strategic Arc: Allyship++ 1.0 to 2.0
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                How the conclave series evolved from establishing foundational corporate-academic trust to operationalizing daily allyship for Gen-Z talent.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Phase I Card */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-4">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-mono text-xs font-bold">
                  Phase I: Allyship++ 1.0 (2024–2025)
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Dismantling Geographical & Institutional Distance
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  SOA University systematically brought an academic hub in Bhubaneswar directly into the corporate boardrooms of Bengaluru, Hyderabad, Kolkata, and Mumbai. Engaging 60 to 70 leaders per city, Phase I demonstrated that academic institutions must collaborate continuously with industry to navigate cloud engineering burnout, hybrid team dynamics, and Fortune 500 DEI mandates.
                </p>
                <div className="pt-2 border-t border-slate-100 text-xs text-slate-500">
                  Chapters: Bengaluru · Hyderabad 1.0 · Kolkata · Mumbai
                </div>
              </div>

              {/* Phase II Card */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-4">
                <span className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 font-mono text-xs font-bold">
                  Phase II: Allyship++ 2.0 (2026)
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Practicing Allyship: Gen-Z Mentorship & Daily Responsibility
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Pivoting from <i>why</i> inclusion matters to <i>how</i> enterprises operationalize it daily. Moderated by IIT Delhi’s Prof. Sanjay Dhir in Hyderabad and Standard Chartered’s Global Head Archana Grover in Chennai, leaders addressed the expectations of Gen-Z digital natives—codifying allyship not as an isolated HR program, but as a core leadership responsibility driving psychological safety and innovation.
                </p>
                <div className="pt-2 border-t border-slate-100 text-xs text-slate-500">
                  Chapters: Hyderabad 2.0 (May 2026) · Chennai 2.0 (July 2026)
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: OFFICIAL CONCLAVE VIDEOS */}
        {activeTab === "Videos" && (
          <div className="space-y-8">
            <div className="max-w-3xl space-y-2">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Official Conclave Video Recordings & Fireside Chats
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Watch full panel deliberations and keynote fireside chats from the Chennai, Hyderabad, and national chapters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videos.map((v) => (
                <div key={v.title} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
                  <div className="relative aspect-video bg-black flex items-center justify-center">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        {v.tag}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 mt-2 line-clamp-2">
                        {v.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-3">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Global Invitation Modal */}
      <GetInvitedModal isOpen={isInviteOpen} onClose={() => setIsInviteOpen(false)} />
    </div>
  );
}
