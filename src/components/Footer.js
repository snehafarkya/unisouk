import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaDribbble } from 'react-icons/fa6'

export default function Footer() {
  return (
    <div className='flex flex-col justify-center items-center gap-6 md:mt-24 mt-12 mb-12'>
      <div className="flex gap-6 flex-wrap justify-center items-center">
        <p className='text-gray-400 md:text-sm text-xs font-medium cursor-pointer hover:text-gray-800'>About</p>
        <p className='text-gray-400 md:text-sm text-xs font-medium cursor-pointer hover:text-gray-800'>Blog</p>
        <p className='text-gray-400 md:text-sm text-xs font-medium cursor-pointer hover:text-gray-800'>Team</p>
        <p className='text-gray-400 md:text-sm text-xs font-medium cursor-pointer hover:text-gray-800'>Pricing</p>
        <p className='text-gray-400 md:text-sm text-xs font-medium cursor-pointer hover:text-gray-800'>Contact</p>
        <p className='text-gray-400 md:text-sm text-xs font-medium cursor-pointer hover:text-gray-800'>Terms</p>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <FaFacebook className='text-gray-400 hover:text-gray-800 cursor-pointer'/>
        <FaInstagram className='text-gray-400 hover:text-gray-800 cursor-pointer'/>
        <FaTwitter className='text-gray-400 hover:text-gray-800 cursor-pointer'/>
        <FaGithub className='text-gray-400 hover:text-gray-800 cursor-pointer'/>
        <FaDribbble className='text-gray-400 hover:text-gray-800 cursor-pointer'/>

      </div>
    </div>
  )
}
