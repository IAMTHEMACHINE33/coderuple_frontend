import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Imagepara from "@/components/Imagepara";
import Whatwedo from "@/components/About/Whatwedo";

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
        <Imagepara />
        <Imagepara reverse={true} />
        <Whatwedo />
        <Footer />
      </div>
    </>
  );
};

export default about;
