import React from "react";

const Cards = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-[30px]  relative z-10 w-[305px] h-[290] text-center">
      <h2
        className="text-[28px] font-bold px-3  mb-[8px] text-[#222161] text-center w-[290px] h-[70px]   "
      >
        {props.title}
      </h2>
      <p className="text-[#758EB3] text-lg   py-2 text-center">{props.description}</p>
    </div>
    
  );
};

export default Cards;
