import React from 'react'
import Navbar from '../components/Navbar'
import WorkCard from '../components/WorkCard'
import img1 from '../assets/img1.png'


const Work = () => {

  const projects = [
    {
      'id': 1,
      'name': 'Dazzchat UI Design',
      'category': 'UI Design',
      'image': `${img1}`
    },
    {
      'id': 2,
      'name': "Facebook's UI Website",
      'category': 'Front End',
      'image': `${img1}`
    },
    {
      'id': 3,
      'name': 'Calulator Web App',
      'category': 'Front End',
      'image': `${img1}`
    },
    {
      'id': 4,
      'name': 'Word Counter App',
      'category': 'Front End',
      'image': `${img1}`
    },
  ]

  return (
    <>
      <Navbar />
      <div className='2xl:px-72 xl:px-56 px-4 sm:px-16 mx-auto'>
        <div className="heading mt-10">
            <h6 className='text-[#333] text-sm font-medium italic'>Work</h6>
            <h1 className='text-[#333] text-4xl sm:text-5xl leading-tight font-bold mt-2'>Recent Work</h1>
        </div>

        <div className="my-[70px] grid grid-cols-1 lg:grid-cols-2 lg:gap-[80px] gap-[60px] 2xl:gap-x-8 mx-auto">
          {
            projects.map( item => <WorkCard key={item.id} name={item.name} category={item.category} image={item.image} />)
          }
        </div>
      </div>
    </>
  )
}

export default Work
