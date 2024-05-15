import React from 'react'
import TagItem from './TagItem'

const Tags = () => {
  return (
    <div className='flex gap-6 justify-center mt-6'>
            <TagItem text='Discovery & Strategy'/>
            <TagItem text='Branding & Identity'/>
            <TagItem text='Ideation & Concepting'/>
            <TagItem text='Discovery & Strategy'/>
            <TagItem text='Training'/>
    </div>
  )
}

export default Tags