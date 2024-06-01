import React from "react";
import Cards from "@/components/seventhSectionCards/cardss";
import Image from "next/image";

const KnowthirdSection = () => {
  return (
    <section className="bg-[#edf9fe] py-10 pt-0 relative">
      <Image
        src="/assets/Frame 118.png"
        alt=""
        className="absolute right-0 top-[25px] w-[260px] h-full"
        width={100}
        height={100}
      />
      <div className="max-w-[1320px] px-5 w-full mx-auto  py-8 ">
        <h2 className="font-normal text-4xl  md:text-2xl lg:text-4xl text-center xl:w-[75%] lg:w-[90%] w-full   mx-auto mb-20">
          A diamond that is buried deep underneath the soil is only valuable
          once it is mined, cut, and polished.
        </h2>
        <div className="flex flex-col md:flex-row item-strech justify-center gap-5 mt-10">
          <Cards
            title="Be Valuable"
            description="Don’t be like a rough diamond waiting to be discovered. Present yourself to universities as a polished gem showcasing your full potential and most brilliant qualities!"
          />
          <Cards
            title="It’s Not about Grades or Activities"
            description="Academic excellence and extracurricular activities are expected. Those parts of your application are only the first hurdle towards gaining acceptance into a university. "
          />
          <Cards
            title="Why Value is Important"
            description="Universities are not willing to take risks. They want strong students who will add to the campus and who are likely to become very successful adults."
          />
        </div>
      </div>
    </section>
  );
};

export default KnowthirdSection;
