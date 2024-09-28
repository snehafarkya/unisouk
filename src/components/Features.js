import React from 'react'
import { GrCertificate } from 'react-icons/gr'
import { HiOutlineCube } from 'react-icons/hi'
import { RiCoupon3Line } from 'react-icons/ri'
import { TbSpeakerphone } from 'react-icons/tb'

export default function Features() {
  const data = [
    {
      icon:<GrCertificate size={24} />,
      title:'Certifications',
      desc: "Each of our plan will provide you and your team with certifications"
    },
    {
      icon:<TbSpeakerphone  size={24}/>,
      title:'Notifications',
      desc: "Send out notifications to all your customers to keep them engaged."
    },
    {
      icon:<HiOutlineCube size={24} />,
      title:'Bundles',
      desc: "High quality bundles of awesome tools to help you out."
    },
    {
      icon:<GrCertificate size={24} />,
      title:'Developer Tools',
      desc: "Developer tools to help grow your application and keep it up-to-date."
    },
    {
      icon:<GrCertificate size={24} />,
      title:'Building Blocks',
      desc: "The right kind of building blocks to take your company to the next level."
    },
    {
      icon:<RiCoupon3Line size={24} />,

      title:'Coupons',
      desc: "Coupons system to provide special offers and discounts for your app."
    },
  ]
  return (
    <div className='flex flex-col justify-center  my-24 ' >
      <h2 className='font-bold text-3xl text-black'>Our Features</h2>
      <p>Check out our list of awesome features below</p>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-4">
        {data.map((item,index)=>{
          return(
            <div className="bg-[#f3f4f6] hover:scale-[1.005] transition-all ease-in-out duration-300 hover:shadow-lg hover:bg-gray-200  h-[250px] rounded-xl w-[400px] px-16 flex flex-col justify-center items-center gap-2" key={index}>
              <div className='bg-[#3b81fa] p-2 rounded-full text-white'>
                {item.icon}
              </div>
              <p className='font-medium text-lg'>{item.title}</p>
              <p className='text-gray-500 '>{item.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
