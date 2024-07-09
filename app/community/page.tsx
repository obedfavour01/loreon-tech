/* eslint-disable react/no-unescaped-entities */
import Friends from '@/components/Community/Friends'
import Planets from '@/components/Community/Planets'
import Socials from '@/components/Community/Socials'
import React from 'react'

const page = () => {
  return (
    <div className='mt-16'>
        <header className='mx-80 
          xs:max-lg:mx-7
          lg:mx-24
          xl:mx-40
           text-center'>
            <h1 className="font-semibold text-5xl xs:max-md:text-3xl">
                Discover Together: Connect, Inspire, and Thrive with Loreon!
            </h1>
            <p className=" text-[#6D7692] text-2xl xs:max-md:text-lg mt-2 mx-14">
              Accelerate Your Growth: Learn and Build in Public
                 with the Power of Community Support!"
            </p>
        </header>


        <Planets/>
        <Socials/>
        <Friends/>

    </div>
  )
}

export default page