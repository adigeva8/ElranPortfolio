# Elran Portfolio — Design System

> Single source of truth for design tokens, typography, spacing, layout, and components.
> Extracted from [Figma: Design-to-adi](https://www.figma.com/design/uTyzNOimrajFLMt3toEDqY/Design-to-adi?node-id=0-1)

---

## Architecture

```
src/styles/
  fonts.css          ← Google Font imports (Poppins, Instrument Sans, Inter)
  tokens.css         ← Design tokens as CSS custom properties (single source of truth)
  tailwind.css       ← Tailwind v4 base + source scanning
  theme.css          ← Tailwind bridge (@theme inline) + base layer + utility classes
  index.css          ← Import orchestrator (order matters)

src/app/components/
  ui/
    Layout.tsx       ← Container, WideContainer, Stack, Section, Grid, Divider
    Typography.tsx   ← Text, Heading (typed wrappers for the type scale)
    index.ts         ← Barrel export
  case-study/
    CaseStudyPrimitives.tsx ← Domain-specific building blocks (Hero, QuoteBanner, etc.)
  CaseStudyLayout.tsx       ← Page shell with snap-scroll + back nav
  ProjectCard.tsx            ← Homepage project showcase card
```

### Import chain

```
fonts.css → tailwind.css → tokens.css → theme.css
                                          ↓
                                   @theme inline (Tailwind bridge)
                                   @layer base   (global resets)
                                   @layer utilities (type-* classes)
```

---

## Color Tokens

### Primitives (in `tokens.css`)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-white` | `#ffffff` | Light surfaces |
| `--color-black` | `#000000` | Dark surfaces |
| `--color-gray-50` | `#f5f5f5` | Card backgrounds, secondary surface |
| `--color-gray-100` | `#e5e5e5` | Subtle borders |
| `--color-gray-200` | `#d6d6d6` | Dividers |
| `--color-gray-700` | `#1e3543` | Body text, secondary headings |
| `--color-gray-900` | `#182730` | Primary text, headings |
| `--color-blue-400` | `#467294` | Labels, accents (persona names, skill headers) |
| `--color-blue-500` | `#377ef9` | Bluevine brand |
| `--color-blue-600` | `#0023a3` | Brand primary (CTA buttons) |
| `--color-blue-700` | `#001a80` | Brand hover |
| `--color-blue-gradient` | `#a8c5ff` | Hero gradient |
| `--color-teal-500` | `#14af9c` | Fundguard accent |
| `--color-pink-500` | `#ff00cc` | Bit iteration label |

### Semantic Tokens

| Token | Maps to | Tailwind class |
|-------|---------|----------------|
| `--text-primary` | `--color-gray-900` | `text-text-primary` |
| `--text-secondary` | `--color-gray-700` | `text-text-secondary` |
| `--text-tertiary` | `--color-blue-400` | `text-text-tertiary` |
| `--text-inverse` | `--color-white` | `text-text-inverse` |
| `--surface-primary` | `--color-white` | `bg-surface-primary` |
| `--surface-secondary` | `--color-gray-50` | `bg-surface-secondary` |
| `--surface-dark` | `--color-black` | `bg-surface-dark` |
| `--brand` | `--color-blue-600` | `bg-brand`, `text-brand` |
| `--brand-hover` | `--color-blue-700` | `bg-brand-hover` |
| `--accent` | `--color-blue-400` | `text-accent` |

---

## Typography Scale

### Font Families

| Token | Value | Usage |
|-------|-------|-------|
| `--font-sans` | `'Poppins', sans-serif` | Default for all text |
| `--font-display` | `'Instrument Sans', sans-serif` | Card header labels |
| `--font-alt` | `'Inter', sans-serif` | Insight card titles |

### Type Scale (with utility classes)

| Utility class | Size | Weight | Line height | Tracking | Font | Usage |
|---------------|------|--------|-------------|----------|------|-------|
| `.type-display` | 48px (fluid) | Light (300) | 1.35 | 0.48px | Poppins | Quote banners, hero impact |
| `.type-h1` | 36px (fluid) | Light (300) | 1.0 | 0 | Poppins | Main headlines (rare) |
| `.type-h2` | 24px (fluid) | Normal (400) | 1.5 | 0 | Poppins | Section headings |
| `.type-h3` | 24px (fluid) | Medium (500) | 1.4 | 0 | Poppins | Sub-headings, hypotheses |
| `.type-body` | 16px (fluid) | Light (300) | 1.75 | 0.64px | Poppins | Narrative text (SectionTitle body, standalone paragraphs, persona quotes) |
| `.type-body-info` | 16px (fluid) | Normal (400) | 1.5 | 0.32px | Poppins | Card/box text (InsightBlock, HypothesisBlock, InfoBoxGrid, step descriptions) |
| `.type-label` | 16px | Bold (700) | 1.0 | 1.6px | Instrument Sans | Card headers |
| `.type-caption` | 14px | Medium (500) | 1.5 | 0 | Poppins | Meta labels, hints |
| `.type-insight-title` | 24px (fluid) | Medium (500) | 1.5 | 0 | Inter | Insight card titles |

All fluid sizes use `clamp()` for smooth responsive scaling without breakpoints.

### When to use `.type-body` vs `.type-body-info`

This is the most important distinction in the type system:

| Context | Class | Weight | Line height | Tracking |
|---------|-------|--------|-------------|----------|
| **Free-flowing narrative** — SectionTitle descriptions, standalone paragraphs, persona quotes | `.type-body` | Light (300) | 1.75 | 0.64px |
| **Inside cards/boxes** — InsightBlock, HypothesisBlock, InfoBoxGrid, step descriptions | `.type-body-info` | Normal (400) | 1.5 | 0.32px |

**Rule**: If the text is inside a colored container (typically `bg-surface-secondary`), use `.type-body-info`. If it's in the open page flow, use `.type-body`.

This matches the Figma specification where card-context text is Poppins Regular 400 with tighter line-height and tracking for scanability, while narrative prose is Poppins Light 300 with more generous spacing for readability.

### React Components

```tsx
import { Text, Heading } from '@/app/components/ui';

// Heading (levels 1–3)
<Heading level={2}>Section Title</Heading>

// Text (any variant)
<Text variant="body">Running text paragraph.</Text>
<Text variant="label" className="uppercase">STEP 1</Text>
<Text variant="display" className="text-center">Quote</Text>
```

---

## Spacing Scale

Based on a **4px grid** (consistent with Tailwind's default).

| Token | Value | Tailwind |
|-------|-------|----------|
| `--space-0` | 0 | `gap-0` |
| `--space-1` | 4px | `gap-1`, `p-1` |
| `--space-2` | 8px | `gap-2`, `p-2` |
| `--space-3` | 12px | `gap-3`, `p-3` |
| `--space-4` | 16px | `gap-4`, `p-4` |
| `--space-5` | 20px | `gap-5`, `p-5` |
| `--space-6` | 24px | `gap-6`, `p-6` |
| `--space-8` | 32px | `gap-8`, `p-8` |
| `--space-10` | 40px | `p-10` |
| `--space-12` | 48px | `p-12` |
| `--space-16` | 64px | `p-16` |
| `--space-20` | 80px | `p-20` |
| `--space-24` | 96px | `p-24` |

### Content Layout Spacing

| Token | Mobile | Tablet | Desktop |
|-------|--------|--------|---------|
| `--content-px` | 24px | 32px | 64px |
| `--section-py` | 48px | 64px | 96px |

---

## Layout Primitives

### Container

Max-width `1024px` centered content column with responsive padding.

```tsx
import { Container } from '@/app/components/ui';

<Container>
  <h2>Section content goes here</h2>
</Container>
```

### WideContainer

Max-width `1680px` for hero images and full-bleed layouts.

### Stack

Vertical flex with configurable gap.

```tsx
import { Stack } from '@/app/components/ui';

<Stack gap="lg">           {/* 24px gap */}
  <Component1 />
  <Component2 />
</Stack>

// gap options: none | xs | sm | md | lg | xl | 2xl
```

### Section

Full-width band with vertical rhythm + centered container.

```tsx
import { Section } from '@/app/components/ui';

<Section bg="bg-surface-secondary">
  <SectionTitle title="My Section" />
  <p>Content here uses the standard content column.</p>
</Section>
```

### Grid

Responsive CSS grid.

```tsx
import { Grid } from '@/app/components/ui';

<Grid columns={3} gap="md">
  <Card />
  <Card />
  <Card />
</Grid>
```

### Divider

Horizontal rule with subtle border color.

---

## Radii

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-none` | 0 | Case study cards |
| `--radius-sm` | 4px | Small elements |
| `--radius-md` | 8px | Buttons, inputs |
| `--radius-lg` | 12px | Image cards |
| `--radius-xl` | 16px | Large cards |
| `--radius-2xl` | 20px | Hero images |
| `--radius-full` | 9999px | Avatars, pills |

---

## Shadows

| Token | Usage |
|-------|-------|
| `--shadow-sm` | Subtle elevation (cards on hover) |
| `--shadow-md` | Medium elevation (dropdowns, popovers) |
| `--shadow-lg` | High elevation (modals, overlays) |

---

## Component Tokens

### Button

| Token | Value |
|-------|-------|
| `--button-height` | 57px |
| `--button-px` | 32px |
| `--button-radius` | 8px |
| `--button-bg` | `var(--brand)` (#0023a3) |
| `--button-bg-hover` | `var(--brand-hover)` (#001a80) |

### Card

| Token | Value |
|-------|-------|
| `--card-bg` | `var(--surface-secondary)` (#f5f5f5) |
| `--card-px` | 24px (mobile), 40px (desktop) |
| `--card-radius` | 0 (sharp corners for case study cards) |

### Avatar

| Token | Value |
|-------|-------|
| `--avatar-size` | 96px (mobile) |
| `--avatar-size-md` | 122px (desktop, matches Figma) |
| `--avatar-radius` | `var(--radius-full)` |

---

## Case Study Domain Components

Located in `src/app/components/case-study/CaseStudyPrimitives.tsx`:

| Component | Props | Description |
|-----------|-------|-------------|
| `CaseStudyHero` | logo, title, subtitle, heroImage | Full-screen snap page with logo, headline, image |
| `CaseStudyBody` | children | Snap-to-start wrapper, then free-scrolls |
| `Section` | bg, className | Full-width band + centered container |
| `SectionTitle` | title, children | H2 + optional body text |
| `InfoBoxGrid` | items: string[] | 3-column grid of info boxes |
| `PersonaCardGrid` | personas[] | 2-column persona cards with avatar + quote |
| `HypothesisBlock` | number, title, children, bullets | Numbered hypothesis with bullet list |
| `InsightBlock` | label, children | Callout box with label |
| `QuoteBanner` | children, bg | Full-width display quote section |
| `ImageWithQuote` | src, preQuote, quote | Image with overlaid text |
| `SkillCardGrid` | cards[], columns | Skill/demo cards (simple or with descriptions) |
| `ImageGrid` | images[], columns | Responsive image grid |
| `CaseStudyImage` | src, alt, className | Lazy-loaded responsive image |
| `FullBleedImage` | src, alt | Image that spans full container width |

---

## Z-Index Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--z-base` | 0 | Default |
| `--z-dropdown` | 10 | Dropdown menus |
| `--z-sticky` | 20 | Sticky headers |
| `--z-header` | 50 | Page header |
| `--z-overlay` | 100 | Mobile menu overlay |
| `--z-modal` | 200 | Modals |

---

## Transition Tokens

| Token | Value |
|-------|-------|
| `--duration-fast` | 150ms |
| `--duration-normal` | 300ms |
| `--duration-slow` | 500ms |
| `--duration-slower` | 800ms |
| `--ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` |

---

## How to Extend

### Adding a new color

1. Add the primitive in `tokens.css` under `/* Color Primitives */`:
   ```css
   --color-green-500: #10b981;
   ```
2. Add a semantic alias if needed:
   ```css
   --success: var(--color-green-500);
   ```
3. Bridge to Tailwind in `theme.css` `@theme inline`:
   ```css
   --color-success: var(--success);
   ```
4. Use in components: `text-success`, `bg-success`, or `var(--success)`.

### Adding a new typography variant

1. Add the utility class in `theme.css` under `@layer utilities`:
   ```css
   .type-overline {
     font-family: var(--font-display);
     font-weight: var(--weight-bold);
     font-size: var(--text-xs);
     line-height: var(--leading-normal);
     letter-spacing: var(--tracking-wider);
     text-transform: uppercase;
   }
   ```
2. Add to `Typography.tsx` variant maps (`defaultTags` and `variantClasses`).

### Adding a new layout primitive

Add to `src/app/components/ui/Layout.tsx` and re-export from `index.ts`.

### Adding a new component

1. Use tokens via CSS variables (`var(--token)`) or Tailwind classes (`text-text-primary`).
2. Use the `type-*` utility classes for typography.
3. Use spacing tokens (`var(--space-*)`) for consistent spacing.
4. Export from the appropriate barrel file.

---

## Dark Mode

The token structure supports dark mode by overriding semantic tokens:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: var(--color-white);
    --text-secondary: var(--color-gray-300);
    --surface-primary: var(--color-gray-900);
    --surface-secondary: var(--color-gray-800);
    /* ... */
  }
}
```

Not enabled by default (Figma design is light-only). The structure is ready — just add the overrides when needed.

---

## Remaining Refactoring

### Priority order for remaining pages:

1. **`CaseStutyBitContent.tsx`** — Replace hardcoded hex colors with tokens
2. **`CaseStutyXreamioContent.tsx`** — Replace colors + spacing with tokens
3. **`CaseStutyMondayConent.tsx`** — Replace colors + spacing with tokens
4. **`CaseStutyBluevineConent.tsx`** — Replace colors + spacing with tokens
5. **`AboutPage.tsx`** — Apply type scale + layout primitives
6. **`ContactPage.tsx`** — Apply type scale + layout primitives

### For each page:

- [ ] Replace `#182730` → `text-text-primary` or `var(--text-primary)`
- [ ] Replace `#1e3543` → `text-text-secondary` or `var(--text-secondary)`
- [ ] Replace `#467294` → `text-text-tertiary` or `var(--text-tertiary)`
- [ ] Replace `#f5f5f5` → `bg-surface-secondary` or `var(--surface-secondary)`
- [ ] Replace `font-light` → `font-[var(--weight-light)]` (or keep TW shorthand)
- [ ] Replace inline spacing with `var(--space-*)` tokens
- [ ] Apply `type-*` utility classes where typography patterns match
- [ ] Wrap repeated patterns in shared components where beneficial
