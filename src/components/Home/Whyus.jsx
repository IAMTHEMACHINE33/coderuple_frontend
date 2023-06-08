import React from 'react'
import Cardwhyus from './Cardwhyus'
const Content = () => {
  return (
    <div className='relative flex justify-center bg-[#D9D9D9] '>
      <div className=' flex  justify-center responsive-container py-20'>
        <div className=' flex flex-col gap-5 items-center'>
          <h1 className="capitalize text-5xl font-semibold">Why Us?</h1>
          <p className='text-lg'>Your ingenious ideas. Our state-of-the-art web development</p>
          <div className='flex flex-row md:flex-row flex-wrap '>
            <Cardwhyus />
            <Cardwhyus reverse={true} />
            <Cardwhyus />
            <Cardwhyus reverse={true} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content;
