import React, { useEffect } from 'react'
import Lottie from 'lottie-web';

import Image from 'next/image'
import company from '../../Images/company.jpg'
const Cardwhatwedo = (props) => {
    const animationContainerRef = React.createRef();

    useEffect(() => {
        // Create the animation using Lottie
        const animation = Lottie.loadAnimation({
            container: animationContainerRef.current,
            renderer: 'svg', // Use 'canvas' for better performance if needed
            loop: true,
            autoplay: true,
            animationData: props.animationData,
        });

        // Cleanup animation when component unmounts
        return () => animation.destroy();
    }, [props.animationData]);
    return (
        <div className='flex flex-col lg:flex-row flex-wrap justify-center gap-10 lg:w-[30%] w-full'>
            <div className={` w-full  flex flex-col  lg:flex-col justify-center items-center gap-3 hover:shadow-lg rounded-2xl bg-[#AEAEAE] `}>
                <h4 className='capitalize text-2xl font-normal text-center pt-7'>{props.heading}</h4>
                <div className='flex flex-col justify-center '>
                    {/* <Image src={props.image} className='h-52 w-auto md:w-full rounded-md ' alt="image"></Image> */}
                    <div
                        ref={animationContainerRef}
                        className='rounded-md h-60 lg:h-52  md:w-full bg-white'
                    />
                    <p className='text-justify py-4 px-5  font-light'>{props.Content}</p>
                </div>
            </div>

        </div>
    )
}

export default Cardwhatwedo