import React from 'react'
import company from '../../Images/company.jpg'
import Image from 'next/image';
const Services = () => {
    const myArray = ['apple', 'banana', 'orange'];
    return (
        <div className=' bg-[#D9D9D9] flex  justify-center text-center'>
             <div className='py-20 flex flex-col gap-10 '>
                <h1 className="capitalize text-5xl font-semibold">Our Services</h1>
            <div className='flex flex-col lg:flex-row flex-wrap justify-center gap-5'>
            {
                myArray.map((item) => {
                    
                    console.log(item);
                    return(
                <div className=' w-full lg:w-72 flex flex-col sm:flex-row lg:flex-col justify-center items-center gap-5 px-10'>
                    <Image src={company} className='h-52 w-72 rounded-md'></Image>
                    <div className='flex flex-col justify-center'>
                    <h4 className='capitalize text-2xl font-semibold text-center'>Mobile Development</h4>
                    <p className='text-center'>We only specialize in Google Ads because we give our undivided focus on the ins and outs of this platform. That is why we can deliver unimaginable results.</p>
                </div>
                </div>
                   )
                })
            }
            </div>
        </div>
            </div>
    )
}

export default Services