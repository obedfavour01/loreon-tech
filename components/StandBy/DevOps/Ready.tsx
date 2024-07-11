import { Button } from '@/components/ui/button'
import React from 'react'


const Ready = () => {
  return (
    <div className='flex xs:max-lg:flex-col xs:max-lg:gap-y-8 mx-auto w-max my-16 gap-48'>
      <h1 className='font-bold text-3xl'>Ready to dive in?</h1>
      <div className='flex gap-5'>
        <Button className='text-white bg-bg_blue rounded-xl'>Apply Now</Button>
        <Button className='text-white  bg-bg_blue rounded-xl'>Ask a Question</Button>
      </div>
    </div>
  )
}

export default Ready