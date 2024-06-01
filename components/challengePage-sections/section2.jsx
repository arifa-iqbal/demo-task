import Link from "next/link";

const SecondSection = () => {
  return (
    <section className="bg-[#edf9fe]  px-4 pt-8 lg:px-5">
      <div className=" max-w-[1320px] w-full mx-auto  md:px-2 lg:px-3 text-center bg-[url('/assets/bgImg.svg')] bg-cover bg-center py-10 lg:py-20 rounded-[20px]">
        <div className="flex flex-col items-center space-y-3 md:space-y-4 lg:space-y-4">
          <h3 className="text-2xl font-normal text-white md:text-3xl lg:text-[40px]">
            CHALLENGE A FRIEND TO JOIN YOU
          </h3>
          <p className="text-white text-lg lg:text-[22px] font-normal">
            Everything is more fun with a friend. Get results together!
          </p>
          <Link
            href="/register"
            className="bg-white py-3 px-8 md:px-10 rounded-md hover:bg-blue-700 hover:text-white text-base font-semibold text-[#272765]"
          >
            REGISTER HERE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
