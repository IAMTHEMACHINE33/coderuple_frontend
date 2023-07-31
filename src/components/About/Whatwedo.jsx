import React from 'react'
import Cardwhatwedo from './Cardwhatwedo'
import mobile from '../../Images/mobile.svg'
// import web from '../../Images/one.svg'
// import ui from '../../Images/two.svg'
import web from '../../Images/webvideo.json'
import ui from '../../Images/uivideo.json'
import Link from 'next/link'
const Whatwedo = () => {
  return (
    <div className='relative flex justify-center bg-[#FFFFFF]'>
      <div className='responsive-container flex flex-col py-20 gap-20'>
        <div className='flex flex-col gap-4'>
          <h6 className={` capitalize text-xl font-normal `}>What we do</h6>
          <h1 className=' capitalize text-5xl font-medium sm:w-2/4'>
            Let us change the way you think about technology
          </h1>
        </div>
        <Link href='/services' className='flex flex-col lg:flex-row justify-between gap-6 hover:cursor-pointer'>

          <Cardwhatwedo heading={"Web development"}
            Content={`Our team works closely with clients to transform their ideas into user-friendly mobile applications that are just a tap away.
           By collaborating as a group, we ensure that every project meets our clients' needs and exceeds their expectations.`}
            animationData={web}
          />
          <Cardwhatwedo heading={"Mobile development"}
            Content={`At our company, we collaborate as a team to bring our clients unique web application design ideas to life with creativity and
           technical expertise. Our goal is to deliver a customised solution that meets their needs and industrial needs which exceeds their expectations.`}
           animationData={web}
           />
          <Cardwhatwedo heading={"UI/UX Designs"}
            Content={`Our Design Team work closely with clients to transform their Application Vision into Reality. Our team of skilled designers and developers 
          has extensive experience in creating user-friendly applications that provide a seamless user experience and meets their expectations.`}
            animationData={ui}
          />
        </Link>
      </div>
    </div>
  )
}

export default Whatwedo