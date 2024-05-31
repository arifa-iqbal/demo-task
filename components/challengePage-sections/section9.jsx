import React from 'react'
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const NinthSection = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 md:px-10 lg:px-20 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="w-full max-w-md mb-10 md:mb-0">
                    <Image
                        src="/assets/ninthSectionImg.svg"
                        alt="Description of the image"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
                <div className='flex flex-col items-start'>
                    <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 text-start mb-6 md:mb-10">
                        No catch! This is a completely free <br /> opportunity.
                    </h5>
                    <p className='text-black mb-6'>Our test prep programs were designed to get amazing results!</p>
                    <div className="text-left space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="relative flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full">
                                <FaCheck className="text-blue-600" />
                            </div>
                            <p className="text-gray-500 flex-1">You will be asked to submit a brief video testimonial at the end of your journey and take a few surveys along the way.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full">
                                <FaCheck className="text-blue-600" />
                            </div>
                            <p className="text-gray-500 flex-1">You are required to complete the entire process from start to finish, including all of the practice tests and homework assignments as part of your commitment to joining the group.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full">
                                <FaCheck className="text-blue-600" />
                            </div>
                            <p className="text-gray-500 flex-1">You can share your great results with others!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NinthSection;
