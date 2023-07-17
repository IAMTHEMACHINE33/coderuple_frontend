import Image from 'next/image';
import company from '../../Images/company.jpg';
import icon from '../../Images/search.svg';
import BlogComponent from './BlogComponent';
import mobile from '../../Images/mobile.svg' 
import web from '../../Images/one.svg' 
import cardmobile from '../../Images/cardmobile.svg'
import cardweb from '../../Images/cardweb.svg'
import cardui from '../../Images/cardui.svg'

const ComponentWithSearchbar = () => {
  return (
    <div className="relative">

      <div className="relative flex justify-center z-0 bg-[#D9D9D9]">
        <div className="relative responsive-container flex flex-col md:flex-row justify-start items-center md:items-start py-20 gap-10 ">

          <div className='md:w-1/2 flex flex-col gap-10'>
            <BlogComponent heading={`Mobile Development`}
              content={`Our passion and drive to deliver quality solutions have taken us to the boardroom of 200 yrs old company and coffee
             shop meetings in Orlando, Washington, Singapore, Tokyo, Beijing and Kathmandu. We love the challenge to deliver the best possible 
             solution using the latest and future technologies. `}
              contenttwo={`We specialize in creating custom mobile solutions that are optimized for different platforms and devices, including iOS 
             and Android. Our team of experts stays up-to-date with the latest trends and technologies to ensure that your app is modern, visually appealing, and user-friendly. `}
             image={mobile}
            />
            <BlogComponent heading={`Web Development`}
              content={`Our passion and drive to deliver quality solutions have taken us to the boardroom of 200 yrs old company and coffee 
            shop meetings in Orlando, Washington, Singapore, Tokyo, Beijing and Kathmandu. We love the challenge to deliver the best possible 
            solution using the latest and future technologies. `}
              contenttwo={`Our team of experts has a deep understanding of the latest technologies and design trends to ensure that your website 
            is modern, visually appealing, and user-friendly. We take pride in providing exceptional customer service, clear communication, and 
            timely delivery of projects to ensure your complete satisfaction. `} 
            image={web}
            />
          </div>
          <div className="sticky right-24 z-50 md:w-1/2 flex flex-col gap-8 top-20 pt-10">
            <div className="bg-[#E7E9F0] flex justify-between rounded-full py-2 px-6">
              <span className="font-normal text-lg">Search...</span>
              <Image src={icon} className="h-6 w-6 rounded-2xl" alt='image'/>
            </div>
            <div className="bg-[#E4E6EB] flex flex-col justify-between rounded-2xl px-7 py-5 gap-5">
              <span className="font-normal text-lg">Recent Posts</span>
              <div className="flex flex-col lg:flex-row gap-7">
              <div className='lg:w-1/3'>
              <Image src={cardmobile} className="h-60 w-auto md:h-28 md:w-32 rounded-2xl bg-white" alt='image'/>
                </div>
                <div className="flex flex-col lg:w-2/3">
                  <p>Our passion and drive to deliver quality solutions have taken us to the boardroom of a 200-year-old company</p>
                  <span className="font-semibold"><li>January 21, 2021</li></span>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-7">
              <div className='lg:w-1/3'>
              <Image src={cardweb} className=" h-60 w-auto md:h-28 md:w-32 rounded-2xl bg-white"alt='image' />
                </div>
                <div className="flex flex-col lg:w-2/3">
                  <p>Our passion and drive to deliver quality solutions have taken us to the boardroom of a 200-year-old company</p>
                  <span className="font-semibold"><li>January 21, 2021</li></span>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-7">
                <div className='lg:w-1/3'>
                <Image src={cardui} className="h-60 w-auto md:h-28 md:w-32 rounded-2xl bg-white"alt='image' />
                </div>
                <div className="flex flex-col lg:w-2/3">
                  <p>Our passion and drive to deliver quality solutions have taken us to the boardroom of a 200-year-old company</p>
                  <span className="font-semibold"><li>January 21, 2021</li></span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* <div className="relative bg-[#FFFFFF] flex justify-center"> */}
      {/* <div className="responsive-container flex flex-col py-20"> */}

    </div>
    // </div>
    // </div>
  );
};

export default ComponentWithSearchbar;
