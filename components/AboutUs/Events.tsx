import Image from 'next/image'
import React from 'react'

const Events = () => {
  return (
    <section className='mx-20 my-8'>
      <header className='flex justify-between items-center my-8'>
        <h1 className='text-4xl font-bold'>Our amazing events & members</h1>

        <h3 className='text-base font-bold'>SEE MORE</h3>
      </header>


 

        <div className='grid grid-cols-12 grid-rows-5 gap-6 h-[500px]'>
          <div className="red h-50 col-span-5 row-span-5">
            <Image
              src={"/assets/images/design.jpg"}
              width={531}
              height={531}
              alt='design'
              className='aspect-square object-cover h-full w-full rounded-2xl' />
          </div>
          <div className="red h-50 col-span-4 row-span-2">


          </div>
          <div className="red h-50 col-span-3 row-span-2">yo  </div>
          <div className="red h-50 row-span-3 col-span-7">
            <Image
              src={"/assets/images/build.jpg"}
              width={500}
              height={100}
              alt='design'
              className=' w-full h-full object-cover rounded-2xl' />
          </div>

        </div>
      
    </section>
  )
}

export default Events