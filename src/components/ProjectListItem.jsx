import React from "react";
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

function ProjectListItem({ id, title, images, mini_desc, stack = [] }) {
   const thumb = images && images.length > 0 ? images[0] : null;

   return (
      <Link
         to={`project/${id}`}
         className="group flex flex-col w-72 shrink-0 snap-start"
      >
         <div className="h-40 overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900">
            {thumb && <img src={thumb} alt={title} className="w-full h-full object-cover object-top" />}
         </div>
         <h3 className="font-display font-semibold text-stone-900 dark:text-white mt-3 mb-1 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
            {title}
         </h3>
         <p className="text-sm text-stone-600 dark:text-stone-400 mb-3">
            {mini_desc}
         </p>
         <p className="font-mono text-xs text-stone-500 mb-4">
            {stack.join(' · ')}
         </p>
         <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 dark:text-accent-400">
            View project
            <FiArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
         </span>
      </Link>
   );
}

export default ProjectListItem;
