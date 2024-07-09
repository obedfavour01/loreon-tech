import { Pop } from '@/app/layout'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NewsCards = () => {
  return (
    <div className={`max-w-[calc(50%-64px)] xs:max-xl:max-w-[calc(50%-12px)]  rounded-xl overflow-hidden shadow-2xl `}>
      <Link href={"/blog/1"}>
        <Image
          src={"/assets/images/newsCard.jpg"}
          alt='thumbnail'
          height={400}
          width={400}
          className='w-full h-48 xs:max-md:h-[70px] overflow-hidden' />

        <div className='py-8 px-6 xs:max-md:px-2.5 xs:max-md:py-3.5'>
          <h3 className='text-[#8B5CF6] font-semibold xs:max-lg:text-[10px] text-sm'>ARTICLE</h3>


          <h1 
            className={` 
              font-bold xs:max-lg:text-[10px]       xs:max-md:leading-4
              text-xl 
              xs:max-md:mt-2 
              mt-5`}>
            Guide for designing better mobile
            apps typography
          </h1>

          <p className={` text-base xs:max-lg:text-[8px] leading-7 xs:max-md:leading-4 xs:max-md:my-1 my-6 text-[#1211278F]`}>
            In this article, I won’t talk about
            the general concepts of typography,
            which can be used both in print...
          </p>

          <div className='flex gap-6 xs:max-md:gap-3 mt-6 xs:max-md:mt-2 items-center'>
            <div className='flex rounded-full w-12 h-12 xs:max-md:h-5 xs:max-md:w-5'>
              <Image
                src={"/assets/images/model.PNG"}
                width={48}
                height={48}
                alt='avatar'
                className='rounded-full  object-contain'
              />

            </div>
            <div>
              <p className='font-semibold text-sm xs:max-md:text-[9px]'>Kristin Watson</p>
              <p className='font-light text-xs xs:max-md:text-[6px] text-black/50'>Jun 27, 2020 · 6 min read</p>
            </div>
          </div>

        </div>
      </Link>
    </div>
  )
}

export default NewsCards