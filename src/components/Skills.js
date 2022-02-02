import React from 'react';
import skills from '../Data/images.json'


const Skills = () => {

   const  skillList = skills.tools
   

   const images = require.context('../assets/tools-images', true);
  // console.log(images(`./js.png`))

  return (
    <>
        <div className='content-section' id='skills'>
            <h2>My Skills</h2>
            <p>Some of the technologies I have experience with are:</p>
           
                <ul className='skills-list'>
                    {skillList.map((skill ) => 
                     
                        <div 
                        key={skill.id}
                        className='skill-item'>
                       
                        <li >
                            {skill.name}
                        </li>
                        <img src =  {images(`./${skill.name}.png`)} className='skill-logo' alt={skill.name} />  
                        </div>
                        
                    )}
                   
                  {/*console.log(`images(./${skill.name}.png)`)}
                    {console.log(images(`./Javascript.png`))}
                    {console.log(images(`./${skill.name}.png`))*/}
                 </ul>
            
        </div>
    
    </>
  )
       
};

export default Skills;
