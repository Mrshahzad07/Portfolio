import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiGithub, FiExternalLink, FiFolder, FiStar } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import {
  SiReact,
  SiSpringboot,
  SiMysql,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: 'CareerLytics',
      description:
        'An AI-powered career guidance platform that helps users analyze resumes, get personalized career recommendations, and prepare for interviews with intelligent insights.',
      longDesc: 'Features include resume parsing, skill gap analysis, interview preparation modules, and personalized learning paths.',
      tech: [
        { name: 'React', icon: <SiReact />, color: 'text-cyan-400' },
        { name: 'Spring Boot', icon: <SiSpringboot />, color: 'text-green-500' },
        { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-500' },
      ],
      github: 'https://github.com/Mrshahzad07/CareerLytics',
      live: 'https://careerlytics.netlify.app',
      gradient: 'from-violet-500 via-purple-500 to-pink-500',
      category: 'Full Stack',
      featured: true,
    },
    {
      title: 'EpicureExpress',
      description:
        'A modern food delivery application with real-time order tracking, restaurant management dashboard, and seamless payment integration.',
      longDesc: 'Complete solution with customer app, restaurant dashboard, and delivery management system.',
      tech: [
        { name: 'React', icon: <SiReact />, color: 'text-cyan-400' },
        { name: 'Spring Boot', icon: <SiSpringboot />, color: 'text-green-500' },
        { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-500' },
      ],
      github: 'https://github.com/Mrshahzad07/EpicureExpress',
      live: 'https://epicureexpress.netlify.app',
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      category: 'Full Stack',
      featured: true,
    },
    {
      title: 'Portfolio Website',
      description:
        'A fully responsive, modern portfolio showcasing projects, skills, and professional journey with stunning animations and glassmorphism effects.',
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
    {
      title: 'Weather App',
      description:
        'A clean and intuitive weather application providing real-time weather data, 5-day forecasts, and location-based weather information.',
      longDesc: 'Uses OpenWeatherMap API for accurate weather data and geolocation services.',
      tech: [
        { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
        { name: 'HTML5', icon: <SiHtml5 />, color: 'text-orange-500' },
        { name: 'CSS3', icon: <SiCss3 />, color: 'text-blue-500' },
      ],
      github: 'https://github.com/Mrshahzad07/Weather-App',
      live: 'https://shahzad-weather.netlify.app',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      category: 'Frontend',
      featured: false,
    },
    {
      title: 'Task Management',
      description:
        'An interactive task management tool with drag-and-drop functionality, priority levels, deadline tracking, and team collaboration features.',
      longDesc: 'Kanban-style board with real-time updates and notification system.',
      tech: [
        { name: 'React', icon: <SiReact />, color: 'text-cyan-400' },
        { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
      ],
      github: 'https://github.com/Mrshahzad07/Task-Manager',
      live: 'https://shahzad-tasks.netlify.app',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      category: 'Frontend',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-dark-300 dark:to-dark-400 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-cyan-200/20 dark:from-violet-900/20 dark:to-cyan-900/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-pink-200/30 to-purple-200/20 dark:from-pink-900/20 dark:to-purple-900/15 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/40 dark:to-accent-900/40 text-primary-600 dark:text-primary-300 rounded-full text-sm font-semibold mb-6 border border-primary-200 dark:border-primary-700/50"
          >
            <FiFolder className="text-lg" />
            My Portfolio
          </motion.span>
          <h2 className="section-title text-gray-900 dark:text-white">
            Featured <span className="gradient-text-static">Projects</span>
          </h2>
          <div className="section-divider mt-4 mb-6"></div>
          <p className="section-subtitle">
            A showcase of my recent work demonstrating my skills in full-stack development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
              
              <div className="relative bg-white dark:bg-dark-100 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-white/10 hover:shadow-2xl transition-all duration-500">
                {/* Featured Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                    <FiStar size={12} />Featured
                  </span>
                </div>

                {/* Project Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
                <div className="p-8">
                  {/* Category */}
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{project.category}</span>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-2 mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Long Description on Hover */}
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: hoveredProject === index ? 1 : 0,
                      height: hoveredProject === index ? 'auto' : 0
                    }}
                    className="text-gray-500 dark:text-gray-400 text-sm mb-4 overflow-hidden"
                  >
                    {project.longDesc}
                  </motion.p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="flex items-center gap-2 bg-gray-50 dark:bg-white/5 px-4 py-2 rounded-xl border border-gray-100 dark:border-white/10 hover:border-primary-200 dark:hover:border-primary-700/50 transition-all"
                      >
                        <span className={`text-xl ${tech.color}`}>{tech.icon}</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-white/10">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                    >
                      <FiGithub size={18} />
                      View Code
                    </motion.a>
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-medium hover:shadow-lg transition-all`}
                      >
                        <FiExternalLink size={18} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8 flex items-center justify-center gap-2">
            <HiOutlineSparkles className="text-primary-500" />
            Other Notable Projects
            <HiOutlineSparkles className="text-accent-500" />
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative bg-white dark:bg-dark-100 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-white/10 hover:shadow-2xl transition-all duration-500 h-full">
                  <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`}></div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <FiFolder className="text-primary-500" size={28} />
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                        >
                          <FiGithub size={20} />
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary-500 transition-colors"
                          >
                            <FiExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h4>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2.5 py-1 rounded-md"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
