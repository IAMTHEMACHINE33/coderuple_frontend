import React from 'react'
import Image from 'next/image'
import Company from '../Images/company.jpg'
const Imagepara = (props) => {
    return (
        <div className={`relative ${props.reverse ? 'bg-[#FFFFFF]' : 'bg-[#D9D9D9]'}  flex items-center flex-col md:gap-8`}>
            <div className={`responsive-container flex flex-col md:${props.reverse ? 'flex-row-reverse' : 'flex-row'} gap-10  `}>
                <div className={` flex flex-col gap-10 md:${props.duplicate ? 'pb-12' : 'pb-20'} pt-20 ${props.reverse ? 'text-left' : 'text-left'} md:w-1/2 `}>
                    <div className='flex flex-col gap-3'>
                        <h6 className={` capitalize text-3xl font-medium  ${props.nodisplay ? 'invisible' : 'visible'} `}>{props.heading}</h6>
                        <h1 className=' capitalize text-5xl font-semibold'>
                            {props.subheading}
                        </h1>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-left  font-light'> {props.Contentone}
                        </p>
                        <p className=' font-light'>
                            {props.Contenttwo}
                        </p>
                    </div>
                </div>
                <div className={`flex items-end  ${props.duplicate ? 'md:pb-12' : 'pb-20'} md:w-1/2`}>
                    <Image src={Company} className='rounded-3xl' alt="image"></Image>
                </div>
            </div>
            {props.duplicate &&
                <div className={`responsive-container flex flex-col md:flex-row-reverse  gap-10 `}>
                    <div className={` flex flex-col gap-10 ${props.reverse ? 'text-left' : 'text-left'}md:w-1/2 `}>
                        <div className='flex flex-col gap-3'>

                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-left  font-light'> {props.Contentthree}
                            </p>
                            <p className=' font-light'>
                                {props.Contentfour}
                            </p>
                            <p className=' font-light'>
                                {props.Contentfive}
                            </p>
                        </div>
                    </div>
                    <div className=' flex items-end pb-20 md :w-1/2'>
                        <Image src={Company} className='rounded-3xl' alt="image"></Image>
                    </div>
                </div>
            }

        </div>

    )
}

export default Imagepara