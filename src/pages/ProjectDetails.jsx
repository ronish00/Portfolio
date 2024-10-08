import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { projectInfo } from '../constants.js';

const ProjectDetails = () => {
    const {projectName} = useParams();

    const project = projectInfo.find(project => project.link === projectName)

    console.log(project);
  return (
    <div className='xl:px-56 2xl:px-72 px-4 sm:px-16 mx-auto mt-10'>
        <div className='mb-16'>
            <h1 className='text-5xl font-bold text-[#333]'>{project.name}<span className='text-[#4831D4]'>.</span></h1>
            <p className='text-[#777] mt-4'>{project.subDesc}</p>
        </div>
        <img src={project.image} alt="" />
        <div className='my-14'>
            <h3 className='text-2xl font-medium mb-6'>About</h3>
            <p className='text-[#777]'>{project.about}</p>
        </div>
        <div className='mb-14'>
            <h3 className='text-2xl font-medium mb-6'>My Role</h3>
            <div>
                {
                    project.role.map( item =><span key={item} className='px-4 py-1 bg-[#EFF5FB] rounded'>{item}</span>)
                }
                
            </div>
        </div>
        <div className='mb-8'>
            <h3 className='text-2xl font-medium mb-6'>Website</h3>
            <Link to={project.website} target='_blank'>{project.website}</Link>
        </div>
    </div>
  )
}

export default ProjectDetails
