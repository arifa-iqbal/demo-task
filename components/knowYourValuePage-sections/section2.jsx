import React from "react";
import Image from "next/image";

import { GiCheckMark } from "react-icons/gi";

const Knowsecondsection = () => {
  return (
    <section className="bg-[#edf9fe] py-20">
      <div className="max-w-[1320px] px-5 w-full mx-auto md:px-10 lg:px-20 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="w-full max-w-md mb-10 md:mb-0">
          <Image
            src="/assets/know-second.svg"
            alt="Description of the image"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col items-start">
          <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 text-start mb-6 md:mb-10">
            Knowing and articulating the value you offer a university is
            essential for gaining admission into your top choices. 
          </h5>
          <p className="text-black mb-6">
            In order to Know Your Value, you should be able to say yes to ALL of
            these
          </p>
          <div className="text-left space-y-4">
            <div className="flex xl:items-center gap-4">
              <div className="relative flex items-center justify-center w-[26px] h-[26px] bg-blue-200 rounded-full">
                <GiCheckMark className="text-blue-600 text-sm" />
              </div>
              <p className="text-gray-500 flex-1">
                Can you confidently list 4-5 reasons why a university would
                consider you exceptionally valuable, excluding academic
                achievements?
              </p>
            </div>
            <div className="flex xl:items-center gap-4">
              <div className="relative flex items-center justify-center w-[26px] h-[26px] bg-blue-200 rounded-full">
                <GiCheckMark className="text-blue-600 text-sm" />
              </div>
              <p className="text-gray-500 flex-1">
                Do you have a clear strategy of how to highlight this value
                throughout the various parts of your application
              </p>
            </div>
            <div className="flex xl:items-center gap-4">
              <div className="relative flex items-center justify-center w-[26px] h-[26px] bg-blue-200 rounded-full">
                <GiCheckMark className="text-blue-600 text-sm" />
              </div>
              <p className="text-gray-500 flex-1">
                Are you confident that, in the final stage of the admissions
                process, an admissions officer would strongly advocate for your
                acceptance over other applicants?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowsecondsection;
