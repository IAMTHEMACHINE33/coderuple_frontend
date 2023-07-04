import React, { useState } from 'react'
import Cardservice from './Cardservice';

const Services = () => {
    return (
        <div className='relative bg-[#D9D9D9] flex  justify-center text-center'>
            <div className=' flex  justify-center responsive-container'>

                <div className='py-20 flex flex-col gap-10 w-full '>
                    <h1 className="capitalize text-5xl font-semibold">Our Services</h1>
                    <div className='flex flex-col lg:flex-row  gap-8'>
                        <Cardservice 
                        heading={'Mobile Development'}
                        content={`Our team works closely with clients to transform their ideas into user-friendly 
                        mobile applications that are just a tap away. By collaborating as a group, we ensure that every
                         project meets our clients needs and exceeds their expectations.`}
                        />
                        <Cardservice reverse={true}
                        heading={'Web Development'} 
                        content={`At our company, we collaborate as a team to bring our clients' unique web
                         application design ideas to life. Our goal is to deliver a customised solution that meets
                          their needs and exceeds their expectations.`}
                        />
                        <Cardservice
                        heading={'UI/UX Design'}
                        content={`Our Design Team work closely with clients to transform their 
                        Application Vision into Reality Our team of skilled designers. has extensive experience in 
                        creating user-friendly applications that provide a seamless user experience.`}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services