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
            gap-24
            xs:max-lg:flex-col
            xs:max-sm:mx-6
            mx-24
            mt-20 mb-32 
             justify-center'>

            <div className=' basis-1/2  md:max-xl:justify-center sm:justify-end  flex justify-end'>
                <div>
                    <VisionCards />
                    <MissionCards />

                </div>
            </div>
            <BackStory />
        </section>
    )
}

export default Story