import ContactCard from '@/components/ContactUs/ContactCard'
import Newsletter from '@/components/Landing/Newsletter'
import React from 'react'

const page = () => {
  return (
    <div className='mt-64 xs:max-lg:mt-48'>

      <div className='bg-loreonblue relative w-full min-h-screen'>
        <ContactCard/>
      </div>
        <Newsletter/>
    </div> 
  )
}

export default page