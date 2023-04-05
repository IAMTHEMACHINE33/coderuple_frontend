import BannerBottom from "@/Images/bannerbottom.png";
import Image from "next/image";
import Company from "../../Images/company.jpg";

const company = () => {
  return (
    <>
      <div className=" relative">
        <Image src={BannerBottom} className="absolute top-0"></Image>
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 w-full gap-5 relative top-0 responsive-container pt-24 ">
          <div className="mx-5">
            <h2 className="text-4xl font-semibold mb-3">About Company</h2>
            <h1 className="text-6xl font-extrabold leading-relaxed">
              Making IT A Part Of Your Business
            </h1>
            <p>
              Our passion and drive to deliver quality solutions have taken us
              to the boardroom of 200 yrs old company and coffee shop meetings
              in Orlando, Washington, Singapore, Tokyo, Beijing and Kathmandu.
              We love the challenge to deliver the best possible solution using
              the latest and future technologies. We understand that we are your
              extended TEAM.
            </p>
            <p>
              Our passion and drive to deliver quality solutions have taken us
              to the boardroom of 200 yrs old company and coffee shop meetings
              in Orlando, Washington, Singapore, Tokyo, Beijing and Kathmandu.
              We love the challenge to deliver the best possible solution using
              the latest and future technologies. We understand that we are your
              extended TEAM.
            </p>
          </div>

          <div className="bg-contain mx-5">
            <Image
              src={Company}
              alt="comapany image"
              className="rounded-lg border-2  border-red-500 "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default company;
