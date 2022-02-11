import React from 'react';
import { FaGithub, FaLink  } from 'react-icons/fa';


 const Project = ({ name, description, tools, github, siteLink}) => {
  return (
    <div className='project' id='project'>
      <span><a href={github}><FaGithub /></a></span>
      <span><a href={siteLink}><FaLink /></a></span>
      <h3>{name}</h3>
      <p>{description}</p>
          {tools.map((tool, index) => 
              <li key={index}>{tool}</li> 
        
        
        )}
     

  </div>
  )
};

export default Project

