import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GlobalEffects = () => {
  const [ripples, setRipples] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      // Don't add ripple if they click a link that navigates away
      const ripple = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      };
      setRipples((prev) => [...prev, ripple]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
      }, 1000);
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over clickable elements
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('clickable')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-violet-500/50 pointer-events-none z-[9999] mix-blend-screen hidden md:block"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0)',
          borderColor: isHovering ? 'rgba(34, 211, 238, 0.8)' : 'rgba(139, 92, 246, 0.5)'
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-screen shadow-[0_0_10px_rgba(34,211,238,0.8)] hidden md:block"
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0 }}
      />

      {/* Click Ripples */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed w-16 h-16 rounded-full border-2 border-cyan-400 pointer-events-none z-[9998]"
            style={{
              left: ripple.x - 32,
              top: ripple.y - 32,
              boxShadow: '0 0 20px rgba(34, 211, 238, 0.5), inset 0 0 20px rgba(34, 211, 238, 0.5)'
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
};

export default GlobalEffects;
