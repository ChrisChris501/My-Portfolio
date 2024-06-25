import React from 'react';
import PropTypes from 'prop-types';

const Cards = ({ Title, Description, Site, GithubLink }) => {
  return (
    <div className='project-card p-6 border-2 rounded-lg border-x-red-800 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full mb-40'>
      <div className='flex-grow'>
        <h2 className='text-xl font-medium text-gray-700 mb-4'>{Title}</h2>
        <p className='text-gray-600 mb-6 text-justify'>{Description}</p>
      </div>
      <div className='mt-4'>
        <div className='flex justify-between'>
          <a href={Site} target="_blank" rel="noopener noreferrer" className='text-gray-700 hover:text-pink-700 transition-colors duration-300 underline'>Visit website</a>
          <a href={GithubLink} target="_blank" rel="noopener noreferrer" className='text-gray-700 hover:text-pink-700 transition-colors duration-300 underline'>View GitHub Repository</a>
        </div>
      </div>
    </div>
  );
}

Cards.propTypes = {
  Title: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  Site: PropTypes.string.isRequired,
  GithubLink: PropTypes.string.isRequired,
};

const Projects = () => {
  return (
    <div className='container mx-auto p-6 h-full'>
      <div className='text-center mb-12'>
        <h1 className='text-3xl font-bold text-gray-700 mb-6'>
          <span className='text-4xl'>P</span>rojects
        </h1>
        <p className='text-lg text-gray-700 text-justify mx-auto'>
          Here, you will find the lists of projects I have worked on as the main developer. There are also projects I contributed to, especially during my fellowship program with Tech4dev, but they are not included in this list.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <Cards 
          Title="Medic-Safe"
          Description="Medic-Safe was our capstone project for the Women Techsters fellowship of 2024. Being one of the lead Software Developers, I employed HTML, CSS, JavaScript and React to build the website."
          Site="https://women-techsters-fellowship-capstone-project-medic-care.vercel.app/"
          GithubLink="https://github.com/ChrisChris501/Women_Techsters_Fellowship_Capstone_Project-Medic-Care"
        />
        <Cards 
          Title="Little Lemon (Meta Capstone Project)"
          Description="The Little Lemon website was the capstone project for Meta Frontend Development course. I completed the task to create a website for the company Little Lemon, employing HTML, CSS, and React."
          Site="https://meta-frontend-capstone-little-git-477d1a-christianans-projects.vercel.app/"
          GithubLink="https://github.com/ChrisChris501/Meta-Frontend-Capstone-Little-lemon-"
        />
        <Cards 
          Title="Interstella Cloned Form"
          Description="I had replicated the Insterstella website log in and sign up page to harness my html and css skills."
          Site="https://interstella-cloned-form.vercel.app/index.html"
          GithubLink="https://github.com/ChrisChris501/Interstella_cloned_form"
        />
        <Cards 
          Title="Babcock Cloned Website"
          Description="I replicated the user interface of Babcock website using html, css, bootstrap and some JavaScript."
          Site="https://babcock-cloned-website-b3swao085-christianans-projects.vercel.app/"
          GithubLink="https://github.com/ChrisChris501/Babcock-Frontend-Design"
        />
      </div>
    </div>
  );
}

export default Projects;
