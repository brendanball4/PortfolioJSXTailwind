import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import Title from './Title';

function Portfolio() {
   const featured = portfolio.filter(p => p.featured);

   return (
      <div className='mt-8'>
         <Title>Showcased Projects</Title>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map(project => (
               <PortfolioItem
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

export default Portfolio;
