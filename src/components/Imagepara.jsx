import React from 'react'
import Image from 'next/image'
import Company from '../Images/company.jpg'
const Imagepara = (props) => {
    return (
        <div className={`relative ${props.reverse ? 'bg-[#FFFFFF]' : 'bg-[#D9D9D9]'}  flex justify-center`}>
            <div className={`responsive-container flex ${props.reverse ? 'flex-row-reverse' : 'flex row'} gap-6 `}>
                <div className={` flex flex-col gap-5 py-20 ${props.reverse ? 'text-right' : 'text-left'} w-1/2 `}>
                    <h6 className={` capitalize text-xl font-medium  ${props.nodisplay ? 'invisible' : 'visible'} `}>About Company</h6>
                    <h1 className=' capitalize text-5xl font-semibold'>
                        Making IT A Part Of Your Business
                    </h1>
                    <p>Our passion and drive to deliver quality solutions have taken us to the boardroom of 200 yrs old company and coffee
                        shop meetings in Orlando, Washington, Singapore, Tokyo, Beijing and Kathmandu. We love the challenge to deliver
                        the best possible solution using the latest and future technologies. We understand that we are your extended TEAM.
                    </p>
                    <p>
                        Our passion and drive to deliver quality solutions have taken us to the boardroom of 200 yrs old company and coffee
                        shop meetings in Orlando, Washington, Singapore, Tokyo, Beijing and Kathmandu. We love the challenge to deliver
                        the best possible solution using the latest and future technologies. We understand that we are your extended TEAM.
                    </p>
                </div>
                <div className=' flex items-end pb-20 w-1/2'>
                    <Image src={Company} className='rounded-3xl'></Image>
                </div>
            </div>
        </div>
    )
}

export default Imagepara