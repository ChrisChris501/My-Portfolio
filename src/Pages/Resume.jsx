import React from 'react';
import { AiFillLinkedin, AiOutlineArrowRight } from 'react-icons/ai';

const Resume = () => {
  return (
    <div className='container mx-auto px-6 lg:px-20 py-10 min-h-screen flex flex-col justify-between'>
      <div className='mb-10'>
        <h2 className='text-3xl text-center font-medium text-gray-700 mb-6'>
          <span className='text-4xl'>R</span>esume
        </h2>
        <div className='text-justify mb-10'>
          <h4 className='font-semibold text-gray-600'>3/2024 – Present</h4>
          <h2 className='font-bold text-xl text-gray-700 mb-6'>Software Developer Intern - Tech4Dev (Remote)</h2>
          <ul className='list-disc px-10 space-y-4'>
            <li>
              Collaborated closely with a co-developer to develop and deploy a React-based health website, contributing significantly to all phases of the project lifecycle from inception to deployment.
            </li>
            <li>
              Collaborated with team members to implement responsive design and optimize website performance.
            </li>
            <li>
              Conducted performance optimizations to enhance website speed and efficiency, improving overall website performance.
            </li>
          </ul>
        </div>
        <div className='text-justify mb-10'>
          <h4 className='font-semibold text-gray-600'>04/2022 – 03/2023</h4>
          <h2 className='font-bold text-xl text-gray-700 mb-6'>Writer (MotorandWheels)</h2>
          <h4 className='font-semibold text-pink-600 mb-4'>
            <a href="https://motorandwheels.com" target="_blank" rel="noopener noreferrer" className='hover:underline'>MotorandWheels Website</a>
          </h4>
          <ul className='list-disc px-10 space-y-4'>
            <li>
              Contributed as a ghostwriter, producing high-quality content for over 500,000 monthly visitors.
            </li>
            <li>
              Authored original, well-researched articles exceeding 1300 words, and delivering a minimum of 5 articles per week.
            </li>
          </ul>
        </div>
      </div>
      <div className='flex justify-end'>
        <a href="https://www.linkedin.com/in/christianah-agbekeye" target="_blank" rel="noopener noreferrer" className='flex items-center text-gray-600 hover:underline'>
          View full details on LinkedIn 
          <AiFillLinkedin className='ml-2' />
          <AiOutlineArrowRight className='ml-1' />
        </a>
      </div>
    </div>
  );
};

export default Resume;
