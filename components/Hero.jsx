"use client"
import React, { useEffect, useState } from 'react';
import { Cinzel } from 'next/font/google'

const cinzel = Cinzel({
  weight: '400',
  subsets: ['latin'],
})
 
const images = [
    {
        id:1,
        path:'./bg1.png',
        heading:'Full dental implant',
        para:'Low cost Limited time special offer',
        btn:'read me'
    },
    {
        id:2,
        path:'./bg2.jpg',
        heading:'invisalign',
        para:'Why wait to smile ?',
        btn:'read me'
    },
    {
        id:3,
        path:'./bg1.png',
        heading:'Teeth Whitening',
        para:'Reclaim a youthful smile',
        btn:'read me'
    }

]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMobileForm, setShowMobileForm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh]  overflow-hidden md:mt-[125px] mt-[80px]">
      {/* Carousel */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.path}
          alt={`Slide ${idx + 1}`}
          className="w-full h-full object-cover flex-shrink-0"
        />
      ))}
      </div>
      

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
      {images.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setCurrentIndex(idx)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentIndex === idx ? 'bg-white scale-125' : 'bg-white/50'
          }`}
        />
      ))}
      </div>



      {/* Form - Desktop View (shown right) */}
      <div className="hidden   absolute top-14 right-10 z-20  rounded-md md:flex md:justify-end md:items-center">
      <div className='bg-[rgba(255,255,255,0.6)] p-5 z-10   md:block hidden w-[400px] transition-transform duration-700 ease-in-out mx-[30px]'>
        <h2 className={`text-5xl font-medium text-end font-cinzel ${cinzel.className}`}>{images[currentIndex].heading}</h2>
        <p className='text-end text-2xl font-cinzel'>{images[currentIndex].para}</p>
        <div className='text-end'>

        <button className='bg-[#ff9f29] mt-4 px-4 py-2 text-white  uppercase rounded-full'>{images[currentIndex].btn}</button>
        </div>
      </div>
        <form action="" className='w-[400px]'>
          <div className='text-2xl text-center font-cinzel text-white bg-[#192c2f] py-3'>REQUEST AN APPOINMENT</div>
          <div className='text-center font-cinzel text-white bg-[#284b50] px-4 py-5'> 

            <input type="text" 
            className='bg-white px-2 py-3 mb-3 text-gray-500 w-full focus:outline-none focus:border-b-[#ff9f29] border-b-4 border-b-white'
            placeholder='First & Last Name (Required)' />

            <input type="text`" 
            className='bg-white px-2 py-3 mb-3 text-gray-500 w-full focus:outline-none focus:border-b-[#ff9f29] border-b-4 border-b-white'
            placeholder='Email (Required)' />

            <input type="text" 
            className='bg-white px-2 py-3 mb-3 text-gray-500 w-full focus:outline-none focus:border-b-[#ff9f29] border-b-4 border-b-white'
            placeholder='Phone Number (Required)' />

            <select name="" id="" className='w-full px-2 py-4 bg-white text-gray-500'>
              <option value="">one</option>
              <option value="">two</option>
              <option value="">three</option>
            </select>

            <button className='bg-[#ff9f29] mt-4 px-4 py-2  uppercase rounded-full'>Request Appointment</button>
            <button className='bg-[#ff9f29] mt-4  px-4 py-2 uppercase rounded-full'>express online booking</button>
          </div>
        </form>
      </div>

      {/* Mobile Trigger Button */}
      <div className="md:hidden bg-black/70 w-[100%] absolute bottom-0 top-0  z-20 ">
        <h1 className=' mt-15 text-2xl text-center font-cinzel text-white '>{images[currentIndex].heading}</h1>
        <h2 className=' text-xl mt-5  text-white text-center'>{images[currentIndex].para}</h2>
        <div className='  w-[80%] mx-auto flex flex-col justify-center text-white'>
        <button
          className="bg-[#ff9f29] mt-40 text-lg font-semibold px-4 py-2 uppercase rounded-full"
        >
          (254) 207-0708
        </button>
        <button
          onClick={() => setShowMobileForm(true)}
          className="bg-[#ff9f29] mt-3   text-lg font-semibold px-4 py-2 uppercase rounded-full"
        >
          Request appoinment
        </button>
          <p className='text-center mt-5 '>Our address</p>
          <p className='text-center text-xl font-tinos'>4311 S 31st Ste 145</p>
          <p className='text-center text-xl font-tinos'>Temple, TX 76502</p>

        </div>

      </div>

      {/* Mobile Modal Form */}
      {showMobileForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-30">

            <form action="" className='mx-8'>
            <button
              className=" text-xl text-end bg-[white] px-2"
              onClick={() => setShowMobileForm(false)}
            >
              &times;
            </button>
          <div className='text-2xl text-center font-cinzel text-white bg-[#192c2f] py-3'>REQUEST AN APPOINMENT</div>
          <div className='text-center font-cinzel text-white bg-[#284b50] px-4 py-5'> 

            <input type="text" 
            className='bg-white px-2 py-3 mb-3 text-gray-500 w-full focus:outline-none focus:border-b-[#ff9f29] border-b-4 border-b-white'
            placeholder='First & Last Name (Required)' />

            <input type="text`"  
            className='bg-white px-2 py-3 mb-3 text-gray-500 w-full focus:outline-none focus:border-b-[#ff9f29] border-b-4 border-b-white'
            placeholder='Email (Required)' />

            <input type="text" 
            className='bg-white px-2 py-3 mb-3 text-gray-500 w-full focus:outline-none focus:border-b-[#ff9f29] border-b-4 border-b-white'
            placeholder='Phone Number (Required)' />

            <select name="" id="" className='w-full px-2 py-4 bg-white text-gray-500'>
              <option value="">one</option>
              <option value="">two</option>
              <option value="">three</option>
            </select>

            <button className='bg-[#ff9f29] mt-4 px-4 py-2  uppercase rounded-full'>Request Appointment</button>
            <button className='bg-[#ff9f29] mt-4  px-4 py-2 uppercase rounded-full'>express online booking</button>
          </div>
        </form>

        </div>
      )}
    </div>
  );
}
