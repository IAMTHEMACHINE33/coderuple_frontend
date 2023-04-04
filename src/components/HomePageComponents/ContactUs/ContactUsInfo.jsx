const ContactUsInfo = () => {
  return (
    <div className=" grid grid-col w-1/2 gap-10 mb-10 justify-center  md:mx-20 md:justify-items-start sm:justify-items-start ">
      <div>
        {/*  talako paragraph le laang haniracha */}
        <p className="font-bold text-3xl ">Let’s Work Together!</p>
        <p className="mt-3">
          Please tell us a bit about you, your project, and how best to reach
          you. We’ll get right back to you.
        </p>
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
