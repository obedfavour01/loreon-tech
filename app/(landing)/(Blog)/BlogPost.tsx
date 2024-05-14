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
      <Button className='rounded-xl' >{tags}</Button>

      <h1 className='font-bold text-xl'>{title}
        </h1>

        <p className='text-base font-normal'>
        {content}
        </p>

        <div>
          <div className=' flex rounded-full w-12 h-12'>
                <Image src={"/assets/images/woman.png"} width={48} height={48} alt='avatar' className='rounded-full'/>

                <div>
                  <p>{authorName}</p>
                  <p>{datePosted} · {readLen} min read</p>
                </div>
          </div>
        </div>
    </div>
    
  )
}

export default BlogPost