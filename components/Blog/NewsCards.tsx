
import { Pop } from '@/lib/fonts'
import Image from 'next/image'
import React from 'react'

const NewsCards = () => {
  return (
    <div className={`w-[360px] rounded-xl overflow-hidden shadow-2xl ${Pop.className}`}>
      <Image
        src={"/assets/images/newsCard.jpg"}
        alt='thumbnail'
        height={400}
        width={400}
        className='w-full h-48 overflow-hidden' />

      <div className='py-8 px-6'>
      <h3 className='text-[#8B5CF6] font-semibold  text-sm'>ARTICLE</h3>


        <h1 className={`${Pop.className} font-bold text-xl mt-5`}>Guide for designing better mobile 
          apps typography
        </h1>

        <p className={`${Pop.className} text-base leading-7 my-6 text-[#1211278F]`}>
          In this article, I won’t talk about
          the general concepts of typography,
          which can be used both in print...
        </p>

        <div className='flex gap-6 mt-6 items-center'>
          <div className='flex rounded-full w-12 h-12'>
            <Image
              src={"/assets/images/model.PNG"}
              width={48}
              height={48}
              alt='avatar'
              className='rounded-full object-contain'
            />

          </div>
          <div>
            <p className='font-semibold text-sm '>Kristin Watson</p>
            <p className='font-light text-xs text-black/50'>Jun 27, 2020 · 6 min read</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default NewsCards