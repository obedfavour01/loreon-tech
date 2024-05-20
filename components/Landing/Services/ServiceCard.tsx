import React, { ReactHTMLElement } from 'react'
import StackedCards from './StackedCards'

const ServiceCard = ({ title }: { title: string }) => {
  return (

    <div className='mt-7'>

      <div className='flex flex-col h-80  rounded-5xl bg-[#2F2F2F] relative'>

        <div className="basis-2/12">
          <h1 className='font-semibold text-2xl text-white px-4 py-4'>{title}</h1>
        </div>

        <div className='bg-[#5C5C5C] w-full h-[.5px]'></div>

        <div className="basis-10/12">
          <StackedCards />
        </div>


        <div className='w-20 h-20 flex justify-center absolute items-center bottom-0 right-0 rounded-full z-[999] bg-red-700'>
          wow
        </div>
      </div>

      <div className='mt-8'>
        <p className='text-lg text-[#5c5c5c] z-30'>
          Lorem ipsum dolor sit amet consectetur adipiscing
          elit Ut et massa mi. Aliquam in hendrerit urna.
          Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris.
        </p>
      </div>
    </div>
  )
}

export default ServiceCard