"use client"
import { Menu } from "lucide-react"
import Logo from "./Logo"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,

} 

from "@/components/ui/accordion"


const MobileSidebar = () => {
  return (
    <div>
      <div>
        <Sheet>
          <SheetTrigger>
            <div className='lg:hidden' >
              <Menu size={28} fill="black" />
            </div>
          </SheetTrigger>


          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
              <SheetDescription>
                <ul>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>DevOps/Infrastructure</AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Analytic Data & AI</AccordionTrigger>
                      <AccordionContent>
                        Yes. It comes with default styles that matches the other
                        components&apos; aesthetic.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Automation/Business & IT</AccordionTrigger>
                      <AccordionContent>
                        Yes. It&apos;s animated by default, but you can disable it if you
                        prefer.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger>Security</AccordionTrigger>
                      <AccordionContent>
                        Yes. It&apos;s animated by default, but you can disable it if you
                        prefer.
                      </AccordionContent>
                    </AccordionItem>



                    <AccordionItem value="item-5">
                      <AccordionTrigger>Asset Management/Sustainability</AccordionTrigger>
                      <AccordionContent>
                        Yes. It&apos;s animated by default, but you can disable it if you
                        prefer.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                      <AccordionTrigger>Industry</AccordionTrigger>
                      <AccordionContent>
                        Yes. It&apos;s animated by default, but you can disable it if you
                        prefer.
                      </AccordionContent>
                    </AccordionItem>


                    <AccordionItem value="item-7">
                      <AccordionTrigger>
                        <a href="/about-us">About Us</a>

                      </AccordionTrigger>
                      <AccordionContent>

                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

      </div>
    </div>
  )
}

export default MobileSidebar