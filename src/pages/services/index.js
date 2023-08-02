import React from 'react'
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

import Imagepara from "@/components/Imagepara";
import Workingprocess from '@/components/Ourservices/Workingprocess';
import Ourservices from '@/components/Ourservices/Ourservices';
import Responsiveworkingprocess from '@/components/Ourservices/Responsiveworkingprocess';
import mobile from '../../Images/mobile.svg'
// import web from '../../Images/one.svg' 
// import ui from '../../Images/two.svg' 
import web from '../../Images/webvideo.json'
import ui from '../../Images/uivideo.json'
import Service from '@/components/Ourservices/Service';

const index = () => {
    return (
        <>
            <div className="relative ">
                <Navbar />
                <Banner
                    text="Our Services"
                    subtext=" Our mission is to make your business better through technology"
                />
                <Service />
                <Workingprocess />
                <Responsiveworkingprocess />
                <Footer />
            </div>

        </>
    )
}

export default index