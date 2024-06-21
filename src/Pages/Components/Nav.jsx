import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='bg-gradient-to-r from-pink-900 via-pink-500 to-pink-900 py-4 px-3 sm:px-5 flex justify-between items-center sticky top-0 z-50'>
      <div className='flex items-center'>
        <div className='text-2xl text-pink-200'>
          <BsFillMoonStarsFill />
        </div>
        <h1 className='text-xl font-bold text-pink-200 ml-2'>ChrisChris</h1>
      </div>
      <ul className='flex space-x-4 sm:space-x-6 text-pink-200'>
        <li><Link to="/" className='font-medium'>Home</Link></li>
        <li><Link to="/Projects" className='font-medium'>Projects</Link></li>
        <li><Link to="/Resume" className='font-medium'>Resume</Link></li>
        <li><Link to="/Contact" className='font-medium'>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
