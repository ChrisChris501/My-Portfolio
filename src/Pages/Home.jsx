import React from 'react'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import Avatar from '../assets/Avatar.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='h-full'>
            <nav className=' text-pink-200 bg-pink-900 py-8 px-5 flex justify-between sticky z-50'>
              <div className='mx-5 flex'>
              <div className='mt-1.5'>
                <BsFillMoonStarsFill />
              </div>
              <h1 className='text-xl font-bold'>ChrisChris</h1>
              </div>
              <ul className='flex space-x-4 font-thin'>
                <Link key="Home" to="/">Services</Link>
                <Link key="Home" to="/">Projects</Link>
                <Link key="Home" to="/">Resume</Link>
                <Link key="Home" to="/">Contact</Link>
              </ul>
            </nav>
            <></>
            <body>
              <div className='text-center p-10'>
                <div className='font-bold leading-9 text-3xl tracking-wide uppercase' >
                  <h1 className='text-pink-800 '>Christianah Agbekeye</h1>
                  <h2 className='pt-3 text-xl '>Software Developer</h2>
                 <img src={Avatar} alt="Profile image" className='border-4 border-t-pink-600 border-r-pink-600 border-opacity-90 rounded-xl my-8 mx-auto h-80 w-90'/>
               </div>   
              <p className='text-justify mt-5 text-lg font-medium leading-9'>
                I am a motivated Software developer that offers services for frontend needs. I am equiped with the fundamental knowledge from courses such as Meta Frontend Development Course, Green Digital Skills, Software Developmet Fundamentals, DevOps Practices and Principles. also committed to continuous learning, thuscurrently enroled in the Tech4dev fellowship program with the specialization, Software Development (Frontend). I am commiteed to continuous learnign and growth, with a strong drive to contribute to and develop innovative software projects.
              </p>
              </div>
              <footer className='text-3xl flex justify-center gap-20 mt-5 mb-10 bg-white text-pink-900 py-5 h-90'>
                <a className='' href='https://x.com/Christy_hann?s=09' target="_blank"><AiFillTwitterCircle /></a>
                <a className='rounded-xl'  href='www.linkedin.com/in/christianah-agbekeye' target="_blank"><AiFillLinkedin /></a>
                <a href='https://github.com/ChrisChris501' target="_blank"><AiFillGithub /></a>
              </footer>
            </body>
    </div>
  )
}

export default Home
