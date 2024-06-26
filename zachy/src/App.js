import './App.css';
import { About, AllProjects, Footer, Music, Projects, Title } from './components';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
        cursorRef.current.style.transition = 'transform 0.5s ease-out';
      });
    }
  }, [mousePosition]);

  const router = createBrowserRouter([
    {
      path : '/',
      element : <div>
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
                  </div>,
    }, 
    {
      path : 'projects/:projectId',
      
      element : <div>
                  <motion.div
                    className={`cursor ${isHovered ? 'green' : ''}`}
                    ref={cursorRef}
                  />
                  <AllProjects
                  setIsHovered={setIsHovered}
                  />
                </div>,
    },
    {
      path : 'pprojects/:pprojectId',
      element : <div>
                  <motion.div
                    className={`cursor ${isHovered ? 'green' : ''}`}
                    ref={cursorRef}
                  />
                  <AllProjects/>
                </div>,
    }
  ]);

  return (
    <div className="app">
       <div className='app-container'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;