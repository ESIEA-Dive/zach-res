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
      
      <ol onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='mg-top-m'>
        <li>adam: generative computer-aided design</li>
        <li>dreamscapes: a vr gaussian-splatting editor</li>
        <li>mint: order from local bay area farmers' markets</li>
        <li>talesai: generative stories for children</li>
      </ol>
    </div>

    <div className='mg-top-m'>
      <h2>past projects</h2>

      <ol onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='mg-top-m'>
        <li>junctionx exeter: a large-scale hackathon</li>
        <li>excode: free coding bootcamp at the university of exeter</li>
        <li>exeter entrepreneurs: a community of student entrepreneurs</li>
      </ol>
    </div>
  </div>
  );
}

export default projects;