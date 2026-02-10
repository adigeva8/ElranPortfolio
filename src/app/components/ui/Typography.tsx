import { type ReactNode, type ElementType } from 'react';

/* ================================================================
   Typography Components
   ================================================================
   Typed wrappers around the .type-* utility classes defined in
   theme.css. They enforce the Figma type scale and make it easy
   to use consistent typography across pages.

   Scale:
     display  — 48px, light   (quote banners, hero impact)
     h1       — 36px, light   (rarely used, top-level)
     h2       — 24px, normal  (section headings)
     h3       — 24px, medium  (sub-section headings)
     body     — 16px, light   (running text, descriptions)
     bodyInfo — 16px, normal  (info boxes, facts)
     label    — 16px, bold    (card headers, Instrument Sans)
     caption  — 14px, medium  (meta labels, hint text)
   ================================================================ */

type Variant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body'
  | 'bodyInfo'
  | 'label'
  | 'caption'
  | 'insightTitle';

/* Map variant → default HTML element */
const defaultTags: Record<Variant, ElementType> = {
  display:      'p',
  h1:           'h1',
  h2:           'h2',
  h3:           'h3',
  body:         'p',
  bodyInfo:     'p',
  label:        'p',
  caption:      'p',
  insightTitle: 'p',
};

/* Map variant → CSS utility class from theme.css */
const variantClasses: Record<Variant, string> = {
  display:      'type-display',
  h1:           'type-h1',
  h2:           'type-h2',
  h3:           'type-h3',
  body:         'type-body',
  bodyInfo:     'type-body-info',
  label:        'type-label',
  caption:      'type-caption',
  insightTitle: 'type-insight-title',
};

interface TextProps {
  /** Typography variant from the design system scale */
  variant?: Variant;
  /** Override the rendered HTML element */
  as?: ElementType;
  /** Additional classes (appended after the variant class) */
  className?: string;
  children: ReactNode;
}

/**
 * Text — the main typography primitive.
 *
 * @example
 * <Text variant="h2">Section Title</Text>
 * <Text variant="body">Lorem ipsum dolor sit amet.</Text>
 * <Text variant="label" className="uppercase">STEP 1</Text>
 */
export function Text({
  variant = 'body',
  as,
  className = '',
  children,
}: TextProps) {
  const Tag = as ?? defaultTags[variant];
  return (
    <Tag className={`${variantClasses[variant]} ${className}`}>
      {children}
    </Tag>
  );
}

/* ── Heading (convenience alias) ───────────────────────────────
   Shorthand that defaults to h2 and picks the right HTML tag.
   ────────────────────────────────────────────────────────────── */
interface HeadingProps {
  /** 1 | 2 | 3 — maps to h1/h2/h3 variants */
  level?: 1 | 2 | 3;
  className?: string;
  children: ReactNode;
}

export function Heading({ level = 2, className = '', children }: HeadingProps) {
  const variant: Variant = level === 1 ? 'h1' : level === 3 ? 'h3' : 'h2';
  const Tag = defaultTags[variant];
  return (
    <Tag className={`${variantClasses[variant]} ${className}`}>
      {children}
    </Tag>
  );
}
