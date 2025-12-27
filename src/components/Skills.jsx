import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaCode,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiOracle,
  SiEclipseide,
  SiGithub,
} from 'react-icons/si';
import { 
  BsRobot, 
  BsStars,
  BsLightningCharge,
  BsChatDots,
  BsPeople,
  BsArrowRepeat,
  BsClock,
  BsLightbulb
} from 'react-icons/bs';
import { HiOutlineSparkles } from 'react-icons/hi';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FaReact />,
      color: 'from-violet-500 to-purple-600',
      bgGradient: 'from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 size={36} />, color: 'text-orange-500', level: 90 },
        { name: 'CSS3', icon: <FaCss3Alt size={36} />, color: 'text-blue-500', level: 85 },
        { name: 'JavaScript', icon: <FaJsSquare size={36} />, color: 'text-yellow-400', level: 80 },
        { name: 'React', icon: <FaReact size={36} />, color: 'text-cyan-400', level: 85 },
      ],
    },
    {
      title: 'Backend',
      icon: <SiSpringboot />,
      color: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20',
      skills: [
        { name: 'Java', icon: <FaJava size={36} />, color: 'text-red-500', level: 88 },
        { name: 'Spring Boot', icon: <SiSpringboot size={36} />, color: 'text-green-500', level: 85 },
        { name: 'Hibernate', icon: <SiHibernate size={36} />, color: 'text-amber-600 dark:text-amber-400', level: 80 },
        { name: 'REST APIs', icon: <FaDatabase size={36} />, color: 'text-blue-600', level: 85 },
      ],
    },
    {
      title: 'Database',
      icon: <FaDatabase />,
      color: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
      skills: [
        { name: 'MySQL', icon: <SiMysql size={36} />, color: 'text-blue-500', level: 82 },
        { name: 'Oracle', icon: <SiOracle size={36} />, color: 'text-red-500', level: 75 },
      ],
    },
    {
      title: 'Tools',
      icon: <FaCode />,
      color: 'from-pink-500 to-rose-600',
      bgGradient: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20',
      skills: [
        { name: 'VS Code', icon: <FaCode size={36} />, color: 'text-blue-400', level: 90 },
        { name: 'Eclipse', icon: <SiEclipseide size={36} />, color: 'text-purple-600 dark:text-purple-400', level: 85 },
        { name: 'GitHub', icon: <SiGithub size={36} />, color: 'text-gray-700 dark:text-gray-200', level: 85 },
        { name: 'Gen AI', icon: <BsRobot size={36} />, color: 'text-violet-500', level: 80 },
      ],
    },
  ];

  const softSkills = [
    { 
      name: 'Communication', 
      icon: <BsChatDots size={28} />, 
      description: 'Clear and effective verbal & written communication',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Problem Solving', 
      icon: <BsLightningCharge size={28} />, 
      description: 'Analytical thinking and creative solutions',
      color: 'from-violet-500 to-purple-500'
    },
    { 
      name: 'Teamwork', 
      icon: <BsPeople size={28} />, 
      description: 'Collaborative mindset and team synergy',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Adaptability', 
      icon: <BsArrowRepeat size={28} />, 
      description: 'Quick to learn and embrace change',
      color: 'from-orange-500 to-amber-500'
    },
    { 
      name: 'Time Management', 
      icon: <BsClock size={28} />, 
      description: 'Efficient prioritization and deadline delivery',
      color: 'from-pink-500 to-rose-500'
    },
    { 
      name: 'Critical Thinking', 
      icon: <BsLightbulb size={28} />, 
      description: 'Logical analysis and informed decision making',
      color: 'from-indigo-500 to-blue-500'
    },
  ];

  return (
    <section id="skills" className="section-padding bg-white dark:bg-dark-300 relative overflow-hidden" ref={ref}>
      {/* Aurora background decorations */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-aurora"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-aurora" style={{ animationDelay: '5s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/10 to-violet-500/10 rounded-full blur-3xl"></div>
      
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
            <HiOutlineSparkles className="text-lg" />
            Technical Expertise
          </motion.span>
          <h2 className="section-title text-gray-900 dark:text-white">
            My <span className="gradient-text-static">Skills</span>
          </h2>
          <div className="section-divider mt-4 mb-6"></div>
          <p className="section-subtitle">
            A comprehensive toolkit of technologies I use to build powerful, scalable web applications
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-primary-500/25`
                  : 'bg-white dark:bg-dark-100 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-50 border border-gray-200 dark:border-white/10'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className={`bg-gradient-to-br ${skillCategories[activeCategory].bgGradient} rounded-3xl p-8 shadow-xl dark:shadow-2xl border border-white/50 dark:border-white/10`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  onMouseEnter={() => setHoveredSkill(`${activeCategory}-${skillIndex}`)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="relative bg-white dark:bg-dark-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer text-center border border-gray-100 dark:border-white/10 overflow-hidden"
                >
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${skillCategories[activeCategory].color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                  
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`${skill.color} group-hover:scale-110 transition-transform duration-300 flex justify-center mb-4 relative z-10`}
                  >
                    {skill.icon}
                  </motion.div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-lg relative z-10">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 flex items-center justify-center gap-3 text-gray-900 dark:text-white">
            <BsStars className="text-primary-500" />
            Soft Skills
            <BsStars className="text-accent-500" />
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Beyond technical expertise, these interpersonal skills help me excel in collaborative environments
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="soft-skill-card group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white shadow-lg`}
                  >
                    {skill.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 dark:text-white text-lg mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Technologies Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2 text-gray-900 dark:text-white">
            <BsStars className="text-primary-500" />
            All Technologies
            <BsStars className="text-accent-500" />
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skillCategories.flatMap(cat => cat.skills).map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.03 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-dark-100 rounded-xl shadow-md border border-gray-100 dark:border-white/10 cursor-pointer hover:shadow-lg hover:border-primary-200 dark:hover:border-primary-700/50 transition-all duration-300"
              >
                <span className={skill.color}>{skill.icon}</span>
                <span className="font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-2xl border border-primary-100 dark:border-primary-700/50">
            <p className="text-gray-700 dark:text-gray-300 italic text-lg">
              "Constantly learning and exploring new technologies to stay ahead in the ever-evolving tech landscape."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
