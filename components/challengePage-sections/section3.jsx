import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const ThrdSection = () => {
    return (
        <section className="bg-white py-10">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 lg:space-x-12">
                <div className="w-full  lg:order-1 lg:w-[456px] ">
                    <Image
                        src="/assets/thrdSectionImg.svg"
                        alt="Description of the image"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
                <div className="flex flex-col items-start md:order-1">
                    <h5 className=" font-bold text-blue-600 text-[18px] md:text-[28px]  lg:text-[38px] mb-6">
                        THE 6-WEEK CHALLENGE
                    </h5>
                    <div className="text-left space-y-4 text-[18PX] lg:text-[22px]">
                        <div className="flex items-center space-x-4">
                            <div className="relative flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full">
                                <FaCheck className="text-blue-600" />
                            </div>
                            <p className="text-gray-500 flex-1">3 Live Virtual Group Classes Every Week </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="relative flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full">
                                <FaCheck className="text-blue-600" />
                            </div>
                            <p className="text-gray-500 flex-1">All Materials Are Provided</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="relative flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full">
                                <FaCheck className="text-blue-600" />
                            </div>
                            <p className="text-gray-500 flex-1">Weekly Proctored Exams Assignments adjusted based on progress</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="relative flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full">
                                <FaCheck className="text-blue-600" />
                            </div>
                            <p className="text-gray-500 flex-1">Accountability & Progress Tracking Expert Guidance</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="relative flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full">
                                <FaCheck className="text-blue-600" />
                            </div>
                            <p className="text-gray-500 flex-1">Unlimited Opportunities to Ask Your Questions</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThrdSection;
