import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { ProjectCard } from '@/app/components/ProjectCard';
import { AboutPage } from '@/app/components/AboutPage';
import { ContactPage } from '@/app/components/ContactPage';
import { FundguardCaseStudy } from '@/app/components/FundguardCaseStudy';
import { BitCaseStudy } from '@/app/components/BitCaseStudy';
import { XtreamIOCaseStudy } from '@/app/components/XtreamIOCaseStudy';
import { MondayCaseStudy } from '@/app/components/MondayCaseStudy';
import { BluevineCaseStudy } from '@/app/components/BluevineCaseStudy';

/* ── Project images ──────────────────────────────────────────── */
import imgMacStudio from 'figma:asset/4decb3fa846a4088c678f19d989b02718036933a.png';
import imgIPhone15Pro from 'figma:asset/21d1360edf0132c07e6253991afe1a55ee6a2bf4.png';
import imgIPadMini from 'figma:asset/8b112128be2070541f71d6d357666b3c210840ca.png';
import imgMondayMacBook from 'figma:asset/0b015f0f176342d0f8f762e05031909f478fb58f.png';
import imgBluevinePhones from 'figma:asset/f54f4c1a2742d29249554b7c7a0e1bb0d76424ff.png';

/* ── About photo ─────────────────────────────────────────────── */
import imgPhoto from 'figma:asset/b3b8e05334419d62db96917a5fffa3ff2c99440e.png';

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<
    'home' | 'about' | 'contact' | 'fundguard' | 'bit' | 'xtreamio' | 'monday' | 'bluevine'
  >('home');

  /* ── Navigation ──────────────────────────────────────────────── */
  const navigateTo = (page: typeof currentPage) => {
    window.history.pushState({ page }, '');
    setCurrentPage(page);
    window.scrollTo({ top: 0 });
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

  /* ── Page routing ────────────────────────────────────────────── */
  if (currentPage === 'about') {
    return <AboutPage onNavigateHome={() => navigateTo('home')} onNavigateContact={() => navigateTo('contact')} />;
  }
  if (currentPage === 'contact') {
    return <ContactPage onNavigateHome={() => navigateTo('home')} onNavigateAbout={() => navigateTo('about')} />;
  }
  if (currentPage === 'fundguard') {
    return <FundguardCaseStudy onNavigateHome={() => navigateTo('home')} />;
  }
  if (currentPage === 'bit') {
    return <BitCaseStudy onNavigateHome={() => navigateTo('home')} />;
  }
  if (currentPage === 'xtreamio') {
    return <XtreamIOCaseStudy onNavigateHome={() => navigateTo('home')} />;
  }
  if (currentPage === 'monday') {
    return <MondayCaseStudy onNavigateHome={() => navigateTo('home')} />;
  }
  if (currentPage === 'bluevine') {
    return <BluevineCaseStudy onNavigateHome={() => navigateTo('home')} />;
  }

  /* ================================================================
     HOME PAGE
     ================================================================ */
  return (
    <div className="min-h-screen bg-white">
      {/* ── Fixed Navigation ────────────────────────────────────── */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md"
        style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-5 flex items-center justify-between">
          <button
            onClick={() => {
              navigateTo('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-[13px] md:text-sm tracking-[0.25em] uppercase font-light"
            style={{ color: 'var(--text-primary)' }}
          >
            elran levy
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[13px]">
            <a
              href="#work"
              className="hover:opacity-50 transition-opacity duration-300 font-light"
              style={{ color: 'var(--text-primary)' }}
            >
              work
            </a>
            <button
              onClick={() => navigateTo('about')}
              className="hover:opacity-50 transition-opacity duration-300 font-light"
              style={{ color: 'var(--text-primary)' }}
            >
              about
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="hover:opacity-50 transition-opacity duration-300 font-light"
              style={{ color: 'var(--text-primary)' }}
            >
              contact
            </button>
            <a
              href="https://www.linkedin.com/in/elranlevy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-50 transition-opacity duration-300 font-light"
              style={{ color: 'var(--text-primary)' }}
            >
              linkedin
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* ── Mobile Menu ─────────────────────────────────────────── */}
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
              <a
                href="#work"
                className="font-light hover:opacity-50 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                work
              </a>
              <button
                className="font-light hover:opacity-50 transition-opacity"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigateTo('about');
                }}
              >
                about
              </button>
              <button
                className="font-light hover:opacity-50 transition-opacity"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigateTo('contact');
                }}
              >
                contact
              </button>
              <a
                href="https://www.linkedin.com/in/elranlevy/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-light hover:opacity-50 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                linkedin
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── About / Hero Section ─────────────────────────────────── */}
      <section className="relative min-h-screen pt-20 pb-20 px-6 md:px-12 lg:px-16 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full">
          {/* Text Content */}
          <motion.div
            className="flex-1 flex flex-col gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          >
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-extralight leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              Hey, I'm Elran Levy
            </h2>
            <p
              className="text-base md:text-lg font-light leading-relaxed"
              style={{ color: 'var(--text-primary)' }}
            >
              Senior Product Design Lead with a passion for simplifying complex problems.
            </p>
            <p
              className="text-sm md:text-base font-light leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Clarity, trust, and usability are at the core of every decision I make. I believe
              that great design should simplify complex domains without dumbing them down — it
              should be intuitive, impactful, and built for real user needs.
            </p>
            <button
              onClick={() => navigateTo('about')}
              className="mt-2 flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all duration-300 group"
              style={{ color: 'var(--text-primary)' }}
            >
              About me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="flex-1 max-w-sm lg:max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
          >
            <img
              src={imgPhoto}
              alt="Elran Levy"
              className="w-full h-auto object-cover rounded-xl"
              loading="eager"
              decoding="async"
            />
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
            style={{ border: '1.5px solid rgba(24,39,48,0.25)' }}
          >
            <div
              className="w-[3px] h-[6px] rounded-full"
              style={{ backgroundColor: 'rgba(24,39,48,0.35)' }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Quote Section ───────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: 'var(--surface-secondary)' }}>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p
            className="font-extralight leading-snug italic"
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--text-primary)',
              fontSize: 'clamp(1.5rem, 3vw, 2.75rem)',
            }}
          >
            Good design is as little design as possible
          </p>
          <p
            className="mt-6 text-sm font-light tracking-wider"
            style={{ color: 'var(--text-secondary)' }}
          >
            — Dieter Rams
          </p>
        </motion.div>
      </section>

      {/* ── Selected Work ───────────────────────────────────────── */}
      <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16" id="work">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p
              className="text-xs uppercase tracking-[0.3em] mb-4"
              style={{ color: 'var(--text-tertiary)' }}
            >
              selected work
            </p>
            <p
              className="text-base md:text-lg font-light mb-16 max-w-xl"
              style={{ color: 'var(--text-secondary)' }}
            >
              Let's dive into details with a selection of my recent work
            </p>
          </motion.div>

          <div className="flex flex-col gap-10 md:gap-14">
            {/* Fundguard */}
            <ProjectCard
              title="Fundguard"
              description="Turning Operational Complexity into Clear, Actionable Systems. Designing scalable workflows for investment operations teams."
              imageSrc={imgMacStudio}
              tags={['enterprise fintech', 'B2B']}
              imagePosition="right"
              onClick={() => navigateTo('fundguard')}
            />

            {/* Monday.com */}
            <ProjectCard
              title="monday.com"
              description="Designing monetization and conversion experiences for a work management platform used by millions of users worldwide."
              imageSrc={imgMondayMacBook}
              tags={['work management', 'monetization']}
              imagePosition="left"
              onClick={() => navigateTo('monday')}
            />

            {/* Bit App */}
            <ProjectCard
              title="bit - app"
              description="Israel's leading P2P payments app — designing a lean, data-driven money transfer experience for millions of users."
              imageSrc={imgIPhone15Pro}
              tags={['mobile app', 'B2C']}
              imagePosition="right"
              onClick={() => navigateTo('bit')}
            />

            {/* Bluevine */}
            <ProjectCard
              title="Bluevine"
              description="Designing banking and lending experiences that help small businesses manage their finances quickly and confidently."
              imageSrc={imgBluevinePhones}
              tags={['SMB banking', 'B2C']}
              imagePosition="left"
              onClick={() => navigateTo('bluevine')}
            />

            {/* XtreamIO */}
            <ProjectCard
              title="Xtream IO"
              description="An all-flash storage platform delivering high performance, scalability, and simplified data management for enterprise."
              imageSrc={imgIPadMini}
              tags={['enterprise', 'data platform']}
              imagePosition="right"
              onClick={() => navigateTo('xtreamio')}
            />
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer
        className="py-16 md:py-24 px-6 md:px-12 lg:px-16 text-white"
        style={{ backgroundColor: 'var(--color-gray-900)' }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
            {/* About Column */}
            <div>
              <h3 className="text-base font-normal mb-4">About</h3>
              <p className="text-sm font-light leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
                I'm Elran Levy, a Head of Product Design with 10+ years of experience, a strong
                passion for simplifying complex products, and deep expertise in fintech and
                enterprise design.
              </p>
              <button
                onClick={() => navigateTo('about')}
                className="text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300 text-white"
              >
                more about me
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Work Column */}
            <div>
              <h3 className="text-base font-normal mb-4">Work</h3>
              <p className="text-sm font-light leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
                A selection of case studies from different projects I've worked on. Each case study
                highlights my approach, process, and the design solutions I've developed.
              </p>
              <a
                href="#work"
                className="text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300 text-white"
              >
                Read Case Studies
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Connect Column */}
            <div>
              <h3 className="text-base font-normal mb-4">Connect</h3>
              <p className="text-sm font-light leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Would you like to discuss product design, complex UX challenges, or design
                leadership? Is there an exciting project you need help with? Or you just want to
                say hey?
              </p>
              <button
                onClick={() => navigateTo('contact')}
                className="text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300 text-white"
              >
                Let's Talk
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p className="text-xs font-light" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Copyright 2025 © Elran Levy
            </p>
            <nav className="flex items-center gap-6 text-xs font-light" style={{ color: 'rgba(255,255,255,0.4)' }}>
              <a href="#work" className="hover:text-white transition-colors duration-300">
                work
              </a>
              <button onClick={() => navigateTo('about')} className="hover:text-white transition-colors duration-300">
                about
              </button>
              <button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors duration-300">
                contact
              </button>
              <a
                href="https://www.linkedin.com/in/elranlevy/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                linkedin
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
