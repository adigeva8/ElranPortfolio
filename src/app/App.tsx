import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Linkedin, Mail } from 'lucide-react';
import { ProjectCard } from '@/app/components/ProjectCard';

import { ContactPage } from '@/app/components/ContactPage';
import { FundguardCaseStudy } from '@/app/components/FundguardCaseStudy';
import { BitCaseStudy } from '@/app/components/BitCaseStudy';
import { XtreamIOCaseStudy } from '@/app/components/XtreamIOCaseStudy';
import { MondayCaseStudy } from '@/app/components/MondayCaseStudy';
import { BluevineCaseStudy } from '@/app/components/BluevineCaseStudy';

/* -- Project images ------------------------------------------------ */
import imgMacStudio from 'figma:asset/4decb3fa846a4088c678f19d989b02718036933a.png';
import imgIPhone15Pro from 'figma:asset/21d1360edf0132c07e6253991afe1a55ee6a2bf4.png';
import imgIPadMini from 'figma:asset/8b112128be2070541f71d6d357666b3c210840ca.png';
import imgMondayMacBook from 'figma:asset/0b015f0f176342d0f8f762e05031909f478fb58f.png';
import imgBluevinePhones from 'figma:asset/f54f4c1a2742d29249554b7c7a0e1bb0d76424ff.png';

/* -- About photo --------------------------------------------------- */
import imgPhoto from 'figma:asset/b3b8e05334419d62db96917a5fffa3ff2c99440e.png';

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<
    'home' | 'contact' | 'fundguard' | 'bit' | 'xtreamio' | 'monday' | 'bluevine'
  >('home');

  /* -- Navigation -------------------------------------------------- */
  const navigateTo = (page: typeof currentPage) => {
    window.history.pushState({ page }, '');
    setCurrentPage(page);
    window.scrollTo({ top: 0 });
  };

  const navigateBackToProject = (projectId: string) => {
    window.history.pushState({ page: 'home' }, '');
    setCurrentPage('home');
    setTimeout(() => {
      document.getElementById(projectId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 150);
  };

  useEffect(() => {
    window.history.replaceState({ page: 'home' }, '');

    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.page) {
        setCurrentPage(event.state.page);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  /* -- Work link handler (scrolls on home, navigates on other pages) */
  const handleWorkClick = () => {
    setMobileMenuOpen(false);
    if (currentPage === 'home') {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigateTo('home');
      setTimeout(() => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  /* -- Page content renderer --------------------------------------- */
  const renderPageContent = () => {
    switch (currentPage) {
      case 'contact':
        return <ContactPage />;
      case 'fundguard':
        return <FundguardCaseStudy onNextStudy={() => navigateTo('monday')} onBack={() => navigateBackToProject('project-fundguard')} />;
      case 'bit':
        return <BitCaseStudy onNextStudy={() => navigateTo('bluevine')} onBack={() => navigateBackToProject('project-bit')} />;
      case 'xtreamio':
        return <XtreamIOCaseStudy onNextStudy={() => navigateTo('fundguard')} onBack={() => navigateBackToProject('project-xtreamio')} />;
      case 'monday':
        return <MondayCaseStudy onNextStudy={() => navigateTo('bit')} onBack={() => navigateBackToProject('project-monday')} />;
      case 'bluevine':
        return <BluevineCaseStudy onNextStudy={() => navigateTo('xtreamio')} onBack={() => navigateBackToProject('project-bluevine')} />;
      default:
        return renderHomePage();
    }
  };

  /* -- Handle contact ------------------------------------------- */
  const handleContactClick = () => {
    setMobileMenuOpen(false);
    window.location.href = 'mailto:levy.elran@gmail.com';
  };

  /* ================================================================
     HOME PAGE CONTENT
     ================================================================ */
  const renderHomePage = () => (
    <>
      {/* -- Hero Section ------------------------------------------- */}
      <section className="relative min-h-screen pt-24 pb-20 px-6 md:px-12 lg:px-16 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20 w-full">
          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-5">
            <motion.h1
              className="text-[clamp(1.75rem,4vw,3.25rem)] font-medium leading-[1.1] tracking-tight"
              style={{ color: 'var(--text-primary)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            >
              Turning complex enterprise systems into clear, scalable products.
            </motion.h1>
            <motion.p
              className="text-base md:text-lg font-light leading-relaxed max-w-[58ch]"
              style={{ color: 'var(--text-secondary)' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
            >
              I redesign system architecture, workflows, and state logic so automation becomes trustworthy and decisions become confident.
            </motion.p>
            <motion.p
              className="text-xs uppercase tracking-[0.2em] font-normal"
              style={{ color: 'var(--text-muted)' }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            >
              Selected work: Fundguard &bull; monday.com &bull; bit
            </motion.p>

            {/* CTAs + Social */}
            <motion.div
              className="mt-4 flex items-center gap-5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
            >
              <button
                onClick={handleWorkClick}
                className="group inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all duration-300"
                style={{ color: 'var(--text-primary)', minHeight: '44px' }}
              >
                View Selected Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
            <motion.div
              className="flex items-center gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.75, ease: 'easeOut' }}
            >
              <a
                href="https://www.linkedin.com/in/elran-levy/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-50 transition-opacity duration-300"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:levy.elran@gmail.com"
                className="hover:opacity-50 transition-opacity duration-300"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            className="flex-1 max-w-sm lg:max-w-md"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          >
            <div className="w-48 h-48 rounded-full md:w-full md:h-auto md:rounded-2xl mx-auto overflow-hidden">
              <img
                src={imgPhoto}
                alt="Elran Levy"
                className="w-full h-full md:h-auto object-cover object-top scale-150 origin-top md:scale-100 md:origin-center"
                width={480}
                height={480}
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[22px] h-[36px] rounded-full flex items-start justify-center pt-2"
            style={{ border: '1.5px solid rgba(20,20,20,0.15)' }}
          >
            <div
              className="w-[3px] h-[6px] rounded-full"
              style={{ backgroundColor: 'rgba(20,20,20,0.25)' }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* -- About Section ------------------------------------------ */}
      <section id="about" className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: 'var(--surface-secondary)' }}>
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p
            className="font-extralight leading-[1.15]"
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--text-primary)',
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            }}
          >
            Designing systems that scale.
          </p>
          <div className="mt-8 flex flex-col gap-4">
            <p
              className="text-sm md:text-base font-light leading-[1.7]"
              style={{ color: 'var(--text-secondary)' }}
            >
              I specialize in enterprise platforms where complexity, automation, and risk intersect.
              My work focuses on system architecture clarity, workflow optimization, and state visibility—so experts can act with confidence.
            </p>
            <p
              className="text-sm md:text-base font-light leading-[1.7]"
              style={{ color: 'var(--text-secondary)' }}
            >
              I collaborate closely with product, engineering, and data teams to ensure design decisions scale beyond UI into logic, behavior, and system structure.
            </p>
          </div>
        </motion.div>
      </section>

      {/* -- Selected Work ------------------------------------------ */}
      <section className="py-16 md:py-28 lg:py-36 px-6 md:px-12 lg:px-16" id="work">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p
              className="text-[11px] uppercase tracking-[0.25em] mb-3 font-medium"
              style={{ color: 'var(--text-muted)' }}
            >
              selected work
            </p>
            <p
              className="text-base md:text-lg font-light mb-14 max-w-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              A selection of my recent work
            </p>
          </motion.div>

          <div className="flex flex-col gap-8 md:gap-10">
            {/* Fundguard */}
            <ProjectCard
              id="project-fundguard"
              elevated
              title="Restoring trust in enterprise automation"
              description="Enterprise fintech platform used by asset managers to configure complex fund hierarchies. Led a structural redesign of reconciliation and exception architecture to increase automation trust."
              imageSrc={imgMacStudio}
              tags={['enterprise fintech', 'B2B']}
              metrics={[
                { value: '+30%', label: 'Increase in automation adoption' },
                { value: '25%', label: 'Faster exception resolution' },
                { value: 'Reduced errors', label: 'Configuration and downstream rework' },
              ]}
              ctaLabel="View Case Study"
              imagePosition="right"
              onClick={() => navigateTo('fundguard')}
            />

            {/* Monday.com */}
            <ProjectCard
              id="project-monday"
              title="Simplifying monetization logic across product surfaces"
              description="Redesigned pricing, billing, and plan logic across core workflows to reduce confusion and improve upgrade clarity. Focused on exposing system state, plan constraints, and value differences inside the user journey."
              imageSrc={imgMondayMacBook}
              tags={['work management', 'monetization']}
              bullets={[
                '• Reduced billing confusion across upgrade flows',
                '• Improved plan comparison clarity',
                '• Streamlined monetization touchpoints',
              ]}
              ctaLabel="View Case Study"
              imagePosition="left"
              onClick={() => navigateTo('monday')}
            />

            {/* Bit App */}
            <ProjectCard
              id="project-bit"
              title="Designing scalable flows for a high-volume P2P platform"
              description="Improved payment flows in one of Israel's largest P2P platforms. Focused on reducing friction, clarifying transaction state, and improving system feedback in high-frequency journeys."
              imageSrc={imgIPhone15Pro}
              tags={['mobile app', 'B2C']}
              bullets={[
                '• Reduced friction in key transfer flows',
                '• Improved state visibility during transactions',
                '• Strengthened user trust through clearer system feedback',
              ]}
              ctaLabel="View Case Study"
              imagePosition="right"
              onClick={() => navigateTo('bit')}
            />

            {/* Bluevine */}
            <ProjectCard
              id="project-bluevine"
              title="Bluevine"
              description="Designing banking and lending experiences that help small businesses manage their finances quickly and confidently."
              imageSrc={imgBluevinePhones}
              tags={['SMB banking', 'B2C']}
              ctaLabel="View Case Study"
              imagePosition="left"
              onClick={() => navigateTo('bluevine')}
            />

            {/* XtreamIO */}
            <ProjectCard
              id="project-xtreamio"
              title="Xtream IO"
              description="An all-flash storage platform delivering high performance, scalability, and simplified data management for enterprise."
              imageSrc={imgIPadMini}
              tags={['enterprise', 'data platform']}
              ctaLabel="View Case Study"
              imagePosition="right"
              onClick={() => navigateTo('xtreamio')}
            />
          </div>
        </div>
      </section>

      {/* -- Footer ------------------------------------------------- */}
      <footer
        className="py-12 md:py-16 px-6 md:px-12 lg:px-16"
        style={{ backgroundColor: 'var(--surface-secondary)', borderTop: '1px solid var(--border-hairline)' }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <p className="text-xs font-light" style={{ color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} Elran Levy
          </p>
        </div>
      </footer>
    </>
  );

  /* ================================================================
     RENDER
     ================================================================ */
  return (
    <div className="min-h-screen bg-white">
      {/* -- Global Fixed Navigation (hidden on case study pages) ----- */}
      {(currentPage === 'home' || currentPage === 'contact') && <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl"
        style={{ borderBottom: '1px solid var(--border-hairline)' }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-14 md:h-16 flex items-center justify-between">
          <button
            onClick={() => {
              navigateTo('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-[13px] tracking-[0.2em] uppercase font-medium"
            style={{ color: 'var(--text-primary)', minHeight: '44px' }}
          >
            elran levy
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[13px]">
            <button
              onClick={handleWorkClick}
              className="hover:opacity-50 transition-opacity duration-200 font-normal"
              style={{ color: 'var(--text-primary)', minHeight: '44px' }}
            >
              Work
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (currentPage === 'home') {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigateTo('home');
                  setTimeout(() => {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                }
              }}
              className="hover:opacity-50 transition-opacity duration-200 font-normal"
              style={{ color: 'var(--text-primary)', minHeight: '44px' }}
            >
              About
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{ minWidth: '44px', minHeight: '44px' }}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>}

      {/* -- Mobile Menu --------------------------------------------- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-5 right-6"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
            <nav className="flex flex-col items-center gap-8 text-xl">
              <button
                className="font-light hover:opacity-50 transition-opacity"
                onClick={handleWorkClick}
              >
                Work
              </button>
              <button
                className="font-light hover:opacity-50 transition-opacity"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (currentPage === 'home') {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigateTo('home');
                    setTimeout(() => {
                      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    }, 150);
                  }
                }}
              >
                About
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* -- Page Content ------------------------------------------- */}
      {renderPageContent()}
    </div>
  );
}
