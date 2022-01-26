import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelopeOpen } from 'react-icons/fa';

const Contact = () => {
  return (
        <div className='content-section'>
            <div className='contact-page'>
                <h2>Contact</h2>
                <p>If you would like to get in touch you can do so by
                    Email, linkedIn or Github
                </p>
                    <div className='link-container'>
                       <span><FaGithub /></span> 
                       <span><FaLinkedin /></span> 
                       <span><FaEnvelopeOpen /></span> 
                    </div>
            </div>

        </div>
  )
};

export default Contact;
