import Image from "next/image";
import Company from "../../Images/company.jpg";

const history = () => {
  return (
    <>
      {/* <div className="relative bg-[#D1E3ED] ">
        <div className=" ">
          <div className="flex flex-row-reverse mx-10 text-end ">
            <div className="w-1/2 ">
              <h2 className="text-3xl font-semibold mb-3">Our History</h2>
              <h1 className="text-5xl font-black leading-normal">
                Better Website Means A User Experience
              </h1>
            </div>
          </div>
          justify-items-center grid-rows-2 grid-cols-1 md:grid-cols-2 w-full gap-5 top-0 responsive-container pt-20
          <div className="flex flex-row-reverse flex-wrap w-full ">
            <div className="w-1/2 border-2 border-red-500">
              <p className="mt-10">
                Our passion and drive to deliver quality solutions have taken us
                to the boardroom of 200 yrs old company and coffee shop meetings
                in Orlando, Washington, Singapore, Tokyo, Beijing and Kathmandu.
                We love the challenge to deliver the best possible solution
                using the latest and future technologies. We understand that we
                are your extended TEAM booii.
              </p>
            </div>

            <div className="w-1/2  border-red-500 bg-center  h-full mx-5">
              <Image
                src={Company}
                alt="comapany image"
                className=" w-full h-full rounded-[25px] object-cover "
              />
            </div>
            <div className="col-span-1 row-span-1 mx-5 border-2 border-red-500">
              <p>
                Our passion and drive to deliver quality solutions have taken us
                to the boardroom of 200 yrs old company and coffee shop meetings
                in Orlando, Washington, Singapore, Tokyo, Beijing and Kathmandu.
                We love the challenge to deliver the best possible solution
                using the latest and future technologies. We understand that we
                are your extended TEAM.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="relative  bg-[#D1E3ED]  ">
        <div className=" mr-9 pt-10 sm:mx-14">
          <div className="flex flex-row-reverse text-end ">
            <div className="w-full md:w-3/4">
              <h2 className="text-3xl font-semibold mb-3">Our History</h2>
              <h1 className="text-7xl font-black leading-tight ">
                Better Website Means A User Experience
              </h1>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="col-start-3 row-start-1 col-span-1 row-span-2">
              <div class="h-32  bg-gray-300">1</div>
            </div>
            <div class="col-start-1 col-span-2">
              <div class="h-96 bg-gray-500">2</div>
            </div>
            <div class="col-start-3 row-start-1 col-span-1 row-span-2">
              <div class="mt-32 h-64 bg-gray-400">3</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default history;
