import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import menu from '../assets/icons/menu.svg'
import close from '../assets/icons/close.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
    }

  return (
    <header className='2xl:px-72 xl:px-56 bg-white px-4 sm:px-16 py-8'>
      <nav className='flex justify-between items-center'>
        <Link to='/'><img src={Logo} alt="logo" /></Link>

        <ul className='md:flex list-none gap-10 items-center hidden'>
            <li className='text-[#777777]'><Link to='/work'>Work</Link></li>
            <li className='text-[#777777]'><Link>Contact</Link></li>
        </ul>

        <div className='w-6 h-6 cursor-pointer md:hidden' onClick={handleClick}><img src={menu} alt="menu" /></div>

        <div className={`${nav ? 'translate-x-0' : 'translate-x-full'} z-10 w-[250px] bg-white fixed right-0 top-0 border border-s-[1px] h-lvh p-8 duration-500`}>
            <div className='cursor-pointer' onClick={handleClick}><img src={close} alt="menu" /></div>
            <ul className='mt-[90px] flex flex-col items-center gap-10'>
              <li className='text-[#777777]'><Link to='/work'>Work</Link></li>
              <li className='text-[#777777]'><Link>Contact</Link></li>
            </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
