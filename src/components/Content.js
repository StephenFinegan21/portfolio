import React from 'react';
import About from './About';
import ModeSwitch from './ModeSwitch';
import ProjectGrid from './ProjectGrid';
import Contact from './Contact';
import Footer from './Footer';

const Content = () => {
    return (
        <div className="content">
            <ModeSwitch />
            <About />
            <ProjectGrid />
            <Contact />
          

        </div>
      );
    }

export default Content;
