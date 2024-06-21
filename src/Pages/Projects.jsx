import React from 'react'

const Cards = ({
    Title,
    Description,
    Site,
    GithubLink,
}) => {

  return (
    <div className='ProjectCards'>
      <h2>{Title}</h2>
      <h3>{Description}</h3>
      <a>{Site}</a>
      <a>{GithubLink}</a>
      
    </div>
  )
}

const Projects = () => {
    return (
        <div>
        <h1>Projects</h1>
        <div>
            <Cards 
            Title = "Interstella Cloned Form"
            Description = "I had replicated the Insterstella website log in and sign up page to harness my html and css skills."
            Site = "https://interstella-cloned-form.vercel.app/index.html"
            GithubLink = "Git.com"
            />
            
            

        </div>
        <div>

        </div>
        <div>

        </div>
        <div>

        </div>
    </div>
    )
}

export default Projects
