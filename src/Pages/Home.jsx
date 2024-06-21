import React from 'react'
import Avatar from '../assets/Avatar.png';

const Home = () => {
  return (
    <div className='h-full'>
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
            </body>
    </div>
  )
}

export default Home
