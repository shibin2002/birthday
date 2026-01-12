import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SurpriseSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [showSurprise, setShowSurprise] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleSurpriseClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      setTimeout(() => {
        setShowSurprise(true);
      }, 500);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-romantic-pink to-light-gold relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-romantic text-pastel-red mb-4">A Special Surprise</h2>
          <p className="text-lg font-elegant text-gray-700">I have something special just for you</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showSurprise ? (
            <motion.div
              key="surprise-button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <motion.button
                onClick={handleSurpriseClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={isClicked ? { 
                  scale: [1, 1.2, 0.8, 1.1, 0.9, 1],
                  rotate: [0, 10, -10, 5, -5, 0]
                } : {}}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-pastel-red to-blush text-white px-12 py-6 rounded-full text-2xl font-cursive shadow-2xl hover:shadow-3xl transition-all duration-300 border-4 border-white"
                disabled={isClicked}
              >
                Click for a Surprise 🎁
              </motion.button>

              {!isClicked && (
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mt-8 text-6xl"
                >
                  ✨
                </motion.div>
              )}

              {isClicked && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-8"
                >
                  <div className="text-4xl animate-spin">🎪</div>
                  <p className="text-lg font-cursive text-gray-600 mt-2">Preparing your surprise...</p>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="surprise-content"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="surprise-animation"
            >
              {/* Surprise content */}
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                {/* Confetti effect */}
                <div className="absolute inset-0">
                  {[...Array(30)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: -100, opacity: 0, rotate: 0 }}
                      animate={{ 
                        y: 400, 
                        opacity: [0, 1, 0], 
                        rotate: 360,
                        x: Math.random() * 400 - 200
                      }}
                      transition={{ 
                        duration: 3, 
                        delay: Math.random() * 2,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                      className="absolute text-2xl"
                      style={{ left: `${Math.random() * 100}%` }}
                    >
                      {['🎉', '🎊', '✨', '💖', '🌟', '💕'][Math.floor(Math.random() * 6)]}
                    </motion.div>
                  ))}
                </div>

                <div className="relative z-10">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-6xl mb-6"
                  >
                    🎊
                  </motion.div>

                  <h3 className="text-4xl font-romantic text-pastel-red mb-6">
                    Surprise!
                  </h3>

                  <div className="space-y-4 text-lg font-elegant text-gray-700">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      I'm so lucky to have you in my life.
                    </motion.p>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="text-2xl font-cursive text-pastel-red"
                    >
                      I love you endlessly ❤️
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 }}
                      className="text-sm italic"
                    >
                      You deserve all the happiness in the world, today and always.
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5, type: "spring", bounce: 0.6 }}
                    className="mt-8 text-5xl"
                  >
                    💖
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Background decorations */}
        <div className="absolute top-10 left-10 animate-float">
          <span className="text-4xl opacity-30">🎈</span>
        </div>
        <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <span className="text-3xl opacity-30">🎀</span>
        </div>
        <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <span className="text-4xl opacity-30">🎂</span>
        </div>
        <div className="absolute bottom-10 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
          <span className="text-3xl opacity-30">🌈</span>
        </div>
      </div>
    </section>
  );
};

export default SurpriseSection;