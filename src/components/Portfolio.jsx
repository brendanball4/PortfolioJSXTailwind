import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import Title from "./Title";

function Portfolio() {
   return (
      <div>
         <Title>Recent Work</Title>
         <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {portfolio.map(project => (
                  <PortfolioItem 
                     id={project.id}
                     title={project.title}
                     images={project.images}
                     mini_desc={project.mini_desc}
                  />
               ))}
            </div>
         </div>
      </div>
   )
}

export default Portfolio;