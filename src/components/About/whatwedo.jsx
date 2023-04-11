import Image from "next/image";
import DemoLogo from "./demologo.png";

const Whatwedo = () => {
  return (
    <>
      <div className="relative">
        <div className=" relative grid justify-items-center justify-center bg-[#E7E9F0]">
          <div className=" grid gap-5 responsive-container my-32">
            <h2 className="text-3xl sm:text-4xl font-semibold ">What we do</h2>
            <h1 className="w-3/4 text-5xl sm:text-7xl font-black leading-snug sm:leading-snug">
              Let us change the way you think about technology.
            </h1>
          </div>
        </div>
        <div className=" flex justify-center  bg-white pb-7 ">
          <section class="relative responsive-container justify-items-center grid text-neutral-700  -top-20">
            <div class="grid gap-6 text-center md:grid-cols-3">
              <div className="col-span-1">
                <div class="block  rounded-lg bg-[#D1E3ED] shadow-lg ">
                  <div class="flex-col flex gap-6 p-6 justify-center justify-items-center ">
                    <h4 class="mb-4 text-2xl font-semibold">Web Development</h4>
                    <div className="flex justify-center">
                      <Image src={DemoLogo} className="w-1/2 h-1/2" />
                    </div>
                    <p class="mt-4">
                      Our mission is to enable people anywhere to solve big
                      problems. Our customers choose us because we help innovate
                      and adapt faster with world-class engineers and product
                      engineering practices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-1">
                <div class="block rounded-lg bg-[#D1E3ED] shadow-lg ">
                  <div class="flex-col flex gap-6 p-6 justify-center justify-items-center ">
                    <h4 class="mb-4 text-2xl font-semibold">
                      Mobile Development
                    </h4>
                    <div className="flex justify-center">
                      <Image src={DemoLogo} className="w-1/2 h-1/2" />
                    </div>
                    <p class="mt-4">
                      Our mission is to enable people anywhere to solve big
                      problems. Our customers choose us because we help innovate
                      and adapt faster with world-class engineers and product
                      engineering practices.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div class="block rounded-lg bg-[#D1E3ED] shadow-lg ">
                  <div class="flex-col flex gap-6 p-6 justify-center justify-items-center ">
                    <h4 class="mb-4 text-2xl font-semibold">UI/UX Design </h4>
                    <div className="flex justify-center">
                      <Image src={DemoLogo} className="w-1/2 h-1/2" />
                    </div>
                    <p class="mt-4">
                      Our mission is to enable people anywhere to solve big
                      problems. Our customers choose us because we help innovate
                      and adapt faster with world-class engineers and product
                      engineering practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="mb-40" />
      </div>
    </>
  );
};

export default Whatwedo;
