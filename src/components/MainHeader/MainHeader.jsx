import React from 'react';
import { motion } from 'framer-motion';
import './MainHeader.css'

const MainHeader = () => {
  return (
    <div className='main_header'>
        <motion.p
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          initial={{ opacity: 0 }}
        >
            MIKOŁAJ WIŚNIEWSKI
        </motion.p>
        <motion.h4
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          initial={{ opacity: 0 }}
        >
            FRONT-END DEVELOPER
        </motion.h4>
    </div>
  )
}

export default MainHeader