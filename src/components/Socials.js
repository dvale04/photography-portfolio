// Socials.jsx
import React from 'react';
import {
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa'

const Socials = () => {
  return (
    <div className='absolute bottom-4 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0'>
      <ul className='flex gap-x-4'>
        <li>
          <a
            href='http://www.instagram.com/wunuvus'
            target='_blank'
            rel='noopener noreferrer'
            className='text-2xl hover:opacity-70 transition-opacity'
          >
            <FaInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;