import { content } from '@/lib/blogpost'
import { HiArrowSmRight, HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button';
import ReviewCarousel from '@/components/Landing/ReviewCarousel';
import Link from 'next/link';

const page = () => {
  return (
    <div className='mt-6'>
      <div className='relative'>
        <Image
          src={"/assets/images/blogmain.jpg"}
          width={1000}
          height={1000}
          alt='blog'
          loading='lazy'
          className='h-screen w-full object-cover'
        />

        <div className="absolute inset-0 bg-blog-gradient"></div>

        <div className='absolute bottom-4
        text-white 
          xs:max-md:mx-6
          md:max-lg:mx-12 
          lg:mx-80 
          space-y-6'>
          <p>Home &gt; About &gt; Contact</p>
          <h1 className='font-bold xs:max-lg:text-2xl lg:text-5xl'>A designer’s guide to writing effective copy
            (& why it matters more than you think)</h1>

          <p className=''>#design  12 Mar. 2024</p>
        </div>



      </div>
      <div className='xs:max-md:mx-6
           md:max-lg:mx-12 
           lg:mx-80 
           my-20 text-[#636363B8]'
        dangerouslySetInnerHTML={{ __html: content }}>

      </div>

      <div className='flex justify-between
       items-center
        my-24
         xs:max-md:mx-6
           md:max-lg:mx-12 
           lg:mx-80'>
        <Button className='bg-loreonblue gap-4'><HiOutlineArrowSmLeft /> Previous </Button>
        <Button className='bg-loreonblue gap-4'> Next<HiArrowSmRight /></Button>
      </div>

      <div className = ''>
        <header className='flex justify-between my-6 mx-40'>
          <h1 className='text-3xl font-semibold'>Related projects</h1>
          <Link href={"/projects"}><p className='text-xl hover:underline'>See More</p></Link>
        </header>
        <ReviewCarousel />
      </div>
    </div>
  )
}

export default page