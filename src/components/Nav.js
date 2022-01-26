import React from 'react';
import { useTheme } from '../hooks/useTheme';

const Nav = () => {

    const { mode} = useTheme()
    return (
        <nav className={`nav-${mode}`}>
            <ul>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
                <li id='cv-button'>My CV</li>
            </ul>
        </nav>
      );
    }


export default Nav;
