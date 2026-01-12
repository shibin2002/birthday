import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MemoryGallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isAutoScrolling, setIsAutoScrolling] = React.useState(true);

  // Beautiful memories with real photos
  const lookMemories = [
    {
      id: 1,
      title: "Angelic Beauty",
      description: "My beautiful angel, radiating pure grace",
      src: "/look/1.jpg",
      category: "look"
    },
    {
      id: 2,
      title: "Divine Elegance",
      description: "Looking absolutely stunning, my love",
      src: "/look/2.jpg",
      category: "look"
    },
    {
      id: 3,
      title: "Natural Goddess",
      description: "Your natural beauty takes my breath away",
      src: "/look/3.jpg",
      category: "look"
    },
    {
      id: 4,
      title: "Perfect Angel",
      description: "Perfection captured in a single frame",
      src: "/look/4.jpg",
      category: "look"
    },
    {
      id: 5,
      title: "Heavenly Grace",
      description: "Grace and beauty beyond words",
      src: "/look/5.jpg",
      category: "look"
    },
    {
      id: 6,
      title: "My Heart's Desire",
      description: "The most beautiful woman in the world",
      src: "/look/6.jpg",
      category: "look"
    },
    
  ];

  const funnyMemories = [
    {
      id: 7,
      title: "Adorable Moments",
      description: "Your smile lights up my entire world",
      src: "/funny/1.jpg",
      category: "funny"
    },
    {
      id: 8,
      title: "Playful Angel",
      description: "Being adorably silly, my sweet love",
      src: "/funny/2.jpg",
      category: "funny"
    },
    {
      id: 9,
      title: "Joyful Spirit",
      description: "Your happiness is my greatest treasure",
      src: "/funny/3.jpg",
      category: "funny"
    },
    {
      id: 10,
      title: "Sweet Laughter",
      description: "Your laugh is music to my soul",
      src: "/funny/4.jpg",
      category: "funny"
    },
    {
      id: 11,
      title: "Pure Joy",
      description: "Happiness looks so beautiful on you",
      src: "/funny/5.jpg",
      category: "funny"
    },
    {
      id: 12,
      title: "Cheerful Beauty",
      description: "My heart skips a beat seeing you smile",
      src: "/funny/6.jpg",
      category: "funny"
    },
    
  ];

  const allMemories = [...lookMemories, ...funnyMemories];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-romantic-pink to-light-gold">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-romantic text-pastel-red mb-4">My Beautiful Angel</h2>
          <p className="text-base md:text-lg font-elegant text-gray-700">Every photo captures your divine beauty and grace</p>
        </motion.div>

        {/* Beautiful Look Photos - Grid Layout */}
        <div className="mb-8 md:mb-16 px-4">
          <h3 className="text-2xl md:text-3xl font-cursive text-pastel-red mb-6 md:mb-8 text-center">✨ Divine Beauty</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {lookMemories.map((memory, index) => (
              <motion.div
                key={memory.id}
                initial={{ opacity: 0, y: 50, rotate: Math.random() * 10 - 5 }}
                animate={inView ? { opacity: 1, y: 0, rotate: Math.random() * 6 - 3 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  rotate: 0, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="polaroid cursor-pointer group"
              >
                {/* Real photo */}
                <div className="aspect-square bg-gradient-to-br from-cream to-blush rounded-lg overflow-hidden mb-3 md:mb-4 relative">
                  <img 
                    src={memory.src} 
                    alt={memory.title} 
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-cream to-blush rounded-lg flex items-center justify-center text-4xl md:text-6xl opacity-50" style={{display: 'none'}}>
                    📸
                  </div>
                  
                  {/* Overlay effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>

                {/* Photo caption */}
                <div className="text-center">
                  <h3 className="font-cursive text-base md:text-lg text-pastel-red mb-1">{memory.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600 font-elegant">{memory.description}</p>
                  <div className="mt-2">
                    <span className="inline-block px-2 py-1 rounded-full text-xs font-cursive bg-pink-100 text-pink-600">
                      ✨ Beautiful
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fun Photos - Continuous Fast Auto Loop */}
        <div className="px-4">
          <h3 className="text-2xl md:text-3xl font-cursive text-pastel-red mb-6 md:mb-8 text-center">😄 Playful Moments</h3>
          
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex gap-4 md:gap-6"
              animate={{ x: [0, -100 * funnyMemories.length] }}
              transition={{
                duration: 12, // Fast 12-second cycle
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ width: `${200 * funnyMemories.length}%` }}
            >
              {/* First set of images */}
              {funnyMemories.map((memory, index) => (
                <motion.div
                  key={`auto-first-${memory.id}`}
                  initial={{ opacity: 0, rotate: Math.random() * 10 - 5 }}
                  animate={inView ? { opacity: 1, rotate: Math.random() * 6 - 3 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ 
                    rotate: 0, 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="polaroid cursor-pointer group flex-shrink-0 w-48 sm:w-56 md:w-64"
                >
                  {/* Real photo */}
                  <div className="aspect-square bg-gradient-to-br from-cream to-blush rounded-lg overflow-hidden mb-3 md:mb-4 relative">
                    <img 
                      src={memory.src} 
                      alt={memory.title} 
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-cream to-blush rounded-lg flex items-center justify-center text-4xl md:text-6xl opacity-50" style={{display: 'none'}}>
                      😄
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </div>

                  <div className="text-center">
                    <h3 className="font-cursive text-base md:text-lg text-pastel-red mb-1">{memory.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600 font-elegant">{memory.description}</p>
                    <div className="mt-2">
                      <span className="inline-block px-2 py-1 rounded-full text-xs font-cursive bg-yellow-100 text-yellow-600">
                        😄 Fun
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {funnyMemories.map((memory, index) => (
                <motion.div
                  key={`auto-second-${memory.id}`}
                  initial={{ opacity: 0, rotate: Math.random() * 10 - 5 }}
                  animate={inView ? { opacity: 1, rotate: Math.random() * 6 - 3 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ 
                    rotate: 0, 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="polaroid cursor-pointer group flex-shrink-0 w-48 sm:w-56 md:w-64"
                >
                  <div className="aspect-square bg-gradient-to-br from-cream to-blush rounded-lg overflow-hidden mb-3 md:mb-4 relative">
                    <img 
                      src={memory.src} 
                      alt={memory.title} 
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-cream to-blush rounded-lg flex items-center justify-center text-4xl md:text-6xl opacity-50" style={{display: 'none'}}>
                      😄
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </div>

                  <div className="text-center">
                    <h3 className="font-cursive text-base md:text-lg text-pastel-red mb-1">{memory.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600 font-elegant">{memory.description}</p>
                    <div className="mt-2">
                      <span className="inline-block px-2 py-1 rounded-full text-xs font-cursive bg-yellow-100 text-yellow-600">
                        😄 Fun
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Status indicator */}
            <div className="text-center mt-4">
              <p className="text-xs md:text-sm font-cursive text-gray-500 italic">
                ✨ Endless playful moments flowing by ✨
              </p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-lg font-cursive text-gray-700 italic">
            "Every picture shows the angel that stole my heart"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MemoryGallery;