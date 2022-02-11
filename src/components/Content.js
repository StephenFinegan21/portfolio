import React from 'react';
import About from './About';
import ModeSwitch from './ModeSwitch';
import ProjectGrid from './ProjectGrid';
import Contact from './Contact';
import Skills from './Skills';
import Animation from './Animation';
import Loader from './Loader';

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
