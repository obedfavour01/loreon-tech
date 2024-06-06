import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import BackStory from './BackStory'
import Cards from './MissionCards'
import MissionCards from './MissionCards'
import VisionCards from './VisionCards'

const Story = () => {
    return (
        <section className='
            flex
            xs:max-lg:flex-col
            mx-auto
            
            gap-24
            w-max
            
            mt-20 mb-32 
             justify-center'>
            <div className=' w-max'>
                <VisionCards />
                <MissionCards />
            </div>
            <BackStory />
        </section>
    )
}

export default Story