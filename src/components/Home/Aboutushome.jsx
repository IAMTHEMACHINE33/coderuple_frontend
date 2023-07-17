import React from 'react'
import Image from 'next/image'
import company from '../../Images/company.jpg'
import about from '../../Images/about.svg'
const Aboutushome = () => {
    return (
        <div className='relative bg-[ #E7E9F0] flex justify-center'>
            <div className='responsive-container flex flex-col  py-20 gap-6'>
                <div className='flex flex-col gap-4 items-center md:items-start px-5 md:px-0'>
                    <h1 className="capitalize text-5xl font-semibold" >About us</h1>
                    <h6 className="capitalize text-2xl font-medium">Transforming your vision into reality</h6>
                </div>
                <div className='flex flex-col gap-4 text-center items-left '>
                    <div className='flex md:flex-row-reverse flex-col items-center'>
                        <Image src={about} className='h-60 w-auto md:w-1/2 rounded-md ' alt="image" ></Image>
                        <div className=' font-light md:w-1/2 text-left flex flex-col gap-5 px-5 pt-3 md:pt-0 md:px-0 items-center md:items-start'>
                            <p> Our passion and drive to deliver quality solutions have taken us to the boardroom of 200 yrs old company and coffee shop meetings in Orlando,
                                Washington, Singapore, Tokyo, Beijing and Kathmandu. We love the challenge to deliver the best possible solution using the latest and future
                                technologies. We understand that we are your extended TEAM.</p>

                            <button className='bg-[#6096BA] text-white rounded-xl py-1 px-5 w-40'>
                                Read More
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Aboutushome