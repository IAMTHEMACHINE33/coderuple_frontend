import React from 'react'
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Imagepara from "@/components/Imagepara";
import Whatwedo from "@/components/About/Whatwedo";
import aboutusright from '../../Images/about us(left side).svg'
import aboutusleft from '../../Images/about us(right side).svg'

import Footer from "@/components/Footer";
const About = () => {
  return (
    <div className="relative ">
    <Navbar />
    <Banner
      text="About us"
      subtext=" Delivering IT solutions that enable you to work smarter"
    />
    <Imagepara duplicate={"true"} heading={"About Company"} subheading={" Making IT A Part Of Your Business"}
    image={aboutusright}
    Contentone={`Welcome to our website! Our team is passionate about providing high-quality
     products/services to our customers. Our company was founded with the vision of offering 
     something unique and valuable to the market, and we have grown into a successful business 
     with a loyal customer base.`}
     Contenttwo={`At our core, we prioritise exceptional customer experiences. We deliver 
     high-quality products/services and ensure our customers are satisfied with their
      purchases. Our attention to detail, commitment to excellence, and customer-centric 
      approach set us apart.`}
      // Contentthree={`Our team consists of experts in their respective fields, with years of 
      // experience and a deep understanding of their craft. We foster a culture of learning and growth, 
      // investing in our employees' professional development and encouraging innovation and improvement.`}
      //  Contentfour={`We are dedicated to making a positive impact in our community and the world. 
      //  We operate our business ethically and sustainably and support various social and environmental causes.`}
        // Contentfive={`Thank you for learning more about us. We look forward to serving you and building a long-lasting relationship with you.`}
    />
    <Imagepara reverse={true} 
            image={aboutusleft}

    Contentone={`Our team consists of experts in their respective fields, with years of 
    experience and a deep understanding of their craft. We foster a culture of learning and growth, 
    investing in our employees' professional development and encouraging innovation and improvement.`}
     Contenttwo={`We are dedicated to making a positive impact in our community and the world. 
     We operate our business ethically and sustainably and support various social and environmental causes.`}
     Contentthree={`Thank you for learning more about us. We look forward to serving you and building a long-lasting relationship with you.`}
     />
    <Whatwedo />
    <Footer />
  </div>  )
}

export default About