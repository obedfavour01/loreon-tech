import Academy from '@/components/Training/Academy'
import Mission from '@/components/Training/Mission'
import Purpose from '@/components/Training/Purpose'
import RoleCertification from '@/components/Training/RoleCertification'
import React from 'react'

const page = () => {
  return (
    <div>
        <Mission/>
        <Academy/>
        <Purpose/>
        <RoleCertification/>

    </div>
  )
}
  
export default page