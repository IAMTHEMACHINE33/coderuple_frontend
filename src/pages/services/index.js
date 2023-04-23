import React from 'react'
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

import Imagepara from "@/components/Imagepara";

const index = () => {
    return (
        <>
            <div className="relative ">
                <Navbar />
                <Banner
                    text="Our Services"
                    subtext=" Delivering IT solutions that enable you to work smarter"
                />
                <Imagepara nodisplay={true}/>
                <Imagepara reverse={true} nodisplay={true} />
                <Imagepara  nodisplay={true}/>

                <Footer />
            </div>

        </>
    )
}

export default index