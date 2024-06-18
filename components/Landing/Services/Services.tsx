import React from 'react'
import ServiceCard from '../../../components/Landing/Services/ServiceCard'

const Services = () => {
  return (
    <div className=' xs:max-lg:mx-6 lg:mx-6
         bg-black 
         rounded-3xl 
         px-24 
         
         xs:max-lg:px-6
         py-16'>
      <div className='flex justify-between'>
        <h1 className='font-semibold xs:max-lg:font-medium *: text-[#5C5C5C] text-xl'>What We do</h1>

        <h1 className='font-semibold text-[#5C5C5C] xs:max-lg:hidden text-base'>Explore a few services we offer</h1>
      </div>

      <div className='bg-[#5C5C5C] w-full h-[.5px]'></div>


      <div className='flex xs:max-lg:overflow-x-scroll  gap-8 justify-center '>
        <ServiceCard
          title={"Delivering Services"}
          stackColor='#0072EF80'
          arrowColor='#FFFFFF'
          arrowbgColor='#1362F3'
          img='/assets/images/handshake.jpg'
        />

        <ServiceCard
          title={"Delivering Teams"}
          stackColor='#FFFFFF80'
          arrowColor='#00B24F'
          arrowbgColor='#FFFFFF'
          img='/assets/images/table.jpg'
        />

        <ServiceCard
          title={"Training"}
          stackColor='#FF8D0380'
          arrowColor='#FFFFFF'
          arrowbgColor='#FF8D03'
          img='/assets/images/plan.jpg'
        />
        
     
      </div>
    </div>
  )
}

export default Services