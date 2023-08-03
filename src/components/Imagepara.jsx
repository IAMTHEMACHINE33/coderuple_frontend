import React from 'react'
import Image from 'next/image'
import Company from '../Images/company.jpg'
const Imagepara = (props) => {
    return (
        <div className={`relative  bg-[#D9D9D9]   flex items-center flex-col pt-5 md:gap-8  ${props.reverse ? 'md:pb-20' : 'md:pt-20 md:pb-10'}`}>
            <div className={`responsive-container flex flex-col md:${props.reverse ? 'flex-row-reverse' : 'flex-row'} gap-5 md:gap-20  `}>
                <div className={` flex flex-col   ${props.reverse ? 'text-left gap-0 flex justify-center ' : 'text-left gap-10'} md:w-1/2 `}>
                    <div className={`flex flex-col  ${props.reverse ? ' gap-0 ' : ' gap-3'}`}>
                        <h6 className={` capitalize text-3xl font-normal  ${props.nodisplay ? 'invisible' : 'visible'}`}>{props.heading}</h6>
                        <h1 className=' capitalize text-5xl font-medium'>
                            {props.subheading}
                        </h1>
                    </div>
                    <div className='flex flex-col px-2'>
                        <p className='text-left  font-light'> {props.Contentone}
                        </p>
                        <p className=' font-light pt-4'>
                            {props.Contenttwo}
                        </p>
                        <p className={ `font-light ${props.reverse ? ' pt-4 ' : ''}`}>
                            {props.Contentthree}
                        </p>
                    </div>
                </div>
                <div className={`flex justify-center pb-5 md:pb-0 md:items-center   md:w-1/2`}>
                    <Image src={props.image} className=' rounded-3xl h-auto sm:h-72 md:h-96 sm:w-[650px] lg:h-[310px] bg-white' alt="image"></Image>
                </div>
            </div>
            {/* {props.duplicate &&
                <div className={`responsive-container flex flex-col md:flex-row-reverse gap-5 md:gap-10 `}>
                    <div className={` flex flex-col gap-5 md:gap-0 ${props.reverse ? 'text-left' : 'text-left'} md:w-1/2 `}>
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
                    <div className=' flex justify-center md:items-end  pb-20 md md:w-1/2'>
                        <Image src={props.image} className=' w-full h-auto sm:h-72 md:h-96 sm:w-[450px] lg:h-[310px] rounded-3xl bg-white' alt="image"></Image>
                    </div>
                </div>
            } */}

        </div>

    )
}

export default Imagepara