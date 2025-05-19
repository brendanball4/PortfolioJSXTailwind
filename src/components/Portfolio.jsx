import React from 'react';
import PortfolioItem from './PortfolioItem';
import Title from "./Title";
import useDirectusCollection from './api/useDirectusCollection';

function Portfolio() {
   const { entries, loading } = useDirectusCollection('projects');

   return (
      <div className='mt-8'>
         <Title>Recent Work</Title>
         <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {loading ? (
                  // Show 3 skeleton items while loading
                  Array(6).fill().map((_, index) => (
                     <div key={index} className="h-full w-full">
                        <PortfolioItem loading={true} />
                     </div>
                  ))
               ) : (
                  entries.map(project => (
                     <div key={project.id} className="h-full w-full">
                        <PortfolioItem 
                           id={project.id}
                           title={project.card_title}
                           images={project.image_urls}
                           mini_desc={project.card_desc}
                           loading={false}
                        />
                     </div>
                  ))
               )}
            </div>
         </div>
      </div>
   )
}

export default Portfolio;