import React from 'react';
import { motion } from 'framer-motion';

import './Projects.css';

const projects = () => {
  return (
  <div>
    <div>
      <h1>personal projects</h1>
      
      <ol>
        <li>adam: generative computer-aided design</li>
        <li>dreamscapes: a vr gaussian-splatting editor</li>
        <li>mint: order from local bay area farmers' markets</li>
        <li>talesai: generative stories for children</li>
      </ol>
    </div>

    <div>
      <h1>personal projects</h1>

      <ol>
        <li>junctionx exeter: a large-scale hackathon</li>
        <li>excode: free coding bootcamp at the university of exeter</li>
        <li>exeter entrepreneurs: a community of student entrepreneurs</li>
      </ol>
    </div>
  </div>
  );
}

export default projects;