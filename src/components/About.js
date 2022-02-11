import {React} from 'react';



import { motion } from "framer-motion"
//import useWindowDimensions from '../hooks/useWindowDimensions';






const About = (props) => {

    //const {  width } = useWindowDimensions();
    //const { scrollYProgress } = useViewportScroll()
    //console.log(width)
    //console.log(scrollYProgress.current)
    //scrollYProgress.onChange(console.log('test'))
      
  
  return (
      <>
      <div className='content-section'>
        <div className='about-grid' id='about'>
            <motion.div 
                className='about-me-text' 
                initial={{
                    opacity:0,
                    y:200
                }}   
                
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 0.3,
                      },
                    
                  }}
           
            >
               
                <h2>About Me</h2>
                    <p>Hello, my name is Stephen Finegan and I am a junior web developer
                        from Dublin, ireland.</p>
                    <p>I've recently graduated with a first class honours, Higher Diploma
                        in Computing from the National College of Ireland.</p>
                    <p>At the moment i'm seeking any junior or entry level roles in 
                        Software or web development. 
                    </p>
            </motion.div> 
        
            
             

             
    
  
         
            
        </div>
    </div>
    
            </>
        
  )
  
};

export default About;
