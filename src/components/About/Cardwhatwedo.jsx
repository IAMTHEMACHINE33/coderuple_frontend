import React, { useEffect } from 'react'
// import Lottie from 'lottie-web';
// import ScrollTrigger from 'react-scroll-trigger';

import Image from 'next/image'
import company from '../../Images/company.jpg'
const Cardwhatwedo = (props) => {
    // const animationContainerRef = React.createRef();
    // let animation = null;
  
    // useEffect(() => {
    //   // Create the animation using Lottie
    //   animation = Lottie.loadAnimation({
    //     container: animationContainerRef.current,
    //     renderer: 'svg', // Use 'canvas' for better performance if needed
    //     loop: false,
    //     autoplay: false, // We set autoplay to false because we want to control the play manually
    //     animationData: props.animationData,
    //   });
  
    //   // Cleanup animation when component unmounts
    //   return () => {
    //     if (animation) {
    //       animation.destroy();
    //     }
    //   };
    // }, [props.animationData]);
  
    // const handleEnterViewport = () => {
    //   if (animation) {
    //     animation.play();
    //   }
    // };
  
    // const handleExitViewport = () => {
    //   if (animation) {
    //     animation.stop();
    //   }
    // };
    return (
        
        <div className='flex flex-col lg:flex-row flex-wrap justify-center gap-10 lg:w-[30%] w-full'>
            {/* <ScrollTrigger onEnter={handleEnterViewport} onExit={handleExitViewport}> */}
            <div className={` w-full  flex flex-col  lg:flex-col justify-center items-center gap-3 hover:shadow-lg rounded-2xl bg-[#CDCDCD] hover:bg-[#bebebe] `}>
                <h4 className='capitalize text-2xl font-normal text-center pt-7'>{props.heading}</h4>
                <div className='flex flex-col justify-center '>
                    <Image src={props.animationData} className='h-52 w-auto md:w-full rounded-md ' alt="image"></Image>
                    {/* <div
                        ref={animationContainerRef}
                        className='rounded-md h-60 lg:h-52  md:w-full bg-white'
                    /> */}
                    <p className='text-justify py-4 px-5  font-light'>{props.Content}</p>
                </div>
            </div>

        {/* </ScrollTrigger> */}
        </div>

    )
}

export default Cardwhatwedo