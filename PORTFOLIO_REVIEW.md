# Elran Levy — Portfolio Design & Content Review Document

> **Purpose:** This document captures the complete design system, content, structure, and implementation of the portfolio site for professional readiness evaluation. It includes all visible copy, design tokens, component patterns, and page structure.

---

## TABLE OF CONTENTS
1. [Site Architecture](#site-architecture)
2. [Design System (Tokens)](#design-system)
3. [Typography System](#typography-system)
4. [Global Styles & Base Rules](#global-styles)
5. [Homepage — Hero](#homepage-hero)
6. [Homepage — About Section](#homepage-about)
7. [Homepage — Selected Work Section](#homepage-selected-work)
8. [Project Cards (Component Pattern)](#project-cards)
9. [Homepage — Footer](#homepage-footer)
10. [Navigation](#navigation)
11. [Case Study: Fundguard (Full Content)](#case-study-fundguard)
12. [Case Study: monday.com (Full Content)](#case-study-monday)
13. [Case Study: Bit (Full Content)](#case-study-bit)
14. [Case Study Layout Shell](#case-study-layout)
15. [Case Study Primitives (Shared Components)](#case-study-primitives)
16. [Motion & Animation System](#motion-system)
17. [Accessibility & Performance](#accessibility-performance)

---

## 1. SITE ARCHITECTURE <a id="site-architecture"></a>

**Tech Stack:** React 18 + TypeScript, Tailwind CSS v4, Framer Motion (motion/react), Vite, lucide-react icons

**Routing:** State-based (no React Router). `currentPage` state controls which view renders:
- `home` — Homepage with hero, about, selected work, footer
- `fundguard` / `monday` / `bit` / `bluevine` / `xtreamio` — Individual case study pages
- `contact` — Contact page

**Navigation flow:** Case studies link to each other sequentially (XtreamIO → Fundguard → Monday → Bit → Bluevine → XtreamIO).

**Fonts loaded:** Poppins (primary sans), Instrument Sans (display/labels), Inter (alt), Playfair Display (serif/editorial).

---

## 2. DESIGN SYSTEM (TOKENS) <a id="design-system"></a>

### Color Primitives
| Token | Value | Usage |
|-------|-------|-------|
| `--color-white` | `#ffffff` | Base background |
| `--color-black` | `#000000` | Dark surfaces |
| `--color-gray-50` | `#f7f8fa` | Secondary surfaces (warm off-white) |
| `--color-gray-100` | `#e5e5e5` | Muted borders |
| `--color-gray-200` | `#d6d6d6` | Subtle borders |
| `--color-gray-500` | `#9ca3af` | Muted/meta text |
| `--color-gray-700` | `#1e3543` | Secondary text (body) |
| `--color-gray-900` | `#141414` | Primary text (near-black) |
| `--color-blue-400` | `#467294` | Tertiary text, accents |
| `--color-blue-600` | `#0023a3` | Brand blue |

### Semantic Text Tokens
| Token | Maps to | Purpose |
|-------|---------|---------|
| `--text-primary` | `#141414` | Headings, titles, strong text |
| `--text-secondary` | `#1e3543` | Body text, captions |
| `--text-tertiary` | `#467294` | Labels, accents, meta |
| `--text-muted` | `#9ca3af` | Very subtle meta text |
| `--text-inverse` | `#ffffff` | Text on dark backgrounds |

### Surface Tokens
| Token | Value | Purpose |
|-------|-------|---------|
| `--surface-primary` | `#ffffff` | Main background |
| `--surface-secondary` | `#f7f8fa` | Card backgrounds, section bands |
| `--surface-elevated` | `#ffffff` | Cards with border/shadow |
| `--surface-dark` | `#000000` | Dark closing sections |

### Border Tokens
| Token | Value | Purpose |
|-------|-------|---------|
| `--border-default` | `rgba(0,0,0,0.08)` | Standard borders |
| `--border-subtle` | `#d6d6d6` | Visible but soft borders |
| `--border-hairline` | `rgba(0,0,0,0.06)` | Almost invisible separators |

### Shadow Tokens
| Token | Value | Purpose |
|-------|-------|---------|
| `--shadow-xs` | `0 1px 2px rgba(0,0,0,0.04)` | Minimal depth |
| `--shadow-card` | `0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)` | Card resting state |
| `--shadow-card-hover` | `0 4px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)` | Card hover elevation |

### Spacing (4px grid)
`--space-1` (4px) through `--space-28` (112px), following a 4px base grid.

### Radii
`--radius-sm` (4px), `--radius-md` (8px), `--radius-lg` (12px), `--radius-xl` (16px), `--radius-2xl` (20px), `--radius-full` (9999px)

---

## 3. TYPOGRAPHY SYSTEM <a id="typography-system"></a>

### Type Scale Classes
| Class | Font | Weight | Size | Line Height | Usage |
|-------|------|--------|------|-------------|-------|
| `.type-display` | Poppins | 300 (light) | 24px | 1.35 | Quote banners |
| `.type-h1` | Poppins | 300 (light) | clamp(18px→36px) | 1.0 | Main headlines (rare) |
| `.type-hero-title` | Poppins | 300 (light) | clamp(18px→24px) | normal | Case study hero pages |
| `.type-h2` | Poppins | 400 (normal) | clamp(18px→24px) | normal | Section headings |
| `.type-h3` | Poppins | 500 (medium) | clamp(18px→24px) | 1.5 | Subsections |
| `.type-body` | Poppins | 300 (light) | clamp(14px→16px) | 1.75 | Running text |
| `.type-body-info` | Poppins | 400 (normal) | clamp(14px→16px) | 1.5 | Info boxes |
| `.type-label` | Instrument Sans | 700 (bold) | 16px | normal | Card headers, labels |
| `.type-caption` | Poppins | 400 (normal) | 16px | 1.5 | Hypothesis labels |
| `.type-insight-title` | Inter | 500 (medium) | clamp(18px→24px) | 1.5 | Insight titles |

### Letter Spacing
| Token | Value | Usage |
|-------|-------|-------|
| `--tracking-tight` | -0.72px | Hero headline |
| `--tracking-body` | 0.64px | Running text |
| `--tracking-wide` | 0.48px | Display/quotes |
| `--tracking-wider` | 1.6px | Labels, card headers |

---

## 4. GLOBAL STYLES & BASE RULES <a id="global-styles"></a>

- **Base font:** 16px Poppins, antialiased
- **Line height:** 1.5 default
- **Scrollbar:** Hidden (both Firefox and Chrome)
- **Headings (h1-h4):** Weight 500, line-height normal, color `--text-primary`
- **Focus ring:** 2px solid brand blue, 2px offset
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` disables all transitions and animations globally
- **Smooth scrolling:** Enabled via `scroll-behavior: smooth`

---

## 5. HOMEPAGE — HERO <a id="homepage-hero"></a>

### Layout
- Full viewport height (`min-h-screen`), centered content
- Two-column layout on desktop (text left, photo right), stacked on mobile
- Max-width 7xl (80rem) container

### Content (exact copy)

**H1:** "Turning complex enterprise systems into clear, scalable products."
- Font size: `clamp(1.75rem, 4vw, 3.25rem)` — approximately 28px mobile → 52px desktop
- Weight: medium (500)
- Line height: 1.1
- Tracking: tight
- Color: `--text-primary` (#141414)

**Subheadline:** "I redesign system architecture, workflows, and state logic so automation becomes trustworthy and decisions become confident."
- Font size: base → lg (16px → 18px)
- Weight: light (300)
- Max width: 58ch
- Color: `--text-secondary` (#1e3543)

**Credibility line:** "Selected work: Fundguard • monday.com • bit"
- Font size: xs (12px), uppercase, tracking 0.2em
- Weight: normal (400)
- Color: `--text-muted` (#9ca3af)

**CTA:** "View Selected Work" with animated ArrowRight icon
- Font size: sm (14px), weight medium
- Arrow nudges right on hover
- Min height: 44px

**Social links:** LinkedIn icon + Email icon (lucide-react, 20px, strokeWidth 1.5)
- Color: `--text-secondary`
- Hover: opacity 50%

### Photo
- Mobile: 192px round circle with face zoom (scale-150, origin-top)
- Desktop: Full width, rounded-2xl (20px corners)
- Loading: eager (above the fold)

### Scroll indicator
- Animated mouse scroll indicator at bottom center
- Bouncing dot animation (1.8s infinite)

### Animation (staggered entry)
- H1: delay 200ms, y: 20→0, duration 700ms
- Subheadline: delay 350ms, y: 16→0
- Credibility: delay 500ms, y: 12→0
- CTA: delay 600ms, y: 12→0
- Social: delay 750ms, opacity only
- Photo: delay 450ms, y: 24→0
- All use easeOut easing

---

## 6. HOMEPAGE — ABOUT SECTION <a id="homepage-about"></a>

### Layout
- Off-white background (`--surface-secondary` / #f7f8fa)
- Centered text, max-width 2xl (672px)
- Padding: py-20 md:py-28

### Content (exact copy)

**Heading:** "Designing systems that scale."
- Font: Playfair Display (serif), extralight
- Size: `clamp(1.5rem, 3vw, 2.5rem)`
- Line height: 1.15
- Color: `--text-primary`

**Body paragraph 1:** "I specialize in enterprise platforms where complexity, automation, and risk intersect. My work focuses on system architecture clarity, workflow optimization, and state visibility—so experts can act with confidence."

**Body paragraph 2:** "I collaborate closely with product, engineering, and data teams to ensure design decisions scale beyond UI into logic, behavior, and system structure."
- Font size: sm → base (14px → 16px)
- Weight: light (300)
- Line height: 1.7
- Color: `--text-secondary`

---

## 7. HOMEPAGE — SELECTED WORK SECTION <a id="homepage-selected-work"></a>

### Section header

**Label:** "SELECTED WORK"
- 11px, uppercase, tracking 0.25em, font-medium
- Color: `--text-muted` (#9ca3af)

**Subtitle:** "A selection of my recent work"
- base → lg, font-light, max-width lg
- Color: `--text-secondary`

### Project cards (5 total)

**Card 1 — Fundguard**
- Tags: "enterprise fintech", "B2B"
- Title: "Redesigning fund operations for automation trust"
- Description: "Enterprise fintech platform used by asset managers to configure and reconcile complex fund hierarchies. I led a system-level redesign of configuration, reconciliation, and exception handling workflows to increase automation adoption and reduce error risk."
- Bullets:
  - "• +30% increase in automation adoption"
  - "• 25% faster exception resolution"
  - "• Reduced configuration errors and downstream rework"
- CTA: "View Case Study" + arrow icon
- Image position: right

**Card 2 — monday.com**
- Tags: "work management", "monetization"
- Title: "Simplifying monetization logic across product surfaces"
- Description: "Redesigned pricing, billing, and plan logic across core workflows to reduce confusion and improve upgrade clarity. Focused on exposing system state, plan constraints, and value differences inside the user journey."
- Bullets:
  - "• Reduced billing confusion across upgrade flows"
  - "• Improved plan comparison clarity"
  - "• Streamlined monetization touchpoints"
- CTA: "View Case Study" + arrow icon
- Image position: left

**Card 3 — Bit**
- Tags: "mobile app", "B2C"
- Title: "Designing scalable flows for a high-volume P2P platform"
- Description: "Improved payment flows in one of Israel's largest P2P platforms. Focused on reducing friction, clarifying transaction state, and improving system feedback in high-frequency journeys."
- Bullets:
  - "• Reduced friction in key transfer flows"
  - "• Improved state visibility during transactions"
  - "• Strengthened user trust through clearer system feedback"
- CTA: "View Case Study" + arrow icon
- Image position: right

**Card 4 — Bluevine**
- Tags: "SMB banking", "B2C"
- Title: "Bluevine"
- Description: "Designing banking and lending experiences that help small businesses manage their finances quickly and confidently."
- No bullets
- Image position: left

**Card 5 — XtreamIO**
- Tags: "enterprise", "data platform"
- Title: "Xtream IO"
- Description: "An all-flash storage platform delivering high performance, scalability, and simplified data management for enterprise."
- No bullets
- Image position: right

---

## 8. PROJECT CARDS (Component Pattern) <a id="project-cards"></a>

### Visual design
- Background: `--surface-secondary` (#f7f8fa)
- Rounded corners: 2xl (16px)
- Padding: 24px mobile, 40px tablet, 48px desktop
- Hover: background shifts to #ededee

### Content hierarchy
1. **Tags:** 10px uppercase, tracking 0.12em, rounded-md pills, `rgba(0,0,0,0.04)` background, `--text-muted` color
2. **Title:** lg → xl → 2xl, font-medium (500), leading-snug, `--text-primary`
3. **Description:** sm → 15px, font-light, leading 1.65, max-w-md, `--text-secondary`
4. **Bullets:** xs → sm, font-light, `--text-secondary`
5. **CTA:** sm, font-medium, `--text-primary`, ArrowRight icon with hover translate

### Image
- Rounded-xl container with overflow hidden
- Object-contain, max-height capped
- Hover: scale 1.02, duration 600ms

### Animation
- Scroll-triggered via `whileInView`
- Initial: opacity 0, y 24px
- Duration: 600ms, easeOut

---

## 9. HOMEPAGE — FOOTER <a id="homepage-footer"></a>

- Background: `--surface-secondary` (#f7f8fa)
- Top border: 1px `--border-hairline`
- Content: "© [current year] Elran Levy"
- Font: xs, light, color `--text-muted`
- Centered, py-12 md:py-16

---

## 10. NAVIGATION <a id="navigation"></a>

### Desktop
- Fixed header, `z-50`
- Background: `bg-white/80` with `backdrop-blur-xl`
- Bottom border: 1px `--border-hairline`
- Height: 56px mobile, 64px desktop
- Logo: "ELRAN LEVY" — 13px, tracking 0.2em, uppercase, font-medium
- Links: "Work" and "About" — 13px, font-normal
- All interactive elements: min-height 44px

### Mobile
- Hamburger icon (Menu/X from lucide-react)
- Full-screen white overlay with "Work" and "About" links (xl size, light weight)
- Close button in top-right

### Behavior
- "Work" scrolls to `#work` section (smooth scroll)
- "About" scrolls to `#about` section
- Logo navigates home and scrolls to top
- Nav hidden on case study pages (back button used instead)

---

## 11. CASE STUDY: FUNDGUARD (Full Content) <a id="case-study-fundguard"></a>

### Hero
- Label: "FUNDGUARD" (xs, uppercase, tracking 0.3em, `--text-tertiary`)
- H1: "Redesigning enterprise fund operations for trust in automation" (3xl→4xl→5xl, semibold, leading 1.12)
- Subtitle: "When experts need systems they can trust" (serif italic, light)
- Metadata bar (4-column grid):
  - Role: Head of Product Design
  - Team: PM · Engineers · Data Science · Enterprise Operations
  - Scope: Core reconciliation & fund hierarchy workflows
  - Impact: +30% automation adoption · 25% faster resolution · Reduced config errors

### TL;DR Block
- Summary card on `--surface-secondary` background, rounded-xl
- Fields: Problem, My Role, Team, What I shipped (4 bullets), Impact (3 bullets)
- Jump-to links: Context, Core Tension, Hypotheses, Solution, Results (pill-style anchor links)

**Problem:** "Automation existed, but users didn't trust system state—so they manually verified results and errors surfaced too late."

**My Role:** "Led end-to-end product design across IA, workflows, interaction model, and UX writing."

**What I shipped:**
- Canvas-based fund hierarchy (replacing row-based configuration)
- Guided reconciliation workflow with checkpoints and visible state
- Risk-based exception handling surfaced by impact
- Explainable automation signals (confidence + traceability)

**Impact:**
- +30% increase in automation adoption
- 25% faster exception resolution
- Reduced configuration errors and downstream rework

### Context Section
- Icon cards (4): Deep parent-child fund structures, Time-based workflows, Financial allocations & dependencies, Errors that propagate downstream
- Editorial pull-quote: "Tables hide system logic. Experts needed to reason about structure - not edit rows."
- Zoomable screenshot of legacy table

### Core Tension Section
- Two-column layout (3/5 + 2/5)
- Key statement: "The problem wasn't functionality. It was confidence."
- Body: "Users manually verified automated results—even when accuracy was high—because system state and consequences weren't visible."

### Key Insight (full-width)
- Serif blockquote with left accent border (3px, `--text-primary`):
  - "Users manually verified automated results - even when accuracy was high."
  - "Not because automation failed. Because system logic was invisible."
  - "The core barrier was trust in system state."

### Hypotheses Section
**H1:** "Row-based configuration hides structure and makes relationships hard to reason about."
- How we validated: 3 bullets (walkthroughs, prototype reviews, success criteria)
- Hypothesis card: "If fund relationships are visualized as a connected hierarchy instead of separated rows, users understand system structure faster and make fewer configuration mistakes."

**H2:** "Users need a single, visible source of truth to trust automation outcomes."
- How we validated: 3 bullets (observation, testing single-source view, success criteria)
- Hypothesis card: "If users can see all funds, states, and allocations in one visual system map, they configure connections with higher confidence and fewer errors."

### Design Principle
- "Expose structure before interaction."
- Icon cards (4): Relationships are spatial, Visible identity/type/status, System logic visible before editing, Drag-and-drop mirrors mental models
- Canvas Hierarchy View highlighted card with zoomable image

### Solution Section
- Before/After comparison (side-by-side desktop, stacked mobile)
  - Before: "row-based configuration hides structure"
  - After: "canvas hierarchy exposes relationships"
- Vertical timeline with 4 improvements:
  1. Canvas-Based Fund Hierarchy — "Reduced configuration errors by making relationships and allocations visible at a glance."
  2. Guided Reconciliation Workflow — "Reduced resolution time by keeping state, checkpoints, and next actions in one place."
  3. Risk-Based Exception Handling — "Helped teams prioritize what matters by surfacing exceptions by impact—not volume."
  4. Explainable Automation Signals — "Increased automation adoption by making confidence and traceability visible."

### Design Flow
- 5 zoomable flow images showing the canvas hierarchy interaction

### Leadership
- "How I led the work" — 5 bullets covering design principles, alignment, concept reviews, UX rules, Data Science partnership

### Reality Check ("The messy middle")
- Intro: "This wasn't a UI redesign—it was a behavioral change: moving teams from manual verification to confident automation."
- 4 bullets on challenges (fear of silent errors, canvas scale questions, fragmented workflows, expert flexibility vs guardrails)
- Closing pull-quote: "The design goal wasn't speed. It was confidence."

### Results
- Stat cards (outlined, 2×2 grid):
  - +30% increase in automation adoption
  - 25% faster exception resolution
  - Reduced manual verification through clearer system state
  - Fewer configuration mistakes and downstream rework
- Closing pull-quote: "Most importantly: Users stopped manually validating every automated result. They trusted the system state."

### Closing (dark band)
- Dark background (#141414) with subtle grid pattern overlay
- "Enterprise UX succeeds when users stop fighting the interface and start reasoning about the system."

---

## 12. CASE STUDY: MONDAY.COM (Full Content) <a id="case-study-monday"></a>

### Hero
- Label: "monday.com"
- H1: "Simplifying monetization logic across product surfaces"
- Subheadline: "Redesigned pricing, billing, and plan logic across core workflows to reduce confusion, expose system state, and improve upgrade clarity inside the user journey."
- Metadata: Role (Senior Product Designer), Team (Growth Squad), Scope (Registration, upgrade, plan selection), Impact (+7% reg-to-plan conversion · 35% Pro uplift)

### TL;DR
- Problem: "Users struggled to choose the right plan—not because pricing was unclear, but because system state and plan constraints were invisible during the decision."
- Role: "Led end-to-end design of upgrade flows, plan recommendation logic, and A/B experiments within the growth squad."
- What changed: "Redesigned plan comparison, added usage-driven recommendations, simplified the commitment moment, and introduced contextual feature promotion."
- Impact: Reduced billing confusion, improved plan comparison clarity, streamlined monetization touchpoints

### Context
- Narrative: "Millions of users completed the trial. Engagement was strong. Usage was high. But when the trial ended, conversion dropped sharply."
- User quote: "Each plan supports a different workflow, but comparing them felt overwhelming."
- Pull-quote: "This wasn't pricing sensitivity. It was decision anxiety."

### The Challenge
- Two-column layout with observations and key insight
- Key insight card: "Abandonment wasn't rejection - it was avoidance."

### 3 Hypotheses
- H1: Usage-based plan recommendations increase confidence
- H2: Visual usage-to-plan mapping helps understand value differences
- H3: Outcome-framed recommendations increase perceived value

### The Approach (vertical timeline)
1. Reframe Plan Comparison
2. Personalized Plan Recommendations
3. Simplify the Commitment Moment
4. A/B Testing Value Framing

### A/B Test Section
- Variant A: "Trust us" (generic recommendation)
- Variant B: "Here's evidence" (usage-based recommendation)
- Result: Conversion 4.0% → 5.4%, 35% relative uplift in Pro upgrades

### Visual Guidance for Plan Selection
- Explainer videos for plan comparison
- Discovery through value — contextual feature promotion

### Results
- +7% registration-to-plan conversion
- 35% relative uplift in Pro upgrades
- Increased plan clarity and decision speed
- Reduced downgrade regret
- Higher long-term plan alignment
- "Most importantly: Users stopped hovering. They started choosing."

### Closing
- "Plan selection shifted from feature comparison under pressure → Guided, usage-driven decision confidence"
- "The moment of commitment became safer. And when choosing feels safe - growth follows."

---

## 13. CASE STUDY: BIT (Full Content) <a id="case-study-bit"></a>

### Hero
- Label: "Bit"
- H1: "Designing scalable flows for a high-volume P2P platform"
- Subheadline: "Improved payment flows in one of Israel's largest P2P platforms..."
- Metadata: Role (Senior UX Specialist), Team (PM · Engineering · Growth · Marketing), Scope (Core payment flows · Activation · Engagement), Scale (#1 tier-2 P2P payment app · 2M+ users)

### TL;DR
- Problem: "High-frequency payment flows created friction, unclear transaction states, and low user confidence..."
- Role: "Led design for core transfer flows, activation, and engagement experiments."
- What changed: "Reduced cognitive load per screen, clarified transaction states, improved first-use activation, and optimized micro-interactions for speed."
- Impact: Reduced friction, improved state visibility, strengthened user trust

### Context
- High-stress narrative with 3 user quotes about fear/confusion with money transfers
- Pull-quote: "Trust and speed weren't features. They were survival conditions."

### The Problem
- Two-column: What Bit needed vs What payment flows are (legally complex, technically constrained, high-risk, emotionally sensitive)
- "Compress a complex financial transaction into a flow that feels obvious and safe."

### Design Principle: "One decision per screen"
- 4-step flow: Who → How much → Why → Confirm
- Sketch flow image

### Key Insight (dark gradient band)
- "Users don't think in 'financial steps.' They think in: Person → Amount → Confirmation"
- "In payments, speed builds trust. Uncertainty destroys it."

### The Approach (vertical timeline)
1. Reduce Cognitive Load in Transfer Flows
2. Clarify Transaction States
3. Improve First-Use Activation
4. Optimize Micro-Interactions

### Design Philosophy in Action
- Rapid signal reading: hesitation, errors, support spikes, abandonment
- Sketch → test → iterate → release cycle with guerrilla testing images

### Payment Flow Screens
- Mobile carousel with 6 screens (auto-play, swipe, dots)

### Annotated Flow Breakdown
- 3 annotated flow images: Intent → Selection → Completion

### Seamless Motion
- 4 micro-interaction videos showing animated transitions

### Results
- 2M+ users on #1 tier-2 P2P payment app
- Improved activation and repeat usage
- Reduced confusion around transaction status
- Increased clarity in high-frequency payment actions
- "Transfers felt instant. Users stopped double-checking. Trust increased."

### Closing
- "Bit transformed money transfer from: A stressful financial action → A natural, everyday behavior"
- "When speed and trust are non-negotiable, simplicity becomes strategy."

---

## 14. CASE STUDY LAYOUT SHELL <a id="case-study-layout"></a>

- Full viewport height (`h-dvh`), overflow-y scroll
- **Back button:** Floating, rounded-full, glass-morphism effect
  - Background: `rgba(255,255,255,0.85)` with `backdrop-filter: blur(12px)`
  - Border: 1px `--border-hairline`
  - Min height: 44px
  - ArrowLeft icon with hover translate
  - Entrance animation: y -40→0, delay 400ms

---

## 15. CASE STUDY PRIMITIVES (Shared Components) <a id="case-study-primitives"></a>

### Section
- Full-width with responsive padding (48px mobile → 64px tablet → 96px desktop)
- Max-width 1024px content area

### SectionTitle
- H2 with `.type-h2` class
- Optional body text with `.type-body` class

### InfoBoxGrid
- 1/2/3 column responsive grid
- Items: rounded-xl, `--surface-secondary` background, 1px `--border-hairline`

### HypothesisBlock
- Rounded-xl container with `--surface-secondary` background + 1px `--border-hairline`
- Caption "Hypothesis N", H3 title, body, optional bullets

### InsightBlock
- Same surface treatment as HypothesisBlock
- Label + content layout

### PersonaCardGrid
- 1/2 column grid, rounded-xl cards with hairline border
- Avatar, name, role, quote

### SkillCardGrid
- 2/3 column grid, rounded-xl with hairline border
- Label, title, optional description

### QuoteBanner
- Full-width band with `--surface-secondary` background
- Top and bottom 1px `--border-hairline`
- `.type-display` centered text

### ImageCarousel
- Slide track with chevron navigation
- Autoplay (4s), swipe support, dot pagination

### ZoomableImage (Fundguard)
- Click-to-zoom lightbox
- Keyboard accessible (ESC closes)
- Backdrop blur, scale animation

---

## 16. MOTION & ANIMATION SYSTEM <a id="motion-system"></a>

### Reveal Component (used in all case studies)
- Trigger: IntersectionObserver via `whileInView`
- Initial state: `opacity: 0, y: 16px`
- Final state: `opacity: 1, y: 0`
- Duration: 500ms
- Easing: easeOut
- Viewport: once: true, amount: 0.15
- **Reduced motion:** Checks `prefers-reduced-motion` and skips animation if set

### Hero Stagger
- 5 elements with 100-150ms incremental delays
- Duration: 700ms each
- Y offset: 12-20px depending on element

### CSS Keyframes
- `fadeIn`: opacity 0→1
- `slideUp`: opacity 0 + translateY(20px) → opacity 1 + translateY(0)
- `pop`: scale(0) → scale(1.1) → scale(1) with opacity

### Global Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 17. ACCESSIBILITY & PERFORMANCE <a id="accessibility-performance"></a>

### Accessibility
- Semantic headings: single H1 per page, H2/H3 hierarchy
- Focus states: 2px brand-blue ring with 2px offset on `:focus-visible`
- All interactive elements: min-height 44px (tap target)
- Aria labels on icon buttons (hamburger, close, lightbox, carousel controls)
- Keyboard navigation: ESC closes lightbox, focus trap in modals
- Reduced motion support at both CSS and JS levels

### Performance
- Images: `loading="lazy"` (except hero images which use `loading="eager"`)
- Images: `decoding="async"`, explicit `width`/`height` where possible
- Videos: `LazyVideo` component loads only when visible (IntersectionObserver)
- Build optimization: vite-plugin-image-optimizer (76% average compression)
- Code splitting: vendor chunk (React), motion chunk (Framer Motion), app chunk
- Bundle sizes (gzipped): vendor 45KB, motion 31KB, app 48KB
- Content visibility: `.content-visibility-auto` utility for off-screen content
- Scrollbar hidden for clean visual presentation

---

## OVERALL DESIGN PHILOSOPHY

**Aesthetic:** Calm, minimal, enterprise-grade. Premium whitespace. No loud colors or gimmicky animations.

**Typography:** Light weights for body (300), medium for headings (500), semibold for impact (600). Serif (Playfair Display) used sparingly for editorial pull-quotes and emphasis.

**Color strategy:** Near-monochrome with a single blue accent (`#467294`) for labels and tertiary elements. Dark text (#141414) on white/near-white backgrounds. No gradients on homepage.

**Motion philosophy:** Subtle, purposeful reveals (16px offset, 500ms duration). Staggered hero entry. Reduced motion fully supported. No decorative animations.

**Content strategy:** Hypothesis-driven case studies. Each project has: TL;DR → Context → Tension → Hypotheses → Solution → Results. Editorial pull-quotes break up sections. Metrics are specific and real (no invented numbers).

**Visual storytelling:** Before/after comparisons, zoomable images, vertical timelines, icon cards for complexity mapping, dark closing bands with serif typography.
