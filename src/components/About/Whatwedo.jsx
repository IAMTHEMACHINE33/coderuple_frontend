import React from 'react'
import Cardwhatwedo from './Cardwhatwedo'
import mobile from '../../Images/mobile.svg'
import web from '../../Images/one.svg'
import ui from '../../Images/two.svg'
const Whatwedo = () => {
  return (
    <div className='relative flex justify-center bg-[#D9D9D9]'>
      <div className='responsive-container flex flex-col py-20 gap-10'>
        <div className='flex flex-col gap-4'>
        <h6 className={` capitalize text-xl font-medium  `}>What we do</h6>
        <h1 className=' capitalize text-5xl font-semibold sm:w-2/3'>
          Let us change the way you think about technology
        </h1>
        </div>
        <div className='flex flex-col lg:flex-row  gap-8'>

          <Cardwhatwedo heading={"Web development"}
          Content={`Our team works closely with clients to transform their ideas into user-friendly mobile applications that are just a tap away.
           By collaborating as a group, we ensure that every project meets our clients' needs and exceeds their expectations.`}
           image={web}/>
          <Cardwhatwedo heading={"Mobile development"}
          Content={`At our company, we collaborate as a team to bring our clients unique web application design ideas to life with creativity and
           technical expertise. Our goal is to deliver a customised solution that meets their needs and exceeds their expectations.`}
           image={mobile}/>
          <Cardwhatwedo heading={"UI/UX Designs"}
          Content={`Our Design Team work closely with clients to transform their Application Vision into Reality Our team of skilled designers. 
          has extensive experience in creating user-friendly applications that provide a seamless user experience.`}
          image={ui}/>
        </div>
      </div>
    </div>
  )
}

export default Whatwedo