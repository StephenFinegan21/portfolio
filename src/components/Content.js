import React from 'react';
import About from './About';
import ModeSwitch from './ModeSwitch';
import ProjectGrid from './ProjectGrid';
import Contact from './Contact';
import Skills from './Skills';


const Content = () => {
    return (
        <div className="content">
        
            <ModeSwitch />
            <About />
            <Skills />
            <ProjectGrid />
            <Contact />
          

        </div>
      );
    }

export default Content;
