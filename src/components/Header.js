import React, { useState, useEffect } from 'react';
// import components
import Logo from '../img/header/JT-logo.svg';

import MobileNav from './MobileNav';
// import Link
import { NavLink, Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transitions
import { transition1 } from '../transitions';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);
  
  return (
    <motion.header
    className="fixed top-0 left-0 w-full px-[10px] md:px-[10px] z-30 h-[65px] md:h-[62px] flex items-center bg-white " 
    initial={{ y:0 }}
    animate={{ y: showHeader ? 0 : -88,  }}
    transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
    
    {/*<header className='relative w-full px-[10px] 
    lg:px-[10px] z-30 h-[50px] lg:h-[62px] flex items-center'> */}

    <div className='flex flex-col md:flex-row
    md:items-center w-full justify-between font-third text-base'>
        {/* Logo */}
        <Link to={'/'} className='absolute top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0'>
          <img src={Logo} alt='' className=' max-w-[150px] lg:max-w-[200px]'/>
        </Link>
        {/* nav - initially hidden - show on desktop and tablet mode md and xl */}
        <nav className='hidden md:flex gap-x-14
        '>
          
        {/* border-b border-current... to add the underline only on click */} 
          <NavLink 
            to={'/3d-prints'} 
            className={({ isActive }) => `text hover:text-primary text-grey
            transition ${isActive ? 'border-b border-current pb-[1px]' : ''}`
            }
          >
            3D Prints
          </NavLink>
          <NavLink 
            to={'/portfolio'} 
            className={({ isActive }) => `text hover:text-primary text-grey 
            transition ${isActive ? 'border-b border-current pb-[1px]' : ''}`
            }
          >
        
            Portfolio
          </NavLink>
          <NavLink 
            to={'/contact'} 
            className={({ isActive }) => `text hover:text-primary text-grey
            transition ${isActive ? 'border-b border-current pb-[1px]' : ''}`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
      {/* socials */}
      
      {/* mobile nav */}
      <MobileNav />
    </motion.header>
  );
};

export default Header;
