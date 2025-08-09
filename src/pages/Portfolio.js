import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
import Image5 from '../img/portfolio/5.png';
import Image6 from '../img/portfolio/6.png';
import Image7 from '../img/portfolio/7.png';
import Image8 from '../img/portfolio/8.png';
import Image9 from '../img/portfolio/9.png';
import Image10 from '../img/portfolio/10.png';
import Image11 from '../img/portfolio/11.png';
import Image12 from '../img/portfolio/12.png';
import Image13 from '../img/portfolio/13.png';
import Image14 from '../img/portfolio/14.png';
import Image15 from '../img/portfolio/15.png';
import Image16 from '../img/portfolio/16.png';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transitions
import { transition1 } from '../transitions';

const Portfolio = () => {
  const portfolioImages = [
    { src: Image1, alt: 'A wide image', className: 'sm:col-span-2' },
    {src: Image16, alt: 'A normal image', className: '' },
    { src: Image2, alt: 'A wide image', className: 'sm:col-span-2' },
    { src: Image3, alt: 'A normal image', className: '' },
    { src: Image4, alt: 'A tall image', className: 'sm:row-span-2' },
    { src: Image5, alt: 'A normal image', className: '' },
    {src: Image6, alt: 'A normal image', className: '' },
    {src: Image7, alt: 'A wide image', className: 'sm:col-span-2' },
    {src: Image8, alt: 'A normal image', className: '' },
    {src: Image9, alt: 'A normal image', className: '' },
    {src: Image10, alt: 'A normal image', className: '' },
    {src: Image11, alt: 'A normal image', className: '' },
    {src: Image12, alt: 'A normal image', className: '' },
    {src: Image13, alt: 'A normal image', className: '' },
    {src: Image14, alt: 'A normal image', className: '' },
    {src: Image15, alt: 'A normal image', className: '' },
  ];

  return (
  //  // <motion.section
  //     initial={{ opacity: 1, y: '100%' }}
  //     animate={{ opacity: 1, y: 0 }}
  //     exit={{ opacity: 0, y: '100%' }}
  //     tranisiton={transition1}
  //     className='section'
  //   >

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        gap-8 md:pt-[10px] pt-[20px]'>
        {portfolioImages.map((item, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden ${item.className}`}
          >
            <img 
              className='w-full h-full object-cover transition-all duration-500'
              src={item.src}
              alt={item.alt}
            /> 
          </div>
        ))}
      </div>
   // </motion.section >
  );
};

export default Portfolio;