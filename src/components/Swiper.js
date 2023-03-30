
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import softwareDev from '@/Images/software-developer.png'
import webdev from '@/Images/webdev.png'

export default () => {


    return (
        <Swiper
            spaceBetween={2}
            slidesPerView={1}
            pagination={{
                dynamicBullets: true,
                clickable: true,
            }}

            loop={true}
            autoplay={{
                delay: 4500,
                disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            navigation={true}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <Image
                    src={softwareDev}
                    alt="Picture of the author"
                    className='h-screen'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={webdev}
                    alt="Picture of the author"
                    className='h-screen'
                />
            </SwiperSlide>
        </Swiper>
    );
};