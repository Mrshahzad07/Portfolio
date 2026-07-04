import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FiAward, FiZap, FiTarget, FiTrendingUp } from 'react-icons/fi';
import { BsRobot, BsTrophy } from 'react-icons/bs';
import { HiOutlineAcademicCap, HiOutlineSparkles } from 'react-icons/hi';
import { FiCpu, FiCode } from 'react-icons/fi';
import { BsLightningCharge } from 'react-icons/bs';

const useCountUp = (end, duration = 2000, isInView) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, isInView]);
  return count;
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { icon: <BsRobot size={24} />, title: 'AI/ML Engineering', desc: 'NLP, LLMs, RAG', color: 'from-violet-500 to-purple-600' },
    { icon: <FiCode size={24} />, title: 'Full Stack Dev', desc: 'React + FastAPI + Spring', color: 'from-cyan-500 to-blue-600' },
    { icon: <FiCpu size={24} />, title: 'Automation', desc: 'n8n, workflow agents', color: 'from-emerald-500 to-teal-600' },
    { icon: <BsLightningCharge size={24} />, title: 'Problem Solving', desc: 'Analytical thinking', color: 'from-pink-500 to-rose-600' },
  ];

  const stats = [
    { value: useCountUp(10, 2000, isInView) + '+', label: 'AI Projects', icon: <FiTarget /> },
    { value: '8.73', label: 'CGPA', icon: <FiAward /> },
    { value: useCountUp(1500, 2500, isInView) + '+', label: 'Commits', icon: <FiZap /> },
    { value: '40%', label: 'Optimization', icon: <FiTrendingUp /> },
  ];

  const achievements = [
    { title: 'Best Front-End Developer', desc: 'Awarded during internship at Tap Academy', icon: <BsTrophy />, color: 'from-amber-400 to-orange-500' },
    { title: '1st Rank — 6th Semester', desc: 'Bachelor of Computer Applications', icon: <FiAward />, color: 'from-violet-500 to-purple-600' },
  ];

  return (
    <section id="about" className="section-padding section-dark relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="badge-glow mb-6">
            <HiOutlineSparkles className="text-lg" />
            System Architecture
          </span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider mt-4"></div>
        </motion.div>

        {/* Neural Circuit Background SVG */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl pointer-events-none opacity-[0.03] z-0">
          <svg width="100%" height="100%" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 250 L300 250 L400 150 L600 150 L700 250 L900 250" stroke="url(#paint0_linear)" strokeWidth="4"/>
            <path d="M100 250 L300 250 L400 350 L600 350 L700 250 L900 250" stroke="url(#paint1_linear)" strokeWidth="4"/>
            <circle cx="100" cy="250" r="8" fill="#8B5CF6"/>
            <circle cx="300" cy="250" r="12" fill="#06B6D4"/>
            <circle cx="400" cy="150" r="8" fill="#34D399"/>
            <circle cx="600" cy="150" r="8" fill="#34D399"/>
            <circle cx="700" cy="250" r="12" fill="#06B6D4"/>
            <circle cx="900" cy="250" r="8" fill="#8B5CF6"/>
            <circle cx="400" cy="350" r="8" fill="#34D399"/>
            <circle cx="600" cy="350" r="8" fill="#34D399"/>
            <defs>
              <linearGradient id="paint0_linear" x1="100" y1="200" x2="900" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8B5CF6" />
                <stop offset="0.5" stopColor="#06B6D4" />
                <stop offset="1" stopColor="#34D399" />
              </linearGradient>
              <linearGradient id="paint1_linear" x1="100" y1="300" x2="900" y2="300" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8B5CF6" />
                <stop offset="0.5" stopColor="#06B6D4" />
                <stop offset="1" stopColor="#34D399" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Stats Row */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 relative z-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="glass-card p-6 text-center group hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-shadow cursor-default"
            >
              <div className="text-violet-400 mb-3 flex justify-center text-2xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</h3>
              <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Bio & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Terminal Boot Bio */}
            <div className="glass-card p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-2 mb-6 text-gray-500 font-mono text-sm border-b border-white/5 pb-4">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                </div>
                <span className="ml-2">~ /mdshahzad / bio.txt</span>
              </div>
              <div className="space-y-4 text-gray-300 font-mono text-sm leading-relaxed">
                <p>
                  <span className="text-cyan-400">#</span> Initialize profile...
                </p>
                <p>
                  I am a passionate AI/ML Engineer with a relentless drive to build intelligent systems. I specialize in bridging the gap between theoretical machine learning models and robust, scalable full-stack applications.
                </p>
                <p>
                  <span className="text-violet-400">const</span> <span className="text-white">mission</span> = <span className="text-green-300">"Leveraging Generative AI and automation to solve complex real-world problems while delivering exceptional user experiences."</span>;
                </p>
              </div>
            </div>

            {/* Achievements */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="grid sm:grid-cols-2 gap-4"
            >
              {achievements.map((ach, i) => (
                <motion.div key={i} variants={itemVariants} className="glass-card p-6 flex gap-4 group hover:bg-white/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all cursor-default">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ach.color} flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {ach.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{ach.title}</h4>
                    <p className="text-sm text-gray-400">{ach.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Education & Core Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Core Focus Areas */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="grid grid-cols-2 gap-4"
            >
              {skills.map((skill, i) => (
                <motion.div key={i} variants={itemVariants} className="glass-card p-5 text-center group cursor-default hover:bg-white/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all">
                  <div className={`w-10 h-10 mx-auto rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}>
                    {skill.icon}
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1">{skill.title}</h4>
                  <p className="text-xs text-gray-400">{skill.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Education Timeline */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <HiOutlineAcademicCap className="text-violet-400 text-2xl" />
                Education Stack
              </h3>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-violet-500 before:via-cyan-500 before:to-emerald-500">
                
                {/* BCA */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-[#080812] bg-violet-500 absolute left-0 md:left-1/2 -translate-x-1/2 glow-violet" />
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl bg-white/5 border border-white/10 ml-8 md:ml-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-white">BCA</h4>
                      <span className="text-xs text-violet-400 font-bold bg-violet-400/10 px-2 py-1 rounded">8.73 CGPA</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">Sindhi College, Bengaluru</p>
                    <p className="text-xs text-gray-500">2022 - 2025</p>
                  </div>
                </div>

                {/* XII */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-[#080812] bg-cyan-500 absolute left-0 md:left-1/2 -translate-x-1/2" />
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl bg-white/5 border border-white/10 ml-8 md:ml-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-white">Class XII (PCM)</h4>
                      <span className="text-xs text-cyan-400 font-bold bg-cyan-400/10 px-2 py-1 rounded">66%</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">Divine Public School</p>
                    <p className="text-xs text-gray-500">2020 - 2022</p>
                  </div>
                </div>

                {/* X */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-[#080812] bg-emerald-500 absolute left-0 md:left-1/2 -translate-x-1/2" />
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl bg-white/5 border border-white/10 ml-8 md:ml-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-white">Class X</h4>
                      <span className="text-xs text-emerald-400 font-bold bg-emerald-400/10 px-2 py-1 rounded">74%</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">Divine Public School</p>
                    <p className="text-xs text-gray-500">2019 - 2020</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
