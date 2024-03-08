import React from "react";
import Carousel from "./Carousel";
import { domainName } from "../constants/constants";
import { FiArrowRight } from "react-icons/fi";

function PortfolioItem({ id, title, images, stack }) {
   return (
   <div className="border-2 border-stone-900 dark:border-stone-400 rounded-md overflow-hidden">
      <Carousel images={images} />
      <a className="text-lg md:text-2xl hover:text-blue-500"
         rel="noopener noreferrer"
         href={`project/${id}`}>
         <div className="w-full p-4">
            <h3 className="flex flex-row justify-context text-lg md:text-xl dark:text-white text-black hover:text-blue-500 mb-2 md:mb-3 font-semibold hover:underline">{title}</h3>
            <p className="text-sm">
               Learn more
               <FiArrowRight size={20} />
            </p>
         </div>
      </a>
   </div>
   );
}

export default PortfolioItem;
