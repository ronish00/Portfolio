import React from 'react'
import Arrow from '../assets/arrow.svg'
import { Link } from 'react-router-dom'

const ProjectCard = ({name, category, image, slug}) => {
  return (
    <Link to={slug} className='flex flex-col sm:flex-row items-start justify-between lg:gap-4 2xl:gap-8 lg:justify-evenly'>
        <div className="title w-[250px] sm:w-[200px] mb-6 sm:mb-0">
            <h6 className='text-[#4831D4] dark:text-[#7f6cff] text-lg font-medium italic sm:mb-4 mb-0'>{category}</h6>
            <h4 className='text-[#333] dark:text-white text-2xl sm:text-3xl font-bold sm:mb-6 mb-3'>{name}</h4>
            <img src={Arrow} alt="" srcSet="" className='sm:h-15 sm:block xl:h-auto h-12 hidden' />
        </div>
        <img src={image} alt="" srcSet="" className='rounded w-auto sm:w-[300px] md:w-[400px] lg:w-[280px] h-[250px] sm:h-[225px] lg:h-[180px] xl:h-[225px] object-cover'/>
    </Link>
  )
}

export default ProjectCard
