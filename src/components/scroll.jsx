import React, {useState} from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    setShowScroll(false);
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <AnimatePresence>
      {showScroll && (
        <motion.div
          className="fixed bottom-0 right-0 mb-2 mr-2 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <button
            className="fixed p-2 z-10 right-10 bottom-4 bg-violet-300 dark:bg-gray-600 text-lg p-5 rounded-3xl"
            onClick={scrollTop}>
            <FaArrowUp />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;