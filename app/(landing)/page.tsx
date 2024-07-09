
import Navbar from '@/components/Navbar'
import React from 'react'

import Story from '../../components/Landing/Story/Story'
import Startups from '../../components/Landing/Startups'

import Newsletter from '../../components/Landing/Newsletter'
import Reviews from '../../components/Landing/Reviews'
import FAQ from '../../components/Landing/FAQ/FAQ'
import Footer from '../../components/Landing/Footer/Footer'
import Hero from '@/components/Landing/Hero/Hero'
import Services from '@/components/Landing/Services/Services'
import Blog from '@/components/Landing/Blog/Blog'
import Stat from '@/components/Landing/Hero/Stat'
import Vision from '@/components/Landing/Vision'
import Mission from '@/components/Landing/Mission/Mission'

const page = () => {
  return (
    <div className=' overflow-x-hidden'>
      <Hero />
      <Story />
      <Stat/>
      <Services/>
      <Vision/>
      <Mission/>
      <Startups />
      <Blog />
      <Newsletter />
      <Reviews />
      <FAQ />

    </div>
  )
}

export default page