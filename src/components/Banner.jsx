const Banner = (props) => {
  return (
    <>
      <div className="relative flex  h-[40vh]   max-w-screen bg-[#154061] text-center justify-center items-center">
        <div className="grid justify-items-center sm:justify-items-center p-3">
          <p className=" text-[4rem] font-medium text-white">{props.text}</p>
          <p className="text-lg font-normal text-white">{props.subtext}</p>
        </div>
      </div>
    </>
  );
};

export default Banner;
