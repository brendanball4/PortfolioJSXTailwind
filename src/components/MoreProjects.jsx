import React, { useState } from 'react';
import portfolio from '../data/portfolio';
import ProjectListItem from './ProjectListItem';
import { Link } from 'react-router-dom';

const LIST_PAGE_SIZE = 4;

function MoreProjects() {
   const rest = portfolio.filter(p => !p.featured);
   const [showAll, setShowAll] = useState(false);
   const visible = showAll ? rest : rest.slice(0, LIST_PAGE_SIZE);

   if (rest.length === 0) return null;

   return (
      <div className='mt-8'>
         <Link
            to={`/project/${rest[0].id}`}
            title="Browse all projects"
            className="group inline-block mb-5"
         >
            <h1 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
               More Projects
            </h1>
            <span className="block w-10 h-1 mt-2 rounded-full bg-violet-500 dark:bg-violet-400 transition-all duration-300 group-hover:w-full" />
         </Link>
         <div className="flex flex-col gap-3">
            {visible.map(project => (
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
      </div>
   )
}

export default MoreProjects;
