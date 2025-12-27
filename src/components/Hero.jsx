import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload, FiCode, FiDatabase, FiServer } from 'react-icons/fi';
import { SiReact, SiSpringboot } from 'react-icons/si';
import { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Java Full-Stack Developer", "Object Oriented Programer","Travel Enthusiast", "Problem Solver", "Content Creator", "40k+ Followers on Instagram"];
  const containerRef = useRef(null);
  
  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set((e.clientX - centerX) / 50);
        mouseY.set((e.clientY - centerY) / 50);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Typing effect with multiple roles
  useEffect(() => {
    const text = roles[currentRole];
    let index = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      if (!isDeleting && index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
        timeout = setTimeout(type, 80);
      } else if (!isDeleting && index > text.length) {
        timeout = setTimeout(() => {
          isDeleting = true;
          type();
        }, 2000);
      } else if (isDeleting && index >= 0) {
        setDisplayText(text.slice(0, index));
        index--;
        timeout = setTimeout(type, 40);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    };

    type();
    return () => clearTimeout(timeout);
  }, [currentRole]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Floating tech icons data
  const floatingIcons = [
    { icon: <SiReact size={40} />, color: 'text-cyan-400', position: 'top-20 left-10', delay: 0 },
    { icon: <SiSpringboot size={35} />, color: 'text-green-400', position: 'top-40 right-20', delay: 0.5 },
    { icon: <FiCode size={30} />, color: 'text-violet-400', position: 'bottom-40 left-20', delay: 1 },
    { icon: <FiDatabase size={35} />, color: 'text-blue-400', position: 'bottom-20 right-10', delay: 1.5 },
    { icon: <FiServer size={30} />, color: 'text-pink-400', position: 'top-60 left-1/4', delay: 2 },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
    >
      {/* Enhanced animated mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60"></div>
      
      {/* Aurora effect layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-violet-600/20 to-transparent rounded-full blur-3xl animate-aurora"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-cyan-500/20 to-transparent rounded-full blur-3xl animate-aurora" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-pink-500/10 to-transparent rounded-full blur-3xl animate-aurora" style={{ animationDelay: '10s' }}></div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              background: `linear-gradient(135deg, ${
                ['#8b5cf6', '#22d3ee', '#a78bfa', '#ec4899', '#06b6d4'][Math.floor(Math.random() * 5)]
              }, transparent)`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 15 - 7, 0],
              opacity: [0.3, 0.9, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Floating tech icons with better visibility */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.position} ${item.color} opacity-40 hidden md:block`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: item.delay,
            ease: 'easeInOut',
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Glowing orbs with improved colors */}
      <motion.div
        className="absolute w-96 h-96 bg-violet-500/25 rounded-full blur-3xl"
        style={{ x, y }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-cyan-500/25 rounded-full blur-3xl right-0 top-1/4"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-64 h-64 bg-pink-500/15 rounded-full blur-3xl left-1/4 bottom-1/4"
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container-custom relative z-10 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white/90 text-sm font-medium shadow-lg">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></span>
              Open to Work
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 text-shadow-glow">
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">Md Shahzad</span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>{' '}
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                className="inline-block"
              >
                👋
              </motion.span>
            </h1>
          </motion.div>

          {/* Typing Effect Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white/95 h-16 flex items-center justify-center gap-2">
              <span className="text-cyan-400">&lt;</span>
              {displayText}
              <span className="typing-cursor"></span>
              <span className="text-cyan-400">/&gt;</span>
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mt-6"
            >
              {['React', 'Spring Boot', 'MySQL', 'REST APIs'].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium cursor-default hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Passionate about crafting <span className="text-cyan-300 font-semibold">scalable web applications</span> and 
            solving complex problems with <span className="text-violet-300 font-semibold">clean, efficient code</span>. 
            Transforming ideas into elegant digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              onClick={() => scrollToSection('#projects')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary ripple shiny group"
            >
              <span className="flex items-center gap-2">
                <FiCode className="group-hover:rotate-12 transition-transform" />
                View Projects
              </span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
            >
              <FiMail /> Contact Me
            </motion.button>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <FiDownload /> Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex justify-center space-x-6 mb-16"
          >
            {[
              { icon: <FiGithub size={28} />, href: 'https://github.com/Mrshahzad07', label: 'GitHub' },
              { icon: <FiLinkedin size={28} />, href: 'https://www.linkedin.com/in/md-shahzad-663b98292/', label: 'LinkedIn' },
              { icon: <FiMail size={28} />, href: '#contact', label: 'Email' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (social.href === '#contact') {
                    e.preventDefault();
                    scrollToSection('#contact');
                  }
                }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="relative p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white/90 hover:text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 group"
                aria-label={social.label}
              >
                {social.icon}
                <motion.span
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {social.label}
                </motion.span>
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => scrollToSection('#about')}
          >
            <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="p-2 border border-white/30 rounded-full"
            >
              <FiArrowDown size={20} className="text-white/70" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
