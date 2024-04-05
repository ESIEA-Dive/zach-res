import React from 'react';
import { images } from '../../constant';
import { useParams } from 'react-router-dom';

import './AllProjects.css';

const projects = [
    { title: 'adam: generative computer-aided design', url: 1, description: '', img:`${images.fake}` },
    { title: 'dreamscapes: a vr gaussian-splatting editor', url: 2,  description: '', img:`${images.fake}` },
    { title: "mint: order from local bay area farmers' markets", url: 3, description: '', img:`${images.fake}` },
    { title: 'talesai: generative stories for children', url: 4, description: '', img:`${images.fake}` }
]

const AllProjects = () => {
    const params = useParams();
    const projectId = parseInt(params.projectId);
    console.log(params);

    const project = projects.find(project => project.url === projectId);

    return (
        <div className='mg-top-b'>
            {project ? (
                <div>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <img src={project.img} alt={project.title} />
                </div>
            ) : (
                <h2>No project found</h2>
            )}
        </div>
    );
}

export default AllProjects;