import Goals from '@/components/Sandbox/Goals'
import NewProjects from '@/components/Sandbox/NewProjects'
import Projects from '@/components/Sandbox/Projects'
import Stats from '@/components/Sandbox/Stats'
import React from 'react'

const page = () => {
  return (
    <div> 
        <Projects/>
        <Goals/>
        <Stats/>
        <NewProjects/>

    </div>
  )
}

export default page