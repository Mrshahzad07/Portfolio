import { motion } from 'framer-motion';
import { FiHeart, FiGithub, FiLinkedin, FiMail, FiArrowUp, FiTerminal } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { SiReact, SiTailwindcss, SiFramer, SiPython } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const techStack = [
    { icon: <SiReact />, name: 'React', color: 'text-cyan-400' },
    { icon: <SiPython />, name: 'Python', color: 'text-yellow-400' },
    { icon: <SiTailwindcss />, name: 'Tailwind', color: 'text-cyan-500' },
    { icon: <SiFramer />, name: 'Framer', color: 'text-pink-400' },
  ];

  return (
    <footer className="relative bg-[#05050a] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-violet-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-violet-500/20">
                <FiTerminal size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Md Shahzad</h3>
                <p className="text-violet-400 text-sm font-medium">AI/ML Engineer & Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Passionate about building intelligent AI systems and scalable full-stack 
              applications that make a real-world impact.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: <FiGithub size={20} />, href: 'https://github.com/Mrshahzad07', label: 'GitHub' },
                { icon: <FiLinkedin size={20} />, href: 'https://www.linkedin.com/in/md-shahzad-663b98292/', label: 'LinkedIn' },
                { icon: <FiMail size={20} />, href: '#contact', label: 'Email' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-violet-500/50 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transform duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Built With */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <HiOutlineSparkles className="text-violet-400" />
              Built With
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {techStack.map((tech, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                  <span className={tech.color}>{tech.icon}</span>
                  {tech.name}
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-violet-500/20 group-hover:border-violet-500/50 transition-all">
                  <FiArrowUp size={16} />
                </div>
                Back to top
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Md Shahzad. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Made with</span>
            <FiHeart className="text-red-500" />
            <span>in Bengaluru, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
