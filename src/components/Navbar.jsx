import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload, FiArrowUp, FiSun, FiMoon } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
      
      // Determine active section
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'github', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/85 dark:bg-dark-200/90 backdrop-blur-xl shadow-lg py-3 border-b border-gray-200/50 dark:border-white/10' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => scrollToSection(e, '#home')}
            >
              <div className="relative">
                <div className="w-11 h-11 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-500/30">
                  MS
                </div>
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                >
                  <HiOutlineSparkles className="text-accent-400" size={14} />
                </motion.div>
              </div>
              <span className={`text-xl font-bold hidden sm:block transition-colors duration-300 ${
                scrolled 
                  ? 'bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent' 
                  : 'text-white'
              }`}>
                Md Shahzad
              </span>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      scrolled 
                        ? isActive 
                          ? 'text-primary-600 dark:text-primary-400' 
                          : 'text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400' 
                        : isActive 
                          ? 'text-white' 
                          : 'text-white/80 hover:text-white'
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => scrollToSection(e, link.href)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.a>
                );
              })}
              
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2.5 rounded-xl transition-all duration-300 mx-2 ${
                  scrolled 
                    ? 'bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-white/20' 
                    : 'bg-white/15 text-white hover:bg-white/25'
                }`}
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiSun size={20} className="text-amber-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiMoon size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
              
              <motion.a
                href="/resume.pdf"
                download
                className={`ml-2 px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 ${
                  scrolled 
                    ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg hover:shadow-xl hover:shadow-primary-500/30' 
                    : 'bg-white/15 backdrop-blur-sm border border-white/30 text-white hover:bg-white/25'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload size={16} />
                <span>Resume</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Mobile Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-lg transition-colors ${
                  scrolled ? 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10' : 'text-white hover:bg-white/10'
                }`}
              >
                {isDark ? <FiSun size={20} className="text-amber-400" /> : <FiMoon size={20} />}
              </motion.button>
              
              <motion.button
                className={`p-2 rounded-lg transition-colors ${
                  scrolled ? 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10' : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiX size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiMenu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 overflow-hidden"
              >
                <div className="bg-white/95 dark:bg-dark-100/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-gray-200/50 dark:border-white/10">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`block py-3 px-4 rounded-xl font-medium transition-all ${
                        activeSection === link.href.slice(1)
                          ? 'bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/40 dark:to-accent-900/40 text-primary-600 dark:text-primary-300'
                          : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5'
                      }`}
                      onClick={(e) => scrollToSection(e, link.href)}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                  <motion.a
                    href="/resume.pdf"
                    download
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    className="mt-3 w-full py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg"
                  >
                    <FiDownload />
                    Download Resume
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-full shadow-xl hover:shadow-2xl hover:shadow-primary-500/40 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
