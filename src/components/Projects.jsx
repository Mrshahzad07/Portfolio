import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiGithub, FiExternalLink, FiFolder, FiStar, FiTrendingUp } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { BsRobot } from 'react-icons/bs';
import {
  SiReact,
  SiSpringboot,
  SiMysql,
  SiFastapi,
  SiTypescript,
  SiTailwindcss,
} from 'react-icons/si';

const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: 'CareerLytics',
      subtitle: 'AI-Powered Career Growth Platform',
      description:
        'An AI-powered career recommendation platform with personalized skill-gap analysis, intelligent learning recommendations, job matching, salary insights, and market demand analytics.',
      longDesc: 'Built scalable REST APIs using Spring Boot with optimized backend performance, reducing API response time by 40%. Developed responsive dashboards using React.js for career progress visualization.',
      tech: [
        { name: 'React', icon: <SiReact />, color: 'text-cyan-400' },
        { name: 'Spring Boot', icon: <SiSpringboot />, color: 'text-green-500' },
        { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-500' },
      ],
      impact: '40% faster API response',
      github: 'https://github.com/Mrshahzad07/CareerLytics',
      live: 'https://careerlytics.netlify.app',
      gradient: 'from-violet-500 via-purple-500 to-pink-500',
      category: 'AI + Full Stack',
      featured: true,
    },
    {
      title: 'AI Employee OS (AI-EOS)',
      subtitle: 'AI-Powered HR Platform',
      description:
        'A full-stack AI-powered HR platform for leave processing, salary dispatch, and employee self-service with an integrated Groq/OpenAI-powered RAG chatbot for company-specific HR policy queries.',
      longDesc: 'Features include automated PDF salary slip generation via ReportLab, context-aware chatbot using RAG architecture, and responsive React dashboards with MUI, Redux Toolkit, and Recharts-based analytics.',
      tech: [
        { name: 'React', icon: <SiReact />, color: 'text-cyan-400' },
        { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-500' },
        { name: 'FastAPI', icon: <SiFastapi />, color: 'text-emerald-500' },
        { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-500' },
      ],
      impact: 'RAG-powered chatbot',
      github: 'https://github.com/Mrshahzad07',
      live: null,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      category: 'AI + Full Stack',
      featured: true,
    },
    {
      title: 'Customer Interaction Agent',
      subtitle: 'AI Email Automation System',
      description:
        'An AI agent using n8n to automatically manage and respond to customer enquiry emails end-to-end with Groq LLM chatbot integration for context-aware, condition-based email responses.',
      longDesc: 'Designed automated workflow logic to classify customer requirements and trigger appropriate responses without manual intervention. Fully autonomous email handling pipeline.',
      tech: [
        { name: 'n8n', icon: <BsRobot />, color: 'text-orange-500' },
        { name: 'Groq LLM', icon: <BsRobot />, color: 'text-violet-500' },
      ],
      impact: 'Zero manual intervention',
      github: 'https://github.com/Mrshahzad07',
      live: null,
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      category: 'AI Automation',
      featured: true,
    },
    {
      title: 'Portfolio Website',
      description:
        'A fully responsive, modern portfolio showcasing AI/ML projects, skills, and professional journey with stunning animations and glassmorphism effects.',
      longDesc: 'Built with React, Tailwind CSS, and Framer Motion for smooth animations.',
      tech: [
        { name: 'React', icon: <SiReact />, color: 'text-cyan-400' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-cyan-500' },
      ],
      github: 'https://github.com/Mrshahzad07/portfolio',
      live: 'https://mdshahzad.netlify.app',
      gradient: 'from-cyan-500 via-blue-500 to-violet-600',
      category: 'Frontend',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding section-dark relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="badge-glow mb-6">
            <FiFolder className="text-lg" />
            My Portfolio
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider mt-4 mb-6"></div>
          <p className="section-subtitle">
            AI-powered applications and full-stack solutions that solve real-world problems
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-20 perspective-[2000px]">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 100 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group"
            >
              <TiltCard className="glass-card relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]">
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`} />
              
              {/* Circuit Board Spotlight Hover Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] [background-size:10px_10px] pointer-events-none mix-blend-overlay" />
              
              <div className="p-8 md:p-12 relative z-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  
                  {/* Left: Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{project.category}</span>
                      <span className="flex items-center gap-1 px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full border border-white/20">
                        <FiStar size={10} className="text-amber-400" /> Featured
                      </span>
                      {project.impact && (
                        <span className="impact-badge">
                          <FiTrendingUp size={12} />
                          {project.impact}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h3>
                    <p className={`text-transparent bg-clip-text bg-gradient-to-r ${project.gradient} font-semibold text-lg mb-6`}>
                      {project.subtitle}
                    </p>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <motion.div
                      initial={false}
                      animate={{ height: hoveredProject === index ? 'auto' : 0, opacity: hoveredProject === index ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 mb-6">
                        {project.longDesc}
                      </p>
                    </motion.div>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.tech.map((tech, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                          <span className={tech.color}>{tech.icon}</span>
                          <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all border border-white/10">
                        <FiGithub size={18} />
                        Code
                      </a>
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity">
                          <FiExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-center text-white mb-10 flex items-center justify-center gap-3">
              <HiOutlineSparkles className="text-violet-400" />
              Other Notable Projects
              <HiOutlineSparkles className="text-cyan-400" />
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-[1000px]">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1, type: "spring" }}
                >
                  <TiltCard className="glass-card p-8 h-full flex flex-col group hover:border-cyan-400/50 transition-colors cursor-pointer relative overflow-hidden">
                    {/* Spotlight Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.15] transition-opacity bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] [background-size:10px_10px] pointer-events-none" />
                    
                    <div className="flex items-center justify-between mb-6 relative z-10" style={{ transform: "translateZ(20px)" }}>
                    <FiFolder className="text-violet-400" size={32} />
                    <div className="flex gap-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <FiGithub size={20} />
                      </a>
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                          <FiExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm mb-6 flex-1">
                    {project.description}
                  </p>
                                    <div className="flex flex-wrap gap-2 mt-auto" style={{ transform: "translateZ(10px)" }}>
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs font-medium text-gray-500 bg-white/5 border border-white/5 px-2 py-1 rounded">
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
