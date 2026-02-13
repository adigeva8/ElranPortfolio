import { type ReactNode, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Layers,
  Timer,
  GitBranch,
  AlertTriangle,
  Network,
  Eye,
  Lightbulb,
  GripVertical,
  CheckCircle2,
  X,
} from 'lucide-react';

/* ── Existing images ─────────────────────────────────────────── */
import imgHeroDashboard from 'figma:asset/d567446a53f020a289d383932546fdaa051adf81.png';
import imgTableBefore from '@/assets/fg-table-before.png';
import imgHierarchyCanvas from '@/assets/fg-hierarchy-canvas.png';
import imgFlow1 from '@/assets/fg-flow-1.png';
import imgFlow2 from '@/assets/fg-flow-2.png';
import imgFlow3 from '@/assets/fg-flow-3.png';
import imgFlow4 from '@/assets/fg-flow-4.png';
import imgFlow5 from '@/assets/fg-flow-5.png';

/* ── Scroll-triggered reveal (reduced-motion aware) ─────────── */
function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  return (
    <motion.div
      className={className}
      initial={prefersReduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

/* ── Vertical divider ────────────────────────────────────────── */
function VerticalDivider() {
  return (
    <div className="flex justify-center py-6 md:py-8">
      <div className="w-px h-10 md:h-14" style={{ backgroundColor: 'var(--border-subtle)' }} />
    </div>
  );
}

/* ── Image Lightbox ──────────────────────────────────────────── */
function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5 text-white" />
        </button>
        <motion.img
          src={src}
          alt={alt}
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Zoomable Image ──────────────────────────────────────────── */
function ZoomableImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const [open, setOpen] = useState(false);
  const handleClose = useCallback(() => setOpen(false), []);
  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-zoom-in ${className}`}
        loading="lazy"
        decoding="async"
        onClick={() => setOpen(true)}
      />
      {open && <Lightbox src={src} alt={alt} onClose={handleClose} />}
    </>
  );
}

/* ── Jump-to anchor link ─────────────────────────────────────── */
function JumpLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
      }}
      className="text-xs md:text-sm font-normal px-3 py-1.5 rounded-lg transition-all duration-200 hover:bg-black/[0.04]"
      style={{
        border: '1px solid var(--border-hairline)',
        color: 'var(--text-secondary)',
        minHeight: '36px',
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      {children}
    </a>
  );
}

/* ================================================================
   FUNDGUARD - "The Deep Enterprise"
   ──────────────────────────────────────────────────────────────
   Unique personality:
   · Left-aligned editorial pull-quotes
   · Serif blockquote Key Insight with accent border
   · Hypothesis-driven design framing
   · Vertical timeline approach
   · Canvas-based solution showcase
   · Outlined stat cards on white
   ================================================================ */
export default function CaseStudyFundguardContent({ onNextStudy }: { onNextStudy?: () => void }) {
  return (
    <div className="bg-white">
      {/* ═══════════════════════════════════════════════════════
          1) HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="pt-24 md:pt-32 lg:pt-40 pb-6 md:pb-8 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p
              className="text-xs uppercase tracking-[0.3em] mb-6"
              style={{ color: 'var(--text-tertiary)' }}
            >
              FundGuard
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.12] mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Restoring Trust in Enterprise Automation
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p
              className="text-base md:text-lg font-light italic max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}
            >
              When automation accuracy isn&rsquo;t enough &mdash; system state must be visible.
            </p>
          </Reveal>

          {/* Metadata bar */}
          <Reveal delay={0.25}>
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-10 pt-8 text-left"
              style={{ borderTop: '1px solid var(--border-subtle)' }}
            >
              {[
                { label: 'Role', value: 'Head of Product Design' },
                { label: 'Team', value: 'Product · Engineering · Data Science · Enterprise Operations' },
                { label: 'Scope', value: 'Reconciliation architecture · Fund hierarchy · Exception handling' },
                { label: 'Impact', value: '+30% automation adoption · 25% faster resolution · Reduced manual overrides' },
              ].map((m) => (
                <div key={m.label}>
                  <p className="text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--text-tertiary)' }}>{m.label}</p>
                  <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>{m.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      <Reveal>
        <div className="max-w-6xl mx-auto px-6 md:px-12 pb-4">
          <ZoomableImage src={imgHeroDashboard} alt="FundGuard reconciliation dashboard" className="w-full h-auto rounded-xl" />
        </div>
      </Reveal>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          2) TL;DR BLOCK
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-12 md:pb-16 px-6 md:px-12 lg:px-16" id="tldr">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--text-tertiary)' }}>
              TL;DR
            </p>
            <h2
              className="text-2xl md:text-3xl font-semibold mb-8 leading-snug"
              style={{ color: 'var(--text-primary)' }}
            >
              Restoring trust in enterprise automation
            </h2>
          </Reveal>

          {/* Summary card */}
          <Reveal delay={0.1}>
            <div
              className="rounded-xl p-6 md:p-8 mb-8"
              style={{ backgroundColor: 'var(--surface-secondary)' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--text-tertiary)' }}>Problem</p>
                  <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                    Automation existed, but users manually validated outcomes because system logic and state were invisible.
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--text-tertiary)' }}>My Mandate</p>
                  <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                    Redefine reconciliation architecture to make automation trustworthy and observable.
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--text-tertiary)' }}>Team</p>
                  <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>
                    PM &bull; Engineers &bull; Data Science &bull; Enterprise Operations
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--text-tertiary)' }}>What Changed</p>
                  <div className="flex flex-col gap-1">
                    {[
                      'Replaced row-based configuration with spatial hierarchy',
                      'Consolidated reconciliation into a state-aware workflow',
                      'Prioritized exceptions by financial impact',
                      'Introduced explainable automation signals',
                    ].map((item, i) => (
                      <p key={i} className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>• {item}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                <p className="text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--text-tertiary)' }}>Impact</p>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>• +30% automation adoption</p>
                  <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>• 25% faster exception resolution</p>
                  <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>• Reduced configuration errors</p>
                  <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>• Decrease in manual override behavior</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Jump-to links */}
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-2">
              <JumpLink href="#fg-context">Context</JumpLink>
              <JumpLink href="#fg-tension">Core Tension</JumpLink>
              <JumpLink href="#fg-hypotheses">Hypotheses</JumpLink>
              <JumpLink href="#fg-solution">Solution</JumpLink>
              <JumpLink href="#fg-results">Results</JumpLink>
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          3) CONTEXT — with icon pills + editorial pull-quote
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-16 md:pb-20 px-6 md:px-12 lg:px-16" id="fg-context">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-8 text-center" style={{ color: 'var(--text-tertiary)' }}>
              Context
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              className="text-2xl md:text-3xl font-semibold mb-8 text-center leading-snug"
              style={{ color: 'var(--text-primary)' }}
            >
              Context
            </h2>
          </Reveal>

          <Reveal delay={0.15}>

            <p className="text-sm md:text-base font-light leading-relaxed mb-4 text-center max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Fundguard supports asset managers operating complex fund hierarchies with time-based allocations and downstream financial dependencies.
            </p>
            <p className="text-sm md:text-base font-light leading-relaxed mb-4 text-center max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Automation accuracy was high. Adoption was not.
            </p>
            <p className="text-sm md:text-base font-light leading-relaxed mb-4 text-center max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              The issue wasn&rsquo;t functionality. It was structural trust.
            </p>
            <p className="text-sm md:text-base font-light leading-relaxed mb-4 text-center max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Row-based configuration buried relationships. Exception handling prioritized volume over impact. System logic remained opaque.
            </p>
            <p className="text-sm md:text-base font-light leading-relaxed mb-10 text-center max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Users manually verified automated results &mdash; even when unnecessary.
            </p>
          </Reveal>

          {/* Complexity icon cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: <Layers className="w-5 h-5" strokeWidth={1.4} />, label: 'Complex fund hierarchies' },
              { icon: <Timer className="w-5 h-5" strokeWidth={1.4} />, label: 'Time-based allocations' },
              { icon: <GitBranch className="w-5 h-5" strokeWidth={1.4} />, label: 'Downstream financial dependencies' },
              { icon: <AlertTriangle className="w-5 h-5" strokeWidth={1.4} />, label: 'Opaque system logic' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div
                  className="rounded-xl p-5 md:p-6 h-full flex flex-col items-center text-center gap-3"
                  style={{ backgroundColor: 'var(--surface-secondary)' }}
                >
                  <div style={{ color: 'var(--text-primary)' }}>{item.icon}</div>
                  <p className="text-xs md:text-sm font-light leading-snug" style={{ color: 'var(--text-secondary)' }}>{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Editorial pull-quote */}
          <Reveal delay={0.25}>
            <div
              className="pl-8 md:pl-12 max-w-2xl mx-auto"
              style={{ borderLeft: '3px solid var(--text-primary)' }}
            >
              <p
                className="text-lg md:text-xl font-normal italic leading-snug"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
              >
                Row-based configuration buried relationships.
              </p>
              <p className="mt-3 text-sm font-light" style={{ color: 'var(--text-secondary)' }}>
                Experts reason about structure spatially &mdash; not through linear tables.
              </p>
            </div>
          </Reveal>

          {/* Annotated table screenshot */}
          <Reveal delay={0.3}>
            <div className="mt-14 max-w-5xl mx-auto">
              <ZoomableImage
                src={imgTableBefore}
                alt="FundGuard legacy table - annotations showing high cognitive load, poor hierarchy visibility"
                className="w-full h-auto"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          4) CORE TENSION — Editorial pull-quote card
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-16 md:pb-20 px-6 md:px-12 lg:px-16" id="fg-tension">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-8 text-center" style={{ color: 'var(--text-tertiary)' }}>
              Core Tension
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16">
            <div className="md:col-span-3">
              <Reveal>
                <h2
                  className="text-2xl md:text-3xl font-semibold mb-6 leading-snug"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Core tension
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  When system relationships are invisible, automation feels risky. Trust requires visibility.
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-2">
              <Reveal delay={0.15}>
                <div
                  className="rounded-xl p-6 md:p-8"
                  style={{ backgroundColor: 'var(--surface-secondary)' }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-tertiary)' }}>
                    Core tension
                  </p>
                  <p
                    className="text-lg md:text-xl font-medium leading-snug italic"
                    style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
                  >
                    The problem wasn&rsquo;t functionality.
                  </p>
                  <p
                    className="text-lg md:text-xl font-medium leading-snug italic mt-2"
                    style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
                  >
                    It was confidence.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          KEY INSIGHT — Serif blockquote with accent border
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-8 text-center" style={{ color: 'var(--text-tertiary)' }}>
              Strategic Reframe
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div
              className="pl-8 md:pl-12"
              style={{ borderLeft: '3px solid var(--text-primary)' }}
            >
              <p
                className="text-2xl md:text-3xl lg:text-4xl font-normal leading-[1.25] mb-3"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
              >
                The question shifted from: &ldquo;How do we make reconciliation faster?&rdquo;
              </p>
              <p
                className="text-lg md:text-xl font-normal leading-snug italic mt-4"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
              >
                To: &ldquo;How do we make automation trustworthy?&rdquo;
              </p>
              <p
                className="text-lg md:text-xl font-normal leading-snug italic"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
              >
                {' '}
              </p>
              <p className="mt-6 text-sm md:text-base font-light" style={{ color: 'var(--text-secondary)' }}>
                Trust required: visible relationships, transparent state, explainable outcomes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          5) HYPOTHESES — with Problem/Hypothesis card layout
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-16 md:pb-20 px-6 md:px-12 lg:px-16" id="fg-hypotheses">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-10 text-center" style={{ color: 'var(--text-tertiary)' }}>
              Hypotheses
            </p>
          </Reveal>

          {/* Hypothesis 1 */}
          <Reveal delay={0.05}>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                  style={{ backgroundColor: 'var(--text-primary)', color: 'white' }}
                >
                  H1
                </div>
                <p className="text-sm md:text-base font-medium" style={{ color: 'var(--text-primary)' }}>
                  Row-based configuration hides structure and makes relationships hard to reason about.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 md:ml-11">
                <div
                  className="rounded-xl p-6"
                  style={{ backgroundColor: 'var(--surface-secondary)' }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-tertiary)' }}>How we validated</p>
                  <div className="flex flex-col gap-2.5">
                    {[
                      'Walkthroughs with operations stakeholders to map real fund setup flows and failure points.',
                      'Prototype reviews comparing "table edits" vs "connected hierarchy" comprehension.',
                      'Success criteria: faster understanding of relationships + fewer configuration mistakes.',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="w-1 h-1 rounded-full mt-[7px] flex-shrink-0" style={{ backgroundColor: 'var(--text-tertiary)' }} />
                        <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="rounded-xl p-6"
                  style={{ border: '1px solid var(--border-subtle)' }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-tertiary)' }}>Hypothesis</p>
                  <p
                    className="text-sm md:text-base font-light italic leading-relaxed"
                    style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
                  >
                    If fund relationships are visualized as a connected hierarchy instead of separated rows, users understand system structure faster and make fewer configuration mistakes.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Hypothesis 2 */}
          <Reveal delay={0.1}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                  style={{ backgroundColor: 'var(--text-primary)', color: 'white' }}
                >
                  H2
                </div>
                <p className="text-sm md:text-base font-medium" style={{ color: 'var(--text-primary)' }}>
                  Users need a single, visible source of truth to trust automation outcomes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 md:ml-11">
                <div
                  className="rounded-xl p-6"
                  style={{ backgroundColor: 'var(--surface-secondary)' }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-tertiary)' }}>How we validated</p>
                  <div className="flex flex-col gap-2.5">
                    {[
                      'Observed where users jumped between screens to confirm status, allocation, and direction.',
                      'Tested a single-source-of-truth view that shows funds, states, and allocations in one place.',
                      'Success criteria: fewer checks, fewer tabs, and higher confidence before running automation.',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="w-1 h-1 rounded-full mt-[7px] flex-shrink-0" style={{ backgroundColor: 'var(--text-tertiary)' }} />
                        <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="rounded-xl p-6"
                  style={{ border: '1px solid var(--border-subtle)' }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-tertiary)' }}>Hypothesis</p>
                  <p
                    className="text-sm md:text-base font-light italic leading-relaxed"
                    style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
                  >
                    If users can see all funds, states, and allocations in one visual system map, they configure connections with higher confidence and fewer errors.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          DESIGN PRINCIPLE — Centered editorial + icon cards
          ═══════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-8" style={{ color: 'var(--text-tertiary)' }}>
              Design Principle
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-8"
              style={{ color: 'var(--text-primary)' }}
            >
              Expose structure before interaction.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: <Network className="w-5 h-5" strokeWidth={1.4} />, label: 'Visible relationships' },
              { icon: <Eye className="w-5 h-5" strokeWidth={1.4} />, label: 'Transparent state' },
              { icon: <Lightbulb className="w-5 h-5" strokeWidth={1.4} />, label: 'Explainable outcomes' },
              { icon: <GripVertical className="w-5 h-5" strokeWidth={1.4} />, label: 'Spatial reasoning over linear editing' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="flex flex-col items-center text-center gap-3 p-4">
                  <div style={{ color: 'var(--text-primary)' }}>{item.icon}</div>
                  <p className="text-xs md:text-sm font-light leading-snug" style={{ color: 'var(--text-secondary)' }}>{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <p
              className="text-base md:text-lg font-light italic"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}
            >
              The goal wasn&rsquo;t speed. It was confidence.
            </p>
          </Reveal>
        </div>

        {/* Canvas-Based Hierarchy View - Highlighted card */}
        <Reveal delay={0.35}>
          <div
            className="max-w-5xl mx-auto mt-16 rounded-2xl p-8 md:p-12"
            style={{ backgroundColor: 'var(--surface-secondary)' }}
          >
            <p className="text-sm md:text-base font-normal mb-1" style={{ color: 'var(--text-secondary)' }}>
              Hierarchy View (Canvas-Based)
            </p>
            <h3
              className="text-xl md:text-2xl font-semibold mb-4 leading-snug"
              style={{ color: 'var(--text-primary)' }}
            >
              Spatial hierarchy replaces linear configuration
            </h3>
            <p className="text-sm md:text-base font-light leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              Replaced row-based configuration with a spatial hierarchy. Experts reason about structure spatially &mdash; not through linear tables. Funds are represented as nodes, and their relationships are shown visually, making complex structures easy to understand and manage.
            </p>
            <div className="rounded-xl overflow-hidden">
              <ZoomableImage
                src={imgHierarchyCanvas}
                alt="Canvas-based fund hierarchy view - nodes represent funds, connections show allocations"
                className="w-full h-auto"
              />
            </div>
          </div>
        </Reveal>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          6) SOLUTION — Before/After + Vertical timeline
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-16 md:pb-20 px-6 md:px-12 lg:px-16" id="fg-solution">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4 text-center" style={{ color: 'var(--text-tertiary)' }}>
              Solution
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6" style={{ color: 'var(--text-primary)' }}>
              Solution
            </h2>
            <p className="text-sm md:text-base font-light leading-relaxed text-center mb-14 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Four connected improvements redefined how users understand structure, verify state, and act on exceptions.
            </p>
          </Reveal>

          {/* Before / After Block */}
          <Reveal delay={0.08}>
            <div className="mb-14">
              <p className="text-xs uppercase tracking-[0.15em] mb-4" style={{ color: 'var(--text-tertiary)' }}>Before vs After</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ZoomableImage
                    src={imgTableBefore}
                    alt="Before: row-based configuration hides structure"
                    className="w-full h-auto rounded-xl"
                  />
                  <p className="mt-3 text-xs md:text-sm font-light" style={{ color: 'var(--text-secondary)' }}>
                    Before: row-based configuration hides structure.
                  </p>
                </div>
                <div>
                  <ZoomableImage
                    src={imgHierarchyCanvas}
                    alt="After: canvas hierarchy exposes relationships"
                    className="w-full h-auto rounded-xl"
                  />
                  <p className="mt-3 text-xs md:text-sm font-light" style={{ color: 'var(--text-secondary)' }}>
                    After: canvas hierarchy exposes relationships.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Vertical timeline — Four improvements */}
          <div className="relative">
            <div
              className="absolute left-[15px] md:left-[19px] top-4 bottom-4 w-px"
              style={{ backgroundColor: 'var(--border-subtle)' }}
            />

            {[
              {
                num: '01',
                title: 'Canvas-Based Fund Hierarchy',
                desc: 'Replaced row-based configuration with a spatial hierarchy. Experts reason about structure spatially — not through linear tables.',
                impact: 'Reduced configuration errors · Improved structural comprehension · Increased predictability.',
              },
              {
                num: '02',
                title: 'Guided Reconciliation Workflow',
                desc: 'Unified fragmented steps into a single state-aware flow. Users could clearly see current system state, dependencies, next action, and consequences.',
                impact: '25% faster exception resolution · Reduced cognitive fragmentation.',
              },
              {
                num: '03',
                title: 'Risk-Based Exception Handling',
                desc: 'Reprioritized exceptions by financial impact instead of volume.',
                impact: 'Clearer prioritization · Reduced downstream propagation.',
              },
              {
                num: '04',
                title: 'Explainable Automation Signals',
                desc: 'Introduced visible confidence and traceability indicators. Automation shifted from black-box behavior to observable system logic.',
                impact: '+30% automation adoption · Reduced manual overrides.',
              },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex items-start gap-6 md:gap-8 mb-12 last:mb-0">
                  <div
                    className="relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xs md:text-sm font-semibold"
                    style={{ backgroundColor: 'var(--text-primary)', color: 'white' }}
                  >
                    {step.num}
                  </div>
                  <div className="pt-0.5 flex-1">
                    <p className="text-base md:text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {step.title}
                    </p>
                    <p className="text-sm md:text-base font-light leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
                      {step.desc}
                    </p>
                    <p className="text-sm font-light italic" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                      Primary impact: {step.impact}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VerticalDivider />

      {/* Design Flow images */}
      <section className="pb-16 md:pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4 text-center" style={{ color: 'var(--text-tertiary)' }}>
              Design Flow
            </p>
            <p className="text-sm md:text-base font-light text-center mb-12" style={{ color: 'var(--text-secondary)' }}>
              Expose structure before interaction
            </p>
          </Reveal>

          <div className="flex flex-col gap-8">
            {[
              { src: imgFlow1, alt: 'Design flow - canvas hierarchy initial state' },
              { src: imgFlow2, alt: 'Design flow - configuring fund connections' },
              { src: imgFlow3, alt: 'Design flow - validating relationships and allocations' },
              { src: imgFlow4, alt: 'Design flow - system state overview' },
              { src: imgFlow5, alt: 'Design flow - final hierarchy with outcome' },
            ].map((img, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <ZoomableImage
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto rounded-xl"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          7) LEADERSHIP
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-16 md:pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--text-tertiary)' }}>
              Leadership
            </p>
            <h2
              className="text-2xl md:text-3xl font-semibold mb-8 leading-snug"
              style={{ color: 'var(--text-primary)' }}
            >
              How I led the work
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-sm md:text-base font-light leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              This initiative required cross-functional realignment.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-3">
              {[
                'Established "Expose structure before interaction" as a core product principle.',
                'Led architectural concept reviews with engineering leadership.',
                'Standardized system-state visibility patterns across workflows.',
                'Reframed automation success metrics from throughput to trust indicators.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0" style={{ backgroundColor: 'var(--text-tertiary)' }} />
                  <p className="text-sm md:text-base font-light" style={{ color: 'var(--text-primary)' }}>{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div
              className="pl-8 md:pl-12 max-w-2xl mt-8"
              style={{ borderLeft: '3px solid var(--text-primary)' }}
            >
              <p
                className="text-lg md:text-xl font-normal italic leading-snug"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
              >
                This was not a UI redesign.
              </p>
              <p
                className="text-lg md:text-xl font-normal italic leading-snug mt-1"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
              >
                It was a behavioral shift across teams.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          8) REALITY CHECK
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-16 md:pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--text-tertiary)' }}>
              Reality Check
            </p>
            <h2
              className="text-2xl md:text-3xl font-semibold mb-6 leading-snug"
              style={{ color: 'var(--text-primary)' }}
            >
              The messy middle
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm md:text-base font-light leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              This wasn&rsquo;t a UI redesign—it was a behavioral change: moving teams from manual verification to confident automation.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col gap-3 mb-8">
              {[
                'Users feared silent downstream errors, so "accuracy" alone didn\'t change behavior.',
                'A canvas model raised scale/performance questions (large hierarchies, dense relationships).',
                'Ops workflows were fragmented across screens, so fixes had to reduce context switching—not add new UI.',
                'We had to balance flexibility for experts with guardrails that prevent risky configurations.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0" style={{ backgroundColor: 'var(--text-tertiary)' }} />
                  <p className="text-sm md:text-base font-light" style={{ color: 'var(--text-primary)' }}>{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div
              className="pl-8 md:pl-12 max-w-2xl"
              style={{ borderLeft: '3px solid var(--text-primary)' }}
            >
              <p
                className="text-lg md:text-xl font-normal italic leading-snug"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
              >
                The design goal wasn&rsquo;t speed. It was confidence.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          9) RESULTS — Outlined stat cards on white
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16" id="fg-results">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4 text-center" style={{ color: 'var(--text-tertiary)' }}>
              Results
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-14" style={{ color: 'var(--text-primary)' }}>
              Results
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {[
              { metric: '+30%', desc: 'automation adoption' },
              { metric: '25%', desc: 'faster exception resolution' },
              { metric: null, icon: <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.2} />, desc: 'Reduced configuration errors' },
              { metric: null, icon: <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.2} />, desc: 'Decreased manual verification behaviors' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className="rounded-xl p-8 md:p-10 text-center h-full flex flex-col items-center justify-center"
                  style={{ border: '1px solid var(--border-subtle)' }}
                >
                  {item.metric ? (
                    <p className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                      {item.metric}
                    </p>
                  ) : (
                    <div className="mb-3" style={{ color: 'var(--text-tertiary)' }}>{item.icon}</div>
                  )}
                  <p className="text-sm font-light" style={{ color: 'var(--text-secondary)' }}>
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Most importantly */}
          <Reveal delay={0.4}>
            <div
              className="pl-8 md:pl-12 max-w-2xl mx-auto"
              style={{ borderLeft: '3px solid var(--text-primary)' }}
            >
              <p
                className="text-base md:text-lg font-normal italic leading-relaxed"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
              >
                Most importantly:
              </p>
              <p
                className="text-base md:text-lg font-semibold mt-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Automation became the default &mdash; not something users felt compelled to double-check.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CLOSING — Dark band with subtle pattern
          ═══════════════════════════════════════════════════════ */}
      <section
        className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 text-white overflow-hidden"
        style={{ backgroundColor: 'var(--color-gray-900)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="flex justify-center mb-8">
              <div className="w-10 h-px bg-white/20" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="text-2xl md:text-3xl lg:text-4xl font-normal leading-[1.3] mb-2 text-white"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Trust isn&rsquo;t a feature.
            </p>
            <p
              className="text-2xl md:text-3xl lg:text-4xl font-normal leading-[1.3] italic text-white/80"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              It&rsquo;s the outcome of visible system logic.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex justify-center mt-10">
              <div className="w-10 h-px bg-white/20" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          NAVIGATION
          ═══════════════════════════════════════════════════════ */}
      <section className="pt-40 pb-12 md:pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div />
          <button onClick={onNextStudy} className="text-right group cursor-pointer">
            <p className="text-[11px] uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--text-tertiary)' }}>Next Case Study</p>
            <p className="text-base md:text-lg font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300" style={{ color: 'var(--text-primary)' }}>
              monday.com
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </p>
          </button>
        </div>
      </section>
    </div>
  );
}
