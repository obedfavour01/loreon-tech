import React from 'react'
import ServiceCard from '../../../components/Landing/Services/ServiceCard'

const Services = () => {
  return (
    <div className='xs:max-lg:mx-6 lg:mx-6
         xs:max-lg:px-6
         mt-44 mb-24'>

        <h1 className='font-semibold text-[##343434] px-[85px] font-roboto text-3xl xs:max-lg:hidden'>
          Explore a few services we offer
        </h1>
    


      <div className='flex flex-wrap justify-between mt-11 px-[85px]'>
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