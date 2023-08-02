import React from 'react'
import Ourservices from './Ourservices'
import web  from '../../Images/webvideo.json'
import ui  from '../../Images/uivideo.json'
const Service = () => {
  return (
    <>
    <Ourservices heading={`Mobile Development`}
    contentone={` Our team works closely with clients to transform their ideas into user-friendly mobile
applications that are just a tap away. By collaborating as a group, we ensure that every project meets our clients'
needs and exceeds their expectations.`}
    contenttwo={` We specialize in creating custom mobile solutions that are optimized for different platforms and devices, including iOS
and Android. Our team of experts stays up-to-date with the latest trends and technologies to ensure that your app is modern,
visually appealing, and user-friendly.`} 
animationData={web}
/>
<Ourservices reverse={true} heading={`Web Development`}
    contentone={`At our company, we collaborate as a team to bring our clients' unique web application design ideas to life. 
    Our goal is to deliver a customised solution that meets their needs and exceeds their expectations.`}
    contenttwo={`Our team of experts has a deep understanding of the latest technologies and design trends to ensure that your website is modern, 
    visually appealing, and user-friendly. We take pride in providing exceptional customer service, clear communication, and timely
     delivery of projects to ensure your complete satisfaction.`}
    //  image={animation}

     animationData={web}

/>
<Ourservices heading={`UI/UX Designs`}
    contentone={` At our Company, our Design Team work closely with clients to transform their Application Vision into Reality. 
    Our mission is to Revolutionize digital landscapes with cutting-edge solutions, surpassing client needs for a competitive edge.`}
    contenttwo={`  Our team of skilled designers has extensive experience in creating user-friendly applications that provide a seamless user experience.
    From wireframing to prototyping, we involve our clients in every step of the process to ensure that the end product exceeds their 
    expectations.`}
    animationData={ui}

/>  
</>)
}

export default Service