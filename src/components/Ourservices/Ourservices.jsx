import React from 'react'
import Image from 'next/image'
import Company from '../../Images/company.jpg'
const Ourservices = (props) => {
    return (
        <>
            {/* <div className={`relative  bg-[#D9D9D9] flex justify-center`}>
                <div className={`responsive-container flex flex-row gap-6 `}>
                    <div className={` flex flex-col gap-10 py-20 ${props.reverse ? 'text-left' : 'text-left'} w-1/2 `}>
                        <div className='flex flex-col gap-3'>
                            <h1 className=' capitalize text-5xl font-semibold'>
                                Mobile Development                    
                                </h1>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-left'> Our passion and drive to deliver quality solutions have taken us to the boardroom of 200 yrs old company and coffee
                                shop meetings in Orlando, Washington, Singapore, Tokyo, Beijing and Kathmandu. We love the challenge to deliver
                                the best possible solution using the latest and future technologies. We understand that we are your extended TEAM.
                            </p>
                            <p>
                                Our passion and drive to deliver quality solutions have taken us to the boardroom of 200 yrs old company and coffee
                                shop meetings in Orlando, Washington, Singapore, Tokyo, Beijing and Kathmandu. We love the challenge to deliver
                                the best possible solution using the latest and future technologies. We understand that we are your extended TEAM.
                            </p>
                        </div>
                    </div>
                    <div className=' flex items-end pb-20 w-1/2'>
                        <Image src={Company} className='rounded-3xl' alt="image"></Image>
                    </div>
                </div>
            </div> */}
            <div className='relative bg-[#D9D9D9] flex justify-center'>
                <div className='responsive-container flex flex-col py-20 gap-2'>
                    <h1 className=' capitalize text-5xl font-medium'>
                        Mobile Development
                    </h1>
                    <div className='flex flex-row items-center '>
                        <div className='flex flex-col gap-4 w-1/2 font-light'>
                            <p className='text-left'> Our team works closely with clients to transform their ideas into user-friendly mobile
                                applications that are just a tap away. By collaborating as a group, we ensure that every project meets our clients'
                                needs and exceeds their expectations.
                            </p>
                            <p>
                                We specialize in creating custom mobile solutions that are optimized for different platforms and devices, including iOS
                                and Android. Our team of experts stays up-to-date with the latest trends and technologies to ensure that your app is modern,
                                visually appealing, and user-friendly.
                            </p>
                        </div>
                        <div className=' flex justify-end  w-1/2'>
                            <Image src={Company} className='rounded-3xl h-[310px] w-[450px]' alt="image" ></Image>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative bg-[#FFFFFF] flex justify-center'>
                <div className='responsive-container flex flex-col py-20 gap-2'>
                    <h1 className=' capitalize text-5xl font-medium text-right pr-10'>
                        Web Development
                    </h1>
                    <div className='flex flex-row-reverse items-center'>
                        <div className='flex flex-col gap-4 w-1/2 font-light'>
                            <p className='text-left'> At our company, we collaborate as a team to bring our clients' unique web application design ideas to life. 
                            Our goal is to deliver a customised solution that meets their needs and exceeds their expectations.
                            </p>
                            <p>
                            Our team of experts has a deep understanding of the latest technologies and design trends to ensure that your website is modern, 
                            visually appealing, and user-friendly. We take pride in providing exceptional customer service, clear communication, and timely
                             delivery of projects to ensure your complete satisfaction.
                            </p>
                        </div>
                        <div className=' flex justify-start  w-1/2'>
                            <Image src={Company} className='rounded-3xl h-[310px] w-[450px]' alt="image" ></Image>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative bg-[#D9D9D9] flex justify-center'>
                <div className='responsive-container flex flex-col py-20 gap-2'>
                    <h1 className=' capitalize text-5xl font-medium'>
                    UI/UX Designs
                    </h1>
                    <div className='flex flex-row  items-center'>
                        <div className='flex flex-col gap-4 w-1/2 font-light'>
                            <p className='text-left'> At our Company, our Design Team work closely with clients to transform their Application Vision into Reality.
                            </p>
                            <p>
                            Our team of skilled designers has extensive experience in creating user-friendly applications that provide a seamless user experience.
                             From wireframing to prototyping, we involve our clients in every step of the process to ensure that the end product exceeds their 
                             expectations.
                            </p>
                        </div>
                        <div className=' flex justify-end  w-1/2'>
                            <Image src={Company} className='rounded-3xl h-[310px] w-[450px]' alt="image"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourservices