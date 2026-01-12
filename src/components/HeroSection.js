import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with bokeh effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-romantic-pink via-cream to-light-gold">
        {/* Floating sparkles */}
        {[...Array(20)].map((_, i) => (
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

      {/* Main content */}
      <div className="text-center z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-romantic text-pastel-red mb-4 md:mb-6"
        >
          Happy Birthday Asna
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block ml-2 md:ml-4 text-red-400"
          >
            ❤️
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg sm:text-xl md:text-2xl font-elegant text-gray-700 max-w-2xl mx-auto leading-relaxed px-4"
        >
          You make my world more beautiful just by being in it
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-8 md:mt-12"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-3xl md:text-4xl"
          >
            💕
          </motion.div>
          <p className="text-xs md:text-sm font-cursive text-gray-600 mt-2">
            Scroll down for more love
          </p>
        </motion.div>
      </div>

      {/* Floating elements - responsive positioning */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-20 animate-float">
        <span className="text-2xl sm:text-3xl md:text-4xl">🌸</span>
      </div>
      <div className="absolute top-20 sm:top-40 right-8 sm:right-32 animate-float" style={{ animationDelay: '1s' }}>
        <span className="text-2xl sm:text-3xl">✨</span>
      </div>
      <div className="absolute bottom-20 sm:bottom-32 left-8 sm:left-32 animate-float" style={{ animationDelay: '2s' }}>
        <span className="text-2xl sm:text-3xl">🦋</span>
      </div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 animate-float" style={{ animationDelay: '0.5s' }}>
        <span className="text-3xl sm:text-4xl">🌹</span>
      </div>
    </section>
  );
};

export default HeroSection;