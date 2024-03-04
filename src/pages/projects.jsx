import React from 'react';
import { useParams } from 'react-router-dom';
import Project from '../components/Project';
import Footer from '../components/Footer';

function ProjectPage() {
  let { id } = useParams();

  return (
    <div>
        <Project />
        <Footer />
    </div>
  );
}

export default ProjectPage;
