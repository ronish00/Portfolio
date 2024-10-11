import React from 'react'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../constants.js'


const Project = () => {

  return (
    <>
      <div className='2xl:px-72 xl:px-56 px-4 sm:px-16 mx-auto'>
        <div className="heading mt-10">
            <h6 className='text-[#333] dark:text-[#777] text-sm font-medium italic'>Project</h6>
            <h1 className='text-[#333] dark:text-white text-4xl sm:text-5xl leading-tight font-bold mt-2'>Recent Project</h1>
        </div>

        <div className="my-[70px] grid grid-cols-1 lg:grid-cols-2 lg:gap-[80px] gap-[60px] 2xl:gap-x-8 mx-auto">
          {
            projects.map( item => <ProjectCard key={item.id} name={item.name} category={item.category} image={item.image} link={item.link} />)
          }
        </div>
      </div>
    </>
  )
}

export default Project
