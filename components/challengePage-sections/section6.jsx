import Image from 'next/image';
import Card from "@/components/sixthSectionCrds/card"
import Link from 'next/link';


const SixthSection = () => {
    return (
        <section className="bg-white py-10">
            <div className="container mx-auto px-4 grid grid-cols-2 gap-3">
                <div className="max-w-lg">
                    <Image
                        src="/assets/SixthSectionImg.svg"
                        alt="Description of the image"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
                <div className="w-[766px]">
                    <h5 className="text-2xl font-bold text-blue-600 md:text-2xl lg:text-3xl text-start mb-10 leading-loose tracking-wider">
                        We'll have your scores up in no time with weekly practice tests! We even had two <br />
                        perfect scorers last year!
                    </h5>
                    <p className='text-gray-400 text-xl md:text-xl lg:text-2xl'>Every Saturday there will be a proctored mock exam</p>

                    <div className="grid grid-cols-2 gap-10 py-12">
                        <Card
                            title="Saturday Exam Dates:"
                            description1="July 13th, 20th, 27th "
                            description2=" August 3rd, 10th, 17th."
                        />
                        <Card
                            title="Choose a morning or afternoon exam time"
                            description1="10am - 2pm EST or "
                            description2=" 3pm-7pm EST"
                        />
                    </div>
                    <div className=' mt-6'>
                        <Link href="/register" className="bg-blue-600  text-white py-4 px-6 rounded-md hover:bg-blue-700  text-base px">
                            Register Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SixthSection;
