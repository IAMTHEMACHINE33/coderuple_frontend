import React from "react";
import company from "../../Images/company.jpg";
import Image from "next/image";
const Content = () => {
  const myArray = ["apple", "banana", "orange", "mango"];
  return (
    <div className="relative flex justify-center bg-[#D9D9D9] ">
      <div className=" flex  justify-center responsive-container">
        <div className="py-20 flex flex-col gap-5 items-center">
          <h1 className="capitalize text-5xl font-semibold">Why Us?</h1>
          <p>Your ingenious ideas. Our state-of-the-art web development</p>
          <div className="flex flex-col md:flex-row flex-wrap  ">
            {myArray.map((item) => {
              console.log(item);
              return (
                <div
                  key={item}
                  className="flex flex-row flex-wrap w-full md:w-1/2 p-5  "
                >
                  <div className=" flex flex-col sm:flex-row items-center gap-5">
                    <Image
                      src={company}
                      className="h-40 w-40 rounded-full"
                    ></Image>
                    <div className="flex flex-col">
                      <h4 className="capitalize text-2xl font-semibold text-center">
                        Mobile Development
                      </h4>
                      <p className="text-center">
                        We only specialize in Google Ads because we give our
                        undivided focus on the ins and outs of this platform.
                        That is why we can deliver unimaginable results.
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
