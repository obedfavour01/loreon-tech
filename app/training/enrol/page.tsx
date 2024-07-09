import EnrolForm from '@/components/Enrol/EnrolForm'
import React from 'react'

const page = () => {
    return (
        <div className='mx-64 lg:max-2xl:mx-16 xs:max-lg:mx-7 my-24'>
            <h1 className='text-5xl  xs:max-lg:text-2xl font-bold text-center mx-48 xs:max-lg:mx-6 my-6'>
                Let’s get started! Confirm your personal details
            </h1>

            <EnrolForm/>

        </div>
    )
}

export default page