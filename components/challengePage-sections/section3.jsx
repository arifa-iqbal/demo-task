import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const ThrdSection = () => {
    return (
        <section className="bg-white py-10">
            <div className="container mx-auto px-4 md:px-8 lg:px-20 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 lg:space-x-16">
                <div className="w-full max-w-md md:order-2">
                    <Image
                        src="/assets/thrdSectionImg.svg"
                        alt="Description of the image"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
                <div className="flex flex-col items-start md:order-1">
                    <h5 className="text-2xl font-bold text-blue-600 md:text-3xl lg:text-4xl mb-6">
                        THE 6-WEEK CHALLENGE
                    </h5>
                    <div className="text-left space-y-4">
                        <div className="flex items-center space-x-4">
                            <FaCheck className="text-blue-600" />
                            <p className="text-gray-500">3 Live Virtual Group Classes Every Week </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaCheck className="text-blue-600" />
                            <p className="text-gray-500">All Materials Are Provided</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaCheck className="text-blue-600" />
                            <p className="text-gray-500">Weekly Proctored Exams Assignments adjusted based on progress</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaCheck className="text-blue-600" />
                            <p className="text-gray-500">Accountability & Progress Tracking Expert Guidance</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaCheck className="text-blue-600" />
                            <p className="text-gray-500">Unlimited Opportunities to Ask Your Questions</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThrdSection;
