"use client";
import React from 'react'
import { FaYelp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-1 my-20'>

            <div className='flex justify-center items-center flex-col'>
                <img src="./ll.png" alt="" className='w-[70%] '  />
                <p className='text-[10px] lowercase'>https://revitaldentaltx.com</p>
            </div>

            <div className='flex md:justify-start  justify-center items-center'>
                <div className='w-[80%]'>
                    <h2 className='uppercase text-xl font-cinzel text-center md:text-start mt-5 md:mt-0'>about</h2>
                    <p className='font-tinos text-center mt-2 md:text-start'>We are committed to providing quality healthcare to families located in the Temple area and treat patients of all ages.</p>
                    <hr className='mt-5'/>
                    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-3 mt-5'>
                        <div>
                            <h2 className='uppercase text-xl font-cinzel text-center md:text-start'>Office</h2>
                            <p className='font-bold text-l font-tinos  text-center md:text-start'>Revital Dental</p>
                            <p className='font-tinos text-center md:text-start'>4311 S 31st Ste 145</p>
                            <p className='font-tinos text-center md:text-start'>Temple, TX 76502</p>
                        </div>
                        <hr className='mt-5 md:hidden border-1'/>
                        <div>
                            <h2 className='uppercase text-xl font-cinzel text-center md:text-start'>Contact</h2>
                            <p className='font-bold text-l font-tinos text-center md:text-start'>Phone : <span className='text-primary font-semibold'> (254) 207-0708 </span></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className='bg-gray-100 px-20 flex-col md:flex-row py-5 flex justify-between items-center mt-5'>
            <div className='text-xs'>
                <p className='mb-1 text-center'>Copyright © 2025 All Rights Reserved Revital Dental.</p>
                <p className='text-center'><span className='text-primary'>privacy policy</span> / <span className='text-primary'>Sitemap</span></p>
            </div>
            <div className='flex md:text-3xl text-lg  space-x-2 mt-5 md:mt-0'>
                <FaFacebookF className=''/>
                <FaYelp className=''/>
            </div>
        </div>
    </>
  )
}

export default Footer