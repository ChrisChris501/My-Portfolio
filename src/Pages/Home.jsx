import React from 'react'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { BsFillMoonStarsFill } from 'react-icons/bs'
const Home = () => {
  return (
    <div>
            <nav className=' text-pink-200 bg-pink-900 py-8 px-5 flex justify-between'>
              <div className='mx-5 flex'>
              <div className='mt-1.5'>
                <BsFillMoonStarsFill />
              </div>
              <h1 className='text-xl font-bold'>ChrisChris</h1>
              </div>
              <ul className='flex space-x-2 font-thin'>
                <li> <a href='#'>About</a></li>
                <li> <a href='#'>Projects</a></li>
                <li> <a href='#'>Resume</a></li>
                <li> <a href='#'>Contact</a></li>
              </ul>
            </nav>
            <></>
            <body>
              <h1>Christianah Agbekeye</h1>
              <h2>Software Developer</h2>
              <p>
                I am a motivated Software developer that offers services for frontend needs. I am equiped with the fundamental knowledge from courses such as Meta Frontend Development Course, Green Digital Skills, Software Developmet Fundamentals, DevOps Practices and Principles. also committed to continuous learning, thuscurrently enroled in the Tech4dev fellowship program with the specialization, Software Development (Frontend). I am commiteed to continuous learnign and growth, with a strong drive to contribute to and develop innovative software projects.
              </p>
              <div className='flex'>
                <a href=''><AiFillTwitterCircle /></a>
                <a href='www.linkedin.com/in/christianah-agbekeye' target="_blank"><AiFillLinkedin /></a>
                <a href='https://github.com/ChrisChris501' target="_blank"><AiFillGithub /></a>
              </div>
            </body>
    </div>
  )
}

export default Home
