import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.pageYOffset > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowScroll(false);
  };

  return (
    <AnimatePresence>
      {showScroll && (
        <motion.button
          onClick={scrollTop}
          title="Back to top"
          className="group fixed bottom-5 right-5 sm:right-8 z-50 p-3 bg-accent-600 text-white shadow-md hover:bg-accent-500 transition-colors duration-150"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
        >
          <FiArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
