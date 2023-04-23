import React from 'react'
import Cardwhatwedo from './Cardwhatwedo'
const Whatwedo = () => {
  return (
    <div className='relative flex justify-center bg-[#D9D9D9]'>
      <div className='responsive-container flex flex-col py-20 gap-7'>
        <h6 className={` capitalize text-xl font-medium  `}>What we do</h6>
        <h1 className=' capitalize text-5xl font-semibold w-2/3'>
          Let us change the way you think about technology
        </h1>
        <div className='flex flex-col lg:flex-row  gap-8'>

          <Cardwhatwedo/>
          <Cardwhatwedo/>
          <Cardwhatwedo/>
        </div>
      </div>
    </div>
  )
}

export default Whatwedo