import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
        <div className='content-section'>
            <div className='contact-page' id='contact'>
                <h2>Contact</h2>
                    <p>If you would like to get in touch you can do so through
                    Github, linkedin or by filling out the form below.
                    </p>

                    <div className='link-container'>
                       <span className='link-symbol'><a href='https://github.com/StephenFinegan21/portfolio'><FaGithub /></a></span> 
                       <span className='link-symbol'><a href='https://www.linkedin.com/in/stephen-finegan-905b391b3/'><FaLinkedin /></a></span> 
                    </div>

                    <form action="https://formsubmit.co/sfinegan21@gmail.com" 
                        method="POST"
                        className='contact-form'>
                        <input type="text" name="name" required placeholder='Name'/>
                        <input type="email" name="email" placeholder="Email Address" />
                        <input type="textarea" name="message" placeholder='Message' required />
                        <input type="submit" value="Submit" />
                    </form>
            </div>
        </div>
  )
};

export default Contact;
