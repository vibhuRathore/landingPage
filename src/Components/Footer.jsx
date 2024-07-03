import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-900 text-white py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{marginTop : "100px"}}
    >
      <div className="container mx-auto text-center">
        <p>&copy; 2024 ATTPLGroup. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
