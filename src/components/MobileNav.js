import React, {useState} from 'react';
// import icons
import { HiOutlinePlus } from 'react-icons/hi';
//import { FiPlus } from 'react-icons/fi';
// import Link
import { Link } from 'react-router-dom';
// import motion 
import{ motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
// menu variants
const menuVariants = {
  hidden: { 
    y: '100%',
    opacity: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
      duration: 0.6,
    },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
      duration: 0.6,
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = openMenu ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openMenu]);

  return (
    <nav className='text-primary xl:hidden'>
      {/* nav open button plus sign x sign */}
      <motion.div 
        onClick={()=> setOpenMenu(!openMenu)} 
        animate={{ rotate: openMenu ? 45 : 0 }}
        transition={{ duration: 0.3 }}
        className='text-3xl cursor-pointer absolute top-9 right-9 z-50'>
        <svg
          className={`w-6 h-6 stroke-[1.3] stroke-black transition-transform duration-300 ${
            openMenu ? 'rotate-25' : 'rotate-0'
          }`}
          viewBox="0 0 24 24"
          fill="none"
        >
          <line x1="12" y1="4" x2="12" y2="20" strokeLinecap="round" />
          <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
        </svg>

      </motion.div>
      {/* menu */}
      <AnimatePresence>
        {openMenu && (
          <motion.div 
            key="mobile-menu"
            variants={menuVariants} 
            initial='hidden'
            animate={"show"}
            exit="hidden"
            className='bg-white shadow-3xl w-full fixed top-0 
            right-0 h-screen z-20'>
            {/* menu List */}
            <ul className='h-full flex flex-col justify-center
            items-start gap-y-4 text-primary font-third text-4xl pl-8'> 
              <li>
                <Link to='/portfolio' onClick={() => setOpenMenu(false)}>Portfolio</Link>
              </li>
              <li>
                <Link to='/about' onClick={() => setOpenMenu(false)}>3D prints</Link>
              </li>
              <li>
                <Link to='/contact' onClick={() => setOpenMenu(false)}>Contact</Link>
              </li>
            </ul>
           </motion.div>
          )}
        </AnimatePresence>
      </nav>
  );
};

export default MobileNav;
