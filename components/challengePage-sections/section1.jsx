import Image from "next/image";
import Link from "next/link";

const FirstSection = () => {
  return (
    <section className="bg-[#edf9fe] py-[30px] md:py-[50] lg:py-[70px] lg:text-center ">
      <div className=" max-w-[1320px] px-5  w-full mx-auto flex flex-col-reverse md:flex-row md:text-center items-center justify-between gap-10">
        <div className="flex flex-col xl:items-start lg:items-start md:items-start items-center ">
          <h2 className="text-[36px] font-bold text-blue-600 md:text-[24px] lg:text-[30px] xl:text-[36px] 2xl:text-[44px] xl:text-start lg:text-start md:text-start text-center mb-[16px]  lg:mb-[20px] ">
            EVERYTHING YOU NEED TO RAISE YOUR SCORES FAST!
          </h2>
          <p className="text-black text-base md:text-lg  xl:text-start lg:text-start md:text-start text-center   lg:text-2xl mb-3 lg:mb-6 ">
            You Must Register to Participate
          </p>
          <div className="flex flex-col lg:flex-row w-full max-w-lg gap-4 md:gap-6">
            <Link
              href="/register"
              className="bg-blue-600 text-white py-3 px-4 rounded-md text-center text-[12px]  font-bold sm:font-normal sm:text-[16px] hover:bg-blue-700 text-base"
            >
              REGISTER HERE
            </Link>
            <Link
              href="/schedule-call"
              className="border border-blue-600 text-blue-600 py-2 text-[12px]  font-bold sm:font-normal sm:text-[16px] md:py-3 px-2 md:px-4 rounded-md text-center hover:bg-blue-50 text-base"
            >
              HAVE QUESTIONS? SCHEDULE A CALL
            </Link>
          </div>
        </div>
        <div className=" lg:max-w-[528px] lg:max-h-[471px] mb-10 md:mb-0">
          <Image
            src="/assets/firstSection.svg"
            alt="Description of the image"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
