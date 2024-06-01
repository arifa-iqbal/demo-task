import React from 'react'

const Cards = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-10 w-[100%] md:max-w-[305px] z-10 text-center ">
      <h2 className=" text-[28px] text-xl font-bold pb-2 mb-[8px] h-[70px] lg:w-[204px] w-[100%] text-center ">{props.title}</h2>
      <p className="text-gray-600 py-2 lg:w-[244px] text-center w-[100%] ">{props.description}</p>

    </div>
  );
};

export default Cards;