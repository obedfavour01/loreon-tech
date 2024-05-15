import Image from 'next/image'
import React from 'react'
import NavItem from './NavItem'
import { Button } from './ui/button'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-20 pt-9'>
       <Logo/>

        <div className='flex gap-6 items-center'>
            <NavItem text = "About"/>
            <NavItem text = "Projects"/>
            <NavItem text = "Training"/>
            <NavItem text = "Community"/>
            <NavItem text = "Blogs & News"/>

            <Button className='bg-bg_blue text-white rounded-xl'> Get started</Button>
        </div>
    </nav>
  )
}

export default Navbar