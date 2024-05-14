import React from 'react'
import BlogPost from './BlogPost'

const Blog = () => {
  return (
    <section className='h-[75vh] bg-bg_blue px-40 py-24'>
      <div>
        <h3 className='text-loreonorange'>From the blog</h3>

        <h1 className='font-bold text-white text-5xl leading-10'>Design is intelligence made visible.</h1>

        <p className='font-normal text-base text-white/50 my-6'>Creativity is a highfalutin word for the work I have to do between now and Tuesday.</p>


      </div>

      <hr className='my-8' />


      <div className='flex gap-8'>
        <BlogPost
          tags={"Article"}
          title={"Guide for designing bettermobile apps typography"}
          content={`In this article, I won’t talk about the general 
                    concepts of typography, which can be used both in print...`}

          authorImg={``}
          authorName={`Kristin Watson`}
          datePosted={`Jun 27,2020`}
          readLen={6}
        />


        <BlogPost
          tags={"Article"}
          title={"Guide for designing bettermobile apps typography"}
          content={`In this article, I won’t talk about the general 
                    concepts of typography, which can be used both in print...`}

          authorImg={``}
          authorName={`Kristin Watson`}
          datePosted={`Jun 27,2020`}
          readLen={6}
        />


        <BlogPost
          tags={"Article"}
          title={"Guide for designing bettermobile apps typography"}
          content={`In this article, I won’t talk about the general 
                    concepts of typography, which can be used both in print...`}

          authorImg={``}
          authorName={`Kristin Watson`}
          datePosted={`Jun 27,2020`}
          readLen={6}
        />
      </div>
    </section>
  )
}

export default Blog