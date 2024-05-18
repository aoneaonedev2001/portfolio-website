import React from 'react'
import { motion } from 'framer-motion'



const About = () => {


  return (
    <section  name="About" className='mt-[45px] sm:mt-[120px] text-center md:mt-[10px]'>
     <motion.h3
      initial={{opacity:0,y:100}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5}}
      className='text-[#1F2937]  font-medium text-4xl sm:text-3xl'>About me</motion.h3>
     <motion.div
     initial={{opacity:0,y:100}}
     whileInView={{opacity:1,y:0}}
     transition={{duration:0.5}}
      className='mt-[50px] text-xl sm:text-base text-[#1F2937] sm:px-10px sm:px-[20px]   '>
      <p>My journey in web development began with a deep curiosity for technology which led me to a career that I am passionate about and dedicated to growing.</p>
      <p>I believe in collaborative teamwork to tackle challenging problems and create the best possible solutions.</p>
      <p>Beyond coding, I enjoy activities that keep me physically active, such as exercising, and I am always exploring new technologies to enhance my knowledge and skills in development.</p>
     </motion.div>
    </section>
  )
}

export default About