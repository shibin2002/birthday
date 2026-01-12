import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const VideoMemories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoMemories = [
    {
      id: 1,
      title: "Beautiful Moments",
      description: "Capturing your grace in motion",
      src: "/video/1.mp4",
      thumbnail: "🎬"
    },
    {
      id: 2,
      title: "Sweet Memories",
      description: "Every second with you is precious",
      src: "/video/2.mp4",
      thumbnail: "💖"
    },
    {
      id: 3,
      title: "Joyful Times",
      description: "Your happiness is contagious",
      src: "/video/3.mp4",
      thumbnail: "😊"
    },
    {
      id: 4,
      title: "Magical Moments",
      description: "Creating magic together",
      src: "/video/4.mp4",
      thumbnail: "✨"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-light-gold to-romantic-pink">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-romantic text-pastel-red mb-4">Moving Memories</h2>
          <p className="text-base md:text-lg font-elegant text-gray-700">Beautiful moments captured in time</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4">
          {videoMemories.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="love-card p-4 md:p-6 rounded-2xl shadow-lg cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="aspect-video bg-gradient-to-br from-cream to-blush rounded-lg flex items-center justify-center mb-3 md:mb-4 relative overflow-hidden group">
                <video
                  className="w-full h-full object-cover rounded-lg"
                  muted
                  loop
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                
                {/* Play overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-white/90 rounded-full p-3 md:p-4"
                  >
                    <span className="text-2xl md:text-3xl">▶️</span>
                  </motion.div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-cursive text-lg md:text-xl text-pastel-red mb-2">{video.title}</h3>
                <p className="text-gray-700 font-elegant text-sm md:text-base">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-cursive text-pastel-red">{selectedVideo.title}</h3>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="text-3xl text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    ×
                  </button>
                </div>
                
                <div className="aspect-video rounded-lg overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                  >
                    <source src={selectedVideo.src} type="video/mp4" />
                  </video>
                </div>
                
                <p className="text-center text-gray-700 font-elegant mt-4">
                  {selectedVideo.description}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-lg font-cursive text-gray-700 italic">
            "Every video tells a story of our beautiful journey together"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoMemories;