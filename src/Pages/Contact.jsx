import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center text-center p-5 sm:p-10'>
      <h1 className='text-3xl font-bold text-gray-700 mb-6'>
        <span className='text-4xl'>C</span>ontact <span className='text-4xl'>M</span>e
      </h1>
      <ul className='w-full max-w-md p-5 text-xl font-light space-y-8'>
        <li className='flex items-center justify-center space-x-4'>
          <MdEmail className='text-2xl' />
          <span className='ml-2 md:ml-0'>Email Address: <a href='mailto:Christanahagbekeye@gmail.com' className='text-pink-700'>Christanahagbekeye@gmail.com</a></span>
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
  );
}

export default Contact;
