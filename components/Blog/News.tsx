import React from 'react'
import NewsCards from './NewsCards'


import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import Link from 'next/link'
import BlogSide from './BlogSide'



const News = () => {
  return (

    <div className='my-24'>

      <div className='flex xs:max-md:flex-col gap-y-16'>
        <BlogSide/>

        <div className='flex flex-wrap gap-6 basis-8/12 xs:max-md:px-6 '>
          {
            Array.from({ length: 21 }, (_, i) =>  <NewsCards key={i}/> )
          }
        </div>  
      </div>




      <div className='mt-20'>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

      </div>
    </div>


  )
}

export default News