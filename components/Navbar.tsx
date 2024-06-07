import Image from 'next/image'
import React from 'react'
import NavItem from './NavItem'
import { Button } from './ui/button'
import Logo from './Logo'
import MobileSidebar from './MobileSidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-20 pt-9 xs:max-lg:px-6 xs:max-lg:mt-4 ' title='Go to Home'>
      <Logo />

      <MobileSidebar />
      <div className='flex gap-6 items-center xs:max-lg:hidden'>
        <NavItem text="About" href='/about-us' />
        <NavItem text="Projects" href='/about-us' />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <NavItem text="Training" href='/training' />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Link href={"/training"}>
              <DropdownMenuLabel>Overview</DropdownMenuLabel>

            </Link>
            <DropdownMenuSeparator />
            <Link href={"/training/data"}>
              <DropdownMenuItem>Data</DropdownMenuItem>
            </Link>

            <Link href={"/training/devops"}>
              <DropdownMenuItem>Devops</DropdownMenuItem>

            </Link>

            <DropdownMenuItem>Sysops</DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>


        <NavItem text="Community" href='/about-us' />
        <NavItem text="Blogs & News" href='/blog' />

        <Button className='bg-bg_blue text-white rounded-xl'> Get started</Button>
      </div>
    </nav>
  )
}

export default Navbar