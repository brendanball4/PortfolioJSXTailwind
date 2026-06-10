import React, { useState } from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import ProjectListItem from './ProjectListItem';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const LIST_PAGE_SIZE = 4;

function Portfolio() {
   const featured = portfolio.filter(p => p.featured);
   const rest = portfolio.filter(p => !p.featured);

   const [showAll, setShowAll] = useState(false);
   const visibleRest = showAll ? rest : rest.slice(0, LIST_PAGE_SIZE);

   return (
      <div className='mt-8'>
         <Link
            to={`/project/${featured[0]?.id ?? portfolio[0].id}`}
            className="group inline-block mb-5"
         >
            <div className="flex items-center gap-2">
               <h1 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  Recent Work
               </h1>
               <FiArrowRight className="w-6 h-6 text-stone-400 dark:text-stone-500 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-all duration-200 group-hover:translate-x-1" />
            </div>
            <span className="block w-10 h-1 mt-2 rounded-full bg-violet-500 dark:bg-violet-400 transition-all duration-300 group-hover:w-full" />
         </Link>

         {/* Featured projects */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map(project => (
               <PortfolioItem
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  images={project.images}
                  mini_desc={project.mini_desc}
                  stack={project.stack}
               />
            ))}
         </div>

         {/* More projects (compact list) */}
         {rest.length > 0 && (
            <>
               <h3 className="text-sm font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500 mt-10 mb-4">
                  More Projects
               </h3>
               <div className="flex flex-col gap-3">
                  {visibleRest.map(project => (
                     <ProjectListItem
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        images={project.images}
                        mini_desc={project.mini_desc}
                        stack={project.stack}
                     />
                  ))}
               </div>
               {rest.length > LIST_PAGE_SIZE && (
                  <div className="flex justify-center mt-6">
                     <button
                        onClick={() => setShowAll(v => !v)}
                        className="flex items-center gap-2 px-5 py-2 text-sm rounded-full border border-stone-300 dark:border-stone-600 text-stone-600 dark:text-stone-300 hover:border-violet-500 hover:text-violet-500 dark:hover:text-violet-400 dark:hover:border-violet-400 transition-colors"
                     >
                        {showAll ? 'Show less' : `Show ${rest.length - LIST_PAGE_SIZE} more`}
                     </button>
                  </div>
               )}
            </>
         )}
      </div>
   )
}

export default Portfolio;
