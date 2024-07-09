import React from 'react'
import Question from './Question'


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
}
  from '@/components/ui/accordion'


const FAQ = ({ color }: { color?: string }) => {
  return (
    <section className='mx-36  xs:max-lg:mx-6 mb-40 pt-24'>

      <header className='font-bold text-4xl text-center my-6'>
        Frequently asked questions</header>

      <p className='mb-8 text-[#1211278F] text-center text-sm font-semibold'>
        Can’t find the answer you’re looking for? Reach out to our customer support team
      </p>

      <div className=''>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h1 className='text-[#121127] text-xl'>
                Can I upgrade myself or do I have to upgrade my entire Workspace?
              </h1>
            </AccordionTrigger>
            <AccordionContent>
              <p className={`  text-[18px]`}>
                To upgrade Dlex, you’ll need to upgrade your entire Workspace, which means all members in your Workspace. The top level of organization is Workspace.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h1 className='text-[#121127] text-xl'>
                What payment methods do you accept?
              </h1>
            </AccordionTrigger>
            <AccordionContent>
              <p className={`  text-[18px]`}>
                To upgrade Dlex, you’ll need to upgrade your entire Workspace, which means all members in your Workspace. The top level of organization is Workspace.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              <h1 className='text-[#121127] text-xl'>
                What is your refund policy?
              </h1>
            </AccordionTrigger>
            <AccordionContent>
              <p className={`  text-[18px]`}>
                To upgrade Dlex, you’ll need to upgrade your entire Workspace, which means all members in your Workspace. The top level of organization is Workspace.</p>
            </AccordionContent>
          </AccordionItem>


          <AccordionItem value="item-4">
            <AccordionTrigger>
              <h1 className='text-[#121127] text-xl'>
                Do you offer discounts for nonprofits?
              </h1>
            </AccordionTrigger>
            <AccordionContent>
              <p className={`  text-[18px]`}>
                To upgrade Dlex, you’ll need to upgrade your entire Workspace, which means all members in your Workspace. The top level of organization is Workspace.</p>
            </AccordionContent>
          </AccordionItem>


          <AccordionItem value="item-5">
            <AccordionTrigger>
              <h1 className='text-[#121127] text-xl'>
                How am I billed when I add new members to a Workspace?
              </h1>
            </AccordionTrigger>
            <AccordionContent>
              <p className={`  text-[18px]`}>
                To upgrade Dlex, you’ll need to upgrade your entire Workspace, which means all members in your Workspace. The top level of organization is Workspace.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </div>
    </section>
  )
}

export default FAQ