"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); // State for user menu toggle

  return (
    <nav className="bg-white shadow-md">
      <div className="w-[80%] mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo and title */}
          <div className="flex items-center justify-center">
            <div className="grid items-center justify-center imgHead">
              <Image
                src="/assets/navLogo.svg"
                alt="College Mastermind Logo"
                width={200}
                height={69}
              />
            </div>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center ">
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
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="ml-2 flex bg-[#4b66ea]  rounded-full w-30 h-30 "
            >
              <span className=" bg-[#4b66ea] p-1 rounded-full w-30 h-30 ">
                <Image
                  src="/assets/navPersonIcon.svg" // Path to your person icon
                  alt="User Icon"
                  width={30}
                  height={30}
                  className="color-[#4b66ea]"
                />
              </span>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`absolute md:relative md:top-0 top-[100px] left-0 w-full md:w-auto bg-white md:bg-transparent ${
              isMenuOpen ? "block" : "hidden"
            } md:flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2`}
          >
            <Link
              href="/home"
              className="py-2 px-3 text-blue-500 block text-center"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="py-2 px-3 flex items-center justify-center text-blue-500 block"
            >
              About
            </Link>
            <Link
              href="/services"
              className="py-2 px-3 flex items-center justify-center text-blue-500 block"
            >
              Services
            </Link>
            <Link
              href="/countries"
              className="py-2 px-3 flex items-center justify-center text-blue-500 block"
            >
              Countries
            </Link>
            <Link
              href="/partnership"
              className="py-2 px-3 text-blue-500 block text-center"
            >
              Partnership
            </Link>
            <Link
              href="/events"
              className="py-2 px-3 text-blue-500 block text-center"
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="py-2 px-3 text-blue-500 block text-center"
            >
              Contact Us
            </Link>
          </div>

          {/* User Menu for Register and Login */}
          {isUserMenuOpen && (
            <div className="absolute top-[54px] right-[62px] w-[100px] md:bg-transparent flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 bg-[#f0f9fe] ">
              <Link
                href="/register"
                className="px-3 py-2 rounded text-black-500 block text-center"
              >
                Register
              </Link>
              <Link
                href="/login"
                className="px-3 py-2 rounded bg-blue-500 text-white block text-center"
              >
                Log In
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
