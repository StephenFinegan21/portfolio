import React from 'react';
import { useTheme } from '../hooks/useTheme';

const Nav = () => {

    const { mode} = useTheme() //Context gets wwhether currently in light or dark

    //When link in nav is clikced, scroolls
    const scroll = (location) =>{
        const anchor = document.querySelector(`#${location}`)
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    
    return (
        <nav className={`nav-${mode}`}>
            <ul className='nav-list'>
                <li className='nav-item' onClick={() => scroll('about')}>About</li>
                <li className='nav-item' onClick={() => scroll('skills')}>Skills</li>
                <li className='nav-item' onClick={() => scroll('projects')}>Projects</li>
                <li className='nav-item' onClick={() => scroll('contact')}>Contact</li>
                
            </ul>
        </nav>
      );
    }


export default Nav;
