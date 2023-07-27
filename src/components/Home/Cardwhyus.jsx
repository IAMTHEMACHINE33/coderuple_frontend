import React from 'react'
import company from '../../Images/company.jpg'
import Image from 'next/image';
const Cardwhyus = (props) => {
    return (


        <div className='flex flex-row flex-wrap w-full md:w-[48%] gap-5  '>
            <div className={`flex flex-col ${props.reverse == true ? 'sm:flex-row-reverse' : 'sm:flex-row'} md:flex-row items-center gap-5`}>
                <Image src={props.image} className='h-40 w-40 rounded-full bg-white' alt="image"></Image>
                <div className='flex flex-col gap-2'>
                    <h4 className='capitalize text-2xl font-medium text-center md:text-left'>{props.heading}</h4>
                    <p className='text-left  font-light'>{props.Content}</p>
                </div>
            </div>
        </div>

    )
}

export default Cardwhyus