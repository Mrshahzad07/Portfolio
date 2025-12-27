import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiUser, FiMessageSquare, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { HiOutlineSparkles, HiOutlinePaperAirplane } from 'react-icons/hi';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  const contactMethods = [
    {
      icon: <FiMail size={24} />,
      title: 'Email',
      value: 'mrshahzad1011@gmail.com',
      link: 'mailto:mrshahzad1011@gmail.com',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: <FiLinkedin size={24} />,
      title: 'LinkedIn',
      value: 'Md Shahzad',
      link: 'https://www.linkedin.com/in/md-shahzad-663b98292/',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FiGithub size={24} />,
      title: 'GitHub',
      value: '@Mrshahzad07',
      link: 'https://github.com/Mrshahzad07',
      color: 'from-violet-500 to-purple-600',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white dark:bg-dark-300 relative overflow-hidden" ref={ref}>
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
            <HiOutlinePaperAirplane className="text-lg" />
            Get In Touch
          </motion.span>
          <h2 className="section-title text-gray-900 dark:text-white">
            Contact <span className="gradient-text-static">Me</span>
          </h2>
          <div className="section-divider mt-4 mb-6"></div>
          <p className="section-subtitle">
            Let's build something great together 🚀
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <HiOutlineSparkles className="text-primary-500" />
              Let's Connect
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Feel free to reach out through any of these channels!
            </p>

            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group flex items-center gap-4 p-5 bg-white dark:bg-dark-100 rounded-2xl shadow-lg border border-gray-100 dark:border-white/10 hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`p-4 bg-gradient-to-r ${method.color} rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-800 dark:text-white">{method.title}</p>
                    <p className="text-gray-500 dark:text-gray-400">{method.value}</p>
                  </div>
                  <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileHover={{ x: 5, opacity: 1 }}
                    className="text-primary-500 text-xl"
                  >
                    →
                  </motion.div>
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-3 text-gray-500 dark:text-gray-400"
            >
              <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <FiMapPin className="text-primary-500" size={20} />
              </div>
              <span className="font-medium">Bangalore, Karnataka, India 🇮🇳</span>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-3xl blur-xl opacity-10"></div>
              <form onSubmit={handleSubmit} className="relative bg-white/90 dark:bg-dark-100/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-white/10">
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700/50 text-green-700 dark:text-green-300 px-4 py-4 rounded-xl mb-6"
                  >
                    <FiCheckCircle size={24} />
                    <div>
                      <p className="font-semibold">Message sent successfully!</p>
                      <p className="text-sm">I'll get back to you soon.</p>
                    </div>
                  </motion.div>
                )}

                {/* Name Field */}
                <div className="mb-6">
                  <label className={`flex items-center gap-2 text-sm font-semibold mb-2 transition-colors ${focused.name ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'}`}>
                    <FiUser />
                    <span>Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused({ ...focused, name: true })}
                    onBlur={() => setFocused({ ...focused, name: false })}
                    className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-white dark:bg-dark-200 text-gray-800 dark:text-white ${
                      errors.name 
                        ? 'border-red-400 bg-red-50 dark:bg-red-900/20' 
                        : focused.name 
                          ? 'border-primary-500 bg-primary-50/50 dark:bg-primary-900/20 shadow-lg shadow-primary-500/20' 
                          : 'border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20'
                    }`}
                    placeholder="Your Full Name"
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2 flex items-center gap-1"
                    >
                      ⚠️ {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email Field */}
                <div className="mb-6">
                  <label className={`flex items-center gap-2 text-sm font-semibold mb-2 transition-colors ${focused.email ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'}`}>
                    <FiMail />
                    <span>Your Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused({ ...focused, email: true })}
                    onBlur={() => setFocused({ ...focused, email: false })}
                    className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-white dark:bg-dark-200 text-gray-800 dark:text-white ${
                      errors.email 
                        ? 'border-red-400 bg-red-50 dark:bg-red-900/20' 
                        : focused.email 
                          ? 'border-primary-500 bg-primary-50/50 dark:bg-primary-900/20 shadow-lg shadow-primary-500/20' 
                          : 'border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20'
                    }`}
                    placeholder="xyz@example.com"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2 flex items-center gap-1"
                    >
                      ⚠️ {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Message Field */}
                <div className="mb-8">
                  <label className={`flex items-center gap-2 text-sm font-semibold mb-2 transition-colors ${focused.message ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'}`}>
                    <FiMessageSquare />
                    <span>Your Message</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused({ ...focused, message: true })}
                    onBlur={() => setFocused({ ...focused, message: false })}
                    rows="5"
                    className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none resize-none bg-white dark:bg-dark-200 text-gray-800 dark:text-white ${
                      errors.message 
                        ? 'border-red-400 bg-red-50 dark:bg-red-900/20' 
                        : focused.message 
                          ? 'border-primary-500 bg-primary-50/50 dark:bg-primary-900/20 shadow-lg shadow-primary-500/20' 
                          : 'border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20'
                    }`}
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2 flex items-center gap-1"
                    >
                      ⚠️ {errors.message}
                    </motion.p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary ripple shiny flex items-center justify-center gap-3 text-lg"
                >
                  <FiSend />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
