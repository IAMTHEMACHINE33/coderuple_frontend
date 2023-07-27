import React from 'react'
import Cardwhyus from './Cardwhyus'
import innovation from '../../Images/cardui.svg'
import customer from '../../Images/deliver.svg'
import team from '../../Images/plan.svg'
import quality from '../../Images/cardmobile.svg'

const Content = () => {
  return (
    <div className='relative flex justify-center bg-[#D9D9D9] '>
      <div className=' flex  justify-center responsive-container py-20'>
        <div className=' flex flex-col gap-5 items-center'>
          <h1 className="capitalize text-5xl font-medium">Why Us?</h1>
          <p className='text-xl font-normal'>Your ingenious ideas. Our state-of-the-art web development</p>
          <div className='flex flex-row md:flex-row gap-5 lg:gap-8 flex-wrap pt-3'>
            <Cardwhyus heading={"Innovation"}
            Content={"Bring us your wildest ideas and with our creative mindset and tools we’ll make it happen. Our team will  help you develop an online business strategy to outplay your competitors."}
            image={innovation}
            />
            <Cardwhyus reverse={true} 
            heading={"Customer Service"}
            Content={"Customer satisfaction is our main priority.Our team will be always available to solve any issues through multiple communication channel such as phone, email, text"}
            image={customer}

           />
            <Cardwhyus heading={"Professional team"}
            Content={"We are a professional web development company with a team of tech savvies who are always on top of latest trends in web development, web design, SEO and marketing"}
            image={team}
            />
            <Cardwhyus reverse={true} heading={"Quality"}
            Content={"Our main focus on building any product will be on quality.We want to provide only quality services to you which meets your needs and requirement."}
            image={quality}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content;
