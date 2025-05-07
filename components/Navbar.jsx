"use client";
import React, { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaLocationDot } from "react-icons/fa6";
("react-icons/fa");
import { services, educationLinks } from "./data/NavData"; // adjust path as needed
import {
  FaMapMarkerAlt,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Single state for dropdowns
  const [activeserv, setActiveserv] = useState(false);
  const [activeedu, setActiveedu] = useState(false);

  const servicesRef = useRef(null);
  const educationRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Change threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target) &&
        educationRef.current &&
        !educationRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
      <nav className="bg-white  font-tinos w-[100%] top-0 z-50  py-1 fixed shadow-black shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div>
              <img
                src="/logo.png"
                alt="Revital Dental Logo"
                className="h-12 sm:h-14 md:h-16 w-auto cursor-pointer"
              />
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
                  className="bg-orange-500 flex  text-white hover:border hover:text-orange-600 hover:border-orange-500 px-4 py-2 justify-center items-center text-center rounded-full text-sm font-medium transition-all duration-300 ease-in-out hover:bg-white hover:scale-101"
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
                  className="bg-white text-orange-500 border border-orange-500 px-4 py-2 justify-center text-center rounded-full text-sm font-medium transition-all duration-300 ease-in-out hover:bg-orange-600 hover:text-white hover:border-orange-600 hover:scale-103"
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
                <li className="hover:text-orange-600 transform p-3 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                  Home
                </li>
                <li className="hover:text-orange-600 transform p-3 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                  About
                </li>
                <li className="hover:text-orange-600 transform p-3 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                  Patient Information
                </li>
                <li
                  className="relative p-2 m-1 hover:bg-gray-200"
                >
                  <button
                    className="hover:text-orange-600 transform   transition-all duration-300 ease-in-out cursor-pointer"
                    onMouseOver={activateservices}
                  >
                    Services
                  </button>

                  <div
                    onMouseLeave={deactiveservices}
                    className={`fixed top-30 left-0 w-screen bg-orange-500 text-white py-8 z-50 border-t border-white shadow-lg transition-all duration-500  ease-in-out ${
                      activeserv ? "block" : "hidden"
                    }`}
                  >
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {services.map((section, index) => (
                        <div key={index} className="space-y-2">
                          <h4 className="text-lg font-bold mb-2">
                            {section.title}
                          </h4>
                          {section.items.map((item, idx) => (
                            <a
                              key={idx}
                              href={`/${section.title}`}
                              className="block hover:underline hover:scale-105 transition-transform duration-300 ease-in-out"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
                <li
                  className="relative p-3 hover:bg-gray-200 cursor-pointer"
                >
                  <button
                    className="hover:text-primary transform   transition-all duration-300 ease-in-out "
                    onMouseOver={activateeducation}
                  >
                    Patient Education
                  </button>

                  <div
                    onMouseLeave={deactivateeducation}
                    ref={educationRef}
                    className={`fixed top-30 left-0 w-screen bg-orange-500 text-white py-8 z-50 border-t border-white shadow-lg transition-all duration-300 ${
                      activeedu ? "block" : "hidden"
                    }`}
                  >
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {educationLinks.map((column, columnIndex) => (
                        <div key={columnIndex} className="space-y-2">
                          {column.items.map((item, index) => (
                            <a
                              key={index}
                              href="#"
                              className="block hover:underline hover:scale-105 transition-transform duration-300 ease-in-out"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="hover:text-orange-600 px-1 transform p-3 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                  Contact Us
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Menu */}

          {isOpen && (
            <div className="fixed top-0 left-0 w-full h-screen overflow-y-auto bg-orange-500 z-50 text-white">
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
                <li className="px-6 py-4 border-b border-white hover:bg-orange-600 cursor-pointer">
                  Home
                </li>
                <li className="px-6 py-4 border-b border-white hover:bg-orange-600 cursor-pointer">
                  About
                </li>
                <li className="px-6 py-4 border-b border-white hover:bg-orange-600 cursor-pointer">
                  Patient Information
                </li>

                {/* Services Dropdown */}
                <li className="border-b border-white">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex justify-between items-center px-6 py-4 hover:bg-orange-600"
                  >
                    <span>Services</span>
                    {mobileServicesOpen ? (
                      <FaChevronUp size={16} />
                    ) : (
                      <FaChevronDown size={16} />
                    )}
                  </button>

                  {mobileServicesOpen && (
                    <ul className="bg-orange-400 text-white">
                      {/* General Services */}
                      <li className="px-8 py-3 font-bold border-t border-white">
                        General
                      </li>
                      <li className="px-8 py-3 border-t border-white hover:bg-orange-600 cursor-pointer">
                        Dental Checkup
                      </li>
                      <li className="px-8 py-3 border-t border-white hover:bg-orange-600 cursor-pointer">
                        Dental Veneers
                      </li>
                      <li className="px-8 py-3 border-t border-white hover:bg-orange-600 cursor-pointer">
                        Full Mouth Reconstruction
                      </li>
                      <li className="px-8 py-3 border-t border-white hover:bg-orange-600 cursor-pointer">
                        Root Canal Treatment
                      </li>
                      <li className="px-8 py-3 border-t border-white hover:bg-orange-600 cursor-pointer">
                        TeethXpress
                      </li>

                      {/* Restorative Services */}
                      <li className="px-8 py-3 font-bold border-t border-white">
                        Restorative
                      </li>
                      <li className="px-8 py-3 border-t border-white hover:bg-orange-600 cursor-pointer">
                        Dental Crowns
                      </li>
                      <li className="px-8 py-3 border-t border-white hover:bg-orange-600 cursor-pointer">
                        Dentures
                      </li>
                      <li className="px-8 py-3 border-t border-white hover:bg-orange-600 cursor-pointer">
                        Invisalign
                      </li>
                      <li className="px-8 py-3 border-t border-white hover:bg-orange-600 cursor-pointer">
                        Smile Makeover
                      </li>
                      <li className="px-8 py-3 border-t border-white hover:bg-orange-600 cursor-pointer">
                        Zoom Whitening
                      </li>

                      {/* Specialty Services */}
                      <li className="px-8 py-3 font-bold border-t border-white">
                        Specialty
                      </li>
                      <li className="px-8 py-3 border-t border-white hover:bg-orange-600 cursor-pointer">
                        Dental Implants
                      </li>
                      <li className="px-8 py-3 border-t border-white hover:bg-orange-600 cursor-pointer">
                        Emergency Dentist
                      </li>
                      <li className="px-8 py-3 border-t border-white hover:bg-orange-600 cursor-pointer">
                        Kid Friendly Dentist
                      </li>
                      <li className="px-8 py-3 border-t border-white hover:bg-orange-600 cursor-pointer">
                        Teeth Whitening
                      </li>
                    </ul>
                  )}
                </li>

                <li className="px-6 py-4 border-b border-white hover:bg-orange-600 cursor-pointer">
                  Patient Education
                </li>
                <li className="px-6 py-4 border-b border-white hover:bg-orange-600 cursor-pointer">
                  Contact Us
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
