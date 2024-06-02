import React from "react";
import "@/styles/styles.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white footer py-4">
      <div className="max-w-[1320px] px-5 w-full mx-auto">
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
              <h5 className="text-[22px] gilroy-bold">Quick Link</h5>
              <ul>
                <li>
                  <a href="/home" className="text-lg">Home</a>
                </li>
                <li>
                  <a  href="/about" className="text-lg">About</a>
                </li>
                <li>
                  <a  href="/services" className="text-lg">Services</a>
                </li>
                <li>
                  <a  href="/partnership" className="text-lg">Partnership</a>
                </li>
                <li>
                  <a  href="/packages" className="text-lg">Packages</a>
                </li>
                <li>
                  <a  href="/team" className="text-lg">Meet Our Team</a>
                </li>
                <li>
                  <a  href="/contact" className="text-lg">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h5 className="text-[22px] gilroy-bold mb-3">Services</h5>
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
            <div className="xl:mt-0 lg-mt-0 md-mt-0 mt-5 xl:w-fit lg:w-fit md:w-fit sm:w-fit w-full">
              <h5 className="text-[22px] gilroy-bold mb-3">Countries</h5>
              <ul className="d-flex  xl:columns-2  lg:columns-2 md:columns-2 sm:columns-5 columns-4  ">
                <li className="w-fit">
                  <a href="/saudi">Saudi Arabia</a>
                </li>
                <li className="w-fit">
                  <a href="/uae">UAE</a>
                </li>
                <li className="w-fit">
                  <a href="/qatar">Qatar</a>
                </li>
                <li className="w-fit">
                  <a href="/oman">Oman</a>
                </li>
                <li className="w-fit">
                  <a href="/kuwait">Kuwait</a>
                </li>
                <li className="w-fit">
                  <a href="/bahrain">Bahrain</a>
                </li>
                <li className="w-fit">
                  <a href="/china">China</a>
                </li>
                <li className="w-fit">
                  <a href="/india">India</a>
                </li>
                <li className="w-fit">
                  <a href="/south-korea">South Korea</a>
                </li>
              </ul>
            </div>
            

            {/* Newsletter Column */}
            <div className="lg:w-[300px] md:w-[2400px]  w-[100%] xl:mt-0 lg-mt-0 md-mt-0 mt-5">
              <h5 className="text-[22px] gilroy-bold md:mt-[20px] ">Subscribe Our Newsletter</h5>
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

        <div className="text-end mt-3 text-sm terms flex  md:justify-end lg:justify-end xl:justify-end justify-center gap-4">
          <a href="/privacy" className="text-lg">Privacy Policy</a>
          <a href="/legal" className="text-lg">Legal Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
