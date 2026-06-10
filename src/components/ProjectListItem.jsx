import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FiImage } from "react-icons/fi";
import { Link } from 'react-router-dom';

function ProjectListItem({ id, title, images, mini_desc, stack = [] }) {
   const thumb = images && images.length > 0 ? images[0] : null;

   return (
      <Link
         to={`project/${id}`}
         rel="noopener noreferrer"
         className="group flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 shadow-sm hover:shadow-md hover:border-violet-400 dark:hover:border-violet-400 transition-all duration-300"
      >
         {/* Thumbnail */}
         <div className="w-full sm:w-40 h-40 sm:h-24 shrink-0 rounded-md overflow-hidden border border-stone-300 dark:border-stone-600">
            {thumb ? (
               <img src={thumb} alt={title} className="w-full h-full object-cover" />
            ) : (
               <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-stone-200 to-stone-300 dark:from-stone-700 dark:to-stone-800 text-stone-400 dark:text-stone-500">
                  <FiImage className="text-3xl" />
               </div>
            )}
         </div>

         {/* Text */}
         <div className="flex flex-col flex-1 min-w-0">
            <h3 className="text-lg md:text-xl font-semibold text-stone-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
               {title}
            </h3>
            <p
               className="text-sm mt-1 mb-3 overflow-hidden"
               style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}
            >
               {mini_desc}
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-auto">
               {stack.slice(0, 4).map(item => (
                  <span key={item} className="px-2.5 py-0.5 text-xs rounded-full bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-200">
                     {item}
                  </span>
               ))}
               <span className="ml-auto inline-flex items-center text-sm text-violet-600 dark:text-violet-400 font-medium">
                  Learn more
                  <FaLongArrowAltRight className="ml-1 transition-transform group-hover:translate-x-1" size={18} />
               </span>
            </div>
         </div>
      </Link>
   );
}

export default ProjectListItem;
