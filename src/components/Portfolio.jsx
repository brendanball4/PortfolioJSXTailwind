import React, { useState } from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import Title from "./Title";
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const PAGE_SIZE = 6;

function Portfolio() {
   const [showAll, setShowAll] = useState(false);
   const visible = showAll ? portfolio : portfolio.slice(0, PAGE_SIZE);

   return (
      <div className='mt-8'>
         <div className="flex items-center gap-3 mb-5">
            <Title>Recent Work</Title>
            <Link
               to="/project/1"
               className="flex items-center gap-1 text-sm text-stone-500 dark:text-stone-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors mb-1"
            >
               <FiArrowRight className="w-5 h-5" />
            </Link>
         </div>
         <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {visible.map(project => (
                  <PortfolioItem
                     key={project.id}
                     id={project.id}
                     title={project.title}
                     images={project.images}
                     mini_desc={project.mini_desc}
                  />
               ))}
            </div>
         </div>
         {portfolio.length > PAGE_SIZE && (
            <div className="flex justify-center mt-6">
               <button
                  onClick={() => setShowAll(v => !v)}
                  className="flex items-center gap-2 px-5 py-2 text-sm rounded-full border border-stone-300 dark:border-stone-600 text-stone-600 dark:text-stone-300 hover:border-violet-500 hover:text-violet-500 dark:hover:text-violet-400 dark:hover:border-violet-400 transition-colors"
               >
                  {showAll ? 'Show less' : 'Load more'}
               </button>
            </div>
         )}
      </div>
   )
}

export default Portfolio;
