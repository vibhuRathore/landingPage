import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/politician.png';

// const heroImage = 'https://via.placeholder.com/1920x1080';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div 
        className="relative z-10 flex items-center justify-center h-full text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="px-4">
          <motion.h1 
            className="text-6xl font-bold mb-4"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            Building Your Future
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 max-w-screen-md mx-auto"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            ATTPLGroup is a renowned provider of five essential services, namely construction services, finance services, consultancy, solar energy solutions, and IT solutions. Our team of professionals has extensive expertise and experience in delivering innovative solutions that cater to your diverse business needs. Our company operates on a client-centric approach to ensure our clients’ satisfaction, and we are committed to providing high-quality services that meet your expectations.
          </motion.p>
          <motion.a 
            href="#services" 
            className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Our Services
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
