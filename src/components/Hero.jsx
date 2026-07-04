import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload, FiTerminal, FiCpu } from 'react-icons/fi';
import { BsRobot, BsBraces, BsLightningCharge } from 'react-icons/bs';
import { SiPython, SiReact } from 'react-icons/si';
import { useEffect, useState, useRef } from 'react';
import resumePdf from '../assets/Md_Shahzad_Resume.pdf';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
};

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["AI/ML Engineer", "Full Stack Developer", "Generative AI Specialist", "Automation Architect"];
  const containerRef = useRef(null);

  // Mouse tilt for LLM window
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 100 });
  const rotateX = useTransform(springY, [-1, 1], [5, -5]);
  const rotateY = useTransform(springX, [-1, 1], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        mouseX.set(x);
        mouseY.set(y);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Typing effect
  useEffect(() => {
    const text = roles[currentRole];
    let index = 0;
    let isDeleting = false;
    let timeout;
    const type = () => {
      if (!isDeleting && index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
        timeout = setTimeout(type, 80);
      } else if (!isDeleting && index > text.length) {
        timeout = setTimeout(() => { isDeleting = true; type(); }, 2200);
      } else if (isDeleting && index >= 0) {
        setDisplayText(text.slice(0, index));
        index--;
        timeout = setTimeout(type, 40);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    };
    type();
    return () => clearTimeout(timeout);
  }, [currentRole]);

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const techPills = [
    { label: 'PyTorch', icon: <FiCpu size={14} />, color: 'from-orange-500 to-red-500' },
    { label: 'LLMs', icon: <BsRobot size={14} />, color: 'from-violet-500 to-purple-500' },
    { label: 'FastAPI', icon: <BsBraces size={14} />, color: 'from-emerald-500 to-teal-500' },
    { label: 'React', icon: <SiReact size={14} />, color: 'from-cyan-500 to-blue-500' },
  ];

  return (
    <section id="home" ref={containerRef} className="min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden pt-20">
      
      {/* Dynamic Aurora Orbs */}
      <div className="aurora-bg">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-left relative z-10"
          >
            <motion.div variants={itemVariants} className="mb-6 inline-block">
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-bold border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                Available for Full-time Roles
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-4">
              <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black tracking-tight leading-[1.1]">
                <span className="text-white block">Md Shahzad</span>
                <span className="gradient-text-ai block mt-2">AI / ML Engineer</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center gap-3 text-xl md:text-2xl font-bold h-10">
                <span className="text-violet-400 font-mono text-xl">{'>>'}</span>
                <span className="text-gray-300">{displayText}</span>
                <span className="typing-cursor"></span>
              </div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
              Architecting <span className="text-white font-semibold border-b border-violet-500">intelligent agents</span>, 
              scalable <span className="text-white font-semibold border-b border-cyan-500">RAG pipelines</span>, and high-performance 
              full-stack applications. Transforming data into interactive experiences.
            </motion.p>

            {/* Interactive Tech Pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
              {techPills.map((pill, i) => (
                <motion.div
                  key={pill.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-shadow relative overflow-hidden group`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${pill.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${pill.color}`}>{pill.icon}</span>
                  {pill.label}
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.button
                onClick={() => scrollToSection('#projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2"
              >
                <BsLightningCharge className="text-yellow-300" />
                <span>View AI Projects</span>
              </motion.button>
              <motion.a
                href={resumePdf}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <FiDownload /> Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side: LLM / Code Simulation Window */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.8, duration: 1, type: "spring" }}
            className="relative hidden lg:block tilt-card-wrapper"
            style={{ perspective: 1200 }}
          >
            <motion.div 
              className="w-full max-w-lg mx-auto bg-[#0a0a14]/80 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.2)] overflow-hidden tilt-card-content"
              style={{ rotateX, rotateY }}
            >
              {/* Window Header */}
              <div className="bg-white/5 border-b border-white/5 px-4 py-3 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                </div>
                <div className="text-xs font-mono text-gray-500 flex items-center gap-2">
                  <BsRobot /> llm_agent.py
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm tilt-child-pop">
                <div className="space-y-4">
                  {/* Prompt */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                    className="flex gap-3 text-gray-300"
                  >
                    <span className="text-violet-400 shrink-0">User:</span>
                    <span>Generate an optimized RAG pipeline for querying internal documents.</span>
                  </motion.div>
                  
                  {/* Thinking */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="flex gap-3 text-gray-500 italic"
                  >
                    <span className="text-cyan-400 shrink-0">AI:</span>
                    <span className="flex items-center gap-2">
                      <FiCpu className="animate-spin text-cyan-400" /> Thinking...
                    </span>
                  </motion.div>

                  {/* Response */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4 }}
                    className="flex gap-3"
                  >
                    <span className="text-emerald-400 shrink-0">AI:</span>
                    <div className="text-gray-300">
                      <p className="mb-2">Here is a scalable implementation using FastAPI and LangChain:</p>
                      <div className="bg-[#05050a] p-3 rounded border border-white/5 overflow-hidden relative group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
                        <code className="text-[13px] leading-relaxed block">
                          <span className="text-pink-400">from</span> langchain.chains <span className="text-pink-400">import</span> RetrievalQA<br/>
                          <span className="text-pink-400">from</span> fastapi <span className="text-pink-400">import</span> FastAPI<br/><br/>
                          <span className="text-blue-400">app</span> = FastAPI(title=<span className="text-yellow-300">"AI-EOS"</span>)<br/><br/>
                          <span className="text-pink-400">@app.post</span>(<span className="text-yellow-300">"/query"</span>)<br/>
                          <span className="text-cyan-400">async def</span> <span className="text-green-300">ask_bot</span>(query: <span className="text-emerald-300">str</span>):<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;chain = RetrievalQA.from_chain_type(<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;llm=groq_llm,<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;retriever=vector_db.as_retriever()<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;)<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">return</span> chain.run(query)
                        </code>
                        {/* Shimmer effect over code */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shinyMove_2s_ease-in-out_infinite]" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group z-20"
        onClick={() => scrollToSection('#about')}
      >
        <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-3 group-hover:text-cyan-400 transition-colors">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-8 h-12 border-2 border-white/15 rounded-full flex justify-center p-1 group-hover:border-cyan-400/50 transition-colors"
        >
          <div className="w-1.5 h-3 bg-white/50 rounded-full group-hover:bg-cyan-400 transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
