
import Navbar from '@/components/Navbar'
import React from 'react'

import Story from '../../components/Landing/Mission/Story'
import Startups from '../../components/Landing/Startups'

import Newsletter from '../../components/Landing/Newsletter'
import Reviews from '../../components/Landing/Reviews'
import FAQ from '../../components/Landing/FAQ/FAQ'
import Footer from '../../components/Landing/Footer/Footer'
import Hero from '@/components/Landing/Hero/Hero'
import Services from '@/components/Landing/Services/Services'
import Blog from '@/components/Landing/Blog/Blog'

const page = () => {
  return (
    <div className=' overflow-x-hidden'>

      <Hero />
      <Services />
      <Story />
      <Startups />
      <Blog />
      <Newsletter />
      <Reviews />
      <FAQ />

    </div>
  )
}

export default page