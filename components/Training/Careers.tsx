"use client"
import React, { useState } from 'react'

import Image from 'next/image'
import { Button } from '../ui/button'
import Tabs from '../Tabs'

const Careers = () => {
  const [activeChild, setActiveChild] = useState('all');
  const handleTabChange = (tab:string) => {
    setActiveChild(tab)
  }
  return (
    <div className='mt-36'>

      <Tabs onTabChange={handleTabChange}/>

      <div className='my-24'>
        <div className='text-center '>
          <h1 className="text-5xl">Unlock Your Tech Future & Transform Your Career</h1>
          <p className='font-light  text-lg leading-8 mt-4' >
            Develop your tech and professional skills with our world-class programmes, <br />
            and be part of a community that will accelerate your career.
          </p>
        </div>

        <div className='flex gap-5 justify-center mt-9'>

            {activeChild === 'all' && 
                <div className='flex gap-4'>
                  <CareerCards variant='devops'/>
                  <CareerCards variant='data'/>
              </div>
            }
        {activeChild === 'data' &&<CareerCards variant='data'/>}
        {activeChild === 'devops' && <CareerCards variant='devops'/>}
        </div>

      </div>
    </div>
  )
}


const CareerCards = ({variant}:{variant:'data' | 'devops'}) => (
  <div className='w-[270px] h-[313px] rounded-t-lg overflow-hidden'>
    <Image
      src={ variant === "data" ? "/assets/images/training/teams.jpeg" : "/assets/images/training/team.jpeg" }
      width={800}
      height={800}
      className='w-full h-[145px] object-cover'
      alt='img' />


    <div className='text-[#002A76] mx-6 my-3.5'>
      <h1 className=' text-xl'>{ variant === "data" ? "Data Analytics" : "DevOps Engineering" }</h1>
      <p className='text-xs font-light'>6 Months</p>


      <Button className='font-thin px-20 bg-loreonblue text-white py-3 rounded-xl mt-11'>Apply Now</Button>

      <p className="text-center text-[#9F9F9F]">Learn More</p>
    </div>
  </div>
)
export default Careers

