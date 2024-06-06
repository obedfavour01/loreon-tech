import React from 'react'
import Image from 'next/image'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card"
import { Rating } from './Reviews'



const ReviewCarousel = () => {
  return (
    <div className='xs:max-md:ml-4 lg:ml-40  xs:max-lg:ml-12 mt-6 '>
                <Carousel className="w-full">
                    <CarouselContent className="-ml-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                <div className="p-3">
                                    <Card className='h-max'>
                                        <CardContent className="px-9 py-10">
                                            <p className='text-[#1211278F] '>Amet minim mollit non deserunt 
                                                ullamco est sit aliqua dolor do amet 
                                                sint velit officia consequat duis enim 
                                                velit mollit exercitation veniam.</p>

                                        
                                                <div className='flex gap-2 items-center mt-10'>

                                                    <Image
                                                        src={"/assets/images/woman.png"}
                                                        width={1000}
                                                        height={1000}
                                                        alt='avatar'
                                                        className='w-12 h-12 rounded-full object-contain'
                                                    />


                                                    <div>
                                                        <p className=' font-semiboldtext-sm text-black'>
                                                            Kristin Watson
                                                        </p>
                                                        <p className='font-light text-xs text-[#1211278F]'>
                                                            Jun 27  · 6 min read
                                                        </p>
                                                    </div>

                                                    <Rating/>
                                                </div>
                                            
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className=' flex justify-center items-center -translate-x-16 mt-8 gap-8'>

                        <CarouselPrevious className='static w-12 bg-[#239DE0] ' />
                        <CarouselNext className={`static w-12  bg-[#239DE0]`} />
                    </div>
                </Carousel>
            </div>
  )
}

export default ReviewCarousel