import React from 'react'
import Image from 'next/image'
import Company from '../../Images/company.jpg'
const Ourservices = (props) => {
    return (
        <>

            <div className={`relative ${props.reverse ? 'bg-[#FFFFFF]' : 'bg-[#D9D9D9]'}  flex justify-center`}>
                <div className={`responsive-container flex flex-col items-center md:flex-row ${props.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} py-20 gap-4 md:gap-10`}>
                    <div className='md:w-1/2 flex flex-col gap-3 md:gap-8 justify-center'>
                    <h1 className={` capitalize text-3xl  md:text-5xl font-medium flex  ${props.reverse ? 'md:text-left' : ''}`}>
                        {props.heading}
                    </h1>
                    <div className={`flex flex-col  ${props.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} px-2 gap-8`}>
                        <div className='flex flex-col gap-4 font-light'>
                            <p className='text-left'>
                                {props.contentone}
                            </p>
                            <p>
                                {props.contenttwo}
                            </p>
                        </div>
                    </div>
                    </div>
                    <div className={`flex justify-center pb-5 md:pb-0 items-center w-[80%]  md:w-1/2`}>
                                <Image src={props.image} className='rounded-3xl  lg:h-[350px] bg-white' alt="image" ></Image>
                        </div>
                </div>
            </div>

        </>
    )
}

export default Ourservices