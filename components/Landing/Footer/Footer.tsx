import Logo from '@/components/Logo'
import Image from 'next/image'
import React from 'react'
import Subscribe from './Subscribe'
import Social from './Social'

const Footer = () => {
    return (
        <footer className='px-28 py-24 bg-[#1D2329]'>

            <div className='flex'>

                <div className='flex justify-between text-[#C0CBF0] basis-1/2'>

                    <div>
                        <ul className='flex flex-col gap-8'>
                            <li className='footer_header'>Legal</li>
                            <li>Terms & Conditions</li>
                            <li>Code of Conduct</li>
                            <li>Privacy & Data Protection</li>
                            <li>Privacy Policy</li>
                            <li>Compliance & trust</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex flex-col gap-8'>
                            <li className='footer_header'>Company</li>
                            <li>About Us</li>
                            <li>Contact</li>
                            <li>Blog</li>
                            <li>Academy</li>
                            
                        </ul>
                    </div>
                    <Social/>


                </div>
                
                <div className='flex flex-col basis-1/2 items-end '>

                    <Subscribe/>

                </div>
            </div>
            <div className='flex justify-between mt-24  text-sm text-[#C0CBF0]'>
                <Logo/>

                <p>All rights reserved © 2024 Loreon Technologies</p>
            </div>
        </footer>
    )
}

export default Footer