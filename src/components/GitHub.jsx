import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiStar, FiGitBranch, FiExternalLink, FiGitCommit, FiUsers } from 'react-icons/fi';
import { HiOutlineSparkles, HiOutlineFire } from 'react-icons/hi';
import { BsRobot } from 'react-icons/bs';
import { GitHubCalendar } from 'react-github-calendar';

const GitHub = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: 'Repositories', value: '21', icon: <FiGitBranch size={28} />, color: 'from-violet-500 to-purple-600' },
    { label: 'Total Commits', value: '100+', icon: <FiGitCommit size={28} />, color: 'from-emerald-500 to-teal-600' },
    { label: 'Followers', value: '2', icon: <FiUsers size={28} />, color: 'from-amber-500 to-orange-500' },
    { label: 'Contributions', value: '124+', icon: <HiOutlineFire size={28} />, color: 'from-pink-500 to-rose-600' },
  ];

  const repositories = [
    {
      name: 'CareerLytics',
      description: 'AI-powered career growth platform with skill-gap analysis and NLP recommendations',
      language: 'JavaScript',
      stars: 0,
      languageColor: 'bg-yellow-400',
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      name: 'empManagementChatBot',
      description: 'AI Employee Management ChatBot to automate HR processes and support',
      language: 'TypeScript',
      stars: 0,
      languageColor: 'bg-blue-400',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      name: 'TaskManagement-System',
      description: 'Comprehensive task management system for efficient team collaboration',
      language: 'JavaScript',
      stars: 0,
      languageColor: 'bg-yellow-400',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      name: 'Portfolio',
      description: 'Responsive portfolio with stunning animations and glassmorphism',
      language: 'JavaScript',
      stars: 0,
      languageColor: 'bg-yellow-400',
      gradient: 'from-cyan-500 to-blue-600',
    },
  ];

  return (
    <section id="github" className="section-padding section-dark relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="badge-glow mb-6">
            <FiGithub className="text-lg" />
            Open Source
          </span>
          <h2 className="section-title">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <div className="section-divider mt-4 mb-6"></div>
          <p className="section-subtitle">
            Explore my open-source contributions and coding activity
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center group"
            >
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</h3>
              <p className="text-gray-400 font-medium text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8 flex items-center justify-center gap-3">
            <HiOutlineSparkles className="text-violet-400" />
            Featured Repositories
            <HiOutlineSparkles className="text-cyan-400" />
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {repositories.map((repo, index) => (
              <a
                key={index}
                href={`https://github.com/Mrshahzad07/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 md:p-8 block group relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${repo.gradient}`} />
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-gradient-to-r ${repo.gradient} rounded-xl text-white shadow-md group-hover:scale-110 transition-transform`}>
                      <FiGitBranch size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg group-hover:text-cyan-400 transition-colors">
                        {repo.name}
                      </h4>
                      <div className="flex items-center gap-2 text-sm mt-1">
                        <span className={`w-3 h-3 rounded-full ${repo.languageColor}`}></span>
                        <span className="text-gray-400">{repo.language}</span>
                      </div>
                    </div>
                  </div>
                  <FiExternalLink className="text-gray-500 group-hover:text-cyan-400 transition-colors" size={20} />
                </div>
                
                <p className="text-gray-300 text-sm mb-6 flex-1">
                  {repo.description}
                </p>
                
                <div className="flex items-center gap-6 text-gray-400 text-sm mt-auto">
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                    <FiStar className="text-amber-400" />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                    <FiGitBranch className="text-violet-400" />
                    <span>main</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* GitHub Contributions Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="glass-card p-6 md:p-10 border border-white/10 relative overflow-hidden flex flex-col items-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-cyan-500" />
            
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <FiGithub className="text-emerald-400" />
              GitHub Contributions
            </h3>
            
            <div className="w-full overflow-x-auto pb-4 custom-scrollbar flex justify-center text-white/80">
              <GitHubCalendar 
                username="Mrshahzad07" 
                colorScheme="dark"
                theme={{
                  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                }}
                fontSize={14}
                blockSize={14}
                blockMargin={4}
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center mt-8">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS'].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 text-gray-300 text-sm font-medium rounded-lg border border-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Mrshahzad07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#05050a] font-bold rounded-xl shadow-lg hover:bg-gray-200 transition-colors"
          >
            <FiGithub size={24} />
            View Full GitHub Profile
            <FiExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHub;
