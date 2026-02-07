import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { ProjectCard } from '@/app/components/ProjectCard';
import { AboutPage } from '@/app/components/AboutPage';
import { ContactPage } from '@/app/components/ContactPage';
import { FundguardCaseStudy } from '@/app/components/FundguardCaseStudy';
import { BitCaseStudy } from '@/app/components/BitCaseStudy';
import { XtreamIOCaseStudy } from '@/app/components/XtreamIOCaseStudy';
import { MondayCaseStudy } from '@/app/components/MondayCaseStudy';
import { BluevineCaseStudy } from '@/app/components/BluevineCaseStudy';
import imgMacStudio from 'figma:asset/4decb3fa846a4088c678f19d989b02718036933a.png';
import imgZenBookDuo from 'figma:asset/dd66d05e0dae586d4d5431f5436c0a8a33b30ab9.png';
import imgIPhone15Pro from 'figma:asset/21d1360edf0132c07e6253991afe1a55ee6a2bf4.png';
import imgIPadMini from 'figma:asset/8b112128be2070541f71d6d357666b3c210840ca.png';
import imgMondayMacBook from 'figma:asset/0b015f0f176342d0f8f762e05031909f478fb58f.png';
import imgBluevinePhones from 'figma:asset/f54f4c1a2742d29249554b7c7a0e1bb0d76424ff.png';
const headlines = ['DRIVEN BY USERS', 'THOUGHTFUL DESIGN', 'FOCUSED ON VALUE'];

export function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBigHeadline, setShowBigHeadline] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'contact' | 'fundguard' | 'bit' | 'xtreamio' | 'monday' | 'bluevine'>('home');

  useEffect(() => {
    // Start the big headline rotation after initial animations
    const timer = setTimeout(() => {
      setShowBigHeadline(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showBigHeadline) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [showBigHeadline]);

  if (currentPage === 'about') {
    return <AboutPage onNavigateHome={() => setCurrentPage('home')} onNavigateContact={() => setCurrentPage('contact')} />;
  }

  if (currentPage === 'contact') {
    return <ContactPage onNavigateHome={() => setCurrentPage('home')} onNavigateAbout={() => setCurrentPage('about')} />;
  }

  if (currentPage === 'fundguard') {
    return <FundguardCaseStudy onNavigateHome={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'bit') {
    return <BitCaseStudy onNavigateHome={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'xtreamio') {
    return <XtreamIOCaseStudy onNavigateHome={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'monday') {
    return <MondayCaseStudy onNavigateHome={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'bluevine') {
    return <BluevineCaseStudy onNavigateHome={() => setCurrentPage('home')} />;
  }

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Hero Page */}
      <motion.div 
        className="bg-black text-white h-screen flex flex-col snap-start snap-always"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Header */}
        <motion.header 
          className="flex items-center justify-between px-4 md:px-6 py-4 md:py-6 font-light relative"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          <div className="text-sm md:text-lg">elran levy portfolio</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4 md:gap-8 text-sm md:text-base">
            <a href="#work" className="hover:opacity-70 transition-opacity font-normal underline underline-offset-4">
              main
            </a>
            <button 
              onClick={() => setCurrentPage('about')}
              className="hover:opacity-70 transition-opacity font-light"
            >
              about
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="hover:opacity-70 transition-opacity font-light"
            >
              contact
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="fixed inset-0 bg-black z-40 flex items-center justify-center md:hidden"
              >
                <nav className="flex flex-col gap-8 text-[20px] text-center">
                  <a 
                    href="#work" 
                    className="hover:opacity-70 transition-opacity font-light underline underline-offset-4"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    main
                  </a>
                  <button 
                    className="hover:opacity-70 transition-opacity font-light"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setCurrentPage('about');
                    }}
                  >
                    about
                  </button>
                  <button 
                    className="hover:opacity-70 transition-opacity font-light"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setCurrentPage('contact');
                    }}
                  >
                    contact
                  </button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 text-center relative">
        <div className="flex flex-col items-center">
          <motion.p 
            className="max-w-4xl mb-[30px] text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed font-thin px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: 'easeOut' }}
          >
            I merge relentless strategy with flawless execution to build digital
            products that are more than just functional or beautiful - They are a
            force powered by:
          </motion.p>

          {/* Animated Headline */}
          <div className="relative h-24 md:h-32 lg:h-48 flex items-center justify-center w-full overflow-visible px-4">
            {showBigHeadline && (
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentIndex}
                  initial={{ opacity: 0, filter: 'blur(20px)', y: 20 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  exit={{ opacity: 0, filter: 'blur(20px)', y: -20 }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeInOut',
                  }}
                  className="absolute text-4xl md:text-4xl lg:text-7xl xl:text-8xl font-black whitespace-normal md:whitespace-nowrap"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #a8c5ff 0%, #ffffff 50%, #a8c5ff 100%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  <motion.span
                    style={{
                      backgroundImage: 'linear-gradient(90deg, #a8c5ff 0%, #ffffff 50%, #a8c5ff 100%)',
                      backgroundSize: '200% 100%',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: 0.8,
                      ease: 'easeInOut',
                    }}
                  >
                    {headlines[currentIndex]}
                  </motion.span>
                </motion.h1>
              </AnimatePresence>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-5 h-8 md:w-6 md:h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </div>
      </main>
      </motion.div>

      {/* Project 1: Fundguard */}
      <ProjectCard
        title="FUNDGUARD"
        description="Turning Operational Complexity into Clear, Actionable Systems. Designing scalable workflows for investment operations teams"
        imageSrc={imgMacStudio}
        backgroundColor="#ffffff"
        imagePosition="right"
        onClick={() => setCurrentPage('fundguard')}
      />

      {/* Project 2: Monday.com */}
      <ProjectCard
        title="Monday.com"
        description="monday.com is a work management platform that helps teams plan, track, and collaborate efficiently together daily."
        imageSrc={imgMondayMacBook}
        backgroundColor="#f5f5f5"
        imagePosition="left"
        onClick={() => setCurrentPage('monday')}
      />

      {/* Project 3: Behalf */}
      <ProjectCard
        title="Behalf"
        description="Behalf helps e-commerce users spread payments digitally, improving affordability, flexibility, and overall purchasing experience."
        imageSrc={imgZenBookDuo}
        backgroundColor="#ffffff"
        imagePosition="right"
      />

      {/* Project 4: Bluevine */}
      <ProjectCard
        title="Bluevine"
        description="Bluevine is a mobile banking app designed to help small businesses manage their finances quickly and confidently."
        imageSrc={imgBluevinePhones}
        backgroundColor="#f5f5f5"
        imagePosition="left"
        onClick={() => setCurrentPage('bluevine')}
      />

      {/* Project 5: Bit App */}
      <ProjectCard
        title="bit - app"
        description="Israel's leading P2P payments app - designing a lean, data-driven money transfer experience for millions of users."
        imageSrc={imgIPhone15Pro}
        backgroundColor="#ffffff"
        imagePosition="right"
        onClick={() => setCurrentPage('bit')}
      />

      {/* Project 6: XtreamIO */}
      <ProjectCard
        title="Xtream IO"
        description="Xtream IO is an all-flash storage platform delivering high performance, scalability, and simplified data management enterprise."
        imageSrc={imgIPadMini}
        backgroundColor="#f5f5f5"
        imagePosition="right"
        onClick={() => setCurrentPage('xtreamio')}
      />
    </div>
  );
}