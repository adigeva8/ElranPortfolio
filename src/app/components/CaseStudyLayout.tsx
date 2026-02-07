import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface CaseStudyLayoutProps {
  onNavigateHome: () => void;
  children: ReactNode;
}

export function CaseStudyLayout({ onNavigateHome, children }: CaseStudyLayoutProps) {
  return (
    <div className="bg-white min-h-screen w-full overflow-y-auto">
      {/* Header - Fixed position */}
      <motion.header 
        className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-6 lg:px-8 py-4 md:py-6 font-light bg-white border-b border-gray-100"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      >
        <div className="text-sm md:text-lg text-black">elran levy portfolio</div>
        
        {/* Desktop Back Button */}
        <button 
          onClick={onNavigateHome}
          className="hidden md:flex items-center gap-2 hover:opacity-70 transition-opacity text-black text-sm md:text-base"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        {/* Mobile Back Button */}
        <button
          className="md:hidden relative text-black"
          onClick={onNavigateHome}
          aria-label="Back"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </motion.header>

      {/* Case Study Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
