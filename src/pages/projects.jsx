import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectItem from '../components/ProjectItem';

function ProjectPage() {
  let { id } = useParams();

  return (
    <div>
      <div className='flex flex-col justify-between min-h-screen'>
        <ProjectItem />
      </div>
    </div>
  );
}

export default ProjectPage;
