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
    <div className='mg-top-b app-center content' >
      <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='links' href="mailto:zach_dive@berkeley.edu" target="_blank">zach_dive@berkeley.edu</a>
      <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='links' href="https://x.com/zachdive?s=11&t=BorR7lwfN2Yl_k0dZdewww" target="_blank">twitter</a>
      <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='links' href="https://www.linkedin.com/in/zacharydive?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">linkedin</a>
      <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='links' href="https://github.com/zachdive" target="_blank">github</a>
    </div>
  );
}

export default footer;