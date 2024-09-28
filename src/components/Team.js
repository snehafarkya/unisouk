import React from 'react'
import team from '../assets/team.png'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Team() {
  const data=[
    {
      image:team,
      name:'Freddy Smith',
      title:'CEO and Founder',
      cardColor:'#eff6ff',
      bgColor:'#e4edae',
      twitter:'https://x.com/',
      github:'https://github.com',
    },
    {
      image:team,
      name:'Freddy Smith',
      title:'CEO and Founder',
      cardColor:'#edfcf5',
      bgColor:'#bde4d2',
      twitter:'https://x.com/',
      github:'https://github.com',
    },
    {
      image:team,
      name:'Freddy Smith',
      title:'CEO and Founder',
      cardColor:'#fdf2f8',
      bgColor:'#efb79c',
      twitter:'https://x.com/',
      github:'https://github.com',
    },
    {
      image:team,
      name:'Freddy Smith',
      title:'CEO and Founder',
      cardColor:'#ecfdf5',
      bgColor:'#7bbfc0',
      twitter:'https://x.com/',
      github:'https://github.com',
    },
    {
      image:team,
      name:'Freddy Smith',
      title:'CEO and Founder',
      cardColor:'#ecfdf5',
      bgColor:'#17949a',
      twitter:'https://x.com/',
      github:'https://github.com',
    },
    {
      image:team,
      name:'Freddy Smith',
      title:'CEO and Founder',
      cardColor:'#fdf2f8',
      bgColor:'#efb79c',
      twitter:'https://x.com/',
      github:'https://github.com',
    },
    {
      image:team,
      name:'Freddy Smith',
      title:'CEO and Founder',
      cardColor:'#edfcf5',
      bgColor:'#bde4d2',
      twitter:'https://x.com/',
      github:'https://github.com',
    },
    {
      image:team,
      name:'Freddy Smith',
      title:'CEO and Founder',
      cardColor:'#eff6ff',
      bgColor:'#e4edae',
      twitter:'https://x.com/',
      github:'https://github.com',
    },

  ]
  return (

    <div>
      <div className="flex relative flex-col  items-start md:mx-32 md:my-24 my-12 gap-4">
        <p className='text-[#88a4cb] uppercase'>Our team</p>
        <div className="">
        <p className='text-3xl text-left font-bold max-w-[380px]'>An incredible team of amazing individuals</p>
        <div className='absolute bg-[#f5f8ff] md:flex hidden w-[400px] h-[100px] -right-32 rounded-tl-full top-0 rounded-bl-full'></div>
        </div>
        <div className="flex flex-wrap gap-12 mt-4 justify-center ">
          {data.map((item,index)=>{
            return(
              <div className="flex flex-col ">
              <div
              className="rounded-full rounded-tr-none flex  z-30 overflow-hidden items-center p-4 justify-center"
              style={{ backgroundColor: item.cardColor }}
              key={index}
            >
              <img
                src={item.image}
                width={220}
                height={220}
                alt={item.name}
                className="rounded-full z-10 scale-[1.1]"
                style={{ backgroundColor: item.bgColor ,  boxSizing: 'border-box', padding: '0px' }}
              />
            </div>
            <p className='text-lg font-semibold mt-1'>{item.name}</p>
            <p className='text-blue-400 text-sm '>{item.title}</p>
            <div className="flex gap-2 justify-center m-1" >
              <a href={item.twitter} target='blank'>
              <FaTwitter className='text-gray-400 hover:text-gray-800 hover:cursor-pointer' size={16}/>
              </a>
              <a href={item.github} target='blank'>
              <FaGithub className='text-gray-400 hover:text-gray-800 hover:cursor-pointer' size={16}/>
              </a>
            </div>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
