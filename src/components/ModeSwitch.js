import {React, useState} from 'react';
import { useTheme } from '../hooks/useTheme';
import { FaMoon, FaSun } from 'react-icons/fa';

const ModeSwitch = () => {
    const {changeMode, mode} = useTheme()
    const [showSun, setShowSun] = useState(false)

    const toggleMode = () => {
        if(mode === 'light'){
            changeMode( 'dark' )
            setShowSun(false)
        }
        else{
            changeMode('light')
            setShowSun(true)
        }
     }

  
  return(
        <div className='toggle-mode'>
            {mode === 'light' &&   <FaMoon onClick={toggleMode}/> }
            {mode === 'dark' &&    <FaSun onClick={toggleMode}/>  }
         </div>
        ) 

};

export default ModeSwitch;
