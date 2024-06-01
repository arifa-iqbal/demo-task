"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); // State for user menu toggle

  return (
    <nav className="bg-[#edf9fe] shadow-lg py-4">
      <div className="max-w-[1320px] px-5 w-full mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo and title */}
          <div className="flex items-center">
            <div className="lg:grid items-center justify-center w-[100%] h-[100%] lg:w-[160px] lg:h-[56px] imgHead">
              <Image
                src="/assets/navLogo.svg"
                alt="College Mastermind Logo"
                className="w-full h-full hidden lg:block"
                width={100}
                height={100}
              />
              <Image
                src="/assets/logoImg.svg"
                alt="logo image"
                className="block lg:hidden"
                width={60}
                height={60}
              />
            </div>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden flex items-center ">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center"
            >
              <Image
                src="/assets/navMenuIcon.svg"
                alt="Menu Icon"
                width={30}
                height={30}
              />
            </button>

            {/* Person Icon for User Menu */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="ml-2 flex items-center"
              >
                <Image
                  src="/assets/navPersonIcon.svg"
                  alt="User Icon"
                  width={30}
                  height={30}
                  className="bg-[#4b66ea] p-1 rounded-full"
                />
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                  <Link
                    href="/register"
                    className="block px-4 py-2 text-black text-center text-base font-medium"
                  >
                    Register
                  </Link>
                  <Link
                    href="/login"
                    className="block px-4 py-2 bg-blue-500 text-white text-center text-base font-medium rounded-md"
                  >
                    LOG IN
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <div
            className={`${isMenuOpen ? "block" : "hidden"
              }  lg:flex lg:items-center  space-y-2 lg:space-y-0 lg:space-x-4 absolute lg:relative lg:top-0 top-[100px] left-0 w-full md:w-auto  bg-white md:bg-transparent`}
          >
            <Link href="/home" className="py-2 px-3 text-black xl:text-lg lg:text-base text-center font-medium block">
              Home
            </Link>
            <Link href="/about" className="py-2 px-3 text-black xl:text-lg lg:text-base font-medium lg:px-0 flex justify-center items-center">
              About <IoIosArrowDown className="ms-2" />
            </Link>
            <Link href="/services" className="py-2 px-3 text-black xl:text-lg lg:text-base font-medium lg:px-0 flex justify-center items-center">
              Services <IoIosArrowDown className="ms-2" />
            </Link>
            <Link href="/countries" className="py-2 px-3 text-black xl:text-lg lg:text-base font-medium lg:px-0 flex justify-center items-center">
              Countries <IoIosArrowDown className="ms-2" />
            </Link>
            <Link href="/partnership" className="py-2 px-3 text-black xl:text-lg text-center lg:text-base font-medium lg:px-0 block">
              Partnership
            </Link>
            <Link href="/events" className="py-2 px-3 text-black xl:text-lg lg:text-base font-medium text-center lg:px-0 block">
              Events
            </Link>
            <Link href="/contact" className="py-2 px-3 text-black xl:text-lg lg:text-base text-center font-medium lg:px-0 block">
              Contact Us
            </Link>
          </div>

          {/* Register and Login Links for larger screens */}
          <div className="hidden lg:flex">
            <Link
              href="/register"
              className="px-3 py-2 rounded text-black block text-center xl:text-lg lg:text-base font-medium"
            >
              Register
            </Link>
            <Link
              href="/login"
              className="px-3 py-2 rounded-md bg-blue-500 text-white block text-center xl:text-base lg:text-sm box-shadow-lg"
            >
              LOG IN
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
