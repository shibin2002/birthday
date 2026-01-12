import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ReasonsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const reasons = [
    {
      title: "Your Beautiful Smile",
      description: "It lights up my entire world and makes everything better",
      icon: "😊",
      color: "from-pink-200 to-pink-300"
    },
    {
      title: "Your Kind Heart",
      description: "The way you care for others shows your beautiful soul",
      icon: "💝",
      color: "from-rose-200 to-rose-300"
    },
    {
      title: "Your Infectious Laugh",
      description: "It's the most beautiful sound in the universe",
      icon: "😄",
      color: "from-red-200 to-red-300"
    },
    {
      title: "Your Gentle Touch",
      description: "Every hug, every hand-hold feels like home",
      icon: "🤗",
      color: "from-pink-300 to-rose-200"
    },
    {
      title: "Your Amazing Mind",
      description: "Your thoughts, dreams, and conversations fascinate me",
      icon: "🧠",
      color: "from-purple-200 to-pink-200"
    },
    {
      title: "Your Strength",
      description: "You inspire me with your courage and determination",
      icon: "💪",
      color: "from-red-300 to-pink-200"
    },
    {
      title: "Your Playful Spirit",
      description: "You make every moment fun and full of joy",
      icon: "🎈",
      color: "from-yellow-200 to-pink-200"
    },
    {
      title: "Your Love",
      description: "The way you love me makes me the luckiest person alive",
      icon: "💖",
      color: "from-red-200 to-pink-300"
    },
    {
      title: "Your Dreams",
      description: "I love being part of your journey and supporting your goals",
      icon: "⭐",
      color: "from-yellow-300 to-pink-200"
    },
   
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cream to-romantic-pink">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-romantic text-pastel-red mb-4">Reasons Why I Love You</h2>
          <p className="text-base md:text-lg font-elegant text-gray-700">There are countless reasons, but here are just a few</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4">{reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="love-card p-4 md:p-6 rounded-2xl shadow-lg cursor-pointer group"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
                className="text-3xl md:text-4xl mb-3 md:mb-4 text-center"
              >
                {reason.icon}
              </motion.div>

              <h3 className="text-lg md:text-xl font-cursive text-pastel-red mb-2 md:mb-3 text-center">
                {reason.title}
              </h3>

              <p className="text-gray-700 text-center leading-relaxed font-elegant text-sm md:text-base">
                {reason.description}
              </p>

              {/* Animated heart on hover */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center mt-3 md:mt-4"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-red-400 text-xl md:text-2xl"
                >
                  ❤️
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-8 md:mt-16 px-4"
        >
          <p className="text-xl md:text-2xl font-cursive text-pastel-red italic">
            "And a million more reasons that words cannot express..."
          </p>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-3xl md:text-4xl mt-4"
          >
            💕
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReasonsSection;