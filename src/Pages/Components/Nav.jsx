import React, { useState } from 'react';
import { BsFillMoonStarsFill, BsList, BsX } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='bg-gradient-to-r from-pink-900 via-pink-500 to-pink-900 py-5 flex justify-between items-center sticky top-0 z-10'>
      <div className='flex items-center'>
        <div className='text-xl text-pink-200 pl-3'>
          <BsFillMoonStarsFill />
        </div>
        <h1 className='text-lg sm:text-xl font-bold text-pink-100'>ChrisChris</h1>
      </div>
      <div className='sm:hidden'>
        <button onClick={toggleMenu} className='text-pink-200 text-5xl focus:outline-none ml-20'>
          {menuOpen ? <BsX /> : <BsList />}
        </button>
      </div>
      <ul className={`sm:flex sm:space-x-6 text-pink-200 text-sm sm:text-base ${menuOpen ? 'block' : 'hidden'} sm:block`}>
        <li><Link to="/" className='font-semibold pr-4' onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/Projects" className='font-semibold pr-4' onClick={toggleMenu}>Projects</Link></li>
        <li><Link to="/Resume" className='font-semibold pr-4' onClick={toggleMenu}>Resume</Link></li>
        <li><Link to="/Contact" className='font-semibold pr-4' onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
