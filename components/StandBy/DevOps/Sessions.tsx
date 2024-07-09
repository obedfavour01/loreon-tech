import React from 'react'


const Sessions = ({ type }: { type: string }) => {
  return (
    <section className=' bg-[#111111] px-32 py-28 rounded-t-[60px]'>
        <div className='flex  text-white'>
            <div className='flex flex-col '>
              <p className='text-[23px] font-normal leading-6'>Duration</p>
              <h1 className='text-4xl font-bold'>6 months</h1>
            </div>
            
            <div className='flex flex-col  px-14 mx-14 border-x border-white'>
              <p className='text-[23px] font-normal leading-6'>Commitement</p>
              <h1 className='text-4xl font-bold'>15-18 hrs/wk online</h1>
            </div>

            <div className='flex flex-col '>
              <p className='text-[23px] font-normal leading-6'>Start</p>
              <h1 className='text-4xl font-bold'>2 Sept. 2024</h1>
            </div>
        </div>

          <OneOnOneSessions/>
          <GroupSessions/>
       
        
    </section>
  )
}





const OneOnOneSessions = () => {
  return(
    <div className='flex text-white gap-12 mt-12 items-center'>
    <h1 className='font-bold text-6xl basis-1/3 '>One - On -<br/> One Session</h1>
    <div className='flex flex-col gap-3'> 
      <p className='text-base font-light leading-4'>Individualised Training</p>
      <div className='font-bold border-[0.75px] border-white rounded-[44px] py-2 px-4'>Three Month</div>
    </div>
    <div className='px-6 py-3 rounded-[75px] h-max border border-loreonblue text-loreonblue'> 
      <h1 className='text-[32px] font-bold '>$400 <span className='text-[10px]'>/ Session </span> </h1>
    </div>
    <div> 
        <h3 className='text-base'>Duration: Mon, Wed, Fri.</h3>
        <h3 className='text-base' > 10:00am - 12:00pm</h3>
    </div>
  </div>
  
  )
}
const GroupSessions = () => {
  return (
    <div className='flex text-white gap-12 mt-12 items-center '>
          <h1 className='font-bold text-6xl basis-1/3 '> Group <br/> Session</h1>
          <div className='flex flex-col gap-3'> 
          <div 
            className='font-bold
               border-[0.75px]
                border-white 
                rounded-[44px] py-1 px-2 text-[9px] w-max'>
                  Best Seller</div>
            <p className='text-base font-light leading-4'>
              Individualised Training
            </p>
            <div className='font-bold border-[0.75px] border-white rounded-[44px] py-2 px-4'>
              Three Month
            </div>
          </div>
          <div className='px-6 py-3 rounded-[75px] h-max border border-white text-white'> 
            <h1 className='text-[32px] font-bold '>
              $250 
              <span className='text-[10px]'>
                / Session 
              </span> 
            </h1>
          </div>
          <div> 
              <h3 className='text-base'>Duration: Mon - Fri
              </h3>
              <h3 className='text-base' > 10:00am - 12:00pm - 02:00pm</h3>
          </div>
        </div>

  )
}
 
export default Sessions