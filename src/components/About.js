import React from 'react';
import { useTheme } from '../hooks/useTheme';
import stephen from '../assets/ste.png'


const About = () => {

    

  return (
      <>
      <div className='content-section'>
        <div className='about-grid' id='about'>
            <div className='photo'>
                <img src={stephen}></img>
            </div>
            <div class='about-me-text'>
                <h2>About Me</h2>
                    <p>Hello, my name is Stephen Finegan and I am a junior web developer
                        from Dublin, ireland.</p>
                    <p>I've recently graduated with a first class honours, Higher Diploma
                        in Computing from the National College of Ireland.</p>
                    <p>At the moment i'm seeking any junior or entry level roles in 
                        Software or web development. 
                    </p>
             </div>
        </div>
    </div>
            </>
        
  )
  
};

export default About;
