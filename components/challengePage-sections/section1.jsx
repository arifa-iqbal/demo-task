import Image from 'next/image';
import Link from 'next/link';

const FirstSection = () => {
    return (
        <section className="bg-white py-8">
            <div className="container mx-auto px-4 flex flex-col items-center text-center space-y-6 md:space-y-8 lg:space-y-10">
                <div className="w-full max-w-md">
                    <Image
                        // src="/path/to/your/image.png" // Replace with your actual image path
                        alt="Description of the image"
                        width={400}
                        height={300}
                        className="rounded-lg"
                    />
                </div>
                <h2 className="text-2xl font-bold text-blue-600 md:text-3xl lg:text-4xl">
                    EVERYTHING YOU NEED TO RAISE YOUR SCORES FAST!
                </h2>
                <p className="text-gray-700">You Must Register to Participate</p>
                <div className="flex flex-col space-y-4 w-full max-w-xs">
                    <Link href="/register" className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">

                        REGISTER HERE
                    </Link>
                    <Link href="/schedule-call" className="border border-blue-600 text-blue-600 py-3 rounded-md hover:bg-blue-50">
                        HAVE QUESTIONS? SCHEDULE A CALL
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FirstSection;