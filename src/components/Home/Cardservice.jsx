import React, { useState } from 'react'
import company from '../../Images/company.jpg'
import Image from 'next/image';
const Cardservice = (props) => {
  return (
    <div className='flex flex-col lg:flex-row flex-wrap justify-center gap-5'>
      <div className={` w-full lg:w-full flex flex-col  lg:flex-col justify-center items-center gap-5  ${props.reverse == true ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
        <Image src={company} className='h-52 w-auto md:w-full rounded-md' alt="image"></Image>
        <div className='flex flex-col justify-center '>
          <h4 className='capitalize text-2xl font-semibold text-center pb-3'>Mobile Development</h4>
          <p className='text-center  font-light'>We only specialize in Google Ads because we give our undivided focus on the ins and outs of this platform. That is why we can deliver unimaginable results.</p>
        </div>
      </div>

    </div>
  )
}

export default Cardservice