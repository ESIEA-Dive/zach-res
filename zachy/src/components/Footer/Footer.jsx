import React from 'react';
import { motion } from 'framer-motion';

import './Footer.css';

const footer = ({ setIsHovered }) => {
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className='mg-top-b app-center' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a className='links' href="mailto:zach_dive@berkeley.edu" target="_blank">Email</a>
      <a className='links' href="https://twitter.com" target="_blank">Twitter</a>
      <a className='links' href="https://instagram.com" target="_blank">Instagram</a>
      <a className='links' href="https://github.com" target="_blank">GitHub</a>
    </div>
  );
}

export default footer;