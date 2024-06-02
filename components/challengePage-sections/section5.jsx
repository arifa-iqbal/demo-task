import React from "react";

const FifthSection = () => {
    return (
        <section className="px-4 bg-[#edf9fe]">
            <div className="max-w-[1320px] px-5 w-full mx-auto text-center bg-[url('/assets/bgImg.svg')] bg-cover bg-center py-20 rounded-3xl">
                <div className="flex flex-col items-center space-y-6 md:space-y-6 lg:space-y-5">
                    <div className="p-4 md:p-8">
                        <h3 className="text-[28px] font-normal gilroy-semibold text-white md:text-[30px] pb-6 lg:text-[40px]">
                            NOBODY GETS RESULTS LIKE US
                        </h3>
                        <p className="text-white text-[18px] lg:text-[22px] ">With our proven curriculum and teaching methodologies get results – as <br />
                            long as YOU put in the WORK. Our sessions are short, powerful, and fun!</p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FifthSection;