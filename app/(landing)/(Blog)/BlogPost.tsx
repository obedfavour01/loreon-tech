import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
type BlogPost = {
  tags: string,
  title: string,
  content: string,
  authorImg?: string,
  authorName: string,
  datePosted: string,
  readLen: number

}


const BlogPost = ({ tags, title, content, authorImg, authorName, datePosted, readLen }: BlogPost) => {
  return (
    <div>
      <Button 
        size="sm" 
        className='rounded-3xl text-xs' >
          {tags}
      </Button>

      <h1 className='font-bold mt-4 text-xl text-white'>{title}
      </h1>

      <p className='text-base font-normal my-4 text-white/50'>
        {content}
      </p>

      <div className='flex gap-6'>
        <div className='flex rounded-full w-12 h-12'>
          <Image
            src={"/assets/images/woman.png"}
            width={48}
            height={48}
            alt='avatar'
            className='rounded-full object-contain'
          />

        </div>
        <div>
          <p className='font-bold text-sm text-white'>{authorName}</p>
          <p className='font-light text-xs text-white/50'>{datePosted} · {readLen} min read</p>
        </div>
      </div>
    </div>

  )
}

export default BlogPost