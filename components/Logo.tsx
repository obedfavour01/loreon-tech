import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
            <Image
              src={"/assets/images/loreonlogo.png"}
              className = "w-[150px] h-[36px]"
              alt='logo'
              width = {300}
              height= {100}
              />
        </div>
  )
}

export default Logo