import React from 'react'
import Carousel from './Carousel'
import design from '../assets/design.png'
import eating from '../assets/eating.jpeg'
import workation from '../assets/workation.webp'

export default function Projects() {
  const data = [
    {
      image: workation,
      title: 'Best workstations of the year',
      desc: 'Check out this inspiring workstations to get idea on how to level-up your workstation.',
      tag:'Inspiration',
      bg:'#808bf5',
    },
    {
      image: eating,
      title: 'Eating for Productivity',
      desc: 'Learn how to be more disciplined in your diet and how you can eat to maximize productivity.',
      tag:'Food',
      bg:'#f17373',
    },
    {
      image: design,
      title: 'A Design mindset',
      desc: 'What does it mean to have a design mind-set? Learn how to improve your eye for design.',
      tag:'Resources',
      bg:'#8b5bf7',
    },
  ]
  return (
    <div className='bg-[#f9fbfa] md:py-24 py-12 flex flex-col gap-1 items-start justify-start md:px-32'>
      <p className='font-bold md:text-5xl text-3xl capitalize'>The Project Blog</p>
      <p className='text-gray-600 text-lg text-left'>Designs and layouts to help you with your app. </p>
      <Carousel/>
      <div className="md:w-[1200px] mx-auto flex flex-wrap flex-col md:flex-row justify-center gap-6 items-center">
      {data.map((item,index)=>{
        return(
          <a href='/'>
          <div className='h-[360px] z-30 overflow-hidden group w-[335px] border hover:shadow-md hover:scale-[1.004] transition ease-in-out duration-100 border-gray-300 rounded-lg' key={index}>
            <div className="z-20 h-[230px] overflow-hidden ">
            <img src={item.image} alt={item.title} className='h-[230px] z-10 group-hover:scale-[1.06]  transition-all ease-in-out duration-300' />
            </div>
            <div className="flex relative flex-col gap-2 p-4 justify-start items-start text-left">
              <button className='absolute -top-2 text-white px-2 rounded-full text-[10px]' style={{background: item.bg}}>{item.tag}</button>
              <p className='font-bold text-base '>{item.title}</p>
              <p className='text-sm text-gray-500 font-medium'>{item.desc}</p>
            </div>
          </div>
          </a>
        )
      })}
      </div>
    </div>
  )
}
