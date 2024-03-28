import React from 'react';
import { motion } from 'framer-motion';

import './Footer.css';

const footer = () => {
  return (
    <div>
      <a href="mailto:zach_dive@berkeley.edu" target="_blank">Email</a>
      <a href="https://twitter.com" target="_blank">Twitter</a>
      <a href="https://instagram.com" target="_blank">Instagram</a>
      <a href="https://github.com" target="_blank">GitHub</a>
    </div>
  );
}

export default footer;