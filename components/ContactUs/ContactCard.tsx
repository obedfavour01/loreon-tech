import React from 'react'
import Topicbtn from './Topicbtn'
import { Button } from '../ui/button'
import Image from 'next/image'

const ContactCard = () => {
    return (
        <div className=' relative
                     bg-white 
                      xs:max-lg:mx-6 
                      lg:max-2xl:mx-24
                      xs:max-lg:p-6 
                      p-20 
                      mx-60 
                      rounded-3xl shadow-md -top-40'>


            <div className='flex 
                xs:max-lg:flex-col
                gap-12
                lg:items-center'>
                <div>
                    <small className='text-loreonblue font-semibold'>Contact us</small>
                    <h1 className='text-4xl font-bold xs:max-lg:text-2xl leading-10'>
                        You have a new project? or<br/> want to say hello...</h1>
                    <h1 className='text-4xl 
                            font-bold 
                            leading-10
                            xs:max-lg:text-2xl
                            text-[#12112766] 
                            mt-6'>
                        info@email.com
                    </h1>

                </div>
                <div>
                    <small className=' font-semibold'>Offices</small>
                    <p className='text-sm text-[#1211278F] leading-7'>
                        1901 Thornridge Cir. Shiloh, Hawaii 81063
                    </p>
                    <p className='text-sm text-[#1211278F] leading-7'>8502 Preston Rd.
                        Inglewood, Maine 98380</p>
                </div>
            </div>


        <div className='flex 
             xs:max-lg:flex-col
             
              justify-between '>
            <div className='my-6'>

                <small className='text-sm font-bold '>Select a topic</small>
                <Topics/>

                <div className='flex flex-col gap-6'>
                    <small className='text-sm font-bold'>
                        Or tell us what you need help with?
                    </small>
                    <textarea 
                        name="" id="" 
                        cols={30} rows={5}
                        className='border
                             resize-none
                            rounded-lg
                            max-w-96
                            p-6
                         border-aboutgray'>
                                
                    </textarea>

                    <Button className='w-max bg-loreonblue rounded-3xl'>
                        Send us a message
                    </Button>
                </div>
            </div>

            <div>
                <Image
                    src={"/assets/images/contact.png"}
                    alt='img'
                    height={800}
                    width={800}
                    className='w-max  xs:max-lg:hidden
                    '/>
            </div>
        </div>
           
        </div>
    )
}



const Topics = () => {
    return (
        <div className='space-y-6 my-6'>
            <div className='flex gap-4 flex-wrap'>
                <Topicbtn text='Adding or removing users' />
                <Topicbtn text='Billing and plans' />
            </div>
            <div className='flex flex-wrap gap-4'>
                <Topicbtn text='Connection Trouble' />
                <Topicbtn text='Notifications' />
                <Topicbtn text='Managing Channels' />

            </div>
            <div className='flex gap-4 gap-x-2 flex-wrap'>
                <Topicbtn text='Signing in' />
                <Topicbtn text='New design feedback' />
                <Topicbtn text='Trial of a paid plan' />

            </div>
        </div>
    )
}

export default ContactCard