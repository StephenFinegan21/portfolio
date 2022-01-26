import React from 'react';
import { useTheme } from '../hooks/useTheme';
import stephen from '../assets/stephen-no-bg.png'


const About = () => {

    const { mode} = useTheme()

  return (
      <>
      <div className='content-section'>
        <div className='about-grid'>
            <div id='photo'>
                <div id='photo-bg'>
                    <img src={stephen}></img>
                </div>
            </div>

            <div id='about-me-text'>
                <h2>About Me</h2>
                    <p>Hello, my name is Stephen Finegan and I am a junior web developer
                        from Dublin, ireland.</p>
                    <p>I've recently graduated with a first class honours, Higher Diploma
                        in Computing from the National College of Ireland.</p>
                    <p>At the moment i'm seeking any junior or entry level roles in 
                        Software or web development. 
                    </p>
                
                <div className='centered-paragraph'>
                    <p>Some of the technologies I have experience with are:</p>
                        <ul>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>html / css</li>
                            <li>Git</li>
                            <li>Sass</li>
                            <li>Adobe XD</li>
                            <li>Java</li>
                            <li>Ruby / Rails</li>
                            <li>Firebase</li>
                            <li>AWS</li>
                        </ul>
                </div>
            </div>
        </div>
    </div>
            </>
        
  )
  
};

export default About;
