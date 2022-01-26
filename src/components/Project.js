import React from 'react';
import { FaGithub, FaLink  } from 'react-icons/fa';

 const Project = ({ name, description, tools}) => {
  return (
    <div className='project'>
      <span><FaGithub /></span>
      <span><FaLink /></span>
      <h3>{name}</h3>
      <p>{description}</p>
          {tools.map(tool => 
              <li>{tool}</li> 
        
        
        )}
     

  </div>
  )
};

export default Project

