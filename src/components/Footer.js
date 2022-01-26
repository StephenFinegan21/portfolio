import React from 'react';
import { useTheme } from '../hooks/useTheme';

const Footer = () => {

    const { mode } = useTheme()
  return (
        <div className={`footer-${mode}`}>
            
                <p>Developed by Stephen Finegan 2021</p>
            
        </div>

  )
};

export default Footer;
