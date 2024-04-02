import React from 'react';

import './Footer.css';

const footer = ({ setIsHovered }) => {

  const links = [
    { name: 'zach_dive@berkeley.edu', url: 'mailto:zach_dive@berkeley.edu' },
    { name: 'twitter', url: 'https://x.com/zachdive?s=11&t=BorR7lwfN2Yl_k0dZdewww' },
    { name: "linkedin", url: 'https://www.linkedin.com/in/zacharydive?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { name: 'github', url: 'https://github.com/zachdive' }
  ];

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='mg-top-b app-center content' >
    {links.map((link, index) => (
      <a 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} 
        href={link.url} 
        className="links"
        key={index}
        target="_blank"
        >
          {link.name}
      </a>
    ))}
    </div>
  );
}

export default footer;