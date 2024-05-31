import React from "react";
import "@/styles/styles.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white footer py-4">
      <div className="w-[80%] mx-auto">
        <div className="footerContentHead">
          <div className="mb-10">
            <Image
              src="/assets/logo.svg"
              alt="College Mastermind Logo"
              width={227}
              height={100}
            />
          </div>

          <div className="flex justify-between align-top flex-wrap">
            {/* Quick Link Column */}
            <div>
              <h5 className="font-size-20px">Quick Link</h5>
              <ul>
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/partnership">Partnership</a>
                </li>
                <li>
                  <a href="/packages">Packages</a>
                </li>
                <li>
                  <a href="/team">Meet Our Team</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h5 className="font-bold mb-3">Services</h5>
              <ul>
                <li>
                  <a href="/intensive">5-Day Intensive</a>
                </li>
                <li>
                  <a href="/test-prep">Test Prep</a>
                </li>
                <li>
                  <a href="/admissions">Admissions Service</a>
                </li>
                <li>
                  <a href="/scholarships">Scholarships</a>
                </li>
                <li>
                  <a href="/internship">Internship</a>
                </li>
                <li>
                  <a href="/events">Events</a>
                </li>
                <li>
                  <a href="/faqs">FAQs</a>
                </li>
              </ul>
            </div>

            {/* Countries Column */}
            <div>
              <h5 className="font-bold mb-3">Countries</h5>
              <ul>
                <li>
                  <a href="/saudi">Saudi Arabia</a>
                </li>
                <li>
                  <a href="/uae">UAE</a>
                </li>
                <li>
                  <a href="/qatar">Qatar</a>
                </li>
                <li>
                  <a href="/oman">Oman</a>
                </li>
                <li>
                  <a href="/kuwait">Kuwait</a>
                </li>
                <li>
                  <a href="/bahrain">Bahrain</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="mt-12">
                <li>
                  <a href="/china">China</a>
                </li>
                <li>
                  <a href="/india">India</a>
                </li>
                <li>
                  <a href="/south-korea">South Korea</a>
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="lg:w-[300px] md:w-[2400px]  sm:w-[100%] ">
              <h5 className="font-bold md:mt-[20px] md:mt-[20px]">Subscribe Our Newsletter</h5>
              <form className="form inputHead my-[41px] md:my-[10px] md:mb-[14px] ">
                <div className="inputContent">
                  <input
                    type="email"
                    placeholder="Email"
                    className="py-3 text-white input"
                  />
                  <Image
                    src="/assets/sendIcon.svg"
                    alt="Send Icon"
                    width={20}
                    height={20}
                  />
                </div>
              </form>
              <div className="flex items-center w-full flex-wrap md:justify-center  sm:justify-center md:mb-[30px] ">
                <li className="flex items-center justify-center border-[1px] border-white rounded-full w-[50px] h-[50px] mr-2 cursor-pointer">
                  <Image
                    src="/assets/facebook.svg"
                    alt="Facebook Logo"
                    width={30}
                    height={30}
                  />
                </li>
                <li className="flex items-center justify-center border-[1px] border-white rounded-full w-[50px] h-[50px] mr-2 cursor-pointer">
                  <Image
                    src="/assets/Path.svg"
                    alt="Path Logo"
                    width={30}
                    height={30}
                  />
                </li>
                <li className="flex items-center justify-center border-[1px] border-white rounded-full w-[50px] h-[50px] mr-2 cursor-pointer">
                  <Image
                    src="/assets/Vector.svg"
                    alt="Vector Logo"
                    width={30}
                    height={30}
                  />
                </li>
                <li className="flex items-center justify-center border-[1px] border-white rounded-full w-[50px] h-[50px]">
                  <Image
                    src="/assets/Vector (1).svg"
                    alt="Vector Logo"
                    width={30}
                    height={30}
                  />
                </li>
              </div>
            </div>
          </div>
        </div>

        <div className="text-end mt-3 text-sm terms">
          <a href="/privacy">Privacy Policy</a> |{" "}
          <a href="/legal">Legal Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
