import React from 'react'

const Cards = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-md py-10 px-4 w-[100%] md:max-w-[305px]  z-10 text-center ">
      <h2 className=" text-[28px] font-normal gilroy-bold  pb-2 mb-[8px] h-[70px] lg:w-[90%] mx-auto w-[100%] text-center leading-[34.66px]">{props.title}</h2>
      <p className="text-[#758eb3] py-2 lg:w-[273px] text-center w-[100%]  mx-auto text-[18px]">{props.description}</p>

    </div>
  );
};

export default Cards;