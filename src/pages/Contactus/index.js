import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'

const index = () => {
    return (
        <div>
            <Navbar />
            <Banner text="Contact us" />
            <div className='realtive bg-[#D9D9D9] flex justify-center'>
                <div className='responsive-container flex flex-col  justify-center gap-3 py-20'>
                    <h1 className='capitalize text-4xl font-semibold'>Let's Work Together!</h1>
                    <div className='flex flex-row'>
                        <div className='w-1/2 flex flex-col gap-3'>
                            <p className='capitalize  w-72'> Please tell us a bit about you, your project, and how best to reach you. We’ll get right back to you.</p>
                            <div>
                                <h6 className='capitalize text-base'>Customer Service representative:</h6>
                                <h3 className='capitalize text-xl font-semibold'>+977 9813643643</h3>
                                <h3 className='capitalize text-xl font-semibold'>+977 9841709097</h3>
                            </div>
                            <div>
                                <h6 className='capitalize text-base'>Do you prefer email?</h6>
                                <h3 className='capitalize text-xl font-semibold'>coderupleglobal@gmail.com</h3></div>
                        </div>
                        <div className='w-1/2 flex flex-col m-3 gap-3' >
                            <input type='text' placeholder='Full Name' className='rounded-lg p-1 border-[#E7E9F0] outline-none'></input>
                            <input type='email' placeholder='Email' className='rounded-lg p-1 outline-none'></input>
                            <textarea className='h-36 rounded-lg p-1 outline-none' placeholder='Message'></textarea>
                            <div className='w-full flex justify-end pt-2'>
                                <button className='bg-[#6096BA] text-white w-28 rounded-xl flex justify-center p-1'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default index