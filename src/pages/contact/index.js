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
                    <h1 className='capitalize text-4xl font-semibold'>Lets Work Together!</h1>
                    <div className='flex flex-row'>
                        <div className='w-1/2 flex flex-col gap-3'>
                            <p className='capitalize  w-72  font-light'> Please tell us a bit about you, your project, and how best to reach you. We’ll get right back to you.</p>
                            <div>
                                <h6 className='capitalize text-base'>Customer Service representative:</h6>
                                <h3 className='capitalize text-xl font-semibold'>+977 9813643643</h3>
                                <h3 className='capitalize text-xl font-semibold'>+977 9841709097</h3>
                            </div>
                            <div>
                                <h6 className='capitalize text-base'>Do you prefer email?</h6>
                                <h3 className=' text-xl font-semibold'>coderupleglobal@gmail.com</h3></div>
                        </div>

                        <div className='w-1/2 flex flex-col m-3 gap-3' >
                            <div class="relative">
                                <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900  rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:bg-[#D9D9D9] px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-125 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 left-1">Floating outlined</label>
                            </div>
                            <input type='text' placeholder='Full Name' className='rounded-lg p-1 border-[#E7E9F0] outline-none'></input>
                            <input type='email' placeholder='Email' className='rounded-lg p-1 outline-none'></input>
                            <textarea className='h-36 rounded-lg p-1 outline-none' placeholder='Message'></textarea>
                            <div className='w-full flex justify-end pt-2'>
                                {/* <div class="relative mb-3" data-te-input-wrapper-init>
                                    <textarea
                                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlTextarea1"
                                        rows="4"
                                        placeholder="Your message"></textarea>
                                    <label
                                        for="exampleFormControlTextarea1"
                                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >Example textarea
                                    </label>
                                </div> */}
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