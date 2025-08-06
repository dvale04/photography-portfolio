import React from 'react';
// import images
import AboutImg from '../img/contact/about.png';
import JTImg from '../img/about/jt-photo.png'; 
import IsaiahImg from '../img/about/isaiah-photo.png'; 
// import link
import { Link } from 'react-router-dom'
// import motion
import { motion } from 'framer-motion'
// import transition
import { transition1 } from '../transitions'

const Contact = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'
    > 
      <div className='container mx-auto relative'>
        {/* text & img wrapper */}
        <div className='flex flex-col md:flex-row min-h-screen 
        items-center md:items-start 
        justify-center sm:justify-start md:justify-start gap-x-24 text-center 
        md:text-left pt-3 md:pt-20'>
          {/* image 

          sm = small tablets and largers 
          ml-[-10px] = applies on all screen sizes
          md:ml-0 = removes it at 768px and up
        So: phones under 768px get the left shift, and everything else doesn’t. */}
          
          <div className='flex-1 max-h-96 md:max-h-max overflow-hidden py-8 md:pt-10 ml-[-140px] md:ml-0
          '>
            <img src={AboutImg} alt='' 
            className='w-full h-auto object-cover max-w-[270px] md:max-w-full' />
          </div>
          {/* text */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition1} 
            className='flex-1 pt-6 pb-14 md:pt-17
            md:w-auto z-10 flex flex-col justify-center 
            items-center md:items-start px-8'
          >
            {/* Column 1 */}
            <p className='about-title'>Co-Founder | Cinematographer, Photographer & Editor</p>
            <ul className='about-list text-left mx-auto max-w-sm'>
              <p>Jathaniel Felder is an Illinois born cinematographer, photographer & editor
                  U.S. Army Veteran with a love for creative projects.
                  He is currently pursuing a Bachelor's Degree in Digital Cinematography, skilled in 3D Printing, and available for commission.</p>
              <li>
                <span className="about-socials mt-8">
                  <span className="mr-1">Instagram:</span>
                  <a href="https://www.instagram.com/wunuvus" target="_blank" rel="noopener noreferrer">
                    @wunuvus
                  </a>
                </span>
              </li>
              <li>
                <span className="about-socialss">
                  wunuvus@gmail.com
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

          <div className='py-16 px-7'>
            <h2 className='h1-normal text-start mb-7 italic text-grey '>Gear;</h2>
            <div className='flex flex-col md:flex-row text-center md:text-left gap-y-12 md:gap-x-8'>
              <div className='flex-1'>
                <h3 className='gear-title'>Cameras</h3>
                <ul className='gear-list'>
                  <li>Sony FX6 Cinema Camera - ($7,000)</li>
                  <li>Black Magic Pocket Cinema Camera 4K - ($1,000)</li>
                  <li>Panasonic Lumix G9 - ($1,000)</li>
                  <li>Panasonic Lumix G10 - ($300)</li>
                  <li>Lenses ranging from 13-200mm</li>
                </ul>
              </div>

              <div className='flex-1'>
                <h3 className='gear-title'>Audio</h3>
                <ul className='gear-list'>
                  <li>Zoom H1n & H2n Handy Recorders - ($100)</li>
                  <li>Multiple Lav Mics - ($50)</li>
                  <li>Hollyland M1 Wireless Lav Mics</li>
                </ul>
              </div>

              <div className='flex-1'>
                <h3 className='gear-title'>Other Gear</h3>
                <ul className='gear-list'>
                  <li>10 x 10 Qoolfoto Heavy Duty Background Frame - ($140)</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
  </motion.section>
  );
};

export default Contact;
