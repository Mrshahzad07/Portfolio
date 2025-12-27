import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiUsers, FiTrendingUp, FiCode, FiTarget, FiZap, FiHeart } from 'react-icons/fi';
import { HiOutlineAcademicCap, HiOutlineLightBulb, HiOutlineSparkles } from 'react-icons/hi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { icon: <FiCode size={28} />, title: 'Problem Solving', desc: 'Analytical thinking', color: 'from-violet-500 to-purple-600' },
    { icon: <FiUsers size={28} />, title: 'Communication', desc: 'Team collaboration', color: 'from-cyan-500 to-blue-600' },
    { icon: <FiTrendingUp size={28} />, title: 'Leadership', desc: 'Project management', color: 'from-pink-500 to-rose-600' },
    { icon: <HiOutlineLightBulb size={28} />, title: 'Quick Learner', desc: 'Adaptive mindset', color: 'from-emerald-500 to-teal-600' },
  ];

  const stats = [
    { value: '10+', label: 'Projects Completed', icon: <FiTarget /> },
    { value: '8.73', label: 'CGPA Score', icon: <FiAward /> },
    { value: '200+', label: 'GitHub Commits', icon: <FiZap /> },
    { value: '100%', label: 'Content Creation', icon: <FiHeart /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-dark-300 dark:to-dark-400 relative overflow-hidden" ref={ref}>
      {/* Background decoration with aurora effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-200/40 to-cyan-200/30 dark:from-violet-900/25 dark:to-cyan-900/20 rounded-full blur-3xl -z-10 animate-aurora"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-200/30 to-purple-200/30 dark:from-pink-900/20 dark:to-purple-900/20 rounded-full blur-3xl -z-10 animate-aurora" style={{ animationDelay: '7s' }}></div>
      
      <div className="container-custom">
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
            <HiOutlineSparkles className="text-lg" />
            Get to Know Me
          </motion.span>
          <h2 className="section-title text-gray-900 dark:text-white">
            About <span className="gradient-text-static">Me</span>
          </h2>
          <div className="section-divider mt-4"></div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-25 transition-opacity duration-500"></div>
              <div className="relative bg-white dark:bg-dark-100 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-white/10 text-center hover:shadow-xl transition-all duration-300">
                <div className="text-primary-500 mb-2 flex justify-center text-xl">{stat.icon}</div>
                <h3 className="text-3xl md:text-4xl font-black gradient-text-static mb-1">{stat.value}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-3xl blur-xl opacity-10"></div>
              <div className="relative bg-white/90 dark:bg-dark-100/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-xl text-white shadow-lg">
                    <FiCode size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Java Full-Stack Developer
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  I'm a passionate <span className="text-primary-600 dark:text-primary-400 font-semibold">Java Full-Stack Developer</span> with expertise 
                  in building modern, scalable web applications. With a strong foundation in both 
                  <span className="text-accent-600 dark:text-accent-400 font-semibold"> frontend and backend technologies</span>, I specialize in 
                  creating seamless user experiences backed by robust server-side architectures.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  My journey in software development has equipped me with the skills to tackle 
                  complex challenges, from designing <span className="font-semibold">RESTful APIs</span> to crafting 
                  responsive user interfaces. I'm driven by the desire to write clean, maintainable 
                  code that makes a <span className="text-primary-600 dark:text-primary-400 font-semibold">real-world impact</span>.
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 p-6 rounded-2xl border-l-4 border-primary-500"
                >
                  <p className="text-gray-800 dark:text-gray-200 font-medium italic flex items-start gap-3">
                    <span className="text-3xl text-primary-400">"</span>
                    Building innovative solutions that bridge technology and user needs, 
                    one line of code at a time.
                    <span className="text-3xl text-primary-400">"</span>
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: Soft Skills & Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Soft Skills */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="group cursor-pointer"
                >
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className="relative bg-white dark:bg-dark-100 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-white/10 text-center hover:shadow-2xl transition-all duration-500">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-white shadow-lg`}
                      >
                        {skill.icon}
                      </motion.div>
                      <h4 className="font-bold text-gray-800 dark:text-white mb-1">{skill.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{skill.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-3xl blur-xl opacity-10"></div>
              <div className="relative bg-white/90 dark:bg-dark-100/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-xl text-white shadow-lg">
                    <HiOutlineAcademicCap size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Education</h3>
                </div>
                
                <div className="relative pl-8 border-l-2 border-primary-300 dark:border-primary-600">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="relative"
                  >
                    <div className="absolute -left-[25px] top-0 w-4 h-4 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full ring-4 ring-white dark:ring-dark-100 shadow-lg"></div>
                    <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 p-5 rounded-xl">
                      <h4 className="font-bold text-gray-800 dark:text-white text-lg">
                        Bachelor of Computer Applications (BCA)
                        Sindhi College, Bengaluru (Bengaluru City University)
                      </h4>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-3 py-1 bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-sm font-bold rounded-full shadow-md">
                          CGPA: 8.73
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">• 2022 - 2025</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-3">
                        Specialized in core computer science fundamentals, and modern software development methodologies.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
