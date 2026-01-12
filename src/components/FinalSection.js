import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FinalSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-light-gold via-romantic-pink to-cream">
      {/* Background decorations */}
      <div className="absolute inset-0">
        {/* Floating elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            {['💖', '🌹', '✨', '💕', '🦋', '🌸'][Math.floor(Math.random() * 6)]}
          </motion.div>
        ))}

        {/* Sparkle effects */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.h1
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-5xl md:text-7xl font-romantic text-pastel-red mb-8 leading-tight"
          >
            Happy Birthday
            <br />
            My Love, Asna
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block ml-4 text-red-400"
            >
              ❤️
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl font-elegant text-gray-700 leading-relaxed mb-6">
              This is just a small gift compared to what you mean to me.
            </p>
            
            <p className="text-lg font-cursive text-gray-600 italic">
              You are my sunshine, my heart, my everything.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="space-y-6"
          >
            <div className="flex justify-center space-x-4 text-4xl">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              >
                🌟
              </motion.span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                💖
              </motion.span>
              <motion.span
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >
                🌟
              </motion.span>
            </div>

            <motion.p
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-2xl font-cursive text-pastel-red"
            >
              Forever and always, you are loved ✨
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-16"
          >
            <p className="text-sm font-elegant text-gray-500 italic">
              Made with endless love, just for you 💕
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-10 left-10 animate-float">
        <span className="text-5xl opacity-40">🎂</span>
      </div>
      <div className="absolute top-10 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <span className="text-4xl opacity-40">🎈</span>
      </div>
      <div className="absolute bottom-10 left-10 animate-float" style={{ animationDelay: '2s' }}>
        <span className="text-4xl opacity-40">🌹</span>
      </div>
      <div className="absolute bottom-10 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
        <span className="text-5xl opacity-40">💝</span>
      </div>
    </section>
  );
};

export default FinalSection;