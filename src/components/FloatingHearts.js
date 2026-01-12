import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const createHeart = () => {
      const heart = {
        id: Math.random(),
        left: Math.random() * 100,
        animationDuration: 8 + Math.random() * 4,
        size: 16 + Math.random() * 8,
        emoji: ['💖', '💕', '💗', '💝', '❤️', '🌹'][Math.floor(Math.random() * 6)]
      };
      
      setHearts(prev => [...prev, heart]);
      
      // Remove heart after animation
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== heart.id));
      }, heart.animationDuration * 1000);
    };

    // Create initial hearts
    for (let i = 0; i < 5; i++) {
      setTimeout(createHeart, i * 1000);
    }

    // Continue creating hearts
    const interval = setInterval(createHeart, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-hearts">
      {hearts.map(heart => (
        <motion.div
          key={heart.id}
          initial={{ 
            y: '100vh', 
            x: `${heart.left}vw`,
            opacity: 0,
            rotate: 0,
            scale: 0
          }}
          animate={{ 
            y: '-100px', 
            opacity: [0, 0.7, 0.7, 0],
            rotate: 360,
            scale: [0, 1, 1, 0]
          }}
          transition={{ 
            duration: heart.animationDuration,
            ease: 'linear'
          }}
          className="heart"
          style={{ 
            fontSize: `${heart.size}px`,
            left: 0
          }}
        >
          {heart.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;