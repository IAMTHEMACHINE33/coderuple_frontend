import React, { useState } from 'react'
import company from '../../Images/company.jpg'
import Image from 'next/image';
const Cardservice = (props) => {
  return (
    <div className='flex flex-col lg:flex-row flex-wrap justify-between lg:items-start w-full  '>
      <div className={`   flex flex-col  lg:flex-col justify-center items-center gap-7  ${props.reverse == true ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
        <Image src={props.images} className='h-52 w-auto md:w-full rounded-md bg-white' alt="image"></Image>
        <div className='flex flex-col justify-center '>
          <h4 className='capitalize text-2xl font-normal text-center pb-3'>{props.heading}</h4>
          <p className='text-center  font-light px-3'>{props.content}</p>
        </div>
      </div>

    </div>
  )
}

export default Cardservice