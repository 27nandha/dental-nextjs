"use client";
import React from 'react'

const Book = () => {
  return (
    <>
        <div className='grid md:grid-cols-3 grid-cols-1 mt-0 gap-0.25'>
            <div className='flex justify-center items-center py-10 flex-col  bg-dark text-white'>
                <p>4311 31st Ste 145</p>
                <p>Temple, TX 76502</p>
                <button className="bg-primary w-[60%] py-2 text-white rounded-full mt-3">View Our Services</button>
            </div>
            <div className='flex justify-center items-center py-10 flex-col  bg-dark text-white'>
                <p>4311 31st Ste 145</p>
                <p>Temple, TX 76502</p>
                <button className="bg-primary w-[60%] py-2 text-white rounded-full mt-3">View Our Services</button>
            </div>
            <div className='flex justify-center items-center py-10 flex-col  bg-dark text-white'>
                <p>4311 31st Ste 145</p>
                <p>Temple, TX 76502</p>
                <button className="bg-primary w-[60%] py-2 text-white rounded-full mt-3">View Our Services</button>
            </div>

        </div>
    </>
  )
}

export default Book