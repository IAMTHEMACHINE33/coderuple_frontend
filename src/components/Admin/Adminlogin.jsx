import React, { useRef, useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
const Adminlogin = () => {
  const name = useRef("");
  const password = useRef("");
  const onSubmit = async () => {
    const response = await signIn("credentials", {
      name: name.current,
      password: password.current,
      redirect: true,
      callbackUrl: "/admin",
    });
    // console.log(response);
  };
  return (
    <div className="relative  flex justify-center">
      <div className="flex flex-row justify-center">
        <div className="w-6/12">
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_jcikwtux.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <input
            type="email"
            placeholder="Email"
            className="py-1.5 px-4 rounded-lg border outline-none border-[#6096BA] "
            onChange={(e) => {
              {
                name.current = e.target.value;
              }
            }}
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="py-1.5 px-4 rounded-lg outline-none border border-[#6096BA]"
            onChange={(e) => {
              {
                password.current = e.target.value;
              }
            }}
          ></input>
          <button
            type="submit"
            className="bg-[#6096BA] text-white rounded-2xl w-24"
            onClick={onSubmit}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adminlogin;
