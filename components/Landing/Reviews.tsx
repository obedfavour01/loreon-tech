import React from 'react'
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import ReviewCarousel from './ReviewCarousel';


const Reviews = () => {
    return (
        <section className='py-24  px-40 xs:max-md:mx-7 bg-[#FAFAFA]' >

            <div className='flex items-center xs:max-lg:mx-6 '>
                <div>
                    <p className='text-sm font-normal text-loreonblue/55 uppercase mb-4'>What customers says</p>

                    <h1 className='text-5xl xs:max-lg:text-2xl font-bold'>
                        What people have to say about us
                    </h1>
                </div>
                <div>

                </div>
            </div>

                    <ReviewCarousel />





        </section>
    )
}

export default Reviews


export const Rating = () => {

    return <div className='flex ml-auto'>
        <TiStarFullOutline color='#FF9E2A' />
        <TiStarFullOutline color='#FF9E2A' />
        <TiStarFullOutline color='#FF9E2A' />
        <TiStarFullOutline color='#FF9E2A' />
        <TiStarOutline color='#FF9E2A' />


    </div>
}

