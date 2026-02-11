import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  DollarSign,
  Users,
  ShieldCheck,
  BarChart3,
  Brain,
  FlaskConical,
  Layers,
  MessageSquare,
  Target,
  Repeat,
  TrendingUp,
} from 'lucide-react';

/* ── Existing images ─────────────────────────────────────────── */
import imgHero from 'figma:asset/88da6de6a1b666a471ee6930a733125a1b7e710e.png';
import imgImage184 from 'figma:asset/07a42507cb22cafb6d39b51c9254b4d2088abbb3.png';
import imgImage185 from 'figma:asset/0951004d47003d3e5824dd6b6ee4a2a692f1c14f.png';
import imgImage186 from 'figma:asset/37c8c497c64b1de3f237409d508123bfd7436060.png';
import imgImage187 from 'figma:asset/f3148055a59a7b55f2acac8549dd0c0e7c37cac9.png';
import imgDash216 from 'figma:asset/13fc9b9e5c9377cfe6a401b34f701652c82b98ec.png';
import imgDash217 from 'figma:asset/28aa4fa845afbbe3f48e5a21092fd68ea973afb8.png';
import imgDash218 from 'figma:asset/7a6b7e244b5fadc023b3ea45934532d38efdffb1.png';
import imgDash219 from 'figma:asset/f0d3902cc9f674d2fe46bfca159e4323568fd012.png';
import imgImage194 from 'figma:asset/3fa38104c924f2cbe993eee7323661a3891a0092.png';

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

/* ================================================================
   BLUEVINE CASE STUDY
   ================================================================ */
export default function CaseStutyBluevineConent() {
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
              BlueVine
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.12] mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Driving monetization and activation in SMB fintech
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p
              className="text-base md:text-lg font-light italic max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}
            >
              Turning complex financial decisions into confident actions
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
                  PM · Engineering · Data
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] mb-2" style={{ color: 'var(--text-tertiary)' }}>
                  Scope
                </p>
                <p className="text-sm font-light" style={{ color: 'var(--text-primary)' }}>
                  Registration, plan selection, upgrade flows
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
            src={imgHero}
            alt="BlueVine banking experience"
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
                { icon: <DollarSign className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Complexity' },
                { icon: <Users className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Personas' },
                { icon: <ShieldCheck className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Sensitivity' },
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
              SMB users hesitated to upgrade due to unclear value differentiation
            </h3>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-sm md:text-base font-light text-center mb-6 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Challenges:
            </p>

            <div className="flex flex-col gap-3.5 max-w-lg mx-auto">
              {[
                'Financial product complexity',
                'Different SMB personas',
                'High sensitivity around financial decisions',
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
              Improved upgrade clarity
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
                { icon: <BarChart3 className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Monetization' },
                { icon: <Brain className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.3} />, label: 'Decision Logic' },
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
                'Led monetization and upgrade flow redesign',
                'Designed decision-based plan logic',
                'Partnered with Data for behavioral insights',
                'Operated within experiment-driven squad',
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
              Financial users require clarity
            </p>
            <p
              className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white italic"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              before commitment.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 text-sm md:text-base font-light max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Decision support increased confidence.
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
                text: 'Simplify plan differentiation',
                icon: <Layers className="w-7 h-7" strokeWidth={1.4} />,
              },
              {
                num: '02',
                text: 'Add contextual guidance during selection',
                icon: <MessageSquare className="w-7 h-7" strokeWidth={1.4} />,
              },
              {
                num: '03',
                text: 'Clarify benefits tied to user behavior',
                icon: <Target className="w-7 h-7" strokeWidth={1.4} />,
              },
              {
                num: '04',
                text: 'Iterate through experimentation',
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
          DESIGN VISUALS — Onboarding & Dashboard
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-8 md:pb-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Onboarding screens */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5">
            {[imgImage184, imgImage185, imgImage186, imgImage187].map((src, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <img
                  src={src}
                  alt={`Onboarding step ${i + 1}`}
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                  decoding="async"
                />
              </Reveal>
            ))}
          </div>

          {/* Dashboard screens */}
          <Reveal>
            <img
              src={imgDash216}
              alt="BlueVine dashboard"
              className="w-full h-auto rounded-xl mb-5"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Reveal delay={0.08}>
              <img
                src={imgDash217}
                alt="Dashboard payments"
                className="w-full h-auto rounded-xl"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
            <Reveal delay={0.16}>
              <img
                src={imgDash218}
                alt="Dashboard analytics"
                className="w-full h-auto rounded-xl"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
          </div>
          <Reveal className="mt-5">
            <img
              src={imgDash219}
              alt="Dashboard credit"
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
              Measurable impact on monetization
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-16 text-center">
            <Reveal delay={0.08}>
              <div>
                <p className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-3">
                  +7%
                </p>
                <p className="text-sm font-light" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  improvement in registration-to-plan conversion
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
                  Improved upgrade clarity
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
                  Reduced hesitation during plan selection
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
          src={imgImage194}
          alt="BlueVine — clarity before commitment"
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="ml-auto mr-4 md:mr-12 lg:mr-20 max-w-[40%] md:max-w-sm lg:max-w-md">
            <p className="text-[10px] leading-3 md:text-base md:leading-7 mb-1 md:mb-2 text-white font-light tracking-wide">
              &ldquo;When users clearly understand what will happen next, it makes them:
            </p>
            <p className="text-xs leading-4 md:text-3xl md:leading-snug lg:text-[48px] lg:leading-snug text-white font-light tracking-wide">
              move faster, decide better, and rely on the product more&rdquo;
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
              Bit
            </p>
          </div>
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-[0.15em] mb-1" style={{ color: 'var(--text-tertiary)' }}>
              Next Case Study
            </p>
            <p className="text-base md:text-lg font-medium flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              Xtream IO
              <ArrowRight className="w-4 h-4" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
