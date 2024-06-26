import React, { ReactHTMLElement } from 'react'
import StackedCards from './StackedCards'
import { FaArrowRightLong } from 'react-icons/fa6'


type ServiceProps = {
  stackColor: string,
  title: string,
  arrowColor: string,
  arrowbgColor : string
  img: string
}

const ServiceCard = ({ title,stackColor,arrowColor,arrowbgColor,img }: ServiceProps) => {
  return (

    <div className='mt-7  lg:basis-1/3 xs:max-lg:min-w-[404px] max-w-[404px]'>
      <div className='flex flex-col min-w-max h-80  rounded-5xl bg-[#2F2F2F] relative'>

        <div className="basis-2/12">
          <h1 className='font-semibold text-2xl text-white px-4 py-4'>{title}</h1>
        </div>    

        <div className='bg-[#5C5C5C] w-full h-[.5px]'></div>

        <div className="basis-10/12">
          <StackedCards stackColor = {stackColor} img = {img}/>
        </div>  


        <div className='w-16
               h-16
               flex 
               justify-center 
               absolute 
               items-center 
               bottom-0 right-3
                rounded-full
                z-[999]'
                style={{backgroundColor:arrowbgColor}}>
        <FaArrowRightLong className='-rotate-[45deg]' size={20} color={arrowColor} />
          
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