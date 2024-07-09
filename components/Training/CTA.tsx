import React from 'react'
import { Button } from '../ui/button'

const CTA = () => {
  return (
    <section className='bg-loreonblue py-20 my-28'>


      <div className='mx-auto w-max text-center space-y-3'>

        <h1 className='text-[44px] text-white'>
          What are you waiting for ?</h1>

        <p className='text-white'>Join us and gain in-demand skills</p>

        <Button
          className='bg-white 
        text-[#020000]
        px-10 py-5 rounded-xl'>
          <p className='text-lg'>Apply Now</p>
        </Button>
      </div>
    </section>
  )
}

export default CTA