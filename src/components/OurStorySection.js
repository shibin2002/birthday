import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OurStorySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const storyMilestones = [
    {
      title: "The Day We Met",
      date: "December 8th, 2022",
      description: "From the moment our eyes met, I knew you were someone special. Your smile lit up the entire room and my heart.",
      icon: "💫"
    },
    {
      title: "Our First Date",
      date: "Kozhikode - Where Magic Began",
      description: "In the beautiful city of Kozhikode, time seemed to stop when we were together. Every laugh, every conversation felt like a beautiful melody.",
      icon: "🌙"
    },
    {
      title: "Falling Deeper",
      date: "Hearts Intertwined",
      description: "With each passing day, my love for you grew stronger. You became my sunshine, my peace, my everything.",
      icon: "💖"
    },
    {
      title: "Today & Forever",
      date: "Our Love Story Continues",
      description: "Every day with you is a gift. Today we celebrate you, and I promise to love you more with each tomorrow.",
      icon: "🌟"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cream to-romantic-pink">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-romantic text-pastel-red mb-4">Our Love Story</h2>
          <p className="text-lg font-elegant text-gray-700">A journey of hearts, dreams, and endless love</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - responsive */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blush to-pastel-red rounded-full"></div>

          {storyMilestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex items-center mb-8 md:mb-16 ${
                index % 2 === 0 
                  ? 'md:flex-row flex-row' 
                  : 'md:flex-row-reverse flex-row'
              }`}
            >
              <div className={`w-full md:w-1/2 ${
                index % 2 === 0 
                  ? 'pl-12 md:pr-8 md:pl-0 md:text-right text-left' 
                  : 'pl-12 md:pl-8 md:pr-0 md:text-left text-left'
              }`}>
                <div className="love-card p-4 md:p-6 rounded-2xl shadow-lg">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">{milestone.icon}</div>
                  <h3 className="text-xl md:text-2xl font-cursive text-pastel-red mb-2">{milestone.title}</h3>
                  <p className="text-xs md:text-sm font-elegant text-blush mb-2 md:mb-3">{milestone.date}</p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">{milestone.description}</p>
                </div>
              </div>

              {/* Timeline dot - responsive */}
              <div className="absolute left-4 md:relative md:left-0 z-10">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="w-4 h-4 md:w-6 md:h-6 bg-pastel-red rounded-full border-2 md:border-4 border-white shadow-lg"
                ></motion.div>
              </div>

              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;