import React from 'react'
function Wecome() {
  return (
    <div className='md:w-2/5 '>

      <div className='bg-[#022759] font-Poppins text-white xl:h-[1024px] lg:h-[950px] md:h-[850px] relative '>
          <img className='md:pt-8 ms-10 pt-4' src="public/svgs/applywise.svg" alt="" />        
        <div className='w-16/20 ms-10'>


          <h1 className='font-semibold sm:text-[50px] text-2xl font-[Poppins] leading-8 sm:leading-[60px] tracking-normal text-[#FFFFFF] md:pt-20 pt-3'>Welcome! <br /> Let’s find your dream university</h1>

          <p className='font-normal text-base leading-6 mt-4 pb-4'>Begin your adventure today and discover the dream university that will shape your future.</p>

        </div>
         <div className='absolute bottom-0 w-full justify-items-center'>
                  <img className=' w-16/20  hidden md:block' src="/images/mainimage.svg" alt="Main" />
         </div>


      </div>
    </div>
  )
}

export default Wecome


