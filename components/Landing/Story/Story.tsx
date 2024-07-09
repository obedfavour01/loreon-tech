"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useRef } from 'react'
import BackStory from './BackStory'



import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const Story = () => {

    const container = useRef<HTMLDivElement | null>(null)

    // useGSAP(
    //     () => {
    //         const tl = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger:"#container",
    //                 start: "top 10%"
    //             }
    //         });

    //         tl.from(".good",{x:-200 ,scale:1.2,duration:1})
    //         tl.from("#backstory > *", 
    //                 {   
    //                     y: 300, 
    //                     duration: 1, 
    //                     opacity:0,
    //                     stagger:0.2
    //                 },"-=1")
    //                 },

    //     { scope: container }
    // );


    return (
        <section className='flex h-screen  px-20 gap-20 pt-24 pb-10'>

            <BackStory />
            <Image
                src = "/assets/images/loreonstory.jfif"
                alt='img'
                width={800}
                height={800}
                className='rounded-6xl  basis-1/2 aspect-square object-cover'
                />


        </section>
    )
}

export default Story