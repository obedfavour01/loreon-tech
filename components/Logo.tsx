import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}>
        <div>
            <Image
              src={"/assets/images/loreonlogo.png"}
              className = "xs:max-lg:w-[100px] w-[150px] h-[36px] object-contain"
              alt='logo'
              width = {1000}
              height= {1000}
              />
        </div>
    </Link>
  )
}

export default Logo