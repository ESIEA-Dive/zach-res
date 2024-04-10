import React, { useState } from 'react';
import { images } from '../../constant';
import { Link } from 'react-router-dom';

import './Projects.css';

const Projects = ({ setIsHovered }) => {

  const [hoveredProject, setHoveredProject] = useState(null);

  const personalProjects = [
    { name: 'adam: generative computer-aided design', url: 'projects/1', img:`${images.fake}` },
    { name: 'dreamscapes: a vr gaussian-splatting editor', url: 'projects/2', img:`${images.fake}` },
    { name: "mint: order from local bay area farmers' markets", url: 'projects/3', img:`${images.fake}` },
    { name: 'talesai: generative stories for children', url: 'projects/4', img:`${images.fake}` }
  ];

  const pastProjects = [
    { name: 'junctionx exeter: a large-scale hackathon', url: 'pprojects/1', img:`${images.fake}`  },
    { name: 'excode: free coding bootcamp at the university of exeter', url: 'pprojects/2', img:`${images.fake}` },
    { name: "exeter entrepreneurs: a community of student entrepreneurs", url: 'pprojects/3', img:`${images.fake}` }
  ];

  const handleMouseEnter = (project) => {
    setIsHovered(true);
    setHoveredProject(project);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredProject(null);
  };

  return (
  <div className='mg-top-b project-container'>
    <div>
      <h2>personal projects</h2>
      
      <ol className='mg-top-m'>
      {personalProjects.map((project, index) => (
        <li key = {index}>
            <Link
              to = {project.url}
              onMouseEnter={() => handleMouseEnter(project)}
              onMouseLeave={handleMouseLeave} 
              className="links"
              >
                {project.name}
            </Link>
          </li>
        ))}
      </ol>
      {hoveredProject && (
        <div className="project-image">
          <img src={hoveredProject.img} alt={hoveredProject.name} />
        </div>
      )}
    </div>

    <div className='mg-top-m'>
      <h2>past projects</h2>

      <ol className='mg-top-m'>

      {pastProjects.map((project, index) => (
          <li key={index}>
              <Link
              to = {project.url}
              onMouseEnter={() => handleMouseEnter(project)}
              onMouseLeave={handleMouseLeave} 
              className="links"
              >
                {project.name}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  </div>
  );
}

export default Projects;