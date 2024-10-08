import React from 'react'
import Arrow from '../assets/arrow.svg'
import { Link } from 'react-router-dom'
// import img1 from '../assets/img1.png'

const WorkCard = ({name, category, image}) => {
  return (
    <div className='flex flex-col sm:flex-row items-start justify-between lg:gap-4 2xl:gap-8 lg:justify-evenly'>
        <div className="title w-[250px] sm:w-[200px] mb-6 sm:mb-0">
            <h6 className='text-[#333] text-lg font-medium italic sm:mb-4 mb-0'>{category}</h6>
            <h4 className='text-[#333] text-2xl sm:text-3xl font-bold sm:mb-6 mb-3'>{name}</h4>
            <Link to="/">
                <img src={Arrow} alt="" srcSet="" className='sm:h-15 sm:block xl:h-auto h-12 hidden' />
            </Link>
        </div>
        <img src={image} alt="" srcSet="" className='w-250 sm:w-auto h-[250px] sm:h-[225px] lg:h-[180px] xl:h-[225px] object-cover'/>
    </div>
  )
}

export default WorkCard
