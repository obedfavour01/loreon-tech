
import Image from 'next/image'
import React from 'react'
import Navbar from '../Navbar'
import { RobotoFonts } from '@/lib/fonts'


const HeroData = () => {
  return (
    <div className=' relative border-t-[0.1px] border-green-300/70 max-h-[700px] data-gradient '>

      <Navbar />
      <Image
        src="/assets/images/training/devherolor.png"
        width={626}
        height={626}
        alt="loreon"
        className='h-[626px]'
      />

      <div className='flex px-24  w-full justify-between pt-24 items-start absolute top-24'>

        <div className='max-w-2xl  space-y-6'>
          <p className='text-white font-light'>Data Analytics</p>
          <h1 className='text-[86px] text-white leading-[72px]'>
          Gain Critical Professional Skills 
          and Learn to Analyse Data Like a Pro.
          </h1>
          <p className='text-white text-sm'>
            Learn SQL and Data Visualisation in Power BI 🚀
            </p>
        </div>

        <div className='max-w-xl    bg-white rounded-t-[18px]  overflow-hidden'>
          <div className=''>
            <Image
              alt='study'
              width={500}
              height={500}
              src={"/assets/images/training/devhero.jpg"}
              className=' h-[281px] w-full object-cover object-center' />
          </div>
          <div className={`  m-10`}>
            <h1 className="font-semibold mb-4">
              This programmes includes:
            </h1>

            <ul className=' list-disc space-y-4'>
              <li>8-week Loreon Foundations leadership and soft skills training
              </li>


              <li>Mastery of the Cloud and Amazon Web Services</li>
              <li>
                How to navigate the creation and deployment of applications in AWS
              </li>
              <li>
                Real-world preparation for a diverse, global career in    a cloud-based role
              </li>


            </ul>
            <div className='my-5'>
              <button
                className={'rounded-xl text-xs text-white bg-datagreen font-light w-full py-3'}>
                Apply Now
              </button>
            </div>

            <small className='text-xs'>
              Application Deadline is 30th Sepetember</small>
          </div>
        </div>


      </div>
    </div>


  )
}

export default HeroData