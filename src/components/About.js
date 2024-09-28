import React from 'react'
import productivity from '../assets/productivity.png'
import automated from '../assets/automated.png'

export default function About() {
  return (
    <div className='flex flex-col  my-24'>
      <div className="flex md:flex-row flex-col justify-center items-center gap-4">
        <img src={productivity} width={550} alt='productivity' className=' animation'/>
        <div className="flex max-w-[400px] justify-start flex-col gap-4 items-start ">
          <p className='font-semibold text-xl '>Boost Productivity</p>
          <p className='text-left'>Build an atmosphere that creates productivity in your organisation and your company culture</p>
          <ul className='text-left text-sm text-gray-500 flex flex-col gap-2'>
            <li><span className='h-fit pb-[3px] p-1 pt-0 leading-none mr-2 text-xs bg-yellow-300 text-white rounded-full'>[]</span>Maximize productivity and growth</li>
            <li><span className='h-fit pb-[3px] p-1 pt-0 leading-none mr-2 text-xs bg-yellow-300 text-white rounded-full'>[]</span>Speed past your competition</li>
            <li><span className='h-fit pb-[3px] p-1 pt-0 leading-none mr-2 text-xs bg-yellow-300 text-white rounded-full'>[]</span>Learn the top techniques</li>
          </ul>
        </div>
      </div>
      <div className="flex md:flex-row flex-col  justify-center items-center gap-4">
        <div className="flex md:order-1 order-2 max-w-[400px] justify-start flex-col gap-4 items-start ">
          <p className='font-semibold text-xl'>Automated Tasks</p>
          <p className='text-left'>Save time and money with our revolutionary services. We are the leaders in the industry.</p>
          <ul className='text-left text-sm text-gray-500 flex flex-col gap-2'>
            <li><span className='h-fit pb-[3px] p-1 pt-0 leading-none mr-2 text-xs bg-yellow-300 text-white rounded-full'>[]</span>Automated task management workflow </li>
            <li><span className='h-fit pb-[3px] p-1 pt-0 leading-none mr-2 text-xs bg-yellow-300 text-white rounded-full'>[]</span>Detailed analytics of your data</li>
            <li><span className='h-fit pb-[3px] p-1 pt-0 leading-none mr-2 text-xs bg-yellow-300 text-white rounded-full'>[]</span>Some awesome integrations</li>

          </ul>
        </div>
        <img src={automated}  className='md:order-2 order-1 animation' width={500} alt='productivity'/>

      </div>

    </div>
  )
}
