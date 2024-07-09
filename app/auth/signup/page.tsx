import SignUpForm from '@/components/Auth/SignUpForm'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section >
      <div className='flex w-full'>
        <div className='basis-1/2 p-28'>
          <SignUpForm />
        </div>
        <div className="bg-loreonblue basis-1/2 pt-20">
          <h1
            className='w-1/2 mx-auto text-5xl text-white'
          >Welcome to Loreon Ops School</h1>

          <Image
            src={"/assets/images/training/"}
            width={1300}
            height={1300}
            className='w-full h-96  object-contain aspect-square'
            alt='signup'/>
        </div>

      </div>
    </section>
  )
}

export default page