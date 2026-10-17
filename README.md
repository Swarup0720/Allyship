# Allyship — Modern, Impactful Web Platform

> **Provisional Positioning:** *“Building a world where everyone feels supported, included, and empowered.”*

A complete, production-quality web application for **Allyship**, designed to turn empathy and awareness into practical, everyday solidarity. Built with human-centered aesthetics, rich storytelling, strict accessibility standards (WCAG AAA/AA compliance), and transparent metrics.

---

## 🌟 Key Highlights & Features

- **Brand & Visual Identity**: Deep navy/indigo primary palette (`#0F172A`), warm coral secondary (`#F97316`), subtle gradients, clean typography (Plus Jakarta Sans & Outfit), and bespoke interlocking SVG emblem symbolizing unity across difference.
- **Interactive Allyship Pledge Flow**: Multi-step declaration modal where visitors choose focus areas, affirm core commitments, and receive an authentic Certificate of Active Allyship with unique ID and celebratory confetti.
- **Initiatives & Cohort Syllabi**: Filterable catalog and dedicated program detail pages (`/initiatives/[slug]`) complete with multi-phase curricula, meeting schedules, and interactive enrollment inquiry forms.
- **Open Resource Library**: Searchable guides, diagnostic checklists, and toolkits (`/resources/[slug]`) with estimated read times, key takeaways boxes, and personal bookmarking saved to browser storage.
- **Community Gathering & Calendar**: Interactive RSVPs for virtual bystander clinics, panel discussions, and working circles with immediate feedback and calendar verification.
- **Everyday Ally Action Checklist**: Interactive 6-point daily habit tracker with animated progress calculation and local persistence.
- **Impact Dashboard**: Transparent, configurable metrics with clear governance criteria and methodology disclosure—no fabricated corporate claims.
- **Live Contact & Partnership Route**: Working Next.js App Router API endpoint (`/api/contact`) with full payload validation and reference number generation.
- **Member Dashboard**: Dedicated portal (`/dashboard`) showcasing active pledge certificates, saved reading lists, and registered events.
- **SEO & Accessibility**: Complete OpenGraph metadata, `robots.ts`, dynamic `sitemap.ts`, semantic HTML5 landmarks, visible focus rings, and skip-to-content links.

---

## 📁 Project Architecture

```
d:/allyship/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/route.ts       # Backend contact form processing
│   │   ├── about/page.tsx             # Mission, core values & team
│   │   ├── initiatives/
│   │   │   ├── page.tsx               # Program catalog & filters
│   │   │   └── [slug]/                # Program detail & enrollment
│   │   ├── community/page.tsx         # Working circles & events calendar
│   │   ├── resources/
│   │   │   ├── page.tsx               # Resource library & search
│   │   │   └── [slug]/                # Guide reader & action toolbar
│   │   ├── contact/page.tsx           # Contact form & organizational info
│   │   ├── dashboard/page.tsx         # Member pledge & saved items hub
│   │   ├── privacy/page.tsx           # Data privacy & Chatham House rules
│   │   ├── terms/page.tsx             # Platform charter & terms of service
│   │   ├── globals.css                # Tailwind CSS v4 design tokens & theme
│   │   ├── layout.tsx                 # Root layout with fonts, SEO & skip link
│   │   ├── page.tsx                   # Homepage (Hero, Pillars, Impact, Stories)
│   │   ├── robots.ts                  # Robots.txt generator
│   │   └── sitemap.ts                 # Dynamic XML sitemap generator
│   ├── components/
│   │   ├── Navbar.tsx                 # Responsive navigation & pledge trigger
│   │   ├── Footer.tsx                 # Brand footer, newsletter, contact info
│   │   ├── PledgeModal.tsx            # Multi-step pledge & certificate generator
│   │   ├── InitiativeCard.tsx         # Program display card
│   │   ├── ResourceCard.tsx           # Resource card with bookmarking
│   │   ├── EventCard.tsx              # Event card with interactive RSVP
│   │   ├── ImpactCounter.tsx          # Verified metric counters & methodology
│   │   ├── FaqAccordion.tsx           # Accessible accordion with categories
│   │   └── InteractiveChecklist.tsx   # Everyday habit tracker with progress
│   ├── data/
│   │   ├── initiatives.ts             # 6 detailed programs and curricula
│   │   ├── resources.ts               # 6 comprehensive educational guides
│   │   ├── communityEvents.ts         # Community calendar events
│   │   ├── stories.ts                 # Editorial case studies & journeys
│   │   ├── team.ts                    # Configurable steward profiles
│   │   └── faqs.ts                    # Frequently asked questions
│   └── lib/
│       ├── types.ts                   # Core TypeScript interfaces
│       ├── storage.ts                 # Local persistence helpers
│       └── utils.ts                   # Utility functions
├── public/                            # Static assets and icons
├── .env.example                       # Environment variable template
├── package.json
└── tsconfig.json
```

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js 18.17+ or Node.js 20+
- npm 9+ or pnpm / yarn

### Installation Steps

1. **Clone or navigate to the repository:**
   ```bash
   cd allyship
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

5. **Run production build verification:**
   ```bash
   npm run build
   ```

---

## 🎨 Design System & Color Tokens

| Token | Hex | Usage |
| :--- | :--- | :--- |
| **Primary Navy** | `#0F172A` / `#1E1B4B` | Headings, hero backgrounds, primary buttons |
| **Warm Coral** | `#F97316` / `#EA580C` | CTAs, pledge badges, accents, interactive highlights |
| **Surface Off-White** | `#FCFCFB` / `#F8FAFC` | Page backgrounds, cards, readable surfaces |
| **Muted Lavender** | `#818CF8` / `#6366F1` | Secondary tags, decorative arcs, focus rings |
| **Teal & Emerald** | `#0D9488` / `#059669` | Success badges, verified credentials, checklist |
| **Charcoal Text** | `#0F172A` / `#334155` | High-contrast body typography (WCAG AAA) |

---

## 🔒 Authenticity & Verification Principles

In alignment with the project requirements:
- **No Fabricated Partnerships**: Organizational affiliations and partner logos are strictly kept configurable or omitted until formally verified.
- **Transparent Impact Metrics**: The `/dashboard` and homepage counters explicitly document their audit methodology rather than displaying simulated marketing numbers.
- **Genuine Storytelling**: Case studies and member journeys emphasize concrete takeaways and structural lessons rather than fabricated testimonials.
- **Functional API Integration**: Contact submissions hit an active Next.js API route that validates payloads and provides realistic reference IDs.

---

## 📄 License
Educational frameworks and content are licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/). Software architecture is licensed under the MIT License.
