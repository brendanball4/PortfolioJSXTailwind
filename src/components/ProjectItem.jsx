import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/portfolio';
import Title from './Title';
import Carousel from './Carousel';

const ProjectItem = () => {
  const { id } = useParams(); // This gets the `id` from the URL
  
  // Convert `id` to a number since project IDs are numbers
  const projectId = Number(id);
  
  // Find the project with the given ID
  const project = projects.find(project => project.id === projectId);

  for (let index = 0; index < project.images.length; index++) {
    project.images[index] = '../' + project.images[index];
  }

  if (!project) {
    return <div className=''>
                <h1 className='text-red-400 underline text-2xl'>Project not found!</h1>
                <p className='text-white text-lg'>Please contact the <a href='mailto:ball.brendan10@gmail.com' className='text-blue-500 hover:text-blue-300 hover:underline'>site owner</a> if the problem persists.</p>
            </div>;
  }

  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 md:grid-rows-2'>
        {/* Project Title */}
        <div className='pt-28'>
            <Title>{project.title_ext}</Title>
            <p className='mt-8 text-black dark:text-stone-300'>{project.desc}</p>
        </div>

        {/* Image Carousel */}
        <div className='min-w-[200px] max-w-[600px] mx-auto my-auto md:ml-16 row-span-2'>
          <Carousel images={project.images} />
        </div>

        {/* Stack Display */}
        <div>
          <p className='pt-10 mb-2'>Stack used:</p>
        {project.stack.map(item => (
          <div key={item} className="rounded-full mr-2 mb-2 text-stone-900 bg-stone-300 inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-stone-300 rounded-md">
              {item}
          </div>
        ))}
        
        <div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link github hover:text-blue-400 bg-stone-500 dark:bg-gray-500 p-2 text-white inline-flex items-center space-x-2 rounded-full">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="w-5"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                >
                <g fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                        fill="currentColor"
                    />
                </g>
            </svg>
            <p className='ml-2'>Project Link</p> 
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
