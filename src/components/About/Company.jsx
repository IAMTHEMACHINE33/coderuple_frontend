import BannerBottom from "@/Images/bannerbottom.png";
import Image from "next/image";
import CompanyImage from "../../Images/company.jpg";

const Company = () => {
  return (
    <>
      <div className=" relative flex justify-center">
        <Image
          src={BannerBottom}
          className="absolute w-full top-0"
          alt="bottomwave.jpg"
        ></Image>
        <div className="">
          <div className="grid relative justify-items-center gap-2 grid-rows-2 grid-cols-1 md:grid-cols-3  mb-5 top-0 responsive-container pt-11 ">
            <div className="col-span-2 row-span-1 bottom-0 grid gap-7">
              <h2 className="text-3xl sm:text-4xl font-semibold ">
                About Company
              </h2>
              <p className="text-5xl sm:text-7xl font-black leading-snug sm:leading-snug">
                Making IT A Part Of Your Business
              </p>
              <p className=" w-full md:w-4/5 ">
                Our passion and drive to deliver quality solutions have taken us
                to the boardroom of 200 yrs old company and coffee shop meetings
                in Orlando, Washington, Singapore, Tokyo, Beijing and Kathmandu.
                We love the challenge to deliver the best possible solution
                using the latest and future technologies. We understand that we
                are your extended TEAM.
              </p>
            </div>

            <div className="row-span-2 flex items-center ">
              <Image
                src={CompanyImage}
                alt="comapany image"
                className=" rounded-[25px] object-cover w-full  h-full sm:w-fit sm:h-fit "
              />
            </div>
            <div className="col-span-2 row-span-1 mt-3  ">
              <p className="w-full md:w-4/5">
                Our passion and drive to deliver quality solutions have taken us
                to the boardroom of 200 yrs old company and coffee shop meetings
                in Orlando, Washington, Singapore, Tokyo, Beijing and Kathmandu.
                We love the challenge to deliver the best possible solution
                using the latest and future technologies. We understand that we
                are your extended TEAM. Our passion and drive to deliver quality
                solutions have taken us to the boardroom of 200 yrs old company
                and coffee shop meetings in Orlando, Washington, Singapore,
                Tokyo, Beijing and Kathmandu. We love the challenge to deliver
                the best possible solution using the latest and future
                technologies. We understand that we are your extended TEAM.
              </p>
            </div>
          </div>
          {/* <div className="relative flex flex-wrap justify-items-center w-full gap-5 top-0 responsive-container pt-20 ">
          <div className="col-span-1 flex-1 row-span-2  h-min mb-0">
            <h2 className="text-3xl font-semibold mb-3">About Company</h2>
            <h1 className="text-5xl font-black leading-normal">
              Making IT A Part Of Your Business
            </h1>
            <p className="mt-10">
              Our passion and drive to deliver quality solutions have taken us
              to the boardroom of 200 yrs old company and coffee shop meetings
              in Orlando, Washington, Singapore, Tokyo, Beijing and Kathmandu.
              We love the challenge to deliver the best possible solution using
              the latest and future technologies. We understand that we are your
              extended TEAM.
            </p>
          </div>

          <div className="flex-1 row-span-3 bg-contain ">
            <Image
              src={Company}
              alt="comapany image"
              className="rounded-lg border-2  border-red-500 "
            />
          </div>
          <div className="col-span-1 row-span-1 ">
            <p>
              Our passion and drive to deliver quality solutions have taken us
              to the boardroom of 200 yrs old company and coffee shop meetings
              in Orlando, Washington, Singapore, Tokyo, Beijing and Kathmandu.
              We love the challenge to deliver the best possible solution using
              the latest and future technologies. We understand that we are your
              extended TEAM.
            </p>
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Company;
