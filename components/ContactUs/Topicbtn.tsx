"use client"

import React, { useRef } from 'react'
import { Button } from '../ui/button'

const Topicbtn = ({text}:{text:string}) => {

  const topicRef = useRef<HTMLButtonElement| null>(null)

  const getContent = () => {
    const val = topicRef.current?.innerHTML

  }
  return (
    <Button className='px-6 py-3
    xs:max-md:px-3
    xs:max-md:py-1.5
     
    xs:max-lg:font-medium
        border border-black-50
        text-black
        text-sm font-semibold 
        bg-transparent rounded-6xl
         hover:bg-[#F2F3FF]'
         onClick={getContent}
         ref={topicRef}
         >
            {text}
    </Button>
  )
}

export default Topicbtn