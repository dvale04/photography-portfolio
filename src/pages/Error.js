import React from 'react';
// import motion 
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';

const Prints = () => {
  return (
  <motion.section 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={transition1}
    className='section bg-white '
  >
    <div className='container mx-auto h-full'>
      <div className='flex flex-col lg:flex-row h-full
      items-center justify-start pt-36 gap-x-8 text-center
      lg:text-left'>
        {/* bg */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={transition1}
          className='hidden lg:flex bg-[#eef7f9]
          absolute bottom-0 left-0 right-0 top-72 -z-10'
        >
        </motion.div>
        {/* text & form */}
        <div className='lg:flex-1 lg:pt-32 px-4 '>
          <h1 className= 'h1'>404 Page Not Found</h1>
        </div>
        { /* image */}
      </div>
    </div>
  </motion.section>
  );
};

export default Prints;