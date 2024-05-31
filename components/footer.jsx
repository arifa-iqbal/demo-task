import React from "react";
import "@/styles/styles.css";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" max-w-7x1 mx-auto  bg-blue-800 text-white p-10 footer ">
      <div className="grid  items-start justify-start mb-10 imgHead">
        <Image
          src="/assets/logo.svg"
          alt="College Mastermind Logo"
          width={227}
          height={100} // Specify the height
          className="h-12"
        />
      </div>

      <div className="max-w-7xl mx-auto grid   md:grid-cols-5 gap-10 listHead">
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
              <a href="/bahrain">China</a>
            </li>
            <li>
              <a href="/bahrain">Korea</a>
            </li>
            <li>
              <a href="/bahrain">South India</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h5 className="font-bold mb-3">Subscribe Our Newsletter</h5>
          <form className="form">
            <div className="inputHead">
              <input
                type="email"
                placeholder="Email"
                className="p-2 text-black input"
              />
              <Image
                src="/public/assets/sendIcon.svg"
                alt="College Mastermind Logo"
                width={100}
                height={100}
                className="bg-black"
              />
            </div>
          </form>
          <div className="flex space-x-4 mt-4 bg-black">
            <a href="/facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="/instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/youtube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-end  mt-4 text-sm terms ">
        <a href="/privacy">Privacy Policy</a> | <a href="/legal">Legal Terms</a>
      </div>
    </footer>
  );
};

export default Footer;
