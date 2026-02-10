import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

/* ================================================================
   CaseStudyLayout — Shell for every case study page
   ================================================================
   Provides:
   - Transparent floating header with back button
   - Snap-scroll container for hero + body sections
   - Fade-in animation on mount

   The header overlays the content with a transparent background
   so the hero section extends to the very top of the viewport.
   ================================================================ */

interface CaseStudyLayoutProps {
  onNavigateHome: () => void;
  children: ReactNode;
}

export function CaseStudyLayout({ onNavigateHome, children }: CaseStudyLayoutProps) {
  return (
    <div className="h-dvh relative overflow-hidden bg-surface-primary">
      {/* Header — floating, transparent, overlays content */}
      <motion.header
        className="absolute top-0 left-0 right-0 flex items-center px-[var(--content-px)] md:px-[var(--content-px-md)] lg:px-[var(--content-px-lg)] py-[var(--space-4)] md:py-[var(--space-5)] z-[var(--z-header)]"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
      >
        <button
          onClick={onNavigateHome}
          className="group flex items-center gap-[var(--space-2)] px-[var(--space-4)] py-[var(--space-2)] rounded-[var(--radius-full)] bg-[var(--color-white)]/80 backdrop-blur-sm border border-[var(--border-default)] text-text-primary text-sm font-[var(--weight-normal)] hover:bg-[var(--color-white)] hover:border-[var(--border-subtle)] transition-all duration-[var(--duration-normal)] shadow-sm hover:shadow-md"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-[var(--duration-normal)] group-hover:-translate-x-0.5" />
          <span>Back</span>
        </button>
      </motion.header>

      {/* Scroll container — native smooth scrolling, no snap */}
      <div
        className="h-full overflow-y-auto animate-[fadeIn_0.8s_ease_0.5s_both]"
      >
        {children}
      </div>
    </div>
  );
}
