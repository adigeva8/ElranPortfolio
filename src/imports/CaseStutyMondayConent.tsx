import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  LayoutGrid,
  Users,
  Zap,
  BarChart3,
  Brain,
  FlaskConical,
  Layers,
  MessageSquare,
  Target,
  Repeat,
  TrendingUp,
  SlidersHorizontal,
  Eye,
  Lightbulb,
} from 'lucide-react';

import svgPaths from './svg-6er71w85ab';

/* ── Existing images ─────────────────────────────────────────── */
import imgBoardWithCactusAndPhone from 'figma:asset/1283a766b980685a64313cdeb5ba880f6d1b751a.png';
import imgImage195 from 'figma:asset/135037eee94c070be011542ce34df21d09e0887c.png';
import imgImage196 from 'figma:asset/d2bbf953c2e0dff1f47983ab05675e22222adadc.png';
import imgStep4 from 'figma:asset/e528a6e576ff61dfdedceda779b402b8cad6f7a3.png';
import imgImage190 from 'figma:asset/5f1af89856aef65d1b868e8219fddf2446fec50b.png';
import imgImage189 from 'figma:asset/e2ace24a2f436bfdff66fee0efc67986b23bea69.png';
import imgImage193 from 'figma:asset/daf1651f8cbfbc84a76190121c487237936e8e2c.png';
import imgDiscovery212 from 'figma:asset/5891221db0f506e2ed13854c9b561b0eb94c1c45.png';
import imgDiscovery213 from 'figma:asset/46afff3de4b74b1fcd9fb6e6c6e34dc0511a1347.png';
import imgPromoted214 from 'figma:asset/2abdc6c0f0e1dc734eb659df7608c23f65d0828f.png';
import imgPromoted215 from 'figma:asset/590fcf0486ea5c0624f74a9ad643a26091276ee4.png';
import imgAbChart from '@/assets/monday-ab-chart.png';
import whyStandardVideo from '@/assets/why-standard-video.mp4';
import whyProVideo from '@/assets/why-pro-video.mp4';

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

/* ── Icon row ────────────────────────────────────────────────── */
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

/* ── Lazy video ──────────────────────────────────────────────── */
function LazyVideo({ src, className = '' }: { src: string; className?: string }) {
  return (
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      className={className}
    />
  );
}

/* ── monday.com Logo (SVG) ───────────────────────────────────── */
function MondayLogo() {
  return (
    <svg
      className="w-full max-w-[180px] h-auto mx-auto"
      fill="none"
      viewBox="0 0 335.374 69.7297"
    >
      <path d={svgPaths.p3fb55a00} fill="#FB275D" />
      <path d={svgPaths.p2c590700} fill="#FFCC00" />
      <path d={svgPaths.pfa68400} fill="#00CA72" />
      <path
        clipRule="evenodd"
        d={svgPaths.p26892b00}
        fill="black"
        fillRule="evenodd"
      />
    </svg>
  );
}

/* ================================================================
   MONDAY.COM CASE STUDY — Editorial Design System
   ================================================================ */
export default function CaseStutyMondayConent() {
  return (
    <div className="bg-white">
      {/* ═══════════════════════════════════════════════════════
          HERO / TITLE
          ═══════════════════════════════════════════════════════ */}
      <section className="pt-24 md:pt-32 lg:pt-40 pb-6 md:pb-8 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="mb-8">
              <MondayLogo />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.12] mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Optimizing monetization and plan selection at scale
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p
              className="text-base md:text-lg font-light italic max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}
            >
              Designing confidence at the moment of commitment
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
                  Growth Squad (PM · Engineering · Data)
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--text-tertiary)' }}>
                  Scope
                </p>
                <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>
                  Registration, upgrade, plan selection
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--text-tertiary)' }}>
                  Impact
                </p>
                <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>
                  +7% registration-to-plan conversion
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
            src={imgBoardWithCactusAndPhone}
            alt="monday.com board with phone"
            className="w-full h-auto rounded-xl"
            loading="eager"
            decoding="async"
          />
        </div>
      </Reveal>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          THE PROBLEM — with icons
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-12 md:pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <IconRow
              icons={[
                { icon: <LayoutGrid className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Tier Confusion' },
                { icon: <Users className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Misalignment' },
                { icon: <Zap className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Static Logic' },
              ]}
            />
          </Reveal>

          <Reveal>
            <SectionHeading>The Problem</SectionHeading>
          </Reveal>

          <Reveal delay={0.1}>
            <h3
              className="text-lg md:text-xl font-semibold text-center mb-6 max-w-2xl mx-auto leading-snug"
              style={{ color: 'var(--text-primary)' }}
            >
              Millions of users registered, but conversion to paid plans could improve
            </h3>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-sm md:text-base font-light text-center mb-6 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Challenges:
            </p>

            <div className="flex flex-col gap-3.5 max-w-lg mx-auto">
              {[
                'Confusing tier comparison',
                'Misaligned value communication',
                'Static plan selection logic',
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
          KPI / IMPACT CARD
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-4 px-6 md:px-12 lg:px-16">
        <Reveal>
          <KpiCard label="Main Impact">
            <p className="text-lg md:text-xl font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
              +7% registration-to-plan conversion
              <br />
              Improved plan clarity &amp; decision speed
            </p>
          </KpiCard>
        </Reveal>
      </section>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          MY OWNERSHIP — with icons
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-12 md:pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <IconRow
              icons={[
                { icon: <BarChart3 className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Monetization' },
                { icon: <Brain className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Recommendation' },
                { icon: <FlaskConical className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Experiments' },
              ]}
            />
          </Reveal>

          <Reveal>
            <SectionHeading>My Ownership</SectionHeading>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-4 max-w-xl mx-auto">
              {[
                'Led end-to-end design of upgrade and monetization flows',
                'Designed logic-driven plan recommendation system',
                'Partnered with Data on behavioral segmentation',
                'Worked in experiment-driven growth squad',
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
          KEY INSIGHT — Full-width dark accent band
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
              Users didn&rsquo;t struggle with pricing.
            </p>
            <p
              className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white italic"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              They struggled with choosing the right plan.
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
                text: 'Reframe plan comparison around use cases',
                icon: <Layers className="w-7 h-7" strokeWidth={1.4} />,
              },
              {
                num: '02',
                text: 'Introduce personalized recommendations',
                icon: <SlidersHorizontal className="w-7 h-7" strokeWidth={1.4} />,
              },
              {
                num: '03',
                text: 'Simplify upgrade flows',
                icon: <Target className="w-7 h-7" strokeWidth={1.4} />,
              },
              {
                num: '04',
                text: 'Run A/B tests on value framing',
                icon: <Repeat className="w-7 h-7" strokeWidth={1.4} />,
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
          DESIGN VISUALS — Plan Selection & Comparison
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-4 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <SectionHeading>Visual Guidance for Plan Selection</SectionHeading>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm md:text-base font-light text-center mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Users reached the pricing screen but struggled to confidently choose a tier.
              We introduced visual guidance that connects features to real usage, turning
              abstract comparisons into confident decisions.
            </p>
          </Reveal>
        </div>

        {/* Full-width plan selection image */}
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <img
              src={imgImage195}
              alt="Plan selection interface"
              className="w-full h-auto rounded-xl mb-5"
              loading="lazy"
              decoding="async"
            />
          </Reveal>

          {/* Plan comparison — cropped view */}
          <Reveal>
            <div className="overflow-hidden rounded-xl mb-5">
              <img
                src={imgImage196}
                alt="Plan comparison flow"
                className="w-full h-auto object-cover scale-[1.25]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>

          {/* Why Standard / Why Pro videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Reveal delay={0.08}>
              <div className="rounded-xl overflow-hidden" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                <LazyVideo src={whyStandardVideo} className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="rounded-xl overflow-hidden" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                <LazyVideo src={whyProVideo} className="w-full h-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          A/B TEST — Evidence-based approach
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-8 md:pb-12 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <IconRow
              icons={[
                { icon: <Eye className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Variant A' },
                { icon: <Lightbulb className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Variant B' },
                { icon: <MessageSquare className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Validation' },
              ]}
            />
          </Reveal>

          <Reveal>
            <SectionHeading>A/B Test: Pro Recommendation</SectionHeading>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm md:text-base font-light text-center mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              We tested a generic recommendation vs. a usage-based personalized recommendation
              to measure impact on Pro conversion. The usage-driven experience increased
              conversion from 4.0% to 5.4%, delivering a 35% relative uplift.
            </p>
          </Reveal>

          {/* Variant comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <Reveal delay={0.08}>
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                <p className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Variant A</p>
                <p className="text-xs font-light" style={{ color: 'var(--text-secondary)' }}>
                  Recommendation + Feature explanation + Why banner
                  <br />
                  &ldquo;Trust us — Pro is better for you.&rdquo;
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--surface-secondary)' }}>
                <p className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Variant B</p>
                <p className="text-xs font-light" style={{ color: 'var(--text-secondary)' }}>
                  Recommendation + Usage proof + Recommendation
                  <br />
                  &ldquo;Here&rsquo;s evidence — Pro fits how you work.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>

          {/* Variant images side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <Reveal delay={0.08}>
              <img src={imgImage190} alt="A/B test variant A" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
            </Reveal>
            <Reveal delay={0.16}>
              <img src={imgImage189} alt="A/B test variant B" className="w-full h-auto rounded-xl" loading="lazy" decoding="async" />
            </Reveal>
          </div>

          {/* Chart */}
          <Reveal>
            <img
              src={imgAbChart}
              alt="A/B test conversion trend chart"
              className="w-full h-auto rounded-xl mb-5"
              loading="lazy"
              decoding="async"
            />
          </Reveal>

          {/* Step 4 result */}
          <Reveal>
            <div className="rounded-xl overflow-hidden p-5 md:p-8" style={{ backgroundColor: 'var(--color-gray-600, #555)' }}>
              <img
                src={imgStep4}
                alt="A/B test result"
                className="w-full h-auto rounded-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <VerticalDivider />

      {/* ═══════════════════════════════════════════════════════
          FEATURE DISCOVERY — Full-bleed images
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-4 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <SectionHeading>Promoting Discovery Through Value</SectionHeading>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm md:text-base font-light text-center mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Instead of pushing upgrades aggressively, feature promotion was designed to feel
              contextual and helpful — surfacing locked capabilities where users naturally need
              them, making the upgrade feel like a natural next step.
            </p>
          </Reveal>
        </div>

        <div className="max-w-6xl mx-auto space-y-3">
          {[imgDiscovery212, imgDiscovery213, imgPromoted214, imgPromoted215].map((src, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <img
                src={src}
                alt={`Feature discovery ${i + 1}`}
                className="w-full h-auto rounded-xl"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
          ))}
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
              Measurable impact on conversion at scale
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-16 text-center">
            <Reveal delay={0.08}>
              <div>
                <p className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-3">
                  +7%
                </p>
                <p className="text-sm font-light" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  increase in registration-to-plan conversion
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div>
                <p
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-3"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  &uarr;
                </p>
                <p className="text-sm font-light" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Improved plan clarity and decision speed
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div>
                <p
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-3"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  &darr;
                </p>
                <p className="text-sm font-light" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  More consistent upgrade behavior
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
          src={imgImage193}
          alt="monday.com — good monetization removes fear"
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="ml-auto mr-4 md:mr-12 lg:mr-20 max-w-[42%] md:max-w-sm lg:max-w-md">
            <p className="text-[10px] leading-3 md:text-base md:leading-7 mb-1 md:mb-2 font-light tracking-wide" style={{ color: 'var(--text-primary)' }}>
              &ldquo;Good monetization UX doesn&rsquo;t push users to pay.
            </p>
            <p className="text-xs leading-4 md:text-3xl md:leading-snug lg:text-[48px] lg:leading-snug font-light tracking-wide" style={{ color: 'var(--text-primary)' }}>
              It removes the fear of saying yes&rdquo;
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
          <div className="text-left">
            <p className="text-[11px] uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--text-tertiary)' }}>
              Previous Case Study
            </p>
            <p className="text-base md:text-lg font-medium flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <ArrowRight className="w-4 h-4 rotate-180" />
              FundGuard
            </p>
          </div>
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--text-tertiary)' }}>
              Next Case Study
            </p>
            <p className="text-base md:text-lg font-medium flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              Bit
              <ArrowRight className="w-4 h-4" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
