import Image from 'next/image'
import React from 'react'
import BlogSideCards from './BlogSideCards'

const BlogMenu = () => {
  return (
    <section className='flex h-screen my-12'>
        <div className='basis-1/2 relative'>
            <Image
                src={"/assets/images/blogmain.jpg"}
                width={800}
                height={800}
                alt='blog'
                className='h-full w-full object-cover'/>

            <div className="absolute inset-0 bg-blog-gradient"></div>

            <div className='text-white absolute bottom-8 mx-28 space-y-6'>
                <small className='text-base font-bold'>#design</small>
                <h1 className="text-3xl font-bold ">
                    A designer’s guide to writing effective copy 
                    (& why it matters more than you think)
                </h1>
                <small className='text-base font-bold'>12 Mar. 2024</small>

                <p >
                    Believe it or not, copywriting is one of the most important 
                    content-creation skills a designer can possess. 
                    If you think about it, design exists to support 
                    and deliver content—not the other way around.
                </p>

                <p>
                    As a designer, content should be the driving 
                    force behind many of your decisions,
                    whether you’re creating the content or someone else is.
                    So if you can understand how to write effective copy 
                    (and understand the purpose that it serves), 
                    you’ll be able to better serve your clients 
                    and ultimately create better designs.

                </p>
                <p>
                In this article, we’ll cover some helpful copywriting
                 tips for designers to help you build better experiences.
                </p>

                <small className='text-loreonblue text-base font-bold'>Read More</small>
            </div>
        </div>
        <div className='basis-1/2 flex flex-col gap-8 '>
            <BlogSideCards/>
            <BlogSideCards/>
            <BlogSideCards/>
            <BlogSideCards/>
        </div>
    </section>
  )
}

export default BlogMenu