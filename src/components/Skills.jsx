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
  FaPython,
  FaNodeJs,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiFastapi,
  SiTypescript,
  SiGithub,
  SiNumpy,
  SiPandas,
  SiRedux,
} from 'react-icons/si';
import { 
  BsRobot, 
  BsStars,
  BsLightningCharge,
  BsChatDots,
  BsPeople,
  BsArrowRepeat,
  BsClock,
  BsLightbulb,
  BsBraces,
  BsCpu,
} from 'react-icons/bs';
import { HiOutlineSparkles } from 'react-icons/hi';
import { FiCpu, FiCode, FiDatabase as FiDb } from 'react-icons/fi';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 150 } }
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: 'AI / ML',
      icon: <BsRobot />,
      color: 'from-violet-500 to-purple-600',
      shadow: 'rgba(139, 92, 246, 0.5)',
      skills: [
        { name: 'Machine Learning', icon: <FiCpu size={36} />, color: 'text-violet-400' },
        { name: 'NLP', icon: <BsChatDots size={36} />, color: 'text-cyan-400' },
        { name: 'LLMs', icon: <BsRobot size={36} />, color: 'text-purple-400' },
        { name: 'Generative AI', icon: <BsStars size={36} />, color: 'text-pink-400' },
        { name: 'Prompt Engineering', icon: <BsBraces size={36} />, color: 'text-emerald-400' },
        { name: 'RAG', icon: <FiDb size={36} />, color: 'text-blue-400' },
        { name: 'NumPy', icon: <SiNumpy size={36} />, color: 'text-blue-300' },
        { name: 'Pandas', icon: <SiPandas size={36} />, color: 'text-indigo-400' },
        { name: 'n8n Automation', icon: <BsArrowRepeat size={36} />, color: 'text-orange-400' },
        { name: 'Image Processing', icon: <BsCpu size={36} />, color: 'text-teal-400' },
      ],
    },
    {
      title: 'Frontend',
      icon: <FaReact />,
      color: 'from-cyan-500 to-blue-600',
      shadow: 'rgba(6, 182, 212, 0.5)',
      skills: [
        { name: 'React', icon: <FaReact size={36} />, color: 'text-cyan-400' },
        { name: 'TypeScript', icon: <SiTypescript size={36} />, color: 'text-blue-400' },
        { name: 'JavaScript', icon: <FaJsSquare size={36} />, color: 'text-yellow-400' },
        { name: 'HTML5', icon: <FaHtml5 size={36} />, color: 'text-orange-400' },
        { name: 'CSS3', icon: <FaCss3Alt size={36} />, color: 'text-blue-400' },
        { name: 'Redux', icon: <SiRedux size={36} />, color: 'text-purple-400' },
      ],
    },
    {
      title: 'Backend',
      icon: <SiFastapi />,
      color: 'from-emerald-500 to-teal-600',
      shadow: 'rgba(16, 185, 129, 0.5)',
      skills: [
        { name: 'Python', icon: <FaPython size={36} />, color: 'text-yellow-400' },
        { name: 'FastAPI', icon: <SiFastapi size={36} />, color: 'text-emerald-400' },
        { name: 'Java', icon: <FaJava size={36} />, color: 'text-red-400' },
        { name: 'Spring Boot', icon: <SiSpringboot size={36} />, color: 'text-green-400' },
        { name: 'Node.js', icon: <FaNodeJs size={36} />, color: 'text-green-300' },
        { name: 'REST APIs', icon: <FaDatabase size={36} />, color: 'text-blue-400' },
      ],
    },
    {
      title: 'Database',
      icon: <FaDatabase />,
      color: 'from-blue-500 to-indigo-600',
      shadow: 'rgba(59, 130, 246, 0.5)',
      skills: [
        { name: 'MySQL', icon: <SiMysql size={36} />, color: 'text-blue-400' },
        { name: 'MongoDB', icon: <SiMongodb size={36} />, color: 'text-green-400' },
        { name: 'SQLAlchemy', icon: <FiDb size={36} />, color: 'text-red-400' },
      ],
    },
    {
      title: 'Tools',
      icon: <FiCode />,
      color: 'from-pink-500 to-rose-600',
      shadow: 'rgba(236, 72, 153, 0.5)',
      skills: [
        { name: 'Git/GitHub', icon: <SiGithub size={36} />, color: 'text-gray-300' },
        { name: 'VS Code', icon: <FiCode size={36} />, color: 'text-blue-400' },
        { name: 'AI Assistants', icon: <BsRobot size={36} />, color: 'text-violet-400' },
      ],
    },
  ];

  const softSkills = [
    { 
      name: 'Problem Solving', 
      icon: <BsLightningCharge size={24} />, 
      description: 'Analytical thinking and creative AI-driven solutions',
      color: 'from-violet-500 to-purple-500'
    },
    { 
      name: 'Communication', 
      icon: <BsChatDots size={24} />, 
      description: 'Clear and effective verbal & written communication',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Teamwork', 
      icon: <BsPeople size={24} />, 
      description: 'Collaborative mindset with cross-functional teams',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Adaptability', 
      icon: <BsArrowRepeat size={24} />, 
      description: 'Quick to learn new AI frameworks and technologies',
      color: 'from-orange-500 to-amber-500'
    },
    { 
      name: 'Time Management', 
      icon: <BsClock size={24} />, 
      description: 'Efficient prioritization and deadline delivery',
      color: 'from-pink-500 to-rose-500'
    },
    { 
      name: 'Critical Thinking', 
      icon: <BsLightbulb size={24} />, 
      description: 'Data-driven analysis and informed decision making',
      color: 'from-indigo-500 to-blue-500'
    },
  ];

  return (
    <section id="skills" className="section-padding section-dark-alt relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-900/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-900/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="badge-glow mb-6">
            <HiOutlineSparkles className="text-lg" />
            Technical Expertise
          </span>
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-divider mt-4 mb-6"></div>
          <p className="section-subtitle">
            From AI/ML engineering to full-stack development — a comprehensive toolkit for building intelligent applications
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
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white`
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
              style={activeCategory === index ? { boxShadow: `0 0 20px ${category.shadow}` } : {}}
            >
              <span className="text-lg">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            {/* Holographic scanning effect */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(34,211,238,0.1)_50%,transparent_100%)] h-[10px] w-full animate-[scan_3s_ease-in-out_infinite] z-20 pointer-events-none rounded-2xl" />
            
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-r ${skillCategories[activeCategory].color} opacity-[0.15] blur-[100px] pointer-events-none rounded-full`} />

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className={`grid ${skillCategories[activeCategory].skills.length > 6 ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5' : 'grid-cols-2 md:grid-cols-3'} gap-6 relative z-10 p-2`}
            >
              {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  variants={itemVariants}
                  className="relative flex flex-col items-center justify-center p-6 bg-white/[0.02] border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all cursor-default group overflow-hidden"
                >
                  {/* Circuit/Grid Background on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] [background-size:10px_10px]" />
                  
                  <div className={`${skill.color} mb-3 transform group-hover:scale-125 group-hover:-translate-y-2 transition-all duration-300 relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_20px_currentColor]`}>
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-white text-sm text-center relative z-10 tracking-wide">{skill.name}</h4>
                  
                  {/* Neon border trace */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-10 flex items-center justify-center gap-3 text-white">
            <BsStars className="text-violet-400" />
            Soft Skills
            <BsStars className="text-cyan-400" />
          </h3>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {softSkills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants} className="soft-skill-card group hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">{skill.name}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
