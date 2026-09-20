import React from "react";
import Carousel from "./Carousel";
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

function PortfolioItem({ id, title, images, mini_desc, stack = [] }) {
   return (
      <div className="flex flex-col">
         <div className=" overflow-hidden border border-stone-200 dark:border-stone-800">
            <Carousel images={images} height="h-44" />
         </div>
         <h3 className="font-display text-lg font-semibold mt-4 mb-1.5">
            <Link
               to={`project/${id}`}
               className="text-stone-900 dark:text-white hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
            >
               {title}
            </Link>
         </h3>
         <p className="text-sm text-stone-600 dark:text-stone-400 mb-3">
            {mini_desc}
         </p>
         <p className="font-mono text-xs text-stone-500 mb-4">
            {stack.join(' · ')}
         </p>
         <Link
            to={`project/${id}`}
            className="group mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
         >
            View project
            <FiArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
         </Link>
      </div>
   );
}

export default PortfolioItem;
