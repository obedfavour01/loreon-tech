import React from 'react'
import { Button } from '../ui/button'

const MissionText = () => {
  return (
    <div className='basis-7/12 pr-8'>
        <h1 className='text-5xl font-bold text-loreongray'>
        Nurturing Tech Excellence - Our Passion Beyond the Pillars
        </h1>

        <p className='text-xl text-loreongray font-light text-justify leading-[28px]  w-3/4 my-8'>
        The Mission at Loreon, our passion for technology extends far beyond our core domains.
         DevOps Bootcamp is our heartfelt commitment to nurturing the next generation of tech leaders.

        And the Goal is to actively engage in training developers and skilled tech experts, equipping them with the knowledge and tools needed to thrive in a dynamic and ever-evolving tech landscape.
        </p>

        <Button className='px-4 py-2 rounded-3xl bg-loreonblue'> Explore Our Trainings</Button>
    </div>
  )
}

export default MissionText