// App.js
import React from 'react';
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import Socials from './components/Socials';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className='pt-[50px]'>
          <AnimRoutes /> 
        </main>
        <footer className='relative bg-white py-8 border-t border-transparent w-full'>
          <div className='container mx-auto'>
            <Socials />
          </div>
        </footer>
      </Router>
    </>
  );
};

export default App;