import Image from 'next/image'
import React from 'react'
import BlogSideCards from './BlogSideCards'

const BlogHero = () => {
    return (
        <section className='my-12'>
            <div className='relative mx-6 rounded-[53px]   overflow-hidden'>
                <Image
                    src={"/assets/images/blogHeader.jpg"}
                    width={800}
                    height={800}
                    alt='blog'
                    className='h-96 w-full object-cover' />

                <div className="absolute inset-0 bg-blog-gradient"></div>

                <div 
                    className='text-white absolute bottom-8 mx-28 space-y-6'
                >        
                    <h1 className="text-6xl font-bold ">
                        Blogs
                    </h1>
                </div>
            </div>


        </section>
    )
}

export default BlogHero