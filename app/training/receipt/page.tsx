import { Button } from '@/components/ui/button'
import { InterFonts } from '@/lib/fonts'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className={`mx-96  xs:max-lg:mx-7 my-24 text-center text-[#586283] ${InterFonts.className}`}>
      <h1 className='text-base font-bold text-[#586283]'>Transaction Successful 🎉</h1>
      <div className='flex justify-center mt-16 mb-12'>
        <Image
          src={"/assets/images/paymentsuccess.png"}
          alt='img'
          height={800}
          width={800}
          className='w-max' />
      </div>

      <h3 className='my-5'>05:22-2024 17:07:25</h3>

      <div className='space-y-3'>
        <div className='flex justify-between'>
          <small>Training Fee</small>
          <small>N900,000,000</small>
        </div>

        <div className='flex justify-between'>
          <small>VAT (10%)</small>
          <small>N22.00</small>
        </div>

        <div className='my-6 bg-[#FCFDFF] text-left'>
          <small className='text-[9px]'>
            The recipient account is expected to
            be credited within 24 hours
            subject to notification by the bank.
          </small>
        </div>

        <div className='space-y-4 text-sm'>
          <h3 className='font-bold text-left'>Transaction Details</h3>

          <div className='flex justify-between'>
            <small>Recipient Details</small>
            <small>Loreon Technologies</small>
          </div>
          <div className='flex justify-between'>
            <small>Transaction Type</small>
            <small>Devops (One-On-One Session)</small>
          </div>
          <div className='flex justify-between'>
            <small>Transaction Number</small>
            <small>28943789189DJHHDJS789Q09W</small>
          </div>
          <div className='flex justify-between'>
            <small>Payment Method</small>
            <small>Bank Transfer</small>
          </div>
        </div>

        <div className='flex justify-center gap-5 py-14'>
          <Button className=' w-1/2 bg-loreonblue rounded-2xl'>Download</Button>
          <Button className=' w-1/2 bg-transparent
            text-black
            border border-black
            rounded-2xl
            hover:bg-loreonblue/10'>
            Report and Issue
          </Button>
        </div>


      </div>
      <h3 className='font-bold text-loreonblue mb-16'>Redirecting in 5 secs ....</h3>
    </div>
  )
}

export default page