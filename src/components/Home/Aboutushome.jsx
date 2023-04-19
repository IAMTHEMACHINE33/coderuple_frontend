import React from 'react'
import Image from 'next/image'
import company from '../../Images/company.jpg'

const Aboutushome = () => {
    return (
        <div className='relative bg-[ #E7E9F0] flex justify-center'>
            <div className='responsive-container flex flex-row py-20'>
                <div className='flex flex-col gap-3'>
                    <h1 className="capitalize text-5xl font-semibold" >About us</h1>
                    <h6 className="capitalize text-xl font-semibold">Where your Digital Dreams Come to Life</h6>
                    <p>
                        Our passion and drive to deliver quality solutions have taken us to the boardroom of 200 yrs old company and coffee shop meetings in Orlando,
                        Washington, Singapore, Tokyo, Beijing and Kathmandu. We love the challenge to deliver the best possible solution using the latest and future
                        technologies. We understand that we are your extended TEAM.
                    </p>
                    <button className='bg-[#6096BA] text-white rounded-xl py-1 px-5 w-40'>
                        Read More
                    </button>
                </div>
                <div>
                    <Image src={company} className='' ></Image>
                </div>
            </div>
        </div>
    )
}

export default Aboutushome