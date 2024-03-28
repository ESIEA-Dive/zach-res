import './App.css';
import { About, Footer, Music, Projects, Title } from './components';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const cursorRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      const offsetY = 10;
      const offsetX = 10; 
      
      cursorRef.current.style.transition = 'none';
      cursorRef.current.style.transform = `translate(${mousePosition.x - offsetX}px, ${mousePosition.y - offsetY}px)`;
      requestAnimationFrame(() => {
        cursorRef.current.style.transition = 'transform 0.5s ease-out'; // Re-enable transition for smooth animation
      });
    }
  }, [mousePosition]);

  return (
    <div className="app">
      <div className='app-container'>
      <motion.div
        className={`cursor ${isHovered ? 'green' : ''}`}
        ref={cursorRef}
      />
      <Title/>
      <Projects
        setIsHovered={setIsHovered}
      />
      <About/>
      <Music/>
      <Footer
        setIsHovered={setIsHovered}
      />
      </div>
    </div>
  );
}

export default App;