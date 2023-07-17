import React from 'react'
import Image from 'next/image'
import company from '../../Images/company.jpg'
const Cardwhatwedo = (props) => {
    return (
        <div className='flex flex-col lg:flex-row flex-wrap justify-center gap-10'>
            <div className={` w-full lg:w-[300px] flex flex-col  lg:flex-col justify-center items-center gap-3 hover:shadow-lg rounded-2xl `}>
                <h4 className='capitalize text-2xl font-semibold text-center pt-3'>{props.heading}</h4>
                <div className='flex flex-col justify-center gap-4'>
                    <Image src={props.image} className='h-52 w-auto md:w-full rounded-md bg-white' alt="image"></Image>
                    <p className='text-center p-2  font-light'>{props.Content}</p>
                </div>
            </div>

        </div>
    )
}

export default Cardwhatwedo