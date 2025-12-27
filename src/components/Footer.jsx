import { motion } from 'framer-motion';
import { FiHeart, FiGithub, FiLinkedin, FiMail, FiArrowUp, FiCoffee } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { SiReact, SiTailwindcss, SiFramer } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <FiGithub size={20} />, href: 'https://github.com/Mrshahzad07', label: 'GitHub', color: 'hover:bg-gray-700' },
    { icon: <FiLinkedin size={20} />, href: 'https://www.linkedin.com/in/md-shahzad-663b98292/', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: <FiMail size={20} />, href: '#contact', label: 'Email', color: 'hover:bg-red-500' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techStack = [
    { icon: <SiReact />, name: 'React', color: 'text-cyan-400' },
    { icon: <SiTailwindcss />, name: 'Tailwind', color: 'text-cyan-500' },
    { icon: <SiFramer />, name: 'Framer', color: 'text-pink-400' },
  ];

  return (
    <footer className="bg-gradient-hero text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
      
      {/* Wave decoration */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-20">
          <path
            d="M0,64 C480,150 960,-20 1440,64 L1440,0 L0,0 Z"
            className="fill-white dark:fill-dark-300"
          />
        </svg>
      </div>

      <div className="container-custom pt-20 pb-8 relative">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-violet-500/30">
                MS
              </div>
              <div>
                <h3 className="text-2xl font-bold">Md Shahzad</h3>
                <p className="text-white/70 text-sm">Java Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Passionate about building innovative web solutions and transforming ideas 
              into elegant digital experiences.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (social.href === '#contact') {
                      e.preventDefault();
                      scrollToSection('#contact');
                    }
                  }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white/90 hover:text-white transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <HiOutlineSparkles className="text-cyan-400" />
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/80 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-violet-500 rounded-full group-hover:bg-cyan-400 transition-colors"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Get In Touch */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <FiMail className="text-cyan-400" />
              Get In Touch
            </h4>
            <p className="text-white/80 mb-4">
              Have a project in mind? Let's work together to bring your ideas to life.
            </p>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-300"
            >
              Contact Me
              <FiArrowUp className="rotate-45" />
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-white/70 text-sm flex flex-wrap items-center justify-center gap-1">
              <span>© {currentYear} Md Shahzad.</span>
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FiHeart className="text-red-500" size={14} />
              </motion.span>
              <span>&</span>
              <FiCoffee className="text-amber-400" size={14} />
            </p>

            {/* Tech Stack */}
            <div className="flex items-center gap-3 text-white/70 text-sm">
              <span>Built with</span>
              <div className="flex items-center gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center gap-1 ${tech.color}`}
                  >
                    {tech.icon}
                    <span className="hidden sm:inline text-white/80">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
