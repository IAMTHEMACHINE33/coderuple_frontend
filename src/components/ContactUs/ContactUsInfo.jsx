const ContactUsInfo = () => {
  return (
    <div className=" grid grid-col gap-10 my-20 mx-10 md:mx-20 md:justify-items-start sm:justify-items-center ">
      <div>
        {/*  talako paragraph le laang haniracha */}
        <p className="font-bold text-3xl ">Let’s Work Together!</p>
        {/* <p className="w-1/2 mt-3">
          Please tell us a bit about you, your project, and how best to reach
          you. We’ll get right back to you.
        </p> */}
      </div>
      <div>
        <p>Customer Service representative:</p>
        <p className="font-bold">+977 9813643643</p>
        <p className="font-bold">+977 9813643643</p>
      </div>

      <div>
        <p className="text-sm">Do you prefer email?</p>
        <p className="font-bold">coderupleglobal@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactUsInfo;
