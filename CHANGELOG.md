# CHANGELOG

## v2.0 — Visual Modernization Pass

Modernized the portfolio to feel contemporary, premium, and "top 1%" while keeping the calm, minimal, enterprise-grade aesthetic. All changes are code-level improvements — no content or copy changes.

### Visual System (Tokens + Theme)
- Darkened `--text-primary` from `#182730` to `#141414` for stronger contrast
- Warmed `--surface-secondary` from `#f5f5f5` to `#f7f8fa` for a slightly warmer off-white
- Added `--text-muted` token (`#9ca3af`) for meta/label text
- Added `--surface-elevated` token for cards with border/shadow treatment
- Added `--border-hairline` token (`rgba(0,0,0,0.06)`) for almost-invisible hairlines
- Added `--shadow-xs`, `--shadow-card`, `--shadow-card-hover` for subtle card depth
- Softened `--border-default` from `0.1` to `0.08` opacity
- Registered all new tokens in `theme.css` Tailwind v4 bridge
- Added `prefers-reduced-motion: reduce` global rule to disable all transitions/animations

### Hero Section
- Increased H1 from `text-2xl/3xl/4xl` to fluid `clamp(1.75rem, 4vw, 3.25rem)` for more presence
- Added `tracking-tight` and `leading-[1.1]` for tighter, more impactful headline
- Constrained subheadline width to `max-w-[58ch]` for optimal readability
- Changed credibility line to `text-xs uppercase tracking-[0.2em]` with muted color
- Staggered hero animation: H1 (200ms) → subheadline (350ms) → credibility (500ms) → CTA (600ms) → social (750ms)
- Each element animates independently with `y: 20→0` (tighter motion)
- Increased top padding to `pt-24` for breathing room below fixed nav
- Updated photo container rounding from `rounded-xl` to `rounded-2xl` on desktop

### Navigation
- Fixed nav height to `h-14 md:h-16` for consistent structure
- Increased backdrop blur from `backdrop-blur-md` to `backdrop-blur-xl`
- Reduced glass opacity from `bg-white/90` to `bg-white/80` for subtlety
- Used `--border-hairline` for bottom border instead of inline rgba
- Changed nav links from `font-light` to `font-normal` with faster `duration-200` transition
- Bumped logo weight to `font-medium` and tightened tracking
- Added `minHeight: 44px` to all interactive elements for accessibility
- Reduced initial animation from `y: -100` to `y: -80` and `delay: 0.2` to `0.1`

### Project Cards
- Added subtle depth: `border: 1px solid var(--border-hairline)` + `box-shadow: var(--shadow-card)`
- Hover state: border darkens to `rgba(0,0,0,0.1)` + shadow elevates to `--shadow-card-hover`
- Changed image hover scale from `1.03` to `1.02` for subtlety
- Tag pills: restyled to `rounded-md` with `rgba(0,0,0,0.04)` background and `--text-muted` color
- Title weight changed from `font-light` to `font-medium` with `leading-snug`
- Description font refined to `text-[15px]` with `leading-[1.65]`
- Bullet text color changed to `--text-secondary` for better hierarchy
- Reduced card gaps from `gap-10 md:gap-14` to `gap-8 md:gap-10`
- Reveal animation tightened: `y: 40→24`, `duration: 0.8→0.6`

### About Section
- Tightened max-width from `max-w-3xl` to `max-w-2xl` for editorial feel
- Improved heading line-height to `1.15`
- Body line-height increased to `1.7` for comfortable reading
- Animation: `y: 30→20`, `duration: 0.8→0.6`, viewport amount `0.5→0.4`

### Selected Work Section Header
- Reduced vertical padding by ~20% for tighter rhythm
- Label: `text-xs` → `text-[11px]`, added `font-medium`, color changed to `--text-muted`
- Copy shortened: "Let's dive into details with a selection of my recent work" → "A selection of my recent work"
- Reduced bottom margin from `mb-16` to `mb-14`
- Animation tightened: `y: 30→16`, `duration: 0.8→0.6`

### Case Study Layout
- Back button: glass-morphism treatment with `blur(12px)`, hairline border, rounded-full
- Added `minHeight: 44px` for tap target accessibility
- Container rounding updated to `rounded-xl`
- Animation delay refined from `0.5` to `0.4`

### Case Study Primitives
- **InfoBoxGrid**: Added `rounded-xl` and `1px hairline border` per item
- **HypothesisBlock**: Added `rounded-xl` and `1px hairline border`
- **InsightBlock**: Added `rounded-xl` and `1px hairline border`
- **PersonaCardGrid**: Added `rounded-xl` and `1px hairline border` per card
- **SkillCardGrid**: Added `rounded-xl` and `1px hairline border` per card
- **QuoteBanner**: Added top/bottom `1px hairline border` for subtle section delineation
- Reduced `py` in QuoteBanner from `--space-28` to `--space-24` on desktop

### Case Study Content (All 5)
- Fundguard: Tighter Reveal animation (`y: 28→16`, `duration: 0.7→0.5`), reduced-motion support
- Fundguard: Refined VerticalDivider with subtler color (`--border-subtle`) and tighter spacing
- Fundguard: Modernized JumpLink pills with `rounded-lg`, hairline border, hover background
- Monday.com, Bit, Bluevine, XtreamIO: Updated Reveal to match (reduced-motion support + tighter motion)

### Motion System
- All Reveal components now check `prefers-reduced-motion` and skip animation if set
- Reduced default reveal `y` offset from `28px` to `16px` (subtler entrance)
- Reduced reveal duration from `0.7s` to `0.5s` (snappier feel)
- CSS-level `prefers-reduced-motion: reduce` disables all CSS transitions/animations globally

### Footer
- Replaced dark `--color-gray-900` background with light `--surface-secondary`
- Added top `1px hairline border` for subtle separation
- Dynamic copyright year via `new Date().getFullYear()`
- Simplified padding and removed nested border wrapper

### Accessibility + Performance
- All nav buttons, CTAs, and mobile hamburger have `minHeight: 44px` tap targets
- Focus states preserved via existing `:focus-visible` ring
- Semantic heading hierarchy maintained (single H1 per page)
- All images retain `loading="lazy"` / `loading="eager"` as appropriate
- Build verified: 0 errors, 76% image optimization via vite-plugin-image-optimizer
- JS bundles: vendor (45KB gz), motion (31KB gz), app (48KB gz)

---

### Files Changed

| File | Changes |
|------|---------|
| `src/styles/tokens.css` | Color, shadow, border token updates |
| `src/styles/theme.css` | New theme bridge entries, reduced-motion rule |
| `src/app/App.tsx` | Hero, nav, about, work section, footer refinements |
| `src/app/components/ProjectCard.tsx` | Complete modernization (depth, hover, spacing) |
| `src/app/components/CaseStudyLayout.tsx` | Glass-morphism back button, refined animation |
| `src/app/components/case-study/CaseStudyPrimitives.tsx` | Rounded + hairline borders on all blocks |
| `src/imports/CaseStudyFundguardContent.tsx` | Reveal, VerticalDivider, JumpLink refinements |
| `src/imports/CaseStudyMondayContent.tsx` | Reveal animation update |
| `src/imports/CaseStudyBitContent.tsx` | Reveal animation update |
| `src/imports/CaseStudyBluevineContent.tsx` | Reveal animation update |
| `src/imports/CaseStudyXreamioContent.tsx` | Reveal animation update |
| `CHANGELOG.md` | Updated |

---

## v1.0 — Portfolio Rewrite: "Top 1%" Positioning Update

### A) Homepage Hero
- Replaced hero headline with "Turning complex enterprise systems into clear, scalable products."
- Added subheadline emphasizing system architecture, workflows, and state logic.
- Added credibility line: "Selected work: Fundguard • monday.com • bit"
- Added two CTAs: "View Selected Work" (scrolls to #work) and "Contact" (opens mailto).
- Changed `<h2>` to semantic `<h1>` for main headline.
- Hero + subheadline + primary CTA visible above fold on 375px.

### B) Selected Work Cards
- Rewrote all three primary card titles + descriptions (Fundguard, monday.com, bit).
- Added impact bullets to each card via new `bullets` prop on `ProjectCard`.
- Changed CTA label from "Read Case Study" to "View Case Study →".
- Bluevine and XtreamIO cards kept with updated CTA label (no new copy specified).

### C) Fundguard Case Study — Full Rewrite
- New H1: "Redesigning enterprise fund operations for trust in automation"
- Added TL;DR summary card with: Problem, My Role, Team, What I shipped, Impact.
- Added "Jump to" anchor links: Context, Core Tension, Hypotheses, Solution, Results.
- Restructured into 9 ordered sections.
- All copy matches spec exactly — no invented metrics.

### D) Fundguard Visual Storytelling
- Added Before vs After block near Solution section.
- Added click-to-zoom Lightbox component for all images.
- All existing design flow images preserved with `ZoomableImage` wrapper.

### E) monday.com + bit — Alignment
- Updated H1 and intro paragraphs, added TL;DR blocks.
- Existing case study body content preserved.

### F) About Page
- Created dedicated About section on homepage (id="about").
- New heading: "Designing systems that scale."

### G) Polish
- Fixed semantic headings, navigation, CTA tap targets, image optimization.
- Build verified with zero errors.
