import React from "react";
import Carousel from "./Carousel";
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

function PortfolioItem({ id, title, images, mini_desc, stack = [] }) {
   return (
      <div className="group flex flex-col rounded-xl overflow-hidden bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 shadow-sm hover:shadow-lg hover:border-violet-400 dark:hover:border-violet-400 hover:-translate-y-1 transition-all duration-300">
         <Carousel images={images} height="h-44" />
         <div className="flex flex-col flex-1 p-5">
            <h3 className="text-lg md:text-xl font-semibold text-stone-900 dark:text-white mb-2">
               {title}
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-400 mb-4">
               {mini_desc}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
               {stack.slice(0, 3).map(item => (
                  <span key={item} className="px-2.5 py-0.5 text-xs rounded-full bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300">
                     {item}
                  </span>
               ))}
               {stack.length > 3 && (
                  <span className="px-2.5 py-0.5 text-xs rounded-full text-stone-500 dark:text-stone-400">
                     +{stack.length - 3} more
                  </span>
               )}
            </div>
            <Link
               to={`project/${id}`}
               rel="noopener noreferrer"
               className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 transition-colors"
            >
               Learn more
               <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" size={16} />
            </Link>
         </div>
      </div>
   );
}

export default PortfolioItem;
