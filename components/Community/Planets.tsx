import Image from 'next/image'
import React from 'react'

const Planets = () => {
  return (

    <div >

      <div className='mx-52 xs:max-lg:mx-7'>
        <Image
          width={1800}
          height={1800}
          alt='planets'
          src={"/assets/images/eco.png"}
          className=' object-contain h-min ' />
      </div>

    <div className='mx-96 xs:max-lg:mx-7 text-center my-8'>
      <h1 className="text-4xl xs:max-md:text-3xl font-bold">
        Join our community of thriving and growing techies
      </h1>
      <p className='text-[#6D7692] text-2xl mt-5 '>We are here for you....</p>

    </div>
    </div>
  )
}

export default Planets