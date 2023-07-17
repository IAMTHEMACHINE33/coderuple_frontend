import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Imagepara from "@/components/Imagepara";
import Whatwedo from "@/components/About/Whatwedo";
import aboutus from '../../Images/about.svg'
import Footer from "@/components/Footer";

const about = () => {
  return (
    <>
      <div className="relative ">
        <Navbar />
        <Banner
          text="About us"
          subtext=" Delivering IT solutions that enable you to work smarter"
        />
        <Imagepara duplicate={"true"} heading={"About Company"} subheading={" Making IT A Part Of Your Business"}
        image={aboutus}
        Contentone={`Welcome to our website! Our team is passionate about providing high-quality
         products/services to our customers. Our company was founded with the vision of offering 
         something unique and valuable to the market, and we have grown into a successful business 
         with a loyal customer base.`}
         Contenttwo={`At our core, we prioritise exceptional customer experiences. We deliver 
         high-quality products/services and ensure our customers are satisfied with their
          purchases. Our attention to detail, commitment to excellence, and customer-centric 
          approach set us apart.`}
          Contentthree={`Our team consists of experts in their respective fields, with years of 
          experience and a deep understanding of their craft. We foster a culture of learning and growth, 
          investing in our employees' professional development and encouraging innovation and improvement.`}
           Contentfour={`We are dedicated to making a positive impact in our community and the world. 
           We operate our business ethically and sustainably and support various social and environmental causes.`}
            Contentfive={`Thank you for learning more about us. We look forward to serving you and building a long-lasting relationship with you.`}
        />
        <Imagepara reverse={true} heading={"Our History "} subheading={" Better website means a user experience"}
                image={aboutus}

        Contentone={`Our passion and drive to deliver quality solutions have taken us to the boardroom of 200 yrs 
        old company and coffee shop meetings in Orlando, Washington, Singapore, Tokyo, Beijing and Kathmandu. We 
        love the challenge to deliver the best possible solution using the latest and future technologies. We understand 
        that we are your extended TEAM.`}
         Contenttwo={`Our passion and drive to deliver quality solutions have taken us to the boardroom of 200 yrs 
         old company and coffee shop meetings in Orlando, Washington, Singapore, Tokyo, Beijing and Kathmandu. 
         We love the challenge to deliver the best possible solution using the latest and future technologies.
          We understand that we are your extended TEAM.`}/>
        <Whatwedo />
        <Footer />
      </div>
    </>
  );
};

export default about;
