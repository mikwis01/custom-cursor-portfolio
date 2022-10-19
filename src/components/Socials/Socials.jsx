import React from 'react'
import { motion } from 'framer-motion';
import './Socials.css';


const Socials = () => {
  return (
    <motion.div className='socials'
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      initial={{ opacity: 0 }}
    >
        <li><a href="https://github.com/raev1337" target='_blank' rel='noreferrer'>GITHUB</a></li>
        <li>-</li>
        <li><a href="https://www.linkedin.com/in/miko%C5%82aj-wi%C5%9Bniewski-2867b3220/" target='_blank' rel='noreferrer'>LNKDIN</a></li>
        <li>-</li>
        <li><a href="mailto:mikolajwisniewski01@gmail.com" target='_blank' rel="noreferrer">MAIL</a></li>
    </motion.div>
  )
}

export default Socials