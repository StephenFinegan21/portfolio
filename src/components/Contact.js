import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelopeOpen } from 'react-icons/fa';

const Contact = () => {
  return (
        <div className='content-section'>
            <div className='contact-page' id='contact'>
                <h2>Contact</h2>
                <p>If you would like to get in touch you can do so by
                    Email, linkedIn or Github
                </p>
                    <div className='link-container'>
                       <span><a href='https://github.com/StephenFinegan21/portfolio'><FaGithub /></a></span> 
                       <span><a href='https://www.linkedin.com/in/stephen-finegan-905b391b3/'><FaLinkedin /></a></span> 
                       <span><FaEnvelopeOpen /></span> 
                    </div>
            </div>

        </div>
  )
};

export default Contact;
