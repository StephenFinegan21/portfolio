import {React, useState} from 'react';
import { useTheme } from '../hooks/useTheme';
import { FaMoon, FaSun } from 'react-icons/fa';

const ModeSwitch = () => {
    const {changeMode, mode} = useTheme()
    
    /* 
    * When either sun or moon is clicked
    * check what current 'mode' is 
    * use changeMode to change it to the opposite
    */
    const toggleMode = () => {
        if(mode === 'light'){
            changeMode( 'dark' )
        }
        else{
            changeMode('light')
        }
     }

     //Conditionally render either the sun or the moon icon
  return(
        <div className='toggle-mode'>
            {mode === 'light' &&   <FaMoon onClick={toggleMode}/> }
            {mode === 'dark' &&    <FaSun onClick={toggleMode}/>  }
         </div>
        ) 

};

export default ModeSwitch;
