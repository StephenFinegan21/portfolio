import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { motion } from "framer-motion"

const Nav = () => {

    const { mode} = useTheme() //Context gets wwhether currently in light or dark

    //When link in nav is clikced, scroolls
    const scroll = (location) =>{
        const anchor = document.querySelector(`#${location}`)
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    
    return (
        <nav className={`nav-${mode}`}
       >
            <ul className='nav-list'>
                <motion.li 
                    whileHover={{ scale: 1.1}}
                    className='nav-item' onClick={() => scroll('about')}>About
                </motion.li>
                <motion.li 
                    whileHover={{ scale: 1.1}}
                    className='nav-item' onClick={() => scroll('skills')}>Skills
                </motion.li>
                <motion.li 
                 whileHover={{ scale: 1.1}}
                    className='nav-item' onClick={() => scroll('projects')}>Projects
                </motion.li>
                <motion.li 
                     whileHover={{ scale: 1.1}}
                    className='nav-item' onClick={() => scroll('contact')}>Contact
                </motion.li>
                
            </ul>
        </nav>
      );
    }


export default Nav;
