import React from 'react';
import ProjectItem from '../components/ProjectItem';
import BackButton from '../components/Back';

function ProjectPage() {
  return (
    <div>
      <BackButton />
      <div className='flex flex-col justify-between min-h-screen'>
        <ProjectItem />
      </div>
    </div>
  );
}

export default ProjectPage;
