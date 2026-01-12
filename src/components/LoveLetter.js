import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LoveLetter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  const loveLetterText = `My Dearest Asna,

As I sit here writing this letter, my heart overflows with love for you. Today marks another year of your beautiful existence, and I am so grateful to be part of your journey.

From the moment you entered my life, everything changed. Your laughter became my favorite melody, your smile my daily sunshine, and your love my greatest treasure. You have this incredible way of making ordinary moments feel magical, and every day with you feels like a gift.

I love how you light up when you talk about your passions, how you care so deeply for everyone around you, and how you make me want to be a better person just by being yourself. Your kindness, your strength, your beautiful soul - everything about you amazes me.

On this special day, I want you to know that you are loved beyond measure. You are my heart, my home, my forever. Thank you for being the incredible woman you are, for loving me, and for making life so wonderfully beautiful.

Happy Birthday, my love. Here's to many more years of adventures, laughter, and endless love together.

Forever yours,
With all my love ❤️`;

  useEffect(() => {
    if (inView && isLetterOpen && !isTyping && displayedText === '') {
      setIsTyping(true);
      let index = 0;
      const timer = setInterval(() => {
        if (index <= loveLetterText.length) {
          setDisplayedText(loveLetterText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
          setIsTyping(false);
          setShowHearts(true);
        }
      }, 30);

      return () => clearInterval(timer);
    }
  }, [inView, isTyping, displayedText, isLetterOpen, loveLetterText]);

  const openLetter = () => {
    setIsLetterOpen(true);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-light-gold to-cream relative overflow-hidden">
      {/* Floating hearts when letter is read */}
      <AnimatePresence>
        {showHearts && (
          <>
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0, 
                  scale: 0,
                  x: Math.random() * window.innerWidth,
                  y: window.innerHeight
                }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: -100,
                  rotate: 360
                }}
                transition={{ 
                  duration: 4,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatDelay: 8
                }}
                className="absolute text-2xl pointer-events-none z-10"
              >
                {['💖', '💕', '💗', '💝', '❤️', '🌹'][Math.floor(Math.random() * 6)]}
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16 px-4"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-romantic text-pastel-red mb-4"
            animate={{ 
              scale: [1, 1.02, 1],
              textShadow: [
                "0px 0px 0px rgba(255, 179, 186, 0)",
                "0px 0px 20px rgba(255, 179, 186, 0.3)",
                "0px 0px 0px rgba(255, 179, 186, 0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            A Letter From My Heart
          </motion.h2>
          <p className="text-base md:text-lg font-elegant text-gray-700">Words can never fully express my love for you</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Envelope/Letter container */}
          <AnimatePresence mode="wait">
            {!isLetterOpen ? (
              // Closed envelope
              <motion.div
                key="envelope"
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                transition={{ duration: 0.6 }}
                className="relative cursor-pointer"
                onClick={openLetter}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 25px 50px rgba(255, 179, 186, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-br from-cream to-romantic-pink p-6 sm:p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden border-4 border-white"
                >
                  {/* Envelope flap */}
                  <div className="absolute top-0 left-0 right-0 h-12 md:h-16 bg-gradient-to-b from-pastel-red to-blush opacity-80 rounded-t-2xl"></div>
                  
                  {/* Wax seal */}
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-6 md:top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-12 md:h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-sm md:text-xl shadow-lg"
                  >
                    ❤️
                  </motion.div>

                  <div className="text-center mt-6 md:mt-8">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-4xl md:text-6xl mb-4"
                    >
                      💌
                    </motion.div>
                    <h3 className="text-xl md:text-2xl font-cursive text-pastel-red mb-4">
                      Click to Open My Heart
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 font-elegant px-4">
                      A special message awaits you inside...
                    </p>
                    
                    {/* Sparkle effects */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          scale: [0, 1, 0],
                          rotate: [0, 180, 360],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          delay: i * 0.3,
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                        className="absolute text-yellow-400 text-lg"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`
                        }}
                      >
                        ✨
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              // Opened letter
              <motion.div
                key="letter"
                initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                className="relative"
              >
                {/* Letter paper effect */}
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 30px 60px rgba(255, 179, 186, 0.2)"
                  }}
                  className="bg-white p-8 md:p-12 rounded-lg shadow-2xl relative overflow-hidden"
                >
                  {/* Paper texture overlay */}
                  <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-gray-100 to-gray-200"></div>
                  
                  {/* Letter content */}
                  <div className="relative z-10">
                    <div className="font-elegant text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg whitespace-pre-line">
                      {displayedText || (inView ? loveLetterText : '')}
                      {isTyping && displayedText && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          className="text-pastel-red"
                        >
                          |
                        </motion.span>
                      )}
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <motion.div 
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-4 right-4 text-2xl opacity-20"
                  >
                    💕
                  </motion.div>
                  <motion.div 
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-4 left-4 text-2xl opacity-20"
                  >
                    🌹
                  </motion.div>
                  
                  {/* Paper fold effect */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gray-100 to-transparent opacity-30"></div>
                </motion.div>

                {/* Floating hearts around the letter */}
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -left-4 text-3xl"
                >
                  💖
                </motion.div>
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -top-2 -right-6 text-2xl"
                >
                  💝
                </motion.div>
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-4 -right-4 text-3xl"
                >
                  💕
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetter;