import Link from 'next/link';

const SecondSection = () => {
    return (
        <section className="bg-blue-100 py-8">
            <div className="container mx-auto px-4 text-center">
                <div className="flex flex-col items-center space-y-6 md:space-y-8 lg:space-y-10">
                    <h3 className="text-xl font-semibold text-blue-600 md:text-2xl lg:text-3xl">
                        CHALLENGE A FRIEND TO JOIN YOU
                    </h3>
                    <p className="text-gray-700">Everything is more fun with a friend. Get results together!</p>
                    <Link href="/register" className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700">
                        REGISTER HERE

                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SecondSection;