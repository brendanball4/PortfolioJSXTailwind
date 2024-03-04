import React from "react";
import Carousel from "./Carousel";
import { domainName } from "../constants/constants"; // Adjust the path as needed

function PortfolioItem({ id, title, images, stack, link }) {
   return (
   <div className="border-2 border-stone-900 dark:border-stone-400 rounded-md overflow-hidden">
      <Carousel images={images} />
      <a className="text-lg md:text-2xl hover:text-blue-500 hover:underline" target="_blank"
         rel="noopener noreferrer"
         href={`${domainName}project/${id}`}>
         <div className="w-full p-4">
            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}</h3>
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
               {stack.map(item => (
                  <span key={item} className="rounded-full text-stone-900 bg-stone-300 inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-stone-300 rounded-md">
                     {item}
                  </span>
               ))}
            </p>
         </div>
      </a>
   </div>
   );
}

export default PortfolioItem;
