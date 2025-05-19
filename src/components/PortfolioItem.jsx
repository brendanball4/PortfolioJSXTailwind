import Carousel from "./Carousel";
import { FaLongArrowAltRight, FaBook, FaBookOpen } from "react-icons/fa";
import { Link } from 'react-router-dom';

function PortfolioItem({ id, title, images, mini_desc, loading }) {
   if (loading) {
      return (
         <div className="border-2 border-stone-900 dark:border-stone-400 rounded-md overflow-hidden relative bg-stone-200 dark:bg-stone-800 flex flex-col h-full">
            {/* Image skeleton */}
            <div className="aspect-[4/3] w-full bg-stone-300 dark:bg-stone-700 animate-pulse" />
            <div className="border-t-2 border-stone-900 dark:border-stone-400 w-full p-4 flex flex-col flex-1">
               {/* Title skeleton */}
               <div className="h-6 w-2/3 bg-stone-300 dark:bg-stone-700 rounded animate-pulse mb-3"></div>
               {/* Description skeleton */}
               <div className="h-4 w-full bg-stone-300 dark:bg-stone-700 rounded animate-pulse mb-2"></div>
               <div className="h-4 w-5/6 bg-stone-300 dark:bg-stone-700 rounded animate-pulse mb-2"></div>
               <div className="h-4 w-4/6 bg-stone-300 dark:bg-stone-700 rounded animate-pulse mb-8"></div>
               {/* Button skeleton */}
               <div className="mt-auto flex justify-start">
                 <div className="h-10 w-32 bg-stone-300 dark:bg-stone-700 rounded-full animate-pulse"></div>
               </div>
            </div>
         </div>
      );
   }

   return (
   <div className="group relative rounded-md overflow-hidden h-full flex flex-col bg-stone-100 dark:bg-stone-900 border-2 border-stone-900 dark:border-stone-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1">
      <div className="relative z-10 bg-stone-100 dark:bg-stone-900 h-full flex flex-col m-[2px] rounded-md">
         <Carousel images={images} />
         <div className="border-t-2 border-stone-900 dark:border-stone-400 w-full p-4 flex flex-col flex-1">
            <h3 className="flex flex-row justify-context text-lg md:text-xl dark:text-white text-black mb-1.5 font-semibold group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-300">{title}</h3>
            <p className="mb-6 md:mb-6 flex-1 text-stone-700 dark:text-stone-300">{mini_desc}</p>
            <div className="w-full mt-0">
              <Link className="group/link focus:outline-none w-full block" rel="noopener noreferrer" to={`project/${id}`}>
                <span className="w-full flex justify-center items-center py-2 rounded-full bg-gradient-to-r from-slate-600 to-slate-600 text-white font-semibold shadow-md gap-2 transition-all duration-300 hover:from-slate-500 hover:to-slate-500 hover:shadow-lg hover:shadow-slate-500/30 focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-lg">
                  <span className="mr-2 relative w-6 h-6 flex items-center justify-center">
                    <FaBook className="absolute left-0 top-0 w-6 h-6 transition-all duration-300 group-hover/link:opacity-0 opacity-100 group-hover/link:-translate-x-1" size={22} />
                    <FaBookOpen className="absolute left-0 top-0 w-6 h-6 transition-all duration-300 group-hover/link:opacity-100 opacity-0 group-hover/link:translate-x-1" size={22} />
                  </span>
                  Read more
                </span>
              </Link>
            </div>
         </div>
      </div>
   </div>
   );
}

export default PortfolioItem;