import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend, FiChevronDown } from 'react-icons/fi';
import { BsRobot } from 'react-icons/bs';
import resumePdf from '../assets/Md_Shahzad_Resume.pdf';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hello! I'm Md Shahzad's AI Assistant. How can I help you navigate the portfolio?",
      options: [
        { label: "View Projects", target: "#projects" },
        { label: "View Skills", target: "#skills" },
        { label: "Contact Info", target: "#contact" },
        { label: "Download Resume", target: "resume" }
      ]
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleOptionClick = (option) => {
    // Add user message
    setMessages(prev => [...prev, { type: 'user', text: option.label }]);
    setIsTyping(true);

    // Simulate AI thinking and responding
    setTimeout(() => {
      setIsTyping(false);
      let responseText = "";

      if (option.target === "resume") {
        responseText = "I'm initiating the download for Md Shahzad's resume. You can also find the button in the Hero section!";
        // Trigger download
        const link = document.createElement('a');
        link.href = resumePdf;
        link.download = 'Md_Shahzad_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        responseText = `Navigating to ${option.label}...`;
        // Scroll to section
        const element = document.querySelector(option.target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }

      setMessages(prev => [...prev, { type: 'bot', text: responseText }]);
      
      // Auto close after navigating (optional, but nice for UX)
      if (option.target !== "resume") {
        setTimeout(() => setIsOpen(false), 2000);
      }
    }, 1500);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <div className="absolute bottom-6 right-6 flex flex-col items-end pointer-events-auto">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8, originBottom: true, originRight: true }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="mb-4 w-[350px] sm:w-[400px] h-[500px] max-h-[70vh] bg-[#0a0a14]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(34,211,238,0.2)] flex flex-col overflow-hidden fixed bottom-[100px] right-6"
            >
            {/* Header */}
            <div className="px-4 py-3 bg-white/5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center text-white">
                    <BsRobot size={16} />
                  </div>
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-[#0a0a14]"></div>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">AI Assistant</h4>
                  <p className="text-green-400 text-xs flex items-center gap-1">
                    <span className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></span> Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiChevronDown size={24} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    msg.type === 'user' 
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-br-none' 
                      : 'bg-white/5 border border-white/10 text-gray-300 rounded-bl-none'
                  }`}>
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                    
                    {/* Render Options if bot has them */}
                    {msg.options && (
                      <div className="mt-3 flex flex-col gap-2">
                        {msg.options.map((opt, i) => (
                          <button
                            key={i}
                            onClick={() => handleOptionClick(opt)}
                            className="text-xs text-left px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors"></span>
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-none px-4 py-3 flex gap-1 items-center h-10">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area (Disabled for pre-defined prompts) */}
            <div className="p-3 bg-white/5 border-t border-white/10">
              <div className="relative">
                <input 
                  type="text" 
                  disabled
                  placeholder="Select an option above..."
                  className="w-full bg-[#05050a] border border-white/10 rounded-xl py-3 px-4 text-sm text-gray-400 cursor-not-allowed pr-10"
                />
                <button disabled className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <FiSend />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Draggable Mini Robot Button */}
      <motion.div
        drag
        dragConstraints={{ top: -window.innerHeight + 100, left: -window.innerWidth + 100, right: 0, bottom: 0 }}
        dragElastic={0.1}
        dragMomentum={false}
        className="fixed bottom-6 right-6 z-[10000]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95, cursor: "grabbing" }}
        animate={{ y: [0, -10, 0] }}
        transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group w-16 h-16 rounded-3xl bg-gradient-to-br from-[#0a0a14] to-[#131320] border-2 border-cyan-500/50 flex flex-col items-center justify-center text-white shadow-[0_0_20px_rgba(34,211,238,0.4)] overflow-hidden cursor-grab active:cursor-grabbing"
          style={{ borderRadius: '24px 24px 8px 24px' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} className="relative z-10 text-cyan-400">
                <FiX size={28} />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="relative z-10 flex flex-col items-center">
                {/* Antenna */}
                <div className="w-1 h-2 bg-gray-500 rounded-t-full absolute -top-2" />
                <div className="w-2 h-2 bg-red-500 rounded-full absolute -top-3 shadow-[0_0_5px_rgba(239,68,68,0.8)] animate-pulse" />
                
                <BsRobot size={26} className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] group-hover:animate-bounce" />
                
                {/* Robot Eyes (Simulated with glowing dots) */}
                <div className="flex gap-1 absolute top-[18px]">
                  <div className="w-1.5 h-1.5 bg-cyan-200 rounded-full shadow-[0_0_5px_#fff]" />
                  <div className="w-1.5 h-1.5 bg-cyan-200 rounded-full shadow-[0_0_5px_#fff]" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Notification dot */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500 border-2 border-[#0a0a14]"></span>
            </span>
          )}
        </button>
      </motion.div>
      </div>
    </div>
  );
};

export default Chatbot;
