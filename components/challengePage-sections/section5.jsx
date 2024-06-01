import React from "react";

const FifthSection = () => {
    return (
        <section className="px-4 bg-[#edf9fe]">
            <div className="max-w-[1320px] px-5 w-full mx-auto text-center bg-[url('/assets/bgImg.svg')] bg-cover bg-center py-20 rounded-3xl">
                <div className="flex flex-col items-center space-y-6 md:space-y-8 lg:space-y-5">
                    <div className="p-8">
                        <h3 className="text-xl font-normal text-white md:text-2xl lg:text-[40px]">
                            NOBODY GETS RESULTS LIKE US
                        </h3>
                        <p className="text-white lg:text-[22px] leading-relaxed">With our proven curriculum and teaching methodologies get results – as <br />
                            long as YOU put in the WORK. Our sessions are short, powerful, and fun!</p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FifthSection;