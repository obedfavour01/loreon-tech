import React from 'react'
import ServiceCard from '../../../components/Landing/Services/ServiceCard'

const Services = () => {
  return (
    <div className=' xs:max-lg:mx-1 lg:mx-6
         bg-black 
         rounded-3xl 
         px-24 
         xs:max-lg:px-6
         py-16'>
      <div className='flex justify-between'>
        <h1 className='font-semibold text-[#5C5C5C] text-xl'>What We do</h1>

        <h1 className='font-semibold text-[#5C5C5C] text-base'>Explore a few services we offer</h1>
      </div>

      <div className='bg-[#5C5C5C] w-full h-[.5px]'></div>


      <div className='flex xs:max-lg:flex-col gap-8 justify-center'>
        <ServiceCard title={"Delivering Services"} />
        <ServiceCard title={"Delivering Services"} />
        <ServiceCard title={"Delivering Services"} />
      </div>
    </div>
  )
}

export default Services