import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle, FiAward, FiCode } from 'react-icons/fi';
import { HiOutlineSparkles, HiOutlineOfficeBuilding } from 'react-icons/hi';
import { SiSpringboot, SiReact, SiMysql } from 'react-icons/si';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: 'Java Full-Stack Developer Intern',
      company: 'Tap Academy',
      location: 'Bangalore, India',
      period: 'July 2025 - Present',
      type: 'Internship',
      description: 'Intensive full-stack development training with hands-on project experience building enterprise-grade applications.',
      achievements: [
        'Developed 3+ full-stack web applications using Java, Spring Boot, and React',
        'Built and deployed RESTful APIs handling 1000+ API requests',
        'Implemented secure database operations using Hibernate ORM and MySQL',
        'Collaborated with team of 5 developers using Git version control',
        'Participated in 20+ code reviews following agile methodologies',
      ],
      technologies: [
        { name: 'Spring Boot', icon: <SiSpringboot /> },
        { name: 'React', icon: <SiReact /> },
        { name: 'MySQL', icon: <SiMysql /> },
      ],
      gradient: 'from-violet-500 to-cyan-500',
    },
  ];

  return (
    <section id="experience" className="section-padding bg-white dark:bg-dark-300 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-gradient-to-br from-violet-200/40 to-cyan-200/30 dark:from-violet-900/25 dark:to-cyan-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-gradient-to-tl from-pink-200/30 to-purple-200/30 dark:from-pink-900/20 dark:to-purple-900/20 rounded-full blur-3xl"></div>
      
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
            <FiBriefcase className="text-lg" />
            Career Journey
          </motion.span>
          <h2 className="section-title text-gray-900 dark:text-white">
            Work <span className="gradient-text-static">Experience</span>
          </h2>
          <div className="section-divider mt-4 mb-6"></div>
          <p className="section-subtitle">
            My professional journey and hands-on experience in software development
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main Card */}
              <div className="relative group">
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                
                <div className="relative bg-white dark:bg-dark-100 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-white/10 hover:shadow-2xl transition-all duration-500">
                  {/* Top gradient bar */}
                  <div className={`h-2 bg-gradient-to-r ${exp.gradient}`}></div>
                  
                  <div className="p-8 md:p-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className={`p-4 bg-gradient-to-r ${exp.gradient} rounded-2xl text-white shadow-lg`}
                        >
                          <HiOutlineOfficeBuilding size={28} />
                        </motion.div>
                        <div>
                          <span className={`inline-block px-3 py-1 bg-gradient-to-r ${exp.gradient} text-white text-xs font-bold rounded-full mb-2 shadow-md`}>
                            {exp.type}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
                          <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 text-gray-500 dark:text-gray-400 text-sm">
                        <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-white/10 px-3 py-1.5 rounded-full">
                          <FiCalendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-white/10 px-3 py-1.5 rounded-full">
                          <FiMapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-8">
                      <h4 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                        <FiAward className="text-primary-500" />
                        Key Achievements
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.5 + achIndex * 0.1 }}
                            className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-50 to-white dark:from-white/5 dark:to-white/10 rounded-xl border border-gray-100 dark:border-white/10 hover:shadow-md transition-all duration-300"
                          >
                            <div className="flex-shrink-0 mt-0.5">
                              <FiCheckCircle className="text-green-500" size={18} />
                            </div>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                        <FiCode className="text-primary-500" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl border border-primary-100 dark:border-primary-700/50"
                          >
                            <span className="text-primary-600 dark:text-primary-400 text-xl">{tech.icon}</span>
                            <span className="font-medium text-gray-700 dark:text-gray-200">{tech.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Looking for Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-2xl border border-primary-100 dark:border-primary-700/50 shadow-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              <HiOutlineSparkles className="inline mr-2 text-primary-500" />
              Actively seeking full-time opportunities to contribute to innovative projects
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
