import Link from 'next/link';

const SecondSection = () => {
    return (
        <section className="py-8">
            <div className="container mx-auto px-4 text-center bg-[url('/assets/bgsection2.svg')] bg-cover bg-center py-20 rounded-3xl">
                <div className="flex flex-col items-center space-y-6 md:space-y-8 lg:space-y-5">
                    <h3 className="text-xl font-semibold text-white md:text-2xl lg:text-4xl">
                        CHALLENGE A FRIEND TO JOIN YOU
                    </h3>
                    <p className="text-white text-lg lg:text-xl">
                        Everything is more fun with a friend. Get results together!
                    </p>
                    <Link href="/register" className="bg-white text-black py-3 px-8 md:px-10 rounded-md hover:bg-blue-700 hover:text-white">

                        REGISTER HERE

                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SecondSection;
