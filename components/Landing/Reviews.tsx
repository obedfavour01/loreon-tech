import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Reviews = () => {
    return (
        <section className='overflow-hidden' >

            <div className='flex items-center xs:max-lg:mx-6 mx-32'>
                <div>
                    <p className='text-sm font-normal text-loreonblue/55'>What customers says</p>

                    <h1 className='text-5xl font-bold'>
                        What people have to say about us
                    </h1>
                </div>
                <div>

                </div>
            </div>




            <div className='ml-40  xs:max-lg:ml-12 mt-6 '>
                <Carousel className="w-full">
                    <CarouselContent className="-ml-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className='h-36'>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-2xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>


        </section>
    )
}

export default Reviews