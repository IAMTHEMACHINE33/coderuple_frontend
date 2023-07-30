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
        <div className="relative responsive-container flex flex-col md:flex-row justify-start items-center md:items-start py-20 gap-20 ">

          <div className='md:w-1/2 flex flex-col gap-10'>
            <BlogComponent 
            id={`whowhat`}
            heading={`Who/What are we?`}
              content={`We are a team of highly skilled and passionate professionals dedicated to understanding the unique challenges and goals of our clients, allowing us to craft 
              custom solutions that perfectly align with their visions. Our mission is to revolutionize the digital landscape of the market in web development, mobile development, 
              and UI/UX designs by delivering cutting-edge solutions that not only meet our clients' needs but also exceed them, providing them with a competitive edge in the digital world. `}
              contenttwo={`We strongly believe in the power of collaboration and work closely with our clients, fostering transparent and open communication throughout the entire development process. 
              This collaborative approach enables us to build strong partnerships and deliver projects that not only meet technical requirements but also capture the essence of our clients' brands.
              In a rapidly evolving digital landscape, Coderuple stands out as a trusted partner that delivers exceptional results. We are committed to staying ahead of the curve, leveraging 
              the latest technologies and industry best practices to provide our clients with innovative solutions that drive their success. Choose Coderuple for your web development, mobile development, 
              and UI/UX design needs, and experience the difference firsthand.
               `}
             image={mobile}
            />
            <BlogComponent heading={`How are we different? `}
                        id={`how`}

              content={`Our company sets itself apart from the market with our unwavering focus on user-centric design. While many companies may prioritize functionality and aesthetics, we go beyond that by
               placing the end-user at the center of our design process. We conduct extensive research and user testing to gain deep insights into user behavior, preferences, and pain points. This enables
                us to create intuitive and seamless experiences that truly resonate with the target audience.`}
              contenttwo={`Additionally, our commitment to continuous improvement sets us apart. We understand that technology and design trends are constantly evolving, and we embrace this change wholeheartedly.
               Our team stays up-to-date with the latest industry advancements, attending conferences, workshops, and actively engaging in professional development. By consistently refining our skills and staying
                ahead of the curve, we are able to offer our clients cutting-edge solutions that surpass industry standards and deliver exceptional results. `} 
            image={web}
            />
          </div>
          <div className="sticky right-24 z-50 md:w-1/2 flex flex-col gap-8 top-20 pt-10">
            <div className="bg-[#E7E9F0] flex justify-between rounded-full py-2 px-6">
              <span className="font-normal text-lg">Search...</span>
              <Image src={icon} className="h-6 w-6 rounded-2xl" alt='image'/>
            </div>
            <div className="bg-[#E4E6EB] flex flex-col justify-between rounded-2xl px-10 py-9 gap-5">
              <span className="font-normal text-lg">Recent Posts</span>
              <div className="flex flex-col lg:flex-row gap-2">
              <div className='lg:w-1/3'>
              <Image src={cardmobile} className="h-60 w-auto md:h-28 md:w-32 rounded-2xl bg-white" alt='image'/>
                </div>
                <a href='#whowhat' className="flex flex-col lg:w-2/3">
                  <p>We are a team of highly skilled and passionate professionals dedicated to understanding the unique challenges...</p>
                  <span className="font-semibold"><li>January 21, 2021</li></span>
                </a>
              </div>
              <div className="flex flex-col lg:flex-row gap-2">
              <div className='lg:w-1/3'>
              <Image src={cardweb} className=" h-60 w-auto md:h-28 md:w-32 rounded-2xl bg-white"alt='image' />
                </div>
                <a href='#how' className="flex flex-col lg:w-2/3">
                  <p>Our company sets itself apart from the market with our unwavering focus on user-centric design. While many...</p>
                  <span className="font-semibold"><li>January 21, 2021</li></span>
                </a>
              </div>
              {/* <div className="flex flex-col lg:flex-row gap-2">
                <div className='lg:w-1/3'>
                <Image src={cardui} className="h-60 w-auto md:h-28 md:w-32 rounded-2xl bg-white"alt='image' />
                </div>
                <div className="flex flex-col lg:w-2/3">
                  <p>Our passion and drive to deliver quality solutions have taken us to the boardroom of a 200-year-old company</p>
                  <span className="font-semibold"><li>January 21, 2021</li></span>
                </div>
              </div> */}
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
