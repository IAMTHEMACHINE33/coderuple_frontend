import React from 'react'
import Image from 'next/image'
import Company from '../../Images/company.jpg'

const Workingprocess = (props) => {
    return (
        <>
            <hr className='bg-[#D9D9D9] h-2 relative top-[435px] left-[550px] w-60' />
            <hr className='bg-[#D9D9D9] h-2 relative top-[427px] left-[810px] w-60' />
            <hr className='bg-[#D9D9D9] h-2 relative top-[419px] left-[1080px] w-60' />


            <div className='relative flex justify-center'>
                <div className='responsive-container flex flex-col py-20 gap-10'>
                    <h1 className=' capitalize text-5xl font-medium text-left'>
                        Our Working Process
                    </h1>

                    <div className='flex flex-row gap-16'>
                        <div className='flex flex-col items-center gap-12 w-48'>
                            {/* <Image src={Company} className='h-44 w-44 rounded-full' /> */}
                            <div className='bg-[#D9D9D9] h-44 w-44 rounded-full'></div>
                            <div className='flex flex-col items-center gap-6'>
                                <div className='bg-[#D9D9D9] h-12 w-12 rounded-full flex justify-center items-center'>
                                    <span className='bg-[#E7E7E7]  h-10 w-10 rounded-full flex justify-center items-center font-bold text-2xl'>1</span>
                                </div>
                                <h1 className=' capitalize text-4xl font-normal'>
                                    DISCOVERY
                                </h1>
                                <p>
                                    <span className='font-semibold'>Our mission</span> is to enable people anywhere to solve big problems.
                                    Our customers choose us because we help innovate and adapt faster with world-class engineers and product engineering practices.
                                </p>
                                <div>
                                </div>
                            </div>
                        </div>
                        {/* <hr /> */}
                        <div className='flex flex-col items-center gap-12 w-52'>
                            {/* <Image src={Company} className='h-44 w-44 rounded-full' /> */}
                            <div className='bg-[#D9D9D9] h-44 w-44 rounded-full'></div>
                            <div className='flex flex-col items-center gap-6'>
                                <div className='bg-[#D9D9D9] h-12 w-12 rounded-full flex justify-center items-center'>
                                    <span className='bg-[#E7E7E7]  h-10 w-10 rounded-full flex justify-center items-center font-bold text-2xl'>2</span>
                                </div>
                                <h1 className=' capitalize text-4xl font-normal'>
                                    PLANNING
                                </h1>
                                <p>
                                    <span className='font-semibold'>Our mission</span> is to enable people anywhere to solve big problems.
                                    Our customers choose us because we help innovate and adapt faster with world-class engineers and product engineering practices.
                                </p>
                                <div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-12 w-52'>
                            {/* <Image src={Company} className='h-44 w-44 rounded-full' /> */}
                            <div className='bg-[#D9D9D9] h-44 w-44 rounded-full'></div>
                            <div className='flex flex-col items-center gap-6'>
                                <div className='bg-[#D9D9D9] h-12 w-12 rounded-full flex justify-center items-center'>
                                    <span className='bg-[#E7E7E7]  h-10 w-10 rounded-full flex justify-center items-center font-bold text-2xl'>3</span>
                                </div>
                                <h1 className=' capitalize text-4xl font-normal'>
                                    EXECUTE
                                </h1>
                                <p>
                                    <span className='font-semibold'>Our mission</span> is to enable people anywhere to solve big problems.
                                    Our customers choose us because we help innovate and adapt faster with world-class engineers and product engineering practices.
                                </p>
                                <div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-12 w-52'>
                            {/* <Image src={Company} className='h-44 w-44 rounded-full' /> */}
                            <div className='bg-[#D9D9D9] h-44 w-44 rounded-full'></div>
                            <div className='flex flex-col items-center gap-6'>
                                <div className='bg-[#D9D9D9] h-12 w-12 rounded-full flex justify-center items-center'>
                                    <span className='bg-[#E7E7E7]  h-10 w-10 rounded-full flex justify-center items-center font-bold text-2xl'>4</span>
                                </div>
                                <h1 className=' capitalize text-4xl font-normal'>
                                    DELIVER
                                </h1>
                                <p>
                                    <span className='font-semibold'>Our mission</span> is to enable people anywhere to solve big problems.
                                    Our customers choose us because we help innovate and adapt faster with world-class engineers and product engineering practices.
                                </p>
                                <div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </>
    )
}

export default Workingprocess