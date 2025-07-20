import React from 'react';
// import components
import Logo from '../img/header/JT-logo.svg';

import MobileNav from './MobileNav';
// import Link
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='relative w-full px-[10px] 
    lg:px-[10px] z-30 h-[50px] lg:h-[62px] flex items-center'>
      <div className='flex flex-col lg:flex-row
      lg:items-center w-full justify-between font-third text-base'>
        {/* Logo */}
        <Link to={'/'} className='absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0'>
          <img src={Logo} alt='' className=' max-w-[150px] lg:max-w-[200px]'/>
        </Link>
        {/* nav - initially hidden - show on desktop mode */}
        <nav className='hidden xl:flex gap-x-14
        '>
          <NavLink 
            to={'/about'} 
            className={({ isActive }) => `text hover:text-primary text-grey
            transition ${isActive ? 'border-b border-current pb-[1px]' : ''}`
            }
          >
        {/* border-b border-current... to add the underline only on click */}
            About
          </NavLink>
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
    </header>
  );
};

export default Header;
