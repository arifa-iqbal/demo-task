import Link from 'next/link';

const SecondSection = () => {
    return (
        <section className='  px-4 lg:px-10' >
            <div className=" lg:max-w-[1280px] container mx-auto px-1  md:px-2 lg:px-3 text-center bg-[url('/assets/bgImg.svg')] bg-cover bg-center py-10 lg:py-20 rounded-[20px]">
                <div className="flex flex-col items-center space-y-3 md:space-y-4 lg:space-y-4">
                    <h3 className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
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
