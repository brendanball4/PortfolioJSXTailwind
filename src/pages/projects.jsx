import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import projects from '../data/portfolio';
import Carousel from '../components/Carousel';

function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = Number(id);
  const project = projects.find(p => p.id === projectId);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-r border-stone-300 dark:border-stone-700 flex flex-col pt-6 px-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white mb-8 transition-colors"
        >
          ← Back
        </button>

        <nav className="flex flex-col gap-1">
          {projects.map(p => (
            <Link
              key={p.id}
              to={`/project/${p.id}`}
              className={`
                relative text-sm py-2 pr-2 transition-all duration-200 group
                ${p.id === projectId
                  ? 'text-stone-900 dark:text-white font-semibold'
                  : 'text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
                }
              `}
            >
              {p.title}
              <span className={`
                absolute bottom-0 left-0 h-[2px] bg-violet-500 dark:bg-violet-400 transition-all duration-300
                ${p.id === projectId ? 'w-full' : 'w-0 group-hover:w-full'}
              `} />
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      {project ? (
        <main className="flex-1 flex flex-col px-10 py-8 overflow-y-auto">
          {/* Title row */}
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-2xl font-bold text-stone-900 dark:text-white">{project.title_ext}</h1>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors ml-6 shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </div>

          {/* Description */}
          <p className="text-stone-700 dark:text-stone-300 mb-6 max-w-3xl">{project.desc}</p>

          {/* Badge pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map(item => (
              <span key={item} className="px-3 py-1 text-sm rounded-full bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-600">
                {item}
              </span>
            ))}
          </div>

          {/* Carousel */}
          <div className="w-full rounded-xl overflow-hidden">
            <Carousel images={project.images} />
          </div>
        </main>
      ) : (
        <main className="flex-1 flex items-center justify-center">
          <p className="text-red-400 text-xl">Project not found.</p>
        </main>
      )}
    </div>
  );
}

export default ProjectPage;
