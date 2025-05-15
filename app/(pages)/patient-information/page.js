import Book from "@/components/Book";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollBanner from "@/components/ScrollAppointmentBanner";
import React from "react";
import { Tinos } from "next/font/google";
import { Cinzel } from "next/font/google";
import Image from "next/image";
const tinos = Tinos({
  weight: "400",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  subsets: ["latin"], // you can add 'latin-ext' if needed
  display: "swap",
});
const page = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <section className="grid md:grid-cols-[1fr_1fr_1fr] grid-cols-1 md:gap-2  md:mt-[125px]  border-y-[10px] border-dark mx-2">
        <div className="bg-[url(/patient-info-main-2.jpg)] bg-cover my-10"></div>

        <div className="px-10 py-10 space-y-3">
          <h2 className="text-5xl font-cinzel text-primary">
            Patient Information
          </h2>
          <p className="font-cinzel text-primary">Temple, TX</p>
          <p className="font-tinos  text-justify">
            The team at Revital Dental is committed to providing excellent
            dental care in a comfortable environment where patients can relax
            and feel at ease. Here you will find information on what to expect
            during your first appointment.
          </p>
          <p className="font-cinzel  text-justify">Contact Us</p>
          <p className="font-tinos  text-justify">
            We are happy to hear from you, answer your questions, and schedule
            an appointment. Call Revital Dental at 254-207-0708 or stop by our
            office.
          </p>
          <p className="font-tinos  text-justify">
            4311 S 31st Ste 145 <br /> Temple, TX 76502
          </p>
        </div>
        <div className="py-10">
          <form
            action=""
            className="w-full mx-auto mt-10 md:mt-0 max-w-[400px]"
          >
            <div className="text-2xl text-center font-cinzel text-white bg-[#192c2f] py-3">
              REQUEST AN APPOINMENT
            </div>
            <div className="text-center font-cinzel text-white bg-[#284b50] px-4 py-5">
              <input
                type="text"
                className="bg-white px-2 py-3 mb-3 text-gray-500 w-full focus:outline-none focus:border-b-[#ff9f29] border-b-4 border-b-white"
                placeholder="First & Last Name (Required)"
              />

              <input
                type="text`"
                className="bg-white px-2 py-3 mb-3 text-gray-500 w-full focus:outline-none focus:border-b-[#ff9f29] border-b-4 border-b-white"
                placeholder="Email (Required)"
              />

              <input
                type="text"
                className="bg-white px-2 py-3 mb-3 text-gray-500 w-full focus:outline-none focus:border-b-[#ff9f29] border-b-4 border-b-white"
                placeholder="Phone Number (Required)"
              />

              <select
                name=""
                id=""
                className="w-full px-2 py-4 bg-white text-gray-500"
              >
                <option value="">one</option>
                <option value="">two</option>
                <option value="">three</option>
              </select>

              <button className="bg-[#ff9f29] mt-4 px-4 py-2  uppercase rounded-full">
                Request Appointment
              </button>
              <button className="bg-[#ff9f29] mt-4  px-4 py-2 uppercase rounded-full">
                express online booking
              </button>
            </div>
          </form>
        </div>
      </section>
      <section
        className={`flex flex-col md:flex-row items-center justify-center bg-dark text-white md:p-15 p-6 ${tinos.className} shadow-lg gap-6`}
      >
        <div className="flex-1">
          <h1 className="font-cinzel text-3xl">New Patients</h1>
          <p className="mt-4 text-gray-200 text-justify">
            It is easy to make an appointment for your initial examination and
            dental treatments. Call 254-207-0708 to speak with a team member.
          </p>
          <p className="mt-6 text-gray-200 text-justify">
            Payment Methods – Check or Cash Accepted
          </p>
          <div className="flex flex-row mt-3">
            <Image
              src="/payment/icon-payment-visa.png"
              alt="Payment Methods"
              width={50}
              height={20}
              className="mt-4  md:mt-0"
            />
            <Image
              src="/payment/icon-payment-discover.png"
              alt="Payment Methods"
              width={50}
              height={20}
              className="mt-4 ml-4 md:mt-0"
            />
            <Image
              src="/payment/icon-payment-american-express.png"
              alt="Payment Methods"
              width={50}
              height={20}
              className="mt-4 ml-4 md:mt-0"
            />
            <Image
              src="/payment/icon-payment-master-card.png"
              alt="Payment Methods"
              width={50}
              height={20}
              className="mt-4 ml-4 md:mt-0"
            />
            <Image
              src="/payment/icon-payment-check.png"
              alt="Payment Methods"
              width={50}
              height={20}
              className="mt-4 ml-4 md:mt-0"
            />
            <Image
              src="/payment/icon-payment-cash.png"
              alt="Payment Methods"
              width={50}
              height={20}
              className="mt-4 ml-4 md:mt-0"
            />
            <Image
              src="/payment/icon-payment-carecredit.png"
              alt="Payment Methods"
              width={200}
              height={10}
              className="mt-4 ml-4 md:mt-0"
            />
          </div>
        </div>
      </section>
      <Book />
      <Footer />
      <ScrollBanner />
    </div>
  );
};

export default page;
