import React from 'react';

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
      <a className='links' href="https://x.com/zachdive?s=11&t=BorR7lwfN2Yl_k0dZdewww" target="_blank">twitter</a>
      <a className='links' href="https://instagram.com" target="_blank">instagram</a>
      <a className='links' href="https://github.com" target="_blank">github</a>
    </div>
  );
}

export default footer;