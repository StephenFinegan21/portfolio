import React from 'react';
import Project from './Project';
import Projects from '../Data/Projects.json'

const ProjectGrid = () => {
  const ProjectList = Projects.Projects
  return (
    <>
    <div className='content-section'>
     <h2>My Work</h2>
    <div className='project-grid' id='projects'>
      {ProjectList.map( (project, index) => 
      <Project 
        key={index}
        name = {project.name}
        description = {project.description}
        tools = {project.tools}
        github = {project.github}
        siteLink = {project.siteLink}
      />

      )}

    </div>
    </div>
    </>
    )
};

export default ProjectGrid;
