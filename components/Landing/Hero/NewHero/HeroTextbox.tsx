import {  MovingButton } from '@/components/ui/moving-border'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const HeroTextbox = () => {
    return (

        <div className="h-full pt-20 w-full basis-1/2 dark:bg-dot-white/[0.2] bg-dot-gray-700/70 relative flex items-center px-[85px]">
        <div>
            <MovingButton
                borderRadius="1.75rem"
                borderClassName=''
                containerClassName='w-auto p-[1px]'
                duration={2000}
                className="
                     dark:bg-slate-900 
                     text-[#838383]
                     flex
                     space-x-2
                        h-max
                        py-1
                        my-0
                     px-3
                        bg-[#191919]
                      "
            >
                <span className='rounded-6xl  bg-[#4E4E4E] text-[#C7C7C7] py-1.5 px-2'>🎉 New</span>
                <span className=''>An important announcement goes here.</span>
                <span><ArrowRight /></span>
            </MovingButton>



            <div className='text-9xl  font-cool mt-4'>
                <h1 className='text-loreonblue leading-[88px]'>innovate </h1>
                <h1 className='text-[#F15A24] leading-[88px]'>invest</h1>
                <h1 className='text-datagreen leading-[88px]'>prosper</h1>
            </div>

            <div className='my-14'>
                    <p className='text-white text-xl font-thin'>
                        Empowering the FUTURE, Today.  <br/>
                        Delivering Innovations at warp speed
                    </p>
            </div>

            <div className='space-x-9'>
                <Button className='text-white bg-loreonblue rounded-3xl h-16 w-44 text-lg'>Apply Now</Button>
                <Button className='text-white bg-transparent rounded-3xl h-16 w-44 text-lg border-[1.4px] border-white'>Learn More</Button>
            </div>
        </div>
        </div>
    )
}

export default HeroTextbox