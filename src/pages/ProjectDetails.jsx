import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { projectInfo } from '../constants.js';

const ProjectDetails = () => {
    const {projectName} = useParams();

    const project = projectInfo.find(project => project.slug === projectName)

  return (
    <div className='xl:px-56 2xl:px-72 px-4 sm:px-16 mx-auto mt-10'>
        <div className='mb-16'>
            <h1 className='text-5xl font-bold text-[#333] dark:text-white'>{project.name}<span className='text-[#4831D4] dark:text-[#7f6cff] 939395'>.</span></h1>
            <p className='text-[#777] mt-4'>{project?.subDesc}</p>
        </div>
        <img src={project.image} className='rounded-2xl' alt="" />
        <div className='my-14'>
            <h3 className='text-2xl font-medium mb-6 text-[#333] dark:text-white'>About</h3>
            <p className='text-[#777]'>{project?.about}</p>
        </div>
        <div className='mb-14'>
            <h3 className='text-2xl font-medium mb-6 text-[#333] dark:text-white'>My Role / Tech Stack</h3>
            <div className='flex items-center flex-wrap gap-2'>
                {
                    project.role.map( item =><span key={item} className='px-4 py-1 bg-[#EFF5FB] dark:bg-[#342f40] dark:text-white rounded'>{item}</span>)
                }
                
            </div>
        </div>
        <div className='mb-8'>
            <h3 className='text-2xl font-medium mb-6 text-[#333] dark:text-white'>Website</h3>
            <Link to={project.website} target='_blank' className='text-[#333] dark:text-white'>{project.website}</Link>
        </div>
    </div>
  )
}

export default ProjectDetails
