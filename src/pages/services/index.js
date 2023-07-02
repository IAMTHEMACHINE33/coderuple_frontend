import React from 'react'
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

import Imagepara from "@/components/Imagepara";
import Workingprocess from '@/components/Ourservices/Workingprocess';
import Ourservices from '@/components/Ourservices/Ourservices';

const index = () => {
    return (
        <>
            <div className="relative ">
                <Navbar />
                <Banner
                    text="Our Services"
                    subtext=" Our mission is to make your business better through technology"
                />
                {/* <Imagepara nodisplay={true} />
                <Imagepara reverse={true} nodisplay={true} />
                <Imagepara nodisplay={true} /> */}
                <Ourservices/>
                <Workingprocess />
                <Footer />
            </div>

        </>
    )
}

export default index