import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const BlogSideCards = () => {
    return (
        <div className='mx-10 '>

            <div className='flex gap-8'>
                    <Image
                        src={"/assets/images/blogmain.jpg"}
                        width={800}
                        height={800}
                        alt='blog'
                        className='h-[124px] w-[240px] rounded-2xl' 
                    />

                

                <div className='flex flex-col'>
                    <Button className='rounded-3xl px-4 w-max py-1 bg-[#EC4899] text-white'>
                        Design
                    </Button>

                    <h3 className="text-xl pr-4 font-bold">
                        Guide for designing better mobile apps typography
                    </h3>

                </div>


            </div>

            <hr className='mt-6'/>
        </div>

         
    )
}

export default BlogSideCards