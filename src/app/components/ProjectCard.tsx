import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

/* ================================================================
   ProjectCard - Modern project showcase card
   ================================================================
   Horizontal layout with domain tags, impact bullets, subtle
   hover depth, and animated CTA.
   ================================================================ */

interface Metric {
  value: string;
  label: string;
}

interface ProjectCardProps {
  id?: string;
  title: string;
  description: string;
  imageSrc: string;
  tags?: string[];
  bullets?: string[];
  /** Structured metrics — renders value + label instead of flat bullets */
  metrics?: Metric[];
  /** Visually elevated variant for hero-level cards */
  elevated?: boolean;
  ctaLabel?: string;
  imagePosition?: 'left' | 'right';
  onClick?: () => void;
  /** @deprecated kept for backward compat - use tags instead */
  backgroundColor?: string;
}

export function ProjectCard({
  id,
  title,
  description,
  imageSrc,
  tags = [],
  bullets = [],
  metrics,
  elevated = false,
  ctaLabel = 'View Case Study',
  imagePosition = 'right',
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      id={id}
      className="group cursor-pointer"
      onClick={onClick}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div
        className={`flex flex-col ${
          imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } items-center gap-8 lg:gap-12 ${elevated ? 'rounded-xl' : 'rounded-2xl'} p-6 md:p-10 lg:p-12 transition-all duration-400 ease-out`}
        style={{
          backgroundColor: 'var(--surface-secondary)',
          ...(elevated && {
            boxShadow: '0 1px 4px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)',
          }),
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#ededee';
          if (elevated) {
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--surface-secondary)';
          if (elevated) {
            e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)';
          }
        }}
      >
        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-3 md:gap-4 w-full">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-[10px] uppercase px-2.5 py-1 rounded-md ${
                    elevated
                      ? 'tracking-[0.15em] font-semibold'
                      : 'tracking-[0.12em] font-medium'
                  }`}
                  style={{
                    color: elevated ? 'var(--text-secondary)' : 'var(--text-muted)',
                    backgroundColor: elevated ? 'rgba(0,0,0,0.06)' : 'rgba(0,0,0,0.04)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3
            className={
              elevated
                ? 'text-xl md:text-2xl lg:text-[1.75rem] font-semibold leading-[1.2]'
                : 'text-lg md:text-xl lg:text-2xl font-medium leading-snug'
            }
            style={{ color: 'var(--text-primary)' }}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className="text-sm md:text-[15px] font-light leading-[1.65] max-w-md"
            style={{ color: 'var(--text-secondary)' }}
          >
            {description}
          </p>

          {/* Structured Metrics (elevated cards) */}
          {metrics && metrics.length > 0 && (
            <div className="flex flex-col gap-3 mt-2">
              {metrics.map((metric, i) => (
                <div key={i}>
                  <p
                    className="text-base md:text-lg font-semibold leading-tight"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {metric.value}
                  </p>
                  <p
                    className="text-xs md:text-sm font-light leading-snug mt-0.5"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Impact Bullets (standard cards) */}
          {!metrics && bullets.length > 0 && (
            <div className="flex flex-col gap-1.5 mt-1">
              {bullets.map((bullet, i) => (
                <p
                  key={i}
                  className="text-xs md:text-sm font-light"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {bullet}
                </p>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className={elevated ? 'mt-5' : 'mt-3'}>
            <span
              className={`inline-flex items-center gap-2 text-sm ${
                elevated ? 'font-semibold' : 'font-medium'
              } group-hover:gap-3 transition-all duration-300`}
              style={{ color: 'var(--text-primary)' }}
            >
              {ctaLabel}
              <ArrowRight
                className={`${
                  elevated ? 'w-[18px] h-[18px]' : 'w-4 h-4'
                } group-hover:translate-x-1 transition-transform duration-300`}
              />
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 w-full overflow-hidden rounded-xl">
          <img
            src={imageSrc}
            alt={title}
            loading="lazy"
            decoding="async"
            className={`w-full h-auto object-contain ${
              elevated
                ? 'max-h-[380px] md:max-h-[480px] lg:max-h-[530px] group-hover:scale-[1.03]'
                : 'max-h-[350px] md:max-h-[450px] lg:max-h-[500px] group-hover:scale-[1.02]'
            } transition-transform duration-600 ease-out`}
          />
        </div>
      </div>
    </motion.div>
  );
}
