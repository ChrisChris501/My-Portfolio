import React from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className=' text-pink-200 bg-gradient-to-r from-pink-900 via-pink-500 to-pink-900 py-8 px-5 flex justify-between sticky z-50'>
              <div className='mx-5 flex'>
              <div className='mt-1.5'>
                <BsFillMoonStarsFill />
              </div>
              <h1 className='text-xl font-bold'>ChrisChris</h1>
              </div>
              <ul className='flex space-x-4 sm:space-x-2 font-medium'>
                <Link key="Home" to="/">Home</Link>
                <Link key="Home" to="/Projects">Projects</Link>
                <Link key="Home" to="/Resume">Resume</Link>
                <Link key="Home" to="/Contact">Contact</Link>
              </ul>
            </nav>
    </div>
  )
}

export default Nav
