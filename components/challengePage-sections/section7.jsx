import React from 'react'
import Image from "next/image";
import Cards from "@/components/seventhSectionCards/cardss"

const SeventhSection = () => {
    return (
        <section className="bg-[#edf9fe] py-4 lg:py-10 relative">
            <h1 className='block md:hidden text-[30px] font-bold text-center py-[70px] px-[10px]'>They’ll have your scores up in no time! We even had 2 perfect scorers this past year!</h1>
            <div className='w-full lg:max-w-[456px]'>
                <Image src="/assets/Frame 118.png" alt="" width={600}
                    height={400} className='absolute right-0 top-[-8px]' />
            </div>
            <div className="max-w-[1320px] px-5 w-full mx-auto flex flex-col md:flex-row item-strech justify-center gap-5 md:py-8 lg:mt-10 flex-wrap" >
                <Cards
                    title="Proven Results"
                    description="Our curriculum was created by a graduate of Johns Hopkins University, and it gets results. 86% of our clients last year got a score in the top 5%!"
                />
                <Cards
                    title="Real Proctored Exams"
                    description="Every Saturday, you'll sit for a real, timed SAT exam. Receive instant feedback with our automated score calculator, eliminating the need to wait for your results."
                />
                <Cards
                    title="Get the Attention You Need"
                    description="Ask unlimited questions in our special Q&A forum and access our extensive library of video solutions to the assignments."
                />
                <Cards
                    title="COMPLETE SUPPORT"
                    description="Nobody is successful alone. You will be amazed with the tracking, accountability, and support you receive."
                />
            </div>
        </section>
    )
}

export default SeventhSection;
