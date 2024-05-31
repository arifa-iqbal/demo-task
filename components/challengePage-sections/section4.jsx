import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const ForthSection = () => {
    return (
        <section className="bg-white py-10">
            <div className="container mx-auto px-4 md:px-8 lg:px-20 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 lg:space-x-16">
                <div className="flex flex-col items-start md:order-2 text-white">
                    <h5 className="text-2xl font-bold text-blue-600 md:text-3xl lg:text-4xl mb-10">
                        THE 6-Week Schedule
                    </h5>
                    <div className="text-left p-6 md:p-9 bg-blue-400 rounded-2xl">
                        <h6 className='font-bold pb-2'>Initial Test </h6>
                        <p>June 25th, 26th, or 27th</p>
                        <div className='pt-4'>
                            <h6 className='font-bold pb-2'>Classes </h6>
                            <p>Dates: <br />
                                Monday, Wednesday, and Friday <br />
                                July 8th - August 17th</p>
                            <p className='font-bold py-2'>
                                Times: <br />
                                Morning Session: 10:30am - 11:30am <br />
                                Afternoon session: 3:30pm - 4:30pm
                            </p>
                            <p >Live Classes on Zoom - All sessions will be recorded</p>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-md md:order-1">
                    <Image
                        src="/assets/forthSectionImg.svg"
                        alt="Description of the image"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default ForthSection;
