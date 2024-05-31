
import React from 'react'
import Cards from "@/components/seventhSectionCards/cardss"

const SeventhSection = () => {
    return (
        <section className="bg-white py-10">
            <div className=" lg:max-w-[1280px] flex flex-col md:flex-row item-strech justify-center gap-10 py-8 container mx-auto mt-10">
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
