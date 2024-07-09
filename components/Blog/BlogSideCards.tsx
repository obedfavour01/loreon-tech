import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const BlogSideCards = () => {
    return (
        <div className=''>

            <div className='flex gap-8'>
                <Image
                    src={"/assets/images/blog_dev.jpg"}
                    width={400}
                    height={400}
                    alt='blog'
                    className='h-20 w-72 object-cover rounded-md '
                />



                <div className='flex flex-col'>
                    <Button
                        className='rounded-3xl 
                            text-[9px] 
                            px-2 
                            py-[.8px] 
                            w-14 h-3 
                            bg-[#EC4899] 
                            text-white 
                            box-border'
                    >
                        Design
                    </Button>

                    <h3 className="text-sm leading-6 font-bold">
                        Guide for designing better mobile apps typography
                    </h3>

                </div>


            </div>

            <hr className='mt-6' />
        </div>


    )
}

export default BlogSideCards