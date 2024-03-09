import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProjectItem from '../components/ProjectItem';
import { FiArrowLeft } from 'react-icons/fi';
import { motion, AnimatePresence } from "framer-motion";

function ProjectPage() {
  let { id } = useParams();
  const [isArrowHovered, setIsArrowHovered] = useState(false);

  return (
    <div>
      <AnimatePresence>
        <motion.div
          className="absolute xl:fixed mb-2 mr-2 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <Link
            className="absolute xl:fixed top-3.5 xl:left-4 text-lg p-2 rounded-full"
            to="/"
            onMouseEnter={() => setIsArrowHovered(true)} // Set arrow hover state to true
            onMouseLeave={() => setIsArrowHovered(false)} // Set arrow hover state to false
          >
            <div className={`flex items-center justify-center text-black dark:text-white hover:animate-pulse ${isArrowHovered ? 'animate-pulse' : ''}`}>
              <FiArrowLeft size={20} />
              <p className='overflow-hidden ml-0.5'>Back</p>
            </div>
          </Link>
        </motion.div>
      </AnimatePresence>
      <div className='flex flex-col justify-between min-h-screen'>
        <ProjectItem />
      </div>
    </div>
  );
}

export default ProjectPage;
