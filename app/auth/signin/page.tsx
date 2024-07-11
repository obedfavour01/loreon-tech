import SignInForm from '@/components/Auth/SignInForm'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section >
      <div className='flex w-full'>
        <div className='basis-1/2 p-28'>
          <SignInForm />
        </div>
        <div className="bg-loreonblue basis-1/2 pt-20">
          <h1
            className='w-1/3 mx-auto text-5xl text-white'
          >Welcome back to the School of Ops</h1>

          <div className='bg-[url("/assets/images/training/signuploreon.png")] bg-no-repeat'>
            <Image
              src={"/assets/images/illustration2.png"}
              width={1300}
              height={1300}
              className='w-full   object-contain aspect-square'
              alt='signup' />
          </div>

        </div>

      </div>
    </section>
  )
}

export default page