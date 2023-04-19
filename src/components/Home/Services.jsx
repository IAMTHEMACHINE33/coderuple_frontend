import React, { useState } from 'react'
import Cardservice from './Cardservice';

const Services = () => {
    return (
        <div className='relative bg-[#D9D9D9] flex  justify-center text-center'>
            <div className=' flex  justify-center responsive-container'>

                <div className='py-20 flex flex-col gap-10 w-full '>
                    <h1 className="capitalize text-5xl font-semibold">Our Services</h1>
                    <div className='flex flex-col lg:flex-row  gap-8'>
                        <Cardservice />
                        <Cardservice reverse={true} />
                        <Cardservice />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services