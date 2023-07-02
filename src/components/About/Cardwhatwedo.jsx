import React from 'react'
import Image from 'next/image'
import company from '../../Images/company.jpg'
const Cardwhatwedo = () => {
    return (
        <div className='flex flex-col lg:flex-row flex-wrap justify-center gap-10'>
            <div className={` w-full lg:w-full flex flex-col  lg:flex-col justify-center items-center gap-3 hover:shadow-lg rounded-2xl `}>
                <h4 className='capitalize text-2xl font-semibold text-center pt-3'>Mobile Development</h4>
                <div className='flex flex-col justify-center'>
                    <Image src={company} className='h-52 w-auto md:w-full rounded-md' alt="image"></Image>
                    <p className='text-center p-2  font-light'>We only specialize in Google Ads because we give our undivided focus on the ins and outs of this platform. That is why we can deliver unimaginable results.</p>
                </div>
            </div>

        </div>
    )
}

export default Cardwhatwedo