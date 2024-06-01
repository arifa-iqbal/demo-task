import React from 'react'

const Cards = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-10 w-[100%] md:max-w-[305px] z-10 ">
      <h2 className=" text-[28px] text-xl font-bold pb-2 mb-[8px] h-[70px] w-[204px] text-center ">{props.title}</h2>
      <p className="text-gray-600 py-2 w-[244px] text-center ">{props.description}</p>

    </div>
  );
};

export default Cards;