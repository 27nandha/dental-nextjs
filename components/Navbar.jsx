"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaLocationDot } from "react-icons/fa6";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";

import { services, educationLinks } from "./data/NavData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // Single state for dropdowns
  const [activeserv, setActiveserv] = useState(false);
  const [activeedu, setActiveedu] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const educationRef = useRef(null);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function activateservices() {
    setActiveserv(true);
    setActiveedu(false);
  }

  function deactiveservices() {
    setActiveserv(false);
  }

  function activateeducation() {
    setActiveedu(true);
    setActiveserv(false);
  }
  function deactivateeducation() {
    setActiveedu(false);
  }

  return (
    <div className="navbar">
      <nav
        className={`bg-white font-tinos w-full top-0 z-50 fixed transition-all duration-300 shadow-black shadow-sm ${
          scrolled ? "py-1 md:py-0" : "py-3 md:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div>
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Revital Dental Logo"
                  width={scrolled ? 100 : 120} // change size on scroll
                  height={scrolled ? 48 : 64}
                  className="transition-all duration-300 h-auto w-auto cursor-pointer"
                />
              </Link>
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 focus:outline-none"
              >
                <RxHamburgerMenu size={24} />
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-col items-end space-y-2">
              {/* Location & Phone */}
              <div className="flex space-x-4 mb-4">
                <a
                  href="https://maps.google.com/?q=4311 S 31st Ste 145 Temple, TX 76502"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary flex  text-white hover:border hover:text-primary hover:border-primary px-4 py-2 justify-center items-center text-center rounded-full text-sm font-medium transition-all duration-300 ease-in-out hover:bg-white hover:scale-101"
                >
                  <div className="flex items-center space-x-2 pr-2 text-xl">
                    <FaLocationDot />
                  </div>
                  <div>4311 S 31st Ste 145 Temple, TX 76502</div>
                </a>
                <a
                  href="tel:2547737777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary border border-primary px-4 py-2 justify-center text-center rounded-full text-sm font-medium transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:border-primary hover:scale-103"
                >
                  <div className="flex">
                    <div className="items-center space-x-2 pr-2 text-xl">
                      <BiPhoneCall />
                    </div>
                    <div>(254) 773-7777</div>
                  </div>
                </a>
              </div>

              {/* Navigation */}
              <ul className="flex text-base font-normal text-gray-800 relative">
                <li className="hover:text-primary transform p-3 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:text-primary transform p-3 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                  <Link href="/about">About</Link>
                </li>
                <li className="hover:text-primary transform p-3 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                  <Link href="/patient-information">Patient Information</Link>
                </li>
                <li className="relative p-2 m-1 hover:bg-gray-200">
                  <button
                    className="hover:text-primary transform   transition-all duration-300 ease-in-out cursor-pointer"
                    onMouseOver={activateservices}
                  >
                    Services
                  </button>

                  <div
                    onMouseLeave={deactiveservices}
                    className={`fixed top-30 left-0 w-screen bg-primary text-white py-8 z-50 border-t border-white shadow-lg transition-all duration-500  ease-in-out ${
                      activeserv ? "block" : "hidden"
                    }`}
                  >
                    <h2 className="text-center">All Services</h2>
                    <hr className="w-[80%] mx-auto my-5" />
                    <div className="space-y-2  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto px-6">
                      {services.map((item, i) => (
                        <Link
                          key={i}
                          href={`/temple-tx/${item.link}`}
                          onClick={() => {
                            setActiveserv(false); // Close dropdown // Hide entire mobile menu
                          }}
                          className="block hover:underline hover:scale-105 transition-transform duration-300 ease-in-out"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="relative p-3 hover:bg-gray-200 cursor-pointer">
                  <button
                    className="hover:text-primary transform   transition-all duration-300 ease-in-out "
                    onMouseOver={activateeducation}
                  >
                    <Link href="/PatientEducation">Patient Education</Link>
                  </button>

                  <div
                    onMouseLeave={deactivateeducation}
                    ref={educationRef}
                    className={`fixed top-30 left-0 w-screen bg-primary text-white py-8 z-50 border-t border-white shadow-lg transition-all duration-300 ${
                      activeedu ? "block" : "hidden"
                    }`}
                  >
                    <div className="space-y-2  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto px-6">
                      {educationLinks.map((item, i) => (
                        <Link
                          key={i}
                          href={`/temple-tx/${item.link}`}
                          onClick={() => {
                            setActiveedu(false); // Close dropdown // Hide entire mobile menu
                          }}
                          className="block hover:underline hover:scale-105 transition-transform duration-300 ease-in-out"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="hover:text-primary px-1 transform p-3 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Menu */}

          {isOpen && (
            <div className="fixed top-0 left-0 w-full h-screen overflow-y-auto bg-primary z-50 text-white">
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button onClick={() => setIsOpen(false)}>
                  <FaTimes
                    size={24}
                    className="text-white hover:text-gray-200"
                  />
                </button>
              </div>

              {/* Mobile Navigation */}
              <ul className="flex flex-col w-full text-base font-semibold">
                <li className="px-6 py-4 border-b border-white hover:bg-primary cursor-pointer">
                  <Link href="/">Home</Link>
                </li>
                <li className="px-6 py-4 border-b border-white hover:bg-primary cursor-pointer">
                  <Link href="/about">About</Link>
                </li>
                <li className="px-6 py-4 border-b border-white hover:bg-primary cursor-pointer">
                  Patient Information
                </li>

                {/* Services Dropdown */}
                <li className="border-b border-white">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex justify-between items-center px-6 py-4 hover:bg-primary"
                  >
                    <span>Services</span>
                    {mobileServicesOpen ? (
                      <FaChevronUp size={16} />
                    ) : (
                      <FaChevronDown size={16} />
                    )}
                  </button>

                  {mobileServicesOpen && (
                    <ul className="bg-primary text-white">
                      {services.map((item, i) => (
                        <li
                          key={i}
                          className="px-8 py-3 border-t border-white hover:bg-primary cursor-pointer"
                        >
                          <Link
                            href={`/temple-tx/${item.link}`}
                            onClick={() => {
                              setIsOpen(false); // Close dropdown // Hide entire mobile menu
                            }}
                            className="block hover:underline hover:scale-105 transition-transform duration-300 ease-in-out"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li className="px-6 py-4 border-b border-white hover:bg-primary cursor-pointer">
                  Patient Education
                </li>
                <li className="px-6 py-4 border-b border-white hover:bg-primary cursor-pointer">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
