import React from 'react';
import { motion, useCycle } from 'framer-motion';



const Loader = () => {
 

  return (
    <>
      <motion.div className="loader"
         initial={{ scale: 0 }}
         animate={{ rotate: 360, scale: 1 }}
         transition={{
           type: "spring",
           stiffness: 260,
           damping: 20
         }}
      ></motion.div>
      
    </>
  )
}

export default Loader;