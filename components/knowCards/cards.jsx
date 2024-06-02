import React from "react";

const KnowCards = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-md py-10 px-4 w-[100%] md:max-w-[400px]  z-10 text-center ">
      <h2 className=" text-[32px] font-normal gilroy-semibold  pb-2 mb-[8px] h-[70px] lg:w-[90%] mx-auto w-[100%] text-center leading-[34.66px]">
        {props.title}
      </h2>
      <p className="text-[#758eb3] py-2 lg:w-[363px] text-center w-[100%]  mx-auto text-[20px]">
        {props.description}
      </p>
    </div>
  );
};

export default KnowCards;
