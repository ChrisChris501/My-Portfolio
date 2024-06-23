import React from 'react'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='bg-pink-100 h-max'>
      <footer className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='flex flex-col items-center sm:flex-row sm:justify-between gap-5'>
          <div className='flex justify-center gap-10 text-3xl text-gray-800'>
            <a href='https://x.com/Christy_hann?s=09' target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 transition duration-300'>
              <AiFillTwitterCircle />
            </a>
            <a href='https://www.linkedin.com/in/christianah-agbekeye' target="_blank" rel="noopener noreferrer" className='hover:text-blue-700 transition duration-300'>
              <AiFillLinkedin />
            </a>
            <a href='https://github.com/ChrisChris501' target="_blank" rel="noopener noreferrer" className='hover:text-gray-900 transition duration-300'>
              <AiFillGithub />
            </a>
          </div>
          <div className='text-center text-lg text-gray-600 sm:text-left'>
            <p>&copy; {new Date().getFullYear()} Christianah Agbekeye. All rights reserved.</p>
            <p>Designed and built by ChrisChris</p>
          </div>
          <div className='text-sm text-center text-gray-600 sm:text-right'>
            <p>
              For inquiries, contact: <a href='mailto:christanahagbekeye@gmail.com' className='underline hover:text-pink-700 transition duration-300'>christanahagbekeye@gmail.com</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
