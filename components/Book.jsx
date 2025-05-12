"use client";
import React from 'react'
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"], // you can add 'latin-ext' if needed
  display: "swap",
});

const Book = () => {
  return (
    <>
        <div className='grid md:grid-cols-3 font-cinzel grid-cols-1 mt-0 gap-0.25 text-lg'>
            <div className='flex justify-center items-center py-10 flex-col  bg-dark text-white'>
                <p>4311 31st Ste 145</p>
                <p>Temple, TX 76502</p>
                <button className="bg-primary w-[60%] py-2 text-white rounded-full mt-3">View Our Services</button>
            </div>
            <div className='flex justify-center items-center py-10 flex-col  bg-dark text-white'>
                <p> Book Today!
                </p>
                <p>(254) 207-0708</p>
                <button className="bg-primary w-[60%] py-2 text-white rounded-full mt-3">Request Appointment</button>
            </div>
            <div className='flex justify-center items-center py-10 flex-col  bg-dark text-white'>
                <p>Comments or</p>
                <p>Suggestions?</p>
                <button className="bg-primary w-[60%] py-2 text-white rounded-full mt-3">Contact Us</button>
            </div>

        </div>
    </>
  )
}

export default Book