import React from 'react'
import company from '../../Images/company.jpg'
import Image from 'next/image';
const Cardwhyus = (props) => {
    return (
        

                <div className='flex flex-row flex-wrap w-full md:w-1/2 p-5  '>
                    <div className={`flex flex-col ${props.reverse==true?'sm:flex-row-reverse':'sm:flex-row'} md:flex-row items-center gap-5`}>
                        <Image src={company} className='h-40 w-40 rounded-full'></Image>
                        <div className='flex flex-col'>
                            <h4 className='capitalize text-2xl font-semibold text-left'>Mobile Development</h4>
                            <p className='text-left'>We only specialize in Google Ads because we give our undivided focus on the ins and outs of this platform. That is why we can deliver unimaginable results.</p>
                        </div>
                    </div>
                </div>

    )
}

export default Cardwhyus