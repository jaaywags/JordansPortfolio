import React from 'react';
import AllProjects from '../constants/AllProjects';
import ProjectDetails from './ProjectDetails';

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <p className="text-6xl underline text-center mx-8">My Favorite Projects</p>
      {AllProjects.map(p => <ProjectDetails key={p.id} info={p} />)}
    </div>
  );
};

export default Projects;