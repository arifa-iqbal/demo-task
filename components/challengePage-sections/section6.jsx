
import Image from 'next/image';
import Card from "@/components/sixthSectionCrds/card"
import Link from 'next/link';

const SixthSection = () => {
    return (
        <section className="bg-[#edf9fe] py-10 hidden md:block">
            <div className="max-w-[1320px] px-5 w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="w-full lg:w-1/2">
                    <Image
                        src="/assets/SixthSectionImg.svg"
                        alt="Description of the image"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
                <div className="w-full lg:w-1/2 lg:max-w-[766px] pt-18">
                    <h5 className="font-normal leading-10 text-blue-600 text-[20px] md:text-[30px] lg:text-[38px] text-start mb-4 lg:mb-6  ">
                        We ll have your scores up in no time with weekly practice tests! We even had two
                        perfect scorers last year!
                    </h5>
                    <p className='text-gray-400 text-md md:text-lg lg:text-xl mb-4 lg:mb-6'>
                        Every Saturday there will be a proctored mock exam
                    </p>

                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 py-4 lg:py-8">
                        <Card
                            title="Saturday Exam Dates:"
                            description1="July 13th, 20th, 27th"
                            description2="August 3rd, 10th, 17th."
                        />
                        <Card
                            title="Choose a morning or afternoon exam time"
                            description1="10am - 2pm EST or"
                            description2="3pm-7pm EST"
                        />
                    </div>
                    <div className='mt-6'>
                        <Link href="/register" className="bg-blue-600 text-white py-2 px-4 md:py-3 md:px-6 rounded-md hover:bg-blue-700 text-base">
                            Register Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SixthSection;

