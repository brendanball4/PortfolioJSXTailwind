import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [isArrowHovered, setIsArrowHovered] = useState(false); // New state for arrow hover

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      checkScrollTop();
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showScroll]); // Added showScroll as a dependency

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    setShowScroll(false);
  };

  return (
    <AnimatePresence>
      {showScroll && (
        <motion.div
          className="fixed bottom-0 right-0 mb-2 mr-2 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <button
            className="fixed p-2 right-10 hover:text-white dark:hover:text-blue-400 bottom-4 bg-violet-300 dark:bg-gray-600 text-lg p-5 rounded-3xl"
            onClick={scrollTop}
            onMouseEnter={() => setIsArrowHovered(true)} // Set arrow hover state to true
            onMouseLeave={() => setIsArrowHovered(false)} // Set arrow hover state to false
          >
            <div className={`hover:animate-pulse ${isArrowHovered ? 'animate-pulse' : ''}`}>
              <FaArrowUp />
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
