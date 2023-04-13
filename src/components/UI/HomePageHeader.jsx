const HomePageHeader = (props) => {
  return (
    <p className="text-5xl text-cyan-500 sm:text-red-400 sm:text-7xl font-black leading-normal">
      {props.text}
    </p>
  );
};

export default HomePageHeader;
