import React from 'react';

import './Projects.css';

const projects = ({ setIsHovered }) => {

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
  <div className='mg-top-b'>
    <div>
      <h2>personal projects</h2>
      
      <ol className='mg-top-m'>
        <li><a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#" class="links">adam: generative computer-aided design</a></li>
        <li><a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#" class="links">dreamscapes: a vr gaussian-splatting editor</a></li>
        <li><a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#" class="links">mint: order from local bay area farmers' markets</a></li>
        <li><a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#" class="links">talesai: generative stories for children</a></li>
      </ol>
    </div>

    <div className='mg-top-m'>
      <h2>past projects</h2>

      <ol className='mg-top-m'>
        <li><a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#" class="links">junctionx exeter: a large-scale hackathon</a></li>
        <li><a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#" class="links">excode: free coding bootcamp at the university of exeter</a></li>
        <li><a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="#" class="links">exeter entrepreneurs: a community of student entrepreneurs</a></li>
      </ol>
    </div>
  </div>
  );
}

export default projects;