/*
import React from 'react'
import { motion, useViewportScroll, scrollYProgress, useTransform } from "framer-motion"

const Animation = () => {

    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
      <>
   <motion.div
   className='animation'
    style={{ scale }}
  >
    <motion.div
      style={{
        scaleY: scrollYProgress
      }}
    />
  </motion.div>

    </>
  )
}

export default Animation
*/