import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md   px-10">
      <div className="max-w-7x1 mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4 items-center  justify-center">
            {/* Logo and title */}
            <div
              className="grid flex items-center justify-center
             imgHead"
            >
              <Image
                src="/assets/navLogo.svg"
                alt="College Mastermind Logo"
                width={227}
                height={100}
                className="h-12"
                style={{ color: "blue" }}
              />
            </div>

          
          </div>

          {/* Secondary Nav */}
          
          <div className="flex items-center space-x-2">
              {/* Primary Nav */}
              <div className="hidden md:flex items-center space-x-1">
              <Link href="/home " className="py-2 px-3 text-blue-500">
                Home
              </Link>
              <Link
                href="/about"
                className="py-2 px-3 flex justify-between items-center "
              >
                About
                <Image
                  src="/assets/dropdownIcon.svg"
                  alt="College Mastermind Logo"
                  width={10}
                  height={5}
                  className="ml-2"
                  style={{ color: "blue" }}
                />
              </Link>
              <Link
                href="/services"
                className="py-2 px-3  flex justify-between items-center "
              >
                Services
                <Image
                  src="/assets/dropdownIcon.svg"
                  alt="College Mastermind Logo"
                  width={10}
                  height={5}
                  className="ml-2"
                  style={{ color: "blue" }}
                />
              </Link>
              <Link
                href="/countries"
                className="py-2 px-3  flex justify-between items-center "
              >
                Countries
                <Image
                  src="/assets/dropdownIcon.svg"
                  alt="College Mastermind Logo"
                  width={10}
                  height={5}
                  className="ml-2"
                  style={{ color: "blue" }}
                />
              </Link>
              <Link href="/partnership" className="py-2 px-3 ">
                Partnership
              </Link>
              <Link href="/events" className="py-2 px-3 ">
                Events
              </Link>
              <Link href="/contact" className="py-2 px-3 ">
                Contact Us
              </Link>
            </div>
            <Link
              href="/register"
              className="px-3 py-2 rounded text-black-500 "
            >
              Register
            </Link>
            <Link
              href="/login"
              className="px-3 py-2 rounded bg-blue-500 text-white "
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
