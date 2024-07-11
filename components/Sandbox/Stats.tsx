import React from 'react'
import ProjectCharts from './ProjectCharts'

const Stats = () => {
  return (
    <section className='bg-black text-white py-20'>

            <div className='mx-36 xs:max-lg:mx-6 pb-12'>
                <h1 className='font-bold text-5xl xs:max-md:text-3xl'>
                    When we say that Sandbox projects are “early stage,” this covers the following examples
                </h1>

                <div className='flex xs:max-lg:flex-col gap-x-16 gap-y-8 mt-12'>
                    <p className='text-2xl xs:max-md:text-lg pr-6 font-light'>
                    New projects that are designed to extend one or more Loreon projects with functionality or interoperability libraries.
                    </p>

                    <p className='text-2xl xs:max-md:text-lg pr-6 font-light'>
                    Independent projects that fit the Loreon mission and provide the potential for a novel approach to existing functional
                    areas (or are an attempt to meet an unfulfilled need).
                    </p>

                    <p className='text-2xl xs:max-md:text-lg pr-6 font-light'>
                    Projects commissioned or sanctioned by the Loreon Team, including “experimental” projects.
                    </p>
                </div>
            </div>


            <div className=' mx-36 xs:max-lg:mx-6'>
                <h1 className='text-4xl xs:max-md:text-2xl font-bold my-9'>
                  Projects Accepted Each Year
                </h1>


              <div className='h-96 w-full'>
                <ProjectCharts/>
              </div>
                
            </div> 
    </section>
  )
}

export default Stats