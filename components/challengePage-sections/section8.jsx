import React from 'react'
import { GiCheckMark } from "react-icons/gi";
import Link from 'next/link';

const EighthSection = () => {
    return (
        <div className='bg-[#edf9fe] text-center pt-16 flex flex-col items-center px-4'>
            <h2 className='font-bold text-[30px] md:text-[38px] lg:text-[40px]'>
                SIGN UP FOR OUR FREE 6 WEEK SAT <br /> CHALLENGE
            </h2>
            <div className='flex justify-center mt-14 w-full'>
                <div className='w-full max-w-4xl bg-white shadow-2xl rounded-3xl p-6 md:p-10 z-10'>
                    <div className="text-left space-y-4">
                        <div className="flex xl:items-center gap-4">
                            <div className="relative flex items-center justify-center w-[26px] h-[26px] bg-blue-200 rounded-full">
                                <GiCheckMark className="text-blue-600 text-sm" />
                            </div>
                            <p className="text-gray-500 w-[90%]">A diagnostic test to gauge your starting point</p>
                        </div>
                        <div className="flex xl:items-center gap-4">
                            <div className="relative flex items-center justify-center w-[26px] h-[26px] bg-blue-200 rounded-full">
                                <GiCheckMark className="text-blue-600 text-sm" />
                            </div>
                            <p className="text-gray-500 w-[90%]">A free score analysis where you can talk to a live test prep expert to set goals for your 6 weeks.</p>
                        </div>
                        <div className="flex xl:items-center gap-4">
                            <div className="relative flex items-center justify-center w-[26px] h-[26px] bg-blue-200 rounded-full">
                                <GiCheckMark className="text-blue-600 text-sm" />
                            </div>
                            <p className="text-gray-500 w-[90%]">Unlimited access to our Google classroom with all materials, assignments, and a large database of video solutions.</p>
                        </div>
                        <div className="flex xl:items-center gap-4">
                            <div className="relative flex items-center justify-center w-[26px] h-[26px] bg-blue-200 rounded-full">
                                <GiCheckMark className="text-blue-600 text-sm" />
                            </div>
                            <p className="text-gray-500 w-[90%]">Proven strategies and stress reduction techniques to help you eliminate mistakes.</p>
                        </div>
                        <div className="flex xl:items-center gap-4">
                            <div className="relative flex items-center justify-center w-[26px] h-[26px] bg-blue-200 rounded-full">
                                <GiCheckMark className="text-blue-600 text-sm" />
                            </div>
                            <p className="text-gray-500 w-[90%]">Accountability, progress tracking, & group support.</p>
                        </div>
                        <div className="flex xl:items-center gap-4">
                            <div className="relative flex items-center justify-center w-[26px] h-[26px] bg-blue-200 rounded-full">
                                <GiCheckMark className="text-blue-600 text-sm" />
                            </div>
                            <p className="text-gray-500 w-[90%]">Weekly exams to test your knowledge in real testing conditions.</p>
                        </div>
                        <div className="flex xl:items-center gap-4">
                            <div className="relative flex items-center justify-center w-[26px] h-[26px] bg-blue-200 rounded-full">
                                <GiCheckMark className="text-blue-600 text-sm" />
                            </div>
                            <p className="text-gray-500 w-[90%]">You get immediate score results with our automated scoring system.</p>
                        </div>
                        <div className="flex xl:items-center gap-4">
                            <div className="relative flex items-center justify-center w-[26px] h-[26px] bg-blue-200 rounded-full">
                                <GiCheckMark className="text-blue-600 text-sm" />
                            </div>
                            <p className="text-gray-500 w-[90%]">A final exam with a complete expert analysis of the results.</p>
                        </div>
                        <div className="flex xl:items-center gap-4">
                            <div className="relative flex items-center justify-center w-[26px] h-[26px] bg-blue-200 rounded-full">
                                <GiCheckMark className="text-blue-600 text-sm" />
                            </div>
                            <p className="text-gray-500 w-[90%]">Join the 86% of our students who have scored in the top 5% of all SAT scorers in the nation!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <Link href="/register" className="bg-blue-600 text-white py-4 px-14 rounded-md hover:bg-blue-700 text-base">
                    Register Now
                </Link>
            </div>
        </div>
    )
}

export default EighthSection;
