//   import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Contact from '@/components/Contactus/Contact';
const index = () => {
    return (
        <div>
            <Navbar />
            <Banner text="Contact us" />
            <Contact />
            <Footer />
        </div>
    )
}

export default index