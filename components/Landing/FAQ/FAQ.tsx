import React from 'react'
import Question from './Question'

const FAQ = () => {
  return (
    <section className='mx-36 my-12'>
        
        <header className='font-bold text-4xl text-center my-6'>
            Frequently asked questions</header>

        <p className='mb-8 text-[#1211278F] text-center text-sm font-semibold'>
            Get the best services at the lowest price
        </p>

        <div className='flex flex-wrap gap-y-12'>
                <Question/>
                <Question/>
                <Question/>
                <Question/>
                <Question/>
                <Question/>
        </div>
    </section>
  )
}

export default FAQ