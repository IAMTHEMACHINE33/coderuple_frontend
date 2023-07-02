import React from 'react'
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import ComponentwithSearchbar from '@/components/Blogs/ComponentwithSearchbar';



const index = () => {
    return (
        <>
            <div className="relative ">
                <Navbar />
                <Banner
                    text="Our Blogs"
                />
             <ComponentwithSearchbar/>
                <Footer />
            </div>

        </>
    )
}

export default index