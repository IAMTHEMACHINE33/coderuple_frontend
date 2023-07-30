import React, { useEffect } from 'react'
import Lottie from 'lottie-web';

import company from '../../Images/company.jpg'
import Image from 'next/image';
const Cardservice = (props) => {
  const animationContainerRef = React.createRef();

  useEffect(() => {
    // Create the animation using Lottie
    const animation = Lottie.loadAnimation({
      container: animationContainerRef.current,
      renderer: 'svg', // Use 'canvas' for better performance if needed
      loop: false,
      autoplay: true,
      animationData: props.animationData,
    });

    // Cleanup animation when component unmounts
    return () => animation.destroy();
  }, [props.animationData]);
  return (
    <div className='flex flex-col lg:flex-row flex-wrap justify-between lg:items- w-full  '>
      <div className={`   flex flex-col  lg:flex-col justify-center items-center gap-7  ${props.reverse == true ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
        {/* <Image src={props.images} className='h-52 w-auto md:w-full rounded-md bg-white' alt="image"></Image> */}
        <div
              ref={animationContainerRef}
              className='rounded-md h-52 w-auto bg-white sm:w-full'
            />
        <div className='flex flex-col justify-center '>
          <h4 className='capitalize text-2xl font-normal text-center pb-3'>{props.heading}</h4>
          <p className='text-center  font-light px-3'>{props.content}</p>
        </div>
      </div>

    </div>
  )
}

export default Cardservice