import React from 'react';
// import components
import Logo from '../img/header/WUNUVUS-4.svg';
import MobileNav from './MobileNav';
// import Link
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='flex w-full px-[10px] 
    lg:px-[10px] z-30 h-[50px] lg:h-[62px] flex items-center'>
      <div className='flex flex-col lg:flex-row
      lg:items-center w-full justify-between font-third text-base'>
        {/* Logo */}
        <Link to={'/'} className='max-w-[200px]'>
          <img src={Logo} alt='' />
        </Link>
        {/* nav - initially hidden - show on desktop mode */}
        <nav className='hidden xl:flex gap-x-14
        '>
          <Link 
            to={'/about'} 
            className='text hover:text-primary 
            transition'
          >
            About
          </Link>
          <Link 
            to={'/3d-prints'} 
            className='text hover:text-primary 
            transition'
          >
            3D Prints
          </Link>
          <Link 
            to={'/portfolio'} 
            className='text hover:text-primary 
            transition'
          >
            Portfolio
          </Link>
          <Link 
            to={'/contact'} 
            className='text hover:text-primary 
            transition'
          >
            Contact
          </Link>
        </nav>
      </div>
      {/* socials */}
      
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
