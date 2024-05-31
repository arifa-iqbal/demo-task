import Image from 'next/image';
import Link from 'next/link';

const FirstSection = () => {
    return (
        <section className="bg-white py-10 lg:text-center">
            <div className=" lg:w-[1280px] container mx-auto px-4 flex flex-col-reverse md:flex-row md:text-center items-center justify-between gap-10">
                <div className="flex flex-col items-start md:text-center">
                    <h2 className="text-[36px] font-bold text-blue-600 md:text-[40px] lg:text-[44px] text-start md:text-center mb-6 md:mb-10">
                        EVERYTHING YOU NEED TO RAISE
                        YOUR SCORES FAST!
                    </h2>
                    <p className="text-black text-base md:text-lg lg:text-2xl mb-6 md:text-center">
                        You Must Register to Participate
                    </p>
                    <div className="flex flex-col md:flex-row w-full max-w-lg gap-4 md:gap-6">
                        <Link href="/register" className="bg-blue-600 text-white py-3 px-4 rounded-md text-center hover:bg-blue-700 text-base">

                            REGISTER HERE

                        </Link>
                        <Link href="/schedule-call" className="border border-blue-600 text-blue-600 py-3 px-4 rounded-md text-center hover:bg-blue-50 text-base">

                            HAVE QUESTIONS? SCHEDULE A CALL

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

export default FirstSection;