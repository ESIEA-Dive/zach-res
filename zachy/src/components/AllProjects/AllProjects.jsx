import React from 'react';
import { images } from '../../constant';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; 

import './AllProjects.css';

const projects = [
    { title: 'adam: generative computer-aided design', 
        url: 1, 
        description: 'lol', 
        img:`${images.fake}`,
        title2: 'lol2',
        description2: 'plop',
        img2: `${images.fake}`,
        title3: 'lol2',
        description3: 'plop',
        img3: `${images.fake}`
    },
    { title: 'dreamscapes: a vr gaussian-splatting editor', 
        url: 2,  
        description: 'hello', 
        img:`${images.fake}`,
        title2: 'lol2',
        description2: 'plop',
        img2: `${images.fake}`,
        title3: 'lol2',
        description3: 'plop',
        img3: `${images.fake}`
    },
    { title: "mint: order from local bay area farmers' markets", 
        url: 3, 
        description: 'ok', 
        img:`${images.fake}`,
        title2: 'lol2',
        description2: 'plop',
        img2: `${images.fake}`,
        title3: 'lol2',
        description3: 'plop',
        img3: `${images.fake}`
    },
    { title: 'talesai: generative stories for children', 
        url: 4, 
        description: 'fuk', 
        img:`${images.fake}`,
        title2: 'lol2',
        description2: 'plop',
        img2: `${images.fake}`,
        title3: 'lol2',
        description3: 'plop',
        img3: `${images.fake}`
    }
]

const pprojects = [
    { name: 'junctionx exeter: a large-scale hackathon', 
        url: 1, 
        description: 'lol', 
        img:`${images.fake}`,
        title2: 'lol2',
        description2: 'plop',
        img2: `${images.fake}`,
        title3: 'lol2',
        description3: 'plop',
        img3: `${images.fake}`
    },
    { name: 'excode: free coding bootcamp at the university of exeter', 
        url: 2, 
        description: 'lololpo', 
        img:`${images.fake}`,
        title2: 'lol2',
        description2: 'plop',
        img2: `${images.fake}`,
        title3: 'lol2',
        description3: 'plop',
        img3: `${images.fake}`
    },
    { name: "exeter entrepreneurs: a community of student entrepreneurs", 
        url: 3, 
        description: 'lololpolop', 
        img:`${images.fake}`,
        title2: 'lol2',
        description2: 'plop',
        img2: `${images.fake}`,
        title3: 'lol2',
        description3: 'plop',
        img3: `${images.fake}`
    }
]

const AllProjects = () => {
    const params = useParams();
    const projectId = parseInt(params.projectId);
    const pprojectId = parseInt(params.pprojectId);

    const project = projects.find(project => project.url === projectId);
    const pproject = pprojects.find(pproject => pproject.url === pprojectId);

    return (
        <>
        <div>
            <Link to="/#" className="back-button">
                <FaArrowLeft /><a className="back-b">back</a>
            </Link>
        </div>
        <div className='mg-top-b'>
            {project ? (
                <div>
                    <h2>{project.title}</h2>
                    <p className='mg-top-m'>{project.description}</p>
                    <img className='mg-top-m img' src={project.img} alt={project.title} />
                    <div className='box'>
                        <h3>{project.title2}</h3>
                        <p>{project.description2}</p>
                    </div>
                    <img className='mg-top-m img' src={project.img} alt={project.title} />
                    <div className='box'>
                        <h3>{project.title3}</h3>
                        <p>{project.description3}</p>
                    </div>
                </div>
            ) : pproject ? (
                <div>
                    <h2>{pproject.name}</h2>
                    <p className='mg-top-m'>{pproject.description}</p>
                    <img className='mg-top-m img' src={pproject.img} alt={pproject.name} />
                    <div className='box'>
                        <h3>{project.title2}</h3>
                        <p>{project.description2}</p>
                    </div>
                    <img className='mg-top-m img' src={project.img} alt={project.title} />
                    <div className='box'>
                        <h3>{project.title3}</h3>
                        <p>{project.description3}</p>
                    </div>
                </div>
            ) : (
                <h2>No project found</h2>
                )}
        </div>
    </>
    );
}

export default AllProjects;