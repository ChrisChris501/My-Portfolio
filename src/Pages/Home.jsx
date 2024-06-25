import React from 'react';
import Avatar from '../assets/Avatar.png';

const Home = () => {
  return (
    <div className='h-full mb-20'>
      <div className='text-center p-10'>
        <div className='font-bold leading-9 text-2xl tracking-wide uppercase'>
          <h1 className='text-pink-800'><span className='text-4xl text-pink-700'>C</span>hristianah <span className='text-4xl text-pink-700'>A</span>gbekeye</h1>
          <h2 className='pt-3 text-xl text-gray-600'>Software Developer</h2>
          <img 
            src={Avatar} 
            alt="Profile image" 
            className='border-4 border-pink-600 border-opacity-90 rounded-xl my-8 mx-auto h-80 w-80 object-cover'
          />
        </div>
        <p className='text-justify mt-5 font-medium leading-8 text-gray-600'>
          <span className='text-4xl'>I</span> am a motivated software developer offering frontend services. I have foundational knowledge from courses such as Meta Frontend Development Course, Green Digital Skills, Software Development Fundamentals, and DevOps Practices and Principles. Currently, I am enrolled in the Tech4dev fellowship program specializing in Software Development (Frontend). I am committed to continuous learning and growth, with a strong drive to contribute to and develop innovative software projects.
        </p>
        <div className='text-justify mt-8 font-medium leading-8 text-gray-600 p-6 rounded-lg'>
          <h3 className='text-gray-700 text-2xl leading-9 text-center border-b-2 border-pink-600 '><span className='text-4xl'>S</span>ervices <span className='text-4xl'>I</span> <span className='text-4xl'>O</span>ffer</h3>
          <p className='mt-4'>
            <span className='text-4xl'>A</span>s a versatile software developer, I provide a range of services tailored to the needs of both <span className='text-pink-800'>companies</span>  and <span className='text-pink-800'>individuals</span> . I excel in collaborative team environments and also manage projects independently, delivering high-quality solutions every time.
          </p>
          <p className='mt-4'>
            I offer both <span className='text-pink-800'>remote</span> and <span className='text-pink-800'>onsite</span> services, adapting to client preferences and project requirements. My expertise includes web development, custom software development, performance optimization, and responsive design. I manage the entire project lifecycle from planning and development to testing and deployment, ensuring successful project completion.
          </p>
          <p className='mt-4'>
            Committed to excellence, I prioritize <span className='text-pink-800'>clear communication, timely delivery, </span>  and <span className='text-pink-800'>client satisfaction. </span> Whether you need a team player or an independent developer, I bring experience and passion to every project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
