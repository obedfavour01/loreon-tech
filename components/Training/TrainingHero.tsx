import React from 'react'
import Navbar from '../Navbar'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Rating } from '../Landing/Reviews'

const TrainingHero = () => {
  return (
    <section className='relative h-screen w-full  
      bg-training-hero
      bg-cover'>
        
      {/* <div className='training-hero-gradient w-full h-full red left-0 right-0'></div> */}



      <Navbar />
      <Image
        src="/assets/images/training/trainheroloreon.png"
        width={626}
        height={626}
        loading='lazy'
        alt="loreon"
        className='h-[626px] mt-12'
      />
  

    <div className= "absolute top-1/3 left-40 w-1/2 text-white ">
      <p className='font-light text-lg '>Adapt and evolve alongside the tech industry</p>
      <h1 className='text-[83px] leading-[77px] mt-2 mb-7'>Learn professional skills to boost your career</h1>
      <Button className='text-white font-light text-lg bg-loreonblue px-10 py-5'>
        Apply Now
      </Button>
    </div>


    <HeroStats/>

    </section>
  )
}


export default TrainingHero

const HeroStats = () => {
  return (
    <div className='flex justify-between relative -mt-16 mx-40 px-16 bg-loreonblue py-10 '>
        <div className='flex'>
          <div className='flex flex-col items-center w-max pr-14 '>
              <h3 className='text-white text-5xl font-normal'>100k</h3>
              <p className='text-white font-light text-xs text-center'>Learners since 2023</p>
          </div>

          <div className='flex flex-col items-center w-max px-14 border-x border-white'>
              <h3 className='text-white text-5xl font-normal'>85%</h3>
              <p className='text-white font-light text-xs '>Employment Rate</p>
          </div>

          <div className='flex flex-col items-center w-max pl-14 '>
              <h3 className='text-white text-5xl font-normal'>95%</h3>
              <p className='text-white font-light text-xs'>Graduate Satisfaction</p>
          </div>

        </div>

        <div className=' flex items-center'>
          <Image
          width={500}
          height={500}
          src={"/assets/images/experts.png"}
          alt='students'
          className='h-12 w-48 object-contain'/>

          <div className='flex flex-col'>
            <Rating/>
            <a href="" className='text-[10px] text-white font-thin'>Read Reviews</a>
          </div>
        </div>

    </div>
  )
}