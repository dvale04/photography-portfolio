import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
import Image5 from '../img/portfolio/5.png';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transitions
import { transition1 } from '../transitions';

const Portfolio = () => {
  const portfolioImages = [
    { src: Image1, alt: 'A wide image', className: 'sm:col-span-2' },
    { src: Image2, alt: 'A wide image', className: 'sm:col-span-2' },
    { src: Image3, alt: 'A normal image', className: '' },
    { src: Image4, alt: 'A tall image', className: 'sm:row-span-2' },
    { src: Image5, alt: 'A normal image', className: '' },
    //{src: Image6, alt: 'A normal image', className: '' },
    //{src: Image7, alt: 'A wide image', className: 'sm:col-span-2' },
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
        gap-4'>
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