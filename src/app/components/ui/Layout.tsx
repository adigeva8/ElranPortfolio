import { type ReactNode, type CSSProperties } from 'react';

/* ================================================================
   Layout Primitives
   ================================================================
   Composable building blocks for page structure.
   Use design tokens via Tailwind classes wherever possible.

   Components:
     Container      — max-width wrapper with responsive padding
     WideContainer  — wider variant for hero / full-width sections
     Stack          — vertical flex with configurable gap
     Section        — full-width band with vertical rhythm + container
     Divider        — horizontal rule
     Grid           — CSS grid with responsive columns
   ================================================================ */

/* ── Container ─────────────────────────────────────────────────
   max-w-5xl (1024px) centered box with responsive horizontal padding.
   Matches the content column used throughout case studies.
   ────────────────────────────────────────────────────────────── */
export function Container({
  children,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main';
}) {
  return (
    <Tag className={`max-w-5xl mx-auto px-[var(--content-px)] md:px-[var(--content-px-md)] lg:px-[var(--content-px-lg)] ${className}`}>
      {children}
    </Tag>
  );
}

/* ── WideContainer ─────────────────────────────────────────────
   For hero sections and full-bleed content that need more room.
   ────────────────────────────────────────────────────────────── */
export function WideContainer({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-[var(--content-wide-max-w)] mx-auto px-[var(--content-px)] md:px-[var(--content-px-md)] lg:px-[var(--content-px-lg)] ${className}`}>
      {children}
    </div>
  );
}

/* ── Stack ─────────────────────────────────────────────────────
   Vertical flex container with consistent gap.
   The most common layout pattern in case study bodies.

   gap values map to spacing tokens:
     sm  → 8px   (--space-2)
     md  → 16px  (--space-4)
     lg  → 24px  (--space-6)
     xl  → 32px  (--space-8)
     2xl → 48px  (--space-12)
   ────────────────────────────────────────────────────────────── */
const stackGapMap = {
  none: 'gap-0',
  xs:   'gap-1',           // 4px
  sm:   'gap-2',           // 8px
  md:   'gap-4',           // 16px
  lg:   'gap-6',           // 24px
  xl:   'gap-8',           // 32px
  '2xl': 'gap-12',         // 48px
} as const;

export function Stack({
  children,
  gap = 'md',
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode;
  gap?: keyof typeof stackGapMap;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main';
}) {
  return (
    <Tag className={`flex flex-col ${stackGapMap[gap]} ${className}`}>
      {children}
    </Tag>
  );
}

/* ── Section ───────────────────────────────────────────────────
   Full-width band with vertical padding and a centered container.
   The core building block for case study page sections.

   Supports:
   - bg variants via className or bg prop
   - contentVisibility for rendering perf
   - responsive padding (small → tablet → desktop)
   ────────────────────────────────────────────────────────────── */
export function Section({
  children,
  className = '',
  bg = 'bg-white',
  noPadding = false,
  style,
}: {
  children: ReactNode;
  className?: string;
  bg?: string;
  noPadding?: boolean;
  style?: CSSProperties;
}) {
  return (
    <section
      className={`w-full ${noPadding ? '' : 'py-[var(--section-py)] md:py-[var(--section-py-md)] lg:py-[var(--section-py-lg)]'} ${bg} ${className}`}
      style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 600px', ...style }}
    >
      <div className="max-w-5xl mx-auto px-[var(--content-px)] md:px-[var(--content-px-md)] lg:px-[var(--content-px-lg)]">
        {children}
      </div>
    </section>
  );
}

/* ── Divider ───────────────────────────────────────────────────
   Thin horizontal line. Defaults to subtle border color.
   ────────────────────────────────────────────────────────────── */
export function Divider({
  className = '',
}: {
  className?: string;
}) {
  return (
    <hr className={`border-t border-[var(--border-subtle)] ${className}`} />
  );
}

/* ── Grid ──────────────────────────────────────────────────────
   Responsive CSS grid. Columns collapse on small screens.
   ────────────────────────────────────────────────────────────── */
const gridColMap = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
} as const;

export function Grid({
  children,
  columns = 2,
  gap = 'md',
  className = '',
}: {
  children: ReactNode;
  columns?: keyof typeof gridColMap;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const gapClass = gap === 'sm' ? 'gap-3 md:gap-4' : gap === 'lg' ? 'gap-6 md:gap-8' : 'gap-4 md:gap-6';
  return (
    <div className={`grid ${gridColMap[columns]} ${gapClass} ${className}`}>
      {children}
    </div>
  );
}
