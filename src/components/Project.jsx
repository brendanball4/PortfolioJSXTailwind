import React from 'react';
import projects from '../data/project';
import ProjectItem from './ProjectItem';
import Title from "./Title";

function Project() {
   return (
      <div>
         <Title>Project</Title>
         <div>
            <div>
               {projects.map(project => (
                  <ProjectItem 
                     id={2}
                     title={project.title}
                     description={project.description}
                     images={project.images}
                     stack={project.stack}
                     link={project.link}
                  />
               ))}
            </div>
         </div>
      </div>
   )
}

export default Project;