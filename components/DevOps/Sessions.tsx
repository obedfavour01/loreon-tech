import React from 'react'
import OneonOne from './OneonOne'
import Group from './Group'

const Sessions = ({type}:{type:string}) => {
  return (
   <section className='mx-7'>
    <header className='text-center font-bold text-5xl'>Simple no-tricks pricing</header>


        <div className='flex gap-8 my-12'>
            <OneonOne/>
            <Group type = {type}/>
        </div>
   </section>
  )
}

export default Sessions