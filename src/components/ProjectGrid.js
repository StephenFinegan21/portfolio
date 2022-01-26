import React from 'react';
import Project from './Project';
import Projects from '../Data/Projects.json'

const ProjectGrid = () => {
  const ProjectList = Projects.Projects
  return (
    <>
    <div className='content-section'>
     <h2>My Work</h2>
    <div className='project-grid'>
      {ProjectList.map( (project, index) => 
      <Project 
        key={project.index}
        name = {project.name}
        description = {project.description}
        tools = {project.tools}
      />

      )}

    </div>
    </div>
    </>
    )
};

export default ProjectGrid;
