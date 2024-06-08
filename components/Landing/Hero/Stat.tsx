import React from 'react'
import { Button } from '../../ui/button'

const Stat = () => {
  return (
    <div className='lg:mx-36 my-9
    xs:max-lg:mx-7
    xs:max-lg:justify-center
    xs:max-lg:gap-3
     flex xs:max-lg:flex-wrap justify-between items-center'>

      <div className='flex gap-6'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h1 className='font-black text-4xl'>32.2k</h1>
          <p className='text-sm'>Trained in 2023</p>
        </div>

        <div className='flex flex-col gap-2 items-center justify-center'>
          <h1 className='font-black text-4xl'>100k</h1>
          <p className='text-sm'>Teams Delivered</p>
        </div>
      </div>


      <div className=''>
        <Button className='bg-bg_blue text-white'>Reach out</Button>
      </div>

      <div className='lg:basis-1/3  xs:max-lg:w-full '>
        <p className='text-2xl  xs:max-lg:text-xl text-center'>
          Our services are designed to help you know more, and do more, so you can be more.
        </p>
      </div>
    </div>
  )
}

export default Stat