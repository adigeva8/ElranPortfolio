import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

/* ================================================================
   CaseStudyLayout - Shell for every case study page
   ================================================================
   Provides:
   - Floating back button with glass-morphism
   - Full-viewport scroll container
   - Fade-in animation on mount
   ================================================================ */

interface CaseStudyLayoutProps {
  children: ReactNode;
  onBack?: () => void;
}

export function CaseStudyLayout({ children, onBack }: CaseStudyLayoutProps) {
  return (
    <div className="h-dvh relative overflow-hidden bg-surface-primary">
      {/* Back button - floating with glass effect */}
      <motion.button
        onClick={() => (onBack ? onBack() : window.history.back())}
        className="absolute top-4 left-5 md:left-10 lg:left-14 z-50 group flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-normal cursor-pointer transition-all duration-200"
        style={{
          color: 'var(--text-primary)',
          backgroundColor: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid var(--border-hairline)',
          minHeight: '44px',
        }}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
        whileHover={{ backgroundColor: 'rgba(255,255,255,1)' }}
      >
        <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
        <span>Back</span>
      </motion.button>

      {/* Scroll container */}
      <div
        className="h-full overflow-y-auto animate-[fadeIn_0.6s_ease_0.3s_both]"
      >
        {children}
      </div>
    </div>
  );
}
