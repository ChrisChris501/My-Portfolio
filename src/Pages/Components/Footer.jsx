import React from 'react'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <div>
      <footer className='text-3xl flex justify-center gap-20 mt-5 mb-10 bg-white text-pink-800 py-5 h-90'>
            <a className='' href='https://x.com/Christy_hann?s=09' target="_blank"><AiFillTwitterCircle /></a>
            <a className='rounded-xl'  href='www.linkedin.com/in/christianah-agbekeye' target="_blank"><AiFillLinkedin /></a>
            <a href='https://github.com/ChrisChris501' target="_blank"><AiFillGithub /></a>
        </footer>
    </div>
  )
}

export default Footer
