
import Navbar from '@/components/Navbar'
import React from 'react'
import Hero from './(Hero)/Hero'
import Services from './(Services)/Services'
import Story from './(Story)/Story'
import Startups from './(Startups)/Startups'
import Blog from './(Blog)/Blog'
import Newsletter from './Newsletter'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services/>
      <Story/>
      <Startups/>
      <Blog/>
      <Newsletter/>
    </div>  
  )
}

export default page