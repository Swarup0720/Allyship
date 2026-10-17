"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Compass,
  Building2,
  GraduationCap,
  Target,
  ArrowRight,
  Award,
  Globe,
  ExternalLink,
  Code2,
  CheckCircle2,
  Medal,
  Terminal,
  Layers,
} from "lucide-react";
import { GetInvitedModal } from "@/components/GetInvitedModal";

export default function AboutPage() {
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  // The 7 Roles of Workplace Allyship (Karen Catlin Framework) + 3-Question Test
  const allyshipRoles = [
    {
      role: "1. Sponsor",
      action: "Using institutional clout to open doors behind closed doors.",
      practice: "Recommending qualified junior associates, Gen-Z hires, or underrepresented colleagues for high-visibility stretch projects, leadership panels, and promotions, backed by specific performance evidence.",
      badge: "Institutional Clout",
    },
    {
      role: "2. Champion",
      action: "Publicly backing and endorsing emerging talent in high-stakes forums.",
      practice: "Actively introducing junior engineers and analysts to senior stakeholders during town halls, client reviews, and cross-functional summits so their expertise is visible across the enterprise.",
      badge: "Public Advocacy",
    },
    {
      role: "3. Amplifier",
      action: "Ensuring credit is accurately attributed when ideas are voiced.",
      practice: "Intervening in meetings when a colleague's idea is overlooked or repeated by someone else—bringing the point back to the table and explicitly naming the individual who originated it.",
      badge: "Credit Attribution",
    },
    {
      role: "4. Advocate",
      action: "Leveraging positional authority to remove structural barriers.",
      practice: "Auditing hiring criteria, hybrid work policies, and performance evaluation rubrics to widen access and eliminate systemic bias across engineering and business teams.",
      badge: "Structural Reform",
    },
    {
      role: "5. Scholar",
      action: "Taking personal responsibility for learning about workplace barriers.",
      practice: "Independently researching generational shifts, neurodiversity, and inclusion challenges—listening first in Employee Resource Groups (ERGs) so marginalized or junior staff are not forced to do the teaching.",
      badge: "Continuous Learning",
    },
    {
      role: "6. Upstander",
      action: "Speaking up calmly and immediately when a comment or action crosses a line.",
      practice: "Rejecting bystander silence during microaggressions or unfair criticism in real time, then checking in privately with the affected colleague to ask what form of support they prefer.",
      badge: "Real-time Intervention",
    },
    {
      role: "7. Confidante",
      action: "Creating a trusted environment of psychological safety and active listening.",
      practice: "Designing team cultures where Gen-Z professionals, junior analysts, and diverse team members feel safe to voice concerns, admit knowledge gaps, and seek mentorship without fear of retaliation.",
      badge: "Psychological Safety",
    },
    {
      role: "8. The 3-Question Litmus Test",
      action: "Separating genuine advocacy from performative optics.",
      practice: "Every allyship action must pass: (1) Personal Cost Test: Does it cost the leader comfort, time, or political capital? (2) Outcome Shift Test: Does it tangibly change what happens to the colleague? (3) Unobserved Integrity Test: Would it still happen behind closed doors if no one were watching?",
      badge: "Authenticity Guardrail",
    },
  ];

  // Six-Step HR Implementation Blueprint
  const hrBlueprint = [
    {
      step: "Step 1",
      title: "Define Observable Behaviors",
      desc: "Replace vague 'be an ally' slogans with 3 to 5 concrete habits—such as crediting ideas in meetings, recommending talent for stretch roles, and speaking up calmly when boundaries are crossed.",
    },
    {
      step: "Step 2",
      title: "Train Managers First",
      desc: "Prioritize line managers before the general workforce because managers control daily feedback, project visibility, and promotion velocity; focus on fair constructive feedback and inclusive meeting facilitation.",
    },
    {
      step: "Step 3",
      title: "Institutionalize Psychological Safety",
      desc: "Establish transparent reporting channels, guaranteed follow-up, and non-retaliation protections so employees can act as Upstanders and Confidantes without fear of career penalty.",
    },
    {
      step: "Step 4",
      title: "Support Employee Resource Groups (ERGs)",
      desc: "Invite senior allies to attend ERG sessions with an explicit mandate to listen first and do their own learning, ensuring underrepresented colleagues are never burdened with unpaid teaching.",
    },
    {
      step: "Step 5",
      title: "Recognize & Embed Allyship",
      desc: "Weave inclusive mentorship and allyship behaviors into formal leadership expectations and performance appraisals rather than treating them as optional side initiatives.",
    },
    {
      step: "Step 6",
      title: "Measure, Act & Avoid Pitfalls",
      desc: "Audit inclusion outcomes while avoiding legal and cultural pitfalls: never assume holiday or identity preferences, never collect intrusive personal data, and widen access via transparent criteria rather than group quotas.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#f8fafc] text-slate-900 pb-20">
      {/* 1. Dark Hero Section */}
      <section className="relative bg-[#070d18] text-white pt-14 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block">
            <span className="px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/60 text-blue-400 text-[11px] font-mono font-bold tracking-widest uppercase">
              About the Initiative
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
            Why “Allyship<span className="text-cyan-400 font-mono">++</span>”?
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto font-medium">
            Allyship is the deliberate, ongoing practice in which leaders with institutional power work in active solidarity with emerging and underrepresented talent. The “++” signifies continuous evolution—incrementing inclusion day after day.
          </p>
        </div>
      </section>

      {/* 2. Institutional Narrative & The Code Visual Block */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Restored 3-Paragraph Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
              The Genesis of Allyship++
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Industry and Academia, in the Same Room
            </h2>
            
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              For decades, university placement in India operated as a yearly, one-way transaction: institutions waited on campus for recruiters to arrive. Allyship++ reverses that equation. Siksha ‘O’ Anusandhan travels directly to the corporate boardrooms of Bengaluru, Hyderabad, Kolkata, Mumbai, and Chennai to listen first. While a diversity policy states what an organisation intends on paper, allyship determines what happens on an ordinary Tuesday—who receives credit in a meeting, who is sponsored for a stretch project, and who speaks up when a boundary is crossed.
            </p>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              The “++” carries a dual meaning rooted in engineering and organizational leadership: in programming, the <code className="text-blue-600 bg-blue-50 px-1 py-0.5 rounded font-mono font-semibold">++</code> operator increments a value by one step at a time, and marks the historic leap from procedural C to object-oriented C++. Applied to corporate-academic leadership, Allyship++ represents a continuous, compounding upgrade—expanding traditional DEI to encompass generational allyship for Gen-Z professionals, psychological safety for junior analysts, and co-created curricula between universities and employers.
            </p>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Uniquely, every Allyship++ chapter pairs corporate HR and technology panels with India’s sporting legends—from Olympic gold medalist Gurbux Singh and athletics pioneer Anju Bobby George to Test cricketers Arshad Ayub and Nilesh Kulkarni, and Paris Olympics sprint coach Premanand J.—proving that the mentorship, discipline, and trust that win medals in the arena are identical to the allyship that builds high-performing teams in the boardroom.
            </p>
          </div>

          {/* Right Column: Restored .code visual block */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#070d18] border border-slate-800 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>AllyshipIncrement.ts</span>
                </div>
              </div>
              
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-200 overflow-x-auto space-y-3">
                <div className="text-slate-500 italic">
                  // Legacy Industry-Academia Model (Transactional)
                </div>
                <div>
                  <span className="text-red-400">placement</span>.<span className="text-yellow-300">mode</span> = <span className="text-green-300">&quot;annual_one_way_recruitment&quot;</span>;
                </div>
                <div>
                  <span className="text-red-400">inclusion</span>.<span className="text-yellow-300">scope</span> = <span className="text-green-300">&quot;policy_statement_only&quot;</span>;
                </div>

                <div className="pt-2 text-slate-500 italic">
                  // The SOA Allyship++ Upgrade (Co-Created & Continuous)
                </div>
                <div>
                  <span className="text-purple-400">while</span> (<span className="text-blue-400">workplace</span>.<span className="text-yellow-300">evolves</span>()) &#123;
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400 font-bold">allyship++</span>; <span className="text-slate-500 italic">// Continuous daily increment</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">boardroom</span>.<span className="text-yellow-300">listenFirst</span>([
                  <br />
                  &nbsp;&nbsp;<span className="text-emerald-300">&quot;Bengaluru&quot;</span>, <span className="text-emerald-300">&quot;Hyderabad&quot;</span>, <span className="text-emerald-300">&quot;Kolkata&quot;</span>, <span className="text-emerald-300">&quot;Mumbai&quot;</span>, <span className="text-emerald-300">&quot;Chennai&quot;</span>
                  <br />
                  ]);
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">leadership</span>.<span className="text-yellow-300">embed</span>(
                  <br />
                  &nbsp;&nbsp;<span className="text-emerald-300">&quot;Psychological_Safety&quot;</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-emerald-300">&quot;GenZ_Mentorship&quot;</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-emerald-300">&quot;Sponsor_Talent&quot;</span>
                  <br />
                  );
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">curriculum</span>.<span className="text-yellow-300">syncWith</span>(<span className="text-blue-400">industry</span>.<span className="text-yellow-300">realWorldChallenges</span>);
                </div>
                <div>&#125;</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW SECTION: FROM POLICY TO PRACTICE — THE 7 ROLES OF WORKPLACE ALLYSHIP */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
            Behavioral Framework & Governance
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            From Policy to Practice: The 7 Roles of Workplace Allyship
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Grounded in Karen Catlin’s <i>Better Allies</i> framework and insights from 40+ CXO panelists across SOA’s conclaves, authentic allyship is defined by seven observable leadership behaviors and a three-part authenticity test.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allyshipRoles.map((r, i) => (
            <div
              key={r.role}
              className={`rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                i === 7
                  ? "bg-gradient-to-br from-blue-900 to-slate-900 text-white border-blue-700 shadow-lg md:col-span-2 lg:col-span-1"
                  : "bg-white text-slate-900 border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300"
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    i === 7 ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/30" : "bg-blue-50 text-blue-600"
                  }`}>
                    {r.badge}
                  </span>
                </div>
                <h3 className={`text-base font-bold ${i === 7 ? "text-white" : "text-slate-900"}`}>
                  {r.role}
                </h3>
                <p className={`text-xs font-semibold ${i === 7 ? "text-cyan-200" : "text-blue-600"}`}>
                  {r.action}
                </p>
                <p className={`text-xs leading-relaxed ${i === 7 ? "text-slate-300" : "text-slate-600"}`}>
                  {r.practice}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SIX-STEP HR IMPLEMENTATION BLUEPRINT */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full bg-slate-50/70 border-t border-slate-200 rounded-3xl my-6">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
            Organizational Roadmap
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Six-Step HR Implementation Blueprint
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            A practical roadmap for Chief Human Resources Officers, Talent Directors, and line leaders to institutionalize authentic allyship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hrBlueprint.map((b) => (
            <div key={b.step} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                {b.step}
              </span>
              <h3 className="text-sm font-bold text-slate-900">{b.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. THE BOARDROOM-TO-ARENA SYNTHESIS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-200">
        <div className="bg-gradient-to-br from-[#070d18] via-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
              The Sports-Corporate-Academia Triad
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Sports Legends Anchor Allyship++
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              High-performance athletics represents the ultimate meritocratic arena in which psychological safety, coach-athlete allyship, discipline, and mutual trust under extreme pressure directly dictate collective triumph.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              From Olympian Anju Bobby George in Bengaluru and cricket veteran Arshad Ayub in Hyderabad, to Olympic gold medalist Gurbux Singh, footballer Gautam Sarkar, Dhoni's mentor Satyaprakash Krishna in Kolkata, Nilesh Kulkarni & Anand Menezes in Mumbai, and Paris Olympics national coach Premanand J. in Chennai—SOA conclaves demonstrate that nurturing young talent requires the exact blend of discipline, empathy, and transformative mentorship practiced by elite national coaches.
            </p>
          </div>
        </div>
      </section>



      {/* 7. Institutional Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pt-8">
        <div className="bg-[#070d18] text-white rounded-3xl p-8 sm:p-12 text-center border border-slate-800 shadow-xl max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Connect with SOA University Leadership
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Corporate leaders and industrial partners are warmly invited to engage in our high-level roundtables, curriculum co-creation, and joint Centre of Excellence initiatives.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsInviteOpen(true)}
              className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide shadow-md transition-colors"
            >
              Get Invited
            </button>
            <Link
              href="/collaborate"
              className="px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-colors"
            >
              Explore Collaboration Tracks
            </Link>
          </div>
        </div>
      </section>

      {/* Global Invitation Modal */}
      <GetInvitedModal isOpen={isInviteOpen} onClose={() => setIsInviteOpen(false)} />
    </div>
  );
}
