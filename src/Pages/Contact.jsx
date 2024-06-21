import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <div className='text-center p-10 h-screen'>
      <h1 className='text-4xl font-bold text-gray-900 mb-4'>Contact Me</h1>
      <ul className='p-5 text-xl font-light space-y-8'>
        <li className='flex items-center justify-center space-x-4'>
          <MdEmail className='text-2xl' />
          <span>Email Address: <a href='mailto:Christanahagbekeye@gmail.com' className='text-pink-500'>Christanahagbekeye@gmail.com</a></span>
        </li>
        <li className='flex items-center justify-center space-x-4'>
          <BsWhatsapp className='text-2xl' />
          <span>WhatsApp: +2348022565186</span>
        </li>
        <li className='flex items-center justify-center space-x-4'>
          <BiPhoneCall className='text-2xl' />
          <span>Phone call: +2348119915001</span>
        </li>
      </ul>
    </div>
  )
}

export default Contact
