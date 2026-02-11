import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  EyeOff,
  BarChart3,
  Unlink,
  Search,
  Users,
  Sparkles,
  GitMerge,
  ShieldAlert,
  BrainCircuit,
  TrendingUp,
  Target,
} from 'lucide-react';

/* ── Existing images ─────────────────────────────────────────── */
import imgHeroDashboard from 'figma:asset/d567446a53f020a289d383932546fdaa051adf81.png';
import imgDesignFlow1 from 'figma:asset/7cdb49ba8edc2d8977bfc267cf5bbe296ad267fb.png';
import imgDesignFlow2 from 'figma:asset/c790cf6ca89caa6c2afef2660c34ad66513f7fd0.png';
import imgDesignFlow3 from 'figma:asset/b05467b93f7ef928be5bddec64a8f9870de1bf3e.png';
import imgDesignFlow4 from 'figma:asset/2efaac5ed441d5d3cc792401accb9d3922155796.png';
import imgCanvasAnnotated from '@/assets/fg-canvas-annotated.png';
import imgClosing from 'figma:asset/04b481125acb45e9ca91bd8773c9890a8d07be5d.png';

/* ── Scroll-triggered animation ──────────────────────────────── */
function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

/* ── Centered vertical line divider ──────────────────────────── */
function VerticalDivider() {
  return (
    <div className="flex justify-center py-8 md:py-10">
      <div className="w-px h-12 md:h-16" style={{ backgroundColor: 'var(--text-primary)' }} />
    </div>
  );
}

/* ── Bold centered section heading ───────────────────────────── */
function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2
      className="text-2xl md:text-3xl lg:text-[34px] font-semibold text-center mb-10 md:mb-14"
      style={{ color: 'var(--text-primary)' }}
    >
      {children}
    </h2>
  );
}

/* ── Icon row (3 icons in a line) ────────────────────────────── */
function IconRow({
  icons,
}: {
  icons: { icon: ReactNode; label?: string }[];
}) {
  return (
    <div className="flex items-center justify-center gap-10 md:gap-16 mb-8 md:mb-10">
      {icons.map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <div style={{ color: 'var(--text-primary)' }}>{item.icon}</div>
          {item.label && (
            <p className="text-[10px] uppercase tracking-wider text-center" style={{ color: 'var(--text-tertiary)' }}>
              {item.label}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── KPI / Impact callout card ───────────────────────────────── */
function KpiCard({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="max-w-xl mx-auto">
      <div
        className="relative overflow-hidden rounded-2xl px-8 py-10 md:px-12 md:py-12 text-center"
        style={{ backgroundColor: '#e8eeff' }}
      >
        {/* Decorative background icon */}
        <div className="absolute -left-4 -top-4 opacity-[0.08]">
          <TrendingUp className="w-32 h-32" strokeWidth={1.2} style={{ color: 'var(--brand)' }} />
        </div>
        <p
          className="text-[11px] uppercase tracking-[0.25em] mb-4 relative"
          style={{ color: 'var(--text-tertiary)' }}
        >
          {label}
        </p>
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}

/* ================================================================
   FUNDGUARD CASE STUDY
   ================================================================
   Redesigned to match natalielabel.com/amplify/import-content:
   - Vertical line dividers between sections
   - Bold centered section headings
   - Icon rows illustrating concepts
   - KPI callout cards
   - Clean editorial flow
   ================================================================ */
export default function CaseStutyFundguardContent() {
  return (
    <div className="bg-white">
      {/* ═══════════════════════════════════════════════════════
          HERO / TITLE
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
              Scaling trust in AI-driven investment accounting
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p
              className="text-base md:text-lg font-light italic max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}
            >
              When experts need systems they can trust
            </p>
          </Reveal>

          {/* Metadata bar */}
          <Reveal delay={0.25}>
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-10 pt-8 text-left"
              style={{ borderTop: '1px solid var(--border-subtle)' }}
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--text-tertiary)' }}>
                  Role
                </p>
                <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>
                  Senior Product Designer
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--text-tertiary)' }}>
                  Team
                </p>
                <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>
                  PM · 6 Engineers · Data Science · Enterprise Ops
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--text-tertiary)' }}>
                  Scope
                </p>
                <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>
                  Core reconciliation &amp; exception workflows
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--text-tertiary)' }}>
                  Impact
                </p>
                <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>
                  +30% automation · 25% faster resolution
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      <Reveal>
        <div className="max-w-6xl mx-auto px-6 md:px-12 pb-4">
          <img
            src={imgHeroDashboard}
            alt="FundGuard reconciliation dashboard"
            className="w-full h-auto rounded-xl"
            loading="eager"
            decoding="async"
          />
        </div>
      </Reveal>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          PROBLEM — with icons
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-12 md:pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <IconRow
              icons={[
                { icon: <EyeOff className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Transparency' },
                { icon: <BarChart3 className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Overload' },
                { icon: <Unlink className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Fragmented' },
              ]}
            />
          </Reveal>

          <Reveal>
            <SectionHeading>Problem</SectionHeading>
          </Reveal>

          <Reveal delay={0.1}>
            <h3
              className="text-lg md:text-xl font-semibold text-center mb-6 max-w-2xl mx-auto leading-snug"
              style={{ color: 'var(--text-primary)' }}
            >
              Enterprise users relied on manual reconciliation despite built-in automation
            </h3>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-sm md:text-base font-light text-center mb-6 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Adoption was low because:
            </p>

            <div className="flex flex-col gap-3.5 max-w-lg mx-auto">
              {[
                'AI outputs lacked transparency',
                'Data density created cognitive overload',
                'Workflows were fragmented',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0"
                    style={{ backgroundColor: 'var(--text-tertiary)' }}
                  />
                  <p className="text-sm md:text-base font-light" style={{ color: 'var(--text-primary)' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              className="text-sm md:text-base font-light italic text-center mt-8 max-w-xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              This reduced platform stickiness and limited module expansion.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          KPI / IMPACT CARD
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-4 px-6 md:px-12 lg:px-16">
        <Reveal>
          <KpiCard label="Main Impact">
            <p className="text-lg md:text-xl font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
              +30% automation adoption
              <br />
              25% faster exception resolution
            </p>
          </KpiCard>
        </Reveal>
      </section>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          MY OWNERSHIP
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-12 md:pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <IconRow
              icons={[
                { icon: <Search className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Discovery' },
                { icon: <Users className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Leadership' },
                { icon: <Sparkles className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'AI Signals' },
              ]}
            />
          </Reveal>

          <Reveal>
            <SectionHeading>My Ownership</SectionHeading>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-4 max-w-xl mx-auto">
              {[
                'Led end-to-end UX strategy for reconciliation workflows',
                'Facilitated discovery with enterprise operations teams',
                'Partnered with Data Science to surface explainable AI signals',
                'Defined reusable workflow patterns across modules',
                'Mentored 2 designers',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0"
                    style={{ backgroundColor: 'var(--text-tertiary)' }}
                  />
                  <p className="text-sm md:text-base font-light" style={{ color: 'var(--text-primary)' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          KEY INSIGHT — Dramatic full-width accent band
          ═══════════════════════════════════════════════════════ */}
      <section
        className="py-24 md:py-36 px-6 md:px-12"
        style={{ backgroundColor: 'var(--color-gray-900)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-10" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Key Insight
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white mb-3">
              The issue wasn&rsquo;t functionality.
            </p>
            <p
              className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white italic"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              It was trust.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 text-sm md:text-base font-light max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Users manually verified automated results even when accuracy was high.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          THE APPROACH — numbered cards with icons
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-12 md:pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <SectionHeading>The Approach</SectionHeading>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                num: '01',
                text: 'Replace dashboard-heavy UI with guided workflows',
                icon: <Target className="w-7 h-7" strokeWidth={1.4} />,
              },
              {
                num: '02',
                text: 'Prioritize anomalies by financial impact',
                icon: <BarChart3 className="w-7 h-7" strokeWidth={1.4} />,
              },
              {
                num: '03',
                text: 'Add explainable AI signals',
                icon: <BrainCircuit className="w-7 h-7" strokeWidth={1.4} />,
              },
              {
                num: '04',
                text: 'Standardize enterprise interaction patterns',
                icon: <Sparkles className="w-7 h-7" strokeWidth={1.4} />,
              },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className="p-6 md:p-8 rounded-xl h-full"
                  style={{ backgroundColor: 'var(--surface-secondary)' }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <p
                      className="text-2xl md:text-3xl font-semibold"
                      style={{ color: 'var(--text-tertiary)' }}
                    >
                      {step.num}
                    </p>
                    <div style={{ color: 'var(--text-tertiary)' }}>{step.icon}</div>
                  </div>
                  <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          THE SOLUTION — with icons
          ═══════════════════════════════════════════════════════ */}
      <section
        className="pb-12 md:pb-16 px-6 md:px-12 lg:px-16"
      >
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <IconRow
              icons={[
                { icon: <GitMerge className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Flow' },
                { icon: <ShieldAlert className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Exceptions' },
                { icon: <BrainCircuit className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'AI' },
              ]}
            />
          </Reveal>

          <Reveal>
            <SectionHeading>The Solution</SectionHeading>
          </Reveal>

          <div className="flex flex-col gap-0">
            {/* Solution 1 */}
            <Reveal>
              <div
                className="py-10 md:py-12 text-center"
                style={{ borderBottom: '1px solid var(--border-subtle)' }}
              >
                <p
                  className="text-lg md:text-xl font-semibold italic mb-3"
                  style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
                >
                  Guided Reconciliation Flow
                </p>
                <p className="text-sm md:text-base font-light max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Structured progression with visible status and checkpoints.
                </p>
              </div>
            </Reveal>

            {/* Solution 2 */}
            <Reveal>
              <div
                className="py-10 md:py-12 text-center"
                style={{ borderBottom: '1px solid var(--border-subtle)' }}
              >
                <p
                  className="text-lg md:text-xl font-semibold italic mb-3"
                  style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
                >
                  Intelligent Exception Handling
                </p>
                <p className="text-sm md:text-base font-light max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Risk-based prioritization + contextual resolution tools.
                </p>
              </div>
            </Reveal>

            {/* Solution 3 */}
            <Reveal>
              <div className="py-10 md:py-12 text-center">
                <p
                  className="text-lg md:text-xl font-semibold italic mb-3"
                  style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}
                >
                  Explainable AI
                </p>
                <p className="text-sm md:text-base font-light max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Confidence indicators + traceable reasoning + audit trail.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          DESIGN VISUALS
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-8 md:pb-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <img
              src={imgCanvasAnnotated}
              alt="Canvas-based hierarchy view"
              className="w-full h-auto rounded-xl mb-5"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Reveal delay={0.08}>
              <img
                src={imgDesignFlow1}
                alt="Reconciliation workflow"
                className="w-full h-auto rounded-xl"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
            <Reveal delay={0.16}>
              <img
                src={imgDesignFlow2}
                alt="Exception handling"
                className="w-full h-auto rounded-xl"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
          </div>
          <Reveal className="mt-5">
            <img
              src={imgDesignFlow3}
              alt="AI confidence indicators"
              className="w-full h-auto rounded-xl"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal className="mt-5">
            <img
              src={imgDesignFlow4}
              alt="Enterprise interaction patterns"
              className="w-full h-auto rounded-xl"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </div>
      </section>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          RESULTS — Full-width dark accent band
          ═══════════════════════════════════════════════════════ */}
      <section
        className="py-24 md:py-36 px-6 md:px-12 lg:px-16"
        style={{ backgroundColor: 'var(--color-gray-900)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Results
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-16">
              Measurable impact across the platform
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-16 text-center">
            <Reveal delay={0.08}>
              <div>
                <p className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-3">
                  +30%
                </p>
                <p className="text-sm font-light" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  increase in automation adoption
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div>
                <p className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-3">
                  25%
                </p>
                <p className="text-sm font-light" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  faster exception resolution
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div>
                <p
                  className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-3"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  &darr;
                </p>
                <p className="text-sm font-light" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Reduction in reconciliation-related support tickets
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div>
                <p
                  className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-3"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  &uarr;
                </p>
                <p className="text-sm font-light" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Increased enterprise expansion into advanced modules
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CLOSING IMAGE
          ═══════════════════════════════════════════════════════ */}
      <div className="relative w-full overflow-hidden">
        <img
          src={imgClosing}
          alt="FundGuard — enterprise UX at scale"
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="ml-auto mr-4 md:mr-12 lg:mr-20 max-w-[40%] md:max-w-sm lg:max-w-md">
            <p className="text-[10px] leading-3 md:text-base md:leading-7 mb-1 md:mb-2 text-white font-light tracking-wide">
              &ldquo;Enterprise UX succeeds when users stop fighting the interface
            </p>
            <p className="text-xs leading-4 md:text-3xl md:leading-snug lg:text-[48px] lg:leading-snug text-white font-light tracking-wide">
              and start reasoning about the system&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          NEXT CASE STUDY NAVIGATION
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-12 md:pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div />
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--text-tertiary)' }}>
              Next Case Study
            </p>
            <p className="text-base md:text-lg font-medium flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              monday.com
              <ArrowRight className="w-4 h-4" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
