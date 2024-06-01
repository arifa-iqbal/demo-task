import Image from 'next/image';
import Link from 'next/link';

const KnowFirstSection = () => {
    return (
        <section className="bg-[#edf9fe] py-10 lg:text-center ">
      <div className=" max-w-[1320px] px-5 w-full mx-auto flex flex-col-reverse md:flex-row md:text-center items-center justify-between gap-10">
        <div className="flex flex-col items-start md:text-center">
          <h2 className="text-[36px] font-bold text-blue-600 md:text-[40px] lg:text-[44px] text-start  mb-6 md:mb-10">
          Value is the True Path to Admissions!
          </h2>
          <p className="text-black text-base md:text-lg lg:text-2xl mb-6 md:text-center lg:text-start">
            You should know 4-5 valuable reasons why a university would want you.
          </p>
          <div className="flex flex-col md:flex-row w-full max-w-lg gap-4 md:gap-6">
            <Link
              href="/register"
              className="bg-blue-600 text-white py-3 px-4 rounded-md text-center hover:bg-blue-700 text-base"
            >
              BOOK YOUR STRATEGY SESSION!
            </Link>
            
          </div>
        </div>
        <div className="w-full max-w-xl mb-10 md:mb-0">
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

export default KnowFirstSection;
