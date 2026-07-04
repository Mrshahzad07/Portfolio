import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle, FiAward, FiCode, FiGlobe } from 'react-icons/fi';
import { HiOutlineSparkles, HiOutlineOfficeBuilding } from 'react-icons/hi';
import { SiSpringboot, SiReact, SiMysql, SiFastapi, SiPython } from 'react-icons/si';
import { BsRobot } from 'react-icons/bs';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: 'Agentic Full Stack Developer Intern',
      company: 'Tap Academy',
      location: 'Bengaluru',
      period: 'Jul 2025 – Jan 2026',
      type: 'Internship',
      current: false,
      description: 'Developed and deployed AI-powered full-stack applications with a focus on career analytics, NLP-based recommendation engines, and scalable REST APIs.',
      achievements: [
        'Developed and deployed CareerLytics using Java, Spring Boot, React.js, and MySQL as part of the internship',
        'Designed scalable REST APIs and optimized database schemas, reducing backend API response time by 40%',
        'Implemented hybrid recommendation algorithms for jobs and learning resources using NLP techniques',
        'Built responsive React.js dashboards for career analytics and recommendation visualization',
        'Performed unit testing, integration testing, and cloud deployment',
      ],
      technologies: [
        { name: 'Spring Boot', icon: <SiSpringboot /> },
        { name: 'React', icon: <SiReact /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'NLP', icon: <BsRobot /> },
      ],
      gradient: 'from-violet-500 to-cyan-500',
    },
    {
      title: 'AI Automation Intern',
      company: 'Hsunahd Consultancy',
      location: 'Remote',
      period: 'Mar 2025',
      type: 'Remote Internship',
      current: false,
      description: 'Worked on AI-powered automation workflows for digital business operations, including Shopify store configuration and business process automation.',
      achievements: [
        'Worked on AI-powered automation workflows for digital business operations',
        'Configured Shopify stores, website hosting, and domain integration',
        'Supported product catalog management and business automation processes',
      ],
      technologies: [
        { name: 'AI Automation', icon: <BsRobot /> },
        { name: 'Shopify', icon: <FiGlobe /> },
      ],
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section id="experience" className="section-padding section-dark-alt relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="badge-glow mb-6">
            <FiBriefcase className="text-lg" />
            Career Journey
          </span>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-divider mt-4 mb-6"></div>
          <p className="section-subtitle">
            My professional journey in AI/ML engineering and full-stack development
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto mt-16">
          {/* Vertical Data Stream Timeline */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gray-800 hidden md:block overflow-hidden rounded-full">
            <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-[scan_2s_linear_infinite]" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-violet-500/20 via-cyan-500/20 to-emerald-500/20" />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative md:pl-24"
              >
                {/* Timeline node/dot */}
                <div className={`absolute left-0 md:left-[1.8rem] top-8 w-6 h-6 rounded-full bg-gradient-to-br ${exp.gradient} border-4 border-[#0a0a14] z-10 hidden md:flex items-center justify-center shadow-[0_0_15px_currentColor]`}>
                  <div className="w-2 h-2 bg-[#0a0a14] rounded-full animate-ping" />
                </div>

                <div className="glass-card p-6 md:p-8 hover:bg-white/10 transition-colors relative overflow-hidden group">
                  {/* Holographic Circuit Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] [background-size:10px_10px]" />
                  
                  {/* Glowing Top Border */}
                  <div className={`absolute top-0 left-0 w-0 h-1 bg-gradient-to-r ${exp.gradient} group-hover:w-full transition-all duration-700 ease-out`} />

                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 relative z-10">
                      <div className="flex items-start gap-5">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${exp.gradient} text-white shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <HiOutlineOfficeBuilding size={28} />
                        </div>
                        <div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className={`inline-block px-3 py-1 bg-gradient-to-r ${exp.gradient} text-white text-xs font-bold rounded-full`}>
                              {exp.type}
                            </span>
                            {exp.current && (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-full">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping absolute"></span>
                                <span className="w-2 h-2 bg-emerald-400 rounded-full relative"></span>
                                Current
                              </span>
                            )}
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                          <p className="text-lg font-medium text-gray-400">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap md:flex-col lg:flex-row gap-3 text-sm">
                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-gray-300">
                          <FiCalendar className="text-violet-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-gray-300">
                          <FiMapPin className="text-cyan-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                      {exp.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                        <FiAward className="text-violet-400" />
                        Key Achievements
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 hover:border-white/10 transition-colors">
                            <div className="flex-shrink-0 mt-1">
                              <FiCheckCircle className="text-emerald-400" size={16} />
                            </div>
                            <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                        <FiCode className="text-cyan-400" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, techIndex) => (
                          <div key={techIndex} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-gray-300">
                            <span className="text-violet-400">{tech.icon}</span>
                            <span className="text-sm font-medium">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-5 glass-card shadow-[0_0_40px_rgba(139,92,246,0.15)]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
            </span>
            <span className="text-white font-medium">
              Actively seeking full-time AI/ML Engineer & Full Stack Developer opportunities
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
