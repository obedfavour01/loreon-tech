import React from 'react'
import BlogPost from './BlogPost'

const Blog = () => {
  return (
    <section className='bg-bg_blue px-40 py-24 xs:max-lg:px-6  xs:max-lg:py-12 box-border'>
      <div>
        <h3 className='text-loreonorange'>FROM THE BLOG</h3>

        <h1 className='font-bold text-white text-5xl xs:max-lg:text-4xl leading-10 py-3'>Design is intelligence made visible.</h1>

        <p className='font-normal text-base text-white/50 my-6'>Creativity is a highfalutin word for the work I have to do between now and Tuesday.</p>


      </div>

      <hr className='my-8' />


      <div className='flex gap-8 xs:max-lg:flex-col'>
        <BlogPost
          tags={"Article"}
          title={"Guide for designing better mobile apps typography"}
          content={`In this article, I won’t talk about the general 
                    concepts of typography, which can be used both in print...`}

          authorImg={``}
          authorName={`Kristin Watson`}
          datePosted={`Jun 27,2020`}
          readLen={6}
        />


        <BlogPost
          tags={"Article"}
          title={"Guide for designing better mobile apps typography"}
          content={`In this article, I won’t talk about the general 
                    concepts of typography, which can be used both in print...`}

          authorImg={``}
          authorName={`Kristin Watson`}
          datePosted={`Jun 27,2020`}
          readLen={6}
        />


        <BlogPost
          tags={"Article"}
          title={"Guide for designing better mobile apps typography"}
          content={`In this article, I won’t talk about the general 
                    concepts of typography, which can be used both in print...`}

          authorImg={``}
          authorName={`Kristin Watson`}
          datePosted={`Jun 27,2020`}
          readLen={6}
        />
      </div>

      <p className='font-light mt-6 text-xs flex justify-center text-white/50'>
        See More 
      </p>
    </section>
  )
}

export default Blog