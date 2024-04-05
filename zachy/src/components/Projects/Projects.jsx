import React, { useState } from 'react';
import { images } from '../../constant';
import { Link } from 'react-router-dom';

import './Projects.css';

const Projects = ({ setIsHovered }) => {

  const [hoveredProject, setHoveredProject] = useState(null);

  const personalProjects = [
    { name: 'adam: generative computer-aided design', url: 1, img:`${images.fake}` },
    { name: 'dreamscapes: a vr gaussian-splatting editor', url: 2, img:`${images.fake}` },
    { name: "mint: order from local bay area farmers' markets", url: 3, img:`${images.fake}` },
    { name: 'talesai: generative stories for children', url: 4, img:`${images.fake}` }
  ];

  const pastProjects = [
    { name: 'junctionx exeter: a large-scale hackathon', url: 'https://example/dream', img: '' },
    { name: 'excode: free coding bootcamp at the university of exeter', url: 'https://example.com/dreamscapes', img: '' },
    { name: "exeter entrepreneurs: a community of student entrepreneurs", url: 'https://example.com/mint', img: '' }
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
      {personalProjects.map((project) => (
          <li key={project.url}>
            <Link
              key = {project.url}
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
            <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href={project.url} className="links">{project.name}</a>
          </li>
        ))}
      </ol>
    </div>
  </div>
  );
}

export default Projects;