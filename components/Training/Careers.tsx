import React from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Image from 'next/image'
import { Button } from '../ui/button'

const Careers = () => {
  return (
    <div className='mt-28'>

      <div className='flex gap-8 justify-center'>
        <h2>All</h2>
        <h2>Data</h2>
        <h2>Devops</h2>
      </div>


      <div className='my-24'>
        <div className='text-center '>
          <h1 className="text-5xl">Unlock Your Tech Future & Transform Your Career</h1>
          <p className='font-light  text-lg leading-8 mt-4' >
            Develop your tech and professional skills with our world-class programmes, <br />
            and be part of a community that will accelerate your career.
          </p>
        </div>

        <div className='flex gap-5 justify-center mt-9'>
          <CareerCards />
          <CareerCards />
        </div>

      </div>
    </div>
  )
}


const CareerCards = () => (
  <div className='w-[270px] h-[313px] rounded-t-lg overflow-hidden'>
    <Image
      src="/assets/images/training/teams.jpeg"
      width={800}
      height={800}
      className='w-full h-[145px] object-cover'
      alt='img' />


    <div className='text-[#002A76] mx-6 my-3.5'>
      <h1 className=' text-xl'>DevOps Engineering</h1>
      <p className='text-xs font-light'>6 Months</p>


      <Button className='font-thin px-20 bg-loreonblue text-white py-3 rounded-xl mt-11'>Apply Now</Button>

      <p className="text-center text-[#9F9F9F]">Learn More</p>
    </div>
  </div>
)
export default Careers

