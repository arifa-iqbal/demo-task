import Image from 'next/image';


const ForthSection = () => {
    return (
        <section className="bg-[#edf9fe] py-10 pt-0">
            <div className="max-w-[1320px] px-5  w-full mx-auto md:px-8 lg:px-10 flex flex-col md:flex-row items-end justify-center space-y-4 md:space-y-0 md:space-x-8 lg:space-x-16 max-md:items-center">
                <div className="flex flex-col items-center  md:items-start text-white max-md:order-2 order-1 pt-[50px] ">
                    <h5 className="font-semibold text-blue-600 text-[20px] sm:text-[26px] lg:text-[30px]  xl:text-[40px] mb-6 md:text-center ">
                        THE 6-Week Schedule
                    </h5>
                    <div className="text-left p-6 bg-blue-400 rounded-2xl max-w-[568px] ">
                        <h6 className='font-normal pb-2 text-[28px] md:text-[30px]'>Initial Test </h6>
                        <p className='text-xl font-normal text-[18px] md:text-[20px]'>June 25th, 26th, or 27th</p>
                        <div className='pt-4'>
                            <h6 className='font-normal pb-2 text-[28px] md:text-[30px]  '>Classes </h6>
                            <p className='text-xl font-normal text-[18px] md:text-[20px]'>Dates: <br />
                                Monday, Wednesday, and Friday <br />
                                July 8th - August 17th</p>
                            <p className='text-xl font-bold py-2 text-[18px] md:text-[20px]'>
                                Times: <br />
                                Morning Session: 10:30am - 11:30am <br />
                                Afternoon session: 3:30pm - 4:30pm
                            </p>
                            <p className='text-xl font-normal text-[18px] md:text-[20px]'>Live Classes on Zoom - All sessions will be recorded</p>
                        </div>
                    </div>
                </div>
                <div className='relative w-full max-w-[456px] h-[492px] h-a max-md:order-1 order-2'>
                    <Image
                        src="/assets/forthSectionImg.svg"
                        alt="Description of the image"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default ForthSection;
