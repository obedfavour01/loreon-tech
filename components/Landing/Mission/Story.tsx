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
            xs:max-lg:itens-center
            xs:max-lg:mx-7
            mx-auto
            
            gap-24
            w-max
            xs:max-lg:w-screen
            mt-20 mb-32 
             justify-center'>
           
            <div className=' max-w-max mx-auto  xs:max-lg:'>
                <VisionCards />
                <MissionCards />
            </div>
            <BackStory />
        </section>
    )
}

export default Story