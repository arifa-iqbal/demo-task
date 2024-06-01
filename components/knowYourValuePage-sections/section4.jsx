import React from "react";
import Image from "next/image";

const KnowfourSection = () => {
  return (
    <section className="bg-[#edf9fe] ">
      <div className="max-w-[1320px] px-5 w-full mx-auto  py-8">
        <h2 className="font-normal text-4xl  md:text-2xl lg:text-4xl text-center w-[75%] mx-auto mb-20">
          The Value Gap
        </h2>
        <div className="bg-white xl:p-10 p-5 rounded-2xl box-shadow-lg   lg:flex xl:flex justify-between w-full">
          <div className="xl:w-[48%] lg:w-[48%] w-full">
            <Image src="/assets/CM-hourses.svg" alt="" className="w-full h-full" width={100} height={100} />
          </div>
          <div className="xl:w-[48%] lg:w-[48%] w-full xl:mt-0 lg:mt-0 mt-10">
            <p className="text-[#758EB3] text-[20px] font-normal xl:text-start lg:text-start text-justify">
              The value gap is how much value, beyond academics, you need to
              bring to a university in order to be accepted.
            </p>
            <p className="text-[#758EB3] text-[20px] font-normal mt-3">
              Lower scores and GPA mean you must show extra value to
              universities for acceptance compared to high-scoring applicants.
            </p>
            <p className="text-[#758EB3] text-[20px] font-normal mt-3">
              You can fill in the Value Gap by demonstrating ways that you will
              add positively to campus life or by showing that you are likely to
              become a successful adult and give back later
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowfourSection;
