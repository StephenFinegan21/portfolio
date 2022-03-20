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
               
                <h2>Stephen Finegan</h2>
                    <p>Frontend developer living in Dublin, Ireland, skilled in building websites with React</p>
                    <p>Currently seeking a junior developer role</p>
            </motion.div> 
        </div>
    </div>
    
            </>
        
  )
  
};

export default About;
