"use client";
import { useEffect, useState } from "react";
import {
  FaWheelchair,
  FaGlobe,
  FaCalendarAlt,
  FaHome,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ScrollBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBanner(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Banner */}
      <div
        className={`fixed bottom-4 left-1/2 w-full transform -translate-x-1/2 transition-opacity duration-500 z-50 hidden md:block ${
          showBanner ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-fit mx-auto">
          <div className="bg-white shadow-lg rounded-full flex items-center px-6 py-3 space-x-4">
            <div className="text-center">
              <p className="text-lg font-serif">Book Your Appointment Today!</p>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full px-5 py-2 flex items-center space-x-2">
              <FaCalendarAlt />
              <span>Request Appointment</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Footer Icons
      {showBanner && (
        <div className="fixed bottom-0 w-full bg-white shadow-md flex justify-around py-3 z-50 md:hidden">
          {[
            { icon: <FaHome />, href: "#home" },
            { icon: <FaPhone />, href: "tel:+1234567890" },
            { icon: <FaCalendarAlt />, href: "#appointment" },
            { icon: <FaMapMarkerAlt />, href: "#location" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="bg-orange-500 rounded-full p-3 text-white shadow-md"
            >
              {item.icon}
            </a>
          ))}
        </div>
      )} */}
    </>
  );
}
