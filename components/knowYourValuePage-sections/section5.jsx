import React from "react";
import Image from "next/image";

const KnowfifthSection = () => {
  return (
    <section className="bg-[#edf9fe] py-20">
      <div className="max-w-[1320px] px-5 w-full mx-auto md:px-10 lg:px-20 flex flex-col   xl:flex-row lg:flex-row    items-center gap-8 md:gap-16">
        <div className="flex flex-col order-2 lg:order-1 items-start xl:w-[55%] lg:w-[55%] w-full">
          <h5 className="text-xl md:text-2xl lg:text-[40px] font-normal lg:leading-[60px] text-blue-600 text-start mb-6 md:mb-10">
            Exploring Your Value with College Mastermind
          </h5>
          <p className=" order-1 lg:order-2 mb-6 text-[22px] text-[#758EB3]">
            At College Mastermind, we have a Know Your Value process where we
            will work with you to find, develop, and present yourself in a way
            that ensures that colleges see the incredible value you will bring
            to their campuses now and in the future
          </p>
          
        </div>
        <div className="xl:w-[40%] lg:w-[40%] w-full  mb-10 md:mb-0">
          <Image
            src="/assets/Frame 252.svg"
            alt="Description of the image"
            width={600}
            height={400}
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default KnowfifthSection;
