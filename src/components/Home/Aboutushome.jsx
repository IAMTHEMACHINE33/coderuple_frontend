import React from 'react'
import Image from 'next/image'
import company from '../../Images/company.jpg'
import about from '../../Images/about us(home pagelanding page).svg'
import Link from 'next/link'
const Aboutushome = () => {
    return (
        <div className='relative bg-[ #E7E9F0] flex justify-center'>
            <div className='responsive-container flex flex-col md:flex-row  py-20 gap-6'>
                <div className='md:w-1/2 flex flex-col gap-4'>
                <div className='flex flex-col gap-4 items-center md:items-start px-5 md:px-0'>
                    <h1 className="capitalize text-5xl font-medium " >About us</h1>
                    <h6 className="capitalize text-2xl font-normal px-1">Transforming your vision into reality</h6>
                </div>
                <div className='flex flex-col gap-4 text-center  '>
                    <div className='flex md: flex-col'>
                        <div className=' font-light md:text-left  flex flex-col gap-5 px-5 pt-3 md:pt-0 md:px-2 md:items-start items-center'>
                            <p> Welcome to our website! Our team is passionate about providing high-quality products/services to our customers.
                                 Our company was founded with the vision of offering something unique and valuable to the market, and we have grown into a successful business with a loyal customer base.</p>

                           <Link href='/about'> <button className='bg-[#6096BA] text-white rounded-xl py-1 px-5 w-40'>
                                Read More
                            </button>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className={`flex justify-center pb-5 md:pb-0 md:items-center   md:w-1/2`}>
                <Image src={about} className='h-60 w-auto md:w-1/2 rounded-md ' alt="image" ></Image>
                </div>
            </div>
        </div>
    )
}

export default Aboutushome