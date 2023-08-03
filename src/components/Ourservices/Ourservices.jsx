import Image from 'next/image';
import React, { useEffect } from 'react';
// import Lottie from 'lottie-web';
// import ScrollTrigger from 'react-scroll-trigger';

const Ourservices = (props) => {
  // const animationContainerRef = React.createRef();
  // let animation = null;

  // useEffect(() => {
  //   // Create the animation using Lottie
  //   animation = Lottie.loadAnimation({
  //     container: animationContainerRef.current,
  //     renderer: 'svg', // Use 'canvas' for better performance if needed
  //     loop: false,
  //     autoplay: true, // We set autoplay to false because we want to control the play manually
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
    <>
      {/* <ScrollTrigger onEnter={handleEnterViewport} onExit={handleExitViewport}> */}

        <div
          className={`relative ${props.reverse ? 'bg-[#FFFFFF]' : 'bg-[#D9D9D9]'
            }  flex justify-center`}
        >
          <div
            className={`responsive-container flex flex-col items-center md:flex-row ${props.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
              } py-20 gap-4 md:gap-10`}
          >
            <div className='md:w-1/2 flex flex-col gap-3 md:gap-8 justify-center'>
              <h1
                className={`capitalize text-3xl md:text-5xl font-medium flex ${props.reverse ? 'md:text-left' : ''
                  }`}
              >
                {props.heading}
              </h1>
              <div
                className={`flex flex-col ${props.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
                  } px-2 gap-8`}
              >
                <div className='flex flex-col gap-4 font-light'>
                  <p className='text-left'>{props.contentone}</p>
                  <p>{props.contenttwo}</p>
                </div>
              </div>
            </div>
            <div className='flex justify-center pb-5 md:pb-0 items-center w-[80%] md:w-1/2'>
            <Image src={props.animationData} className='rounded-3xl lg:h-[350px]  w-full' alt="image"></Image>

              {/* <div
                ref={animationContainerRef}
                className='rounded-3xl lg:h-[350px] bg-white w-full'
              /> */}
            </div>
          </div>
        </div>
      {/* </ScrollTrigger> */}

    </>
  );
};

export default Ourservices;
