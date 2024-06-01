import React from "react";
import Image from "next/image";

import { GiCheckMark } from "react-icons/gi";

const NinthSection = () => {
  return (
    <section className="bg-[#edf9fe] py-20">
      <div className="max-w-[1320px] px-5 w-full mx-auto md:px-10 lg:px-20 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="w-full max-w-md mb-10 md:mb-0">
          <Image
            src="/assets/ninthSectionImg.svg"
            alt="Description of the image"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col items-start">
          <h5 className="text-[30px]  md:text-[38px] lg:text-[40px] font-bold text-blue-600 text-start mb-6 md:mb-10">
            No catch! This is a completely free <br /> opportunity.
          </h5>
          <p className="text-black mb-6">
            Our test prep programs were designed to get amazing results!
          </p>
          <div className="text-left space-y-4">
            <div className="flex xl:items-center gap-4">
              <div className="relative flex items-center justify-center w-[26px] h-[26px] bg-blue-200 rounded-full">
                <GiCheckMark className="text-blue-600 text-sm" />
              </div>
              <p className="text-gray-500 flex-1">
                You will be asked to submit a brief video testimonial at the end
                of your journey and take a few surveys along the way.
              </p>
            </div>
            <div className="flex xl:items-center gap-4">
              <div className="relative flex items-center justify-center w-[26px] h-[26px] bg-blue-200 rounded-full">
                <GiCheckMark className="text-blue-600 text-sm" />
              </div>
              <p className="text-gray-500 flex-1">
                You are required to complete the entire process from start to
                finish, including all of the practice tests and homework
                assignments as part of your commitment to joining the group.
              </p>
            </div>
            <div className="flex xl:items-center gap-4">
              <div className="relative flex items-center justify-center w-[26px] h-[26px] bg-blue-200 rounded-full">
                <GiCheckMark className="text-blue-600 text-sm" />
              </div>
              <p className="text-gray-500 flex-1">
                You can share your great results with others!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NinthSection;
