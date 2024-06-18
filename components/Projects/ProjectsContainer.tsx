import React from 'react'
import ProjectsCards from './ProjectsCards'

const ProjectsContainer = () => {
  return (

    <div>

    <div className='flex flex-wrap  justify-center gap-8 xs:max-md:gap-4 my-24'>
            {
                Array.from({length: 20}).map((_,ind) => (
                    <ProjectsCards key={ind} projectNum= {ind.toString()}/>
                ))
            }


    </div>

            <p className='my-24 w-max mx-auto'>See More </p>
    </div>
  )
}

export default ProjectsContainer