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
    <div className='mg-top-b app-center content' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a className='links' href="mailto:zach_dive@berkeley.edu" target="_blank">zach_dive@berkeley.edu</a>
      <a className='links' href="https://twitter.com" target="_blank">twitter</a>
      <a className='links' href="https://instagram.com" target="_blank">instagram</a>
      <a className='links' href="https://github.com" target="_blank">gitHub</a>
    </div>
  );
}

export default footer;