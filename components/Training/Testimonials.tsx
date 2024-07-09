import React from 'react'
import ReviewCarousel from '../Landing/ReviewCarousel'

const Testimonials = () => {
  return (
    <div className='
    my-40
    px-36
    bg-[url("/assets/images/training/testimonialbg.png")] bg-no-repeat
    bg-contain '>

      <div>
        <p>Testimonials</p>
        <h1 className="text-4xl">
          Here what our past students have to say
        </h1>
      </div>
      <div>
        <ReviewCarousel/>
      </div>
    </div>
  )
}

export default Testimonials