import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import OurStorySection from './components/OurStorySection';
import MemoryGallery from './components/MemoryGallery';
import VideoMemories from './components/VideoMemories';
import LoveLetter from './components/LoveLetter';
import ReasonsSection from './components/ReasonsSection';
import FinalSection from './components/FinalSection';
import FloatingHearts from './components/FloatingHearts';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="App">
      <FloatingHearts />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
        <OurStorySection />
        <MemoryGallery />
        <VideoMemories />
        <LoveLetter />
        <ReasonsSection />
        <FinalSection />
      </motion.div>
    </div>
  );
}

export default App;