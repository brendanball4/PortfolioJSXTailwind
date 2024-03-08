import React from "react";
import Carousel from "./Carousel";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function PortfolioItem({ id, title, images, mini_desc }) {
   return (
   <div className="border-2 border-stone-900 dark:border-stone-400 rounded-md overflow-hidden relative">
      <Carousel images={images} />
         <div className="w-full p-4">
            <h3 className="flex flex-row justify-context text-lg md:text-xl dark:text-white text-black mb-2 md:mb-3 font-semibold">{title}</h3>
            <p className="mb-8">
               {mini_desc}
            </p>
            <Link className="absolute bottom-2 left-3 text-lg md:text-2xl hover:text-blue-500"
         rel="noopener noreferrer"
         to={`project/${id}`}>
            <p className="text-lg pl-3 pr-3 hover:bg-blue-400 hover:border-black dark:hover:border-black dark:hover:text-black hover:text-black border-blue-700 dark:border-blue-900 border-2 rounded-full text-blue-700 dark:text-blue-400 flex items-center">
               Learn more
               <FaLongArrowAltRight className="ml-1" size={20} />
            </p>
            </Link>
         </div>
   </div>
   );
}

export default PortfolioItem;
