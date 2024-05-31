import Image from 'next/image';
import Link from 'next/link';

const FirstSection = () => {
    return (
        <section className="bg-white py-10">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between space-y-6 md:space-y-8 lg:space-y-10 lg:space-x-8">
                <div className='flex flex-col items-start '>
                    <h2 className="text-2xl font-bold text-blue-600 md:text-3xl lg:text-5xl text-center lg:text-left">
                        EVERYTHING YOU NEED TO RAISE <br />
                        YOUR SCORES FAST!
                    </h2>
                    <p className="text-black my-10 text-lg lg:text-3xl lg:mb-6">You Must Register to Participate</p>

                    <div className="flex flex-col lg:flex-row gap-4 w-full ">
                        <Link href="/register" className="bg-blue-600 text-white py-3 px-6 rounded-md text-base hover:bg-blue-700">
                            REGISTER HERE
                        </Link>
                        <Link href="/schedule-call" className="border border-blue-600 text-blue-600 py-3 px-6 rounded-md text-base hover:bg-blue-50">
                            HAVE QUESTIONS? SCHEDULE A CALL
                        </Link>
                    </div>
                </div>
                <div className="w-full max-w-md lg:max-w-xl mx-auto lg:mx-0">
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
