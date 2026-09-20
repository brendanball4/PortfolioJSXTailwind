import React, { useRef } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import portfolio from '../data/portfolio';
import ProjectListItem from './ProjectListItem';
import Title from './Title';

function MoreProjects() {
   const rest = portfolio.filter(p => !p.featured && !p.archived);
   const row = useRef(null);

   if (rest.length === 0) return null;

   // scroll by roughly one card (w-72 + gap-6)
   const scrollBy = (dir) => row.current?.scrollBy({ left: dir * 312, behavior: 'smooth' });

   const btn = "p-2 bg-accent-600 text-white hover:bg-accent-500 transition-colors";

   return (
      <div className='mt-8'>
         <div className="flex items-start justify-between gap-6">
            <div>
               <Title>More projects</Title>
               <p className="text-sm text-stone-500 -mt-3 mb-6">
                  My work at Tangle Media is all client work under NDA, so none of it is shown here. Happy to talk through it in an interview.
               </p>
            </div>
            <div className="hidden sm:flex gap-2 shrink-0 mt-1">
               <button type="button" onClick={() => scrollBy(-1)} aria-label="Scroll projects left" className={btn}>
                  <FiArrowLeft className="w-4 h-4" />
               </button>
               <button type="button" onClick={() => scrollBy(1)} aria-label="Scroll projects right" className={btn}>
                  <FiArrowRight className="w-4 h-4" />
               </button>
            </div>
         </div>
         <div ref={row} className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-thin">
            {rest.map(project => (
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
      </div>
   )
}

export default MoreProjects;
