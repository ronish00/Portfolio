import React from 'react'
import dog from "../assets/dog.svg"

const Error = () => {
  return (
    <div className='flex flex-col gap-6 items-center justify-center mt-40'>
      <img src={dog} alt="" srcset="" />
      <div className='flex flex-col items-center gap-3'>
        <h1 className='text-5xl text-[#333] dark:text-[#777] font-bold '>404</h1>
        <p className='text-2xl text-[#333] dark:text-[#777]'>Page not Found</p>
      </div>
    </div>
  )
}

export default Error
