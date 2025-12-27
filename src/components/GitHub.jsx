import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiStar, FiGitBranch, FiExternalLink, FiGitCommit } from 'react-icons/fi';
import { HiOutlineSparkles, HiOutlineCode, HiOutlineFire } from 'react-icons/hi';

const GitHub = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: 'Repositories', value: '10+', icon: <FiGitBranch size={28} />, color: 'from-violet-500 to-purple-600' },
    { label: 'Total Commits', value: '200+', icon: <FiGitCommit size={28} />, color: 'from-emerald-500 to-teal-600' },
    { label: 'Stars Earned', value: '15+', icon: <FiStar size={28} />, color: 'from-amber-500 to-orange-500' },
    { label: 'Contributions', value: '50+', icon: <HiOutlineFire size={28} />, color: 'from-pink-500 to-rose-600' },
  ];

  const repositories = [
    {
      name: 'CareerLytics',
      description: 'AI-powered career guidance platform with resume analysis',
      language: 'Java',
      stars: 5,
      languageColor: 'bg-red-500',
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      name: 'EpicureExpress',
      description: 'Modern food delivery application with real-time tracking',
      language: 'JavaScript',
      stars: 3,
      languageColor: 'bg-yellow-400',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      name: 'Portfolio-Website',
      description: 'Responsive portfolio with glassmorphism effects',
      language: 'React',
      stars: 4,
      languageColor: 'bg-cyan-400',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      name: 'Weather-App',
      description: 'Real-time weather application with geolocation',
      language: 'JavaScript',
      stars: 2,
      languageColor: 'bg-yellow-400',
      gradient: 'from-blue-500 to-indigo-600',
    },
  ];

  return (
    <section id="github" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-dark-300 dark:to-dark-400 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-cyan-200/20 dark:from-violet-900/20 dark:to-cyan-900/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-pink-200/30 to-purple-200/20 dark:from-pink-900/20 dark:to-purple-900/15 rounded-full blur-3xl"></div>
      
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-semibold mb-6"
          >
            <FiGithub className="text-lg" />
            Open Source
          </motion.span>
          <h2 className="section-title text-gray-900 dark:text-white">
            GitHub <span className="gradient-text-static">Activity</span>
          </h2>
          <div className="section-divider mt-4 mb-6"></div>
          <p className="section-subtitle">
            Explore my open-source contributions and coding activity
          </p>
        </motion.div>

        {/* GitHub Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
              <div className="relative bg-white dark:bg-dark-100 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-white/10 text-center hover:shadow-2xl transition-all duration-500">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                >
                  {stat.icon}
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-black gradient-text-static mb-1">{stat.value}</h3>
                <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8 flex items-center justify-center gap-2">
            <HiOutlineSparkles className="text-primary-500" />
            Featured Repositories
            <HiOutlineSparkles className="text-accent-500" />
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {repositories.map((repo, index) => (
              <motion.a
                key={index}
                href={`https://github.com/Mrshahzad07/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${repo.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                <div className="relative bg-white dark:bg-dark-100 rounded-2xl shadow-lg border border-gray-100 dark:border-white/10 p-6 hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 bg-gradient-to-r ${repo.gradient} rounded-xl text-white shadow-md`}>
                        <FiGitBranch size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {repo.name}
                        </h4>
                        <div className="flex items-center gap-2 text-sm">
                          <span className={`w-3 h-3 rounded-full ${repo.languageColor}`}></span>
                          <span className="text-gray-500 dark:text-gray-400">{repo.language}</span>
                        </div>
                      </div>
                    </div>
                    <FiExternalLink className="text-gray-400 group-hover:text-primary-500 transition-colors" size={20} />
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{repo.description}</p>
                  
                  <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <FiStar className="text-amber-500" />
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiGitBranch className="text-primary-500" />
                      <span>main</span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Tap Academy Streaks Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <div className="bg-white dark:bg-dark-100 rounded-2xl shadow-lg border border-gray-100 dark:border-white/10 p-6 overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-bold text-gray-800 dark:text-white flex items-center gap-2 text-lg">
                <HiOutlineFire className="text-orange-500" />
                Tap Academy Learning Streaks
              </h4>
              <motion.a
                href="https://tai.thetapacademy.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                View Profile
                <FiExternalLink size={14} />
              </motion.a>
            </div>
            
            {/* Tap Academy Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl">
                <div className="text-3xl font-black text-orange-600 dark:text-orange-400">146</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Days Streak 🔥</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-xl">
                <div className="text-3xl font-black text-violet-600 dark:text-violet-400">1516</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Submissions</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl">
                <div className="text-3xl font-black text-cyan-600 dark:text-cyan-400">146</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Longest Streak</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
                <div className="text-3xl font-black text-green-600 dark:text-green-400">5+ Months</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Consistent</div>
              </div>
            </div>

            {/* Skills Badge */}
            <div className="flex flex-wrap gap-2 justify-center">
              {['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs', 'DSA', 'Problem Solving'].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                  className="px-3 py-1.5 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 text-orange-700 dark:text-orange-300 text-sm font-medium rounded-full"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* GitHub Profile Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Mrshahzad07"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl shadow-lg hover:bg-gray-800 dark:hover:bg-gray-100 hover:shadow-2xl transition-all duration-300"
          >
            <FiGithub size={24} />
            View Full GitHub Profile
            <FiExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHub;
