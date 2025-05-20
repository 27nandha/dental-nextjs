import React from "react";

const Form = () => {
  return (
    <form action="" className="w-[400px]">
      <div className="text-2xl text-center rounded-t-sm font-cinzel text-white bg-[#192c2f] py-3">
        REQUEST AN APPOINMENT
      </div>
      <div className="text-center font-cinzel rounded-b-sm text-white bg-[#284b50] px-4 py-5">
        <input
          type="text"
          className="bg-white px-2 py-3 mb-3 text-gray-500 w-full border-b-4 border-b-white focus:outline-none focus:border-b-[#ff9f29] transition-all duration-300 ease-in-out"
          placeholder="First & Last Name (Required)"
        />

        <input
          type="text"
          className="bg-white px-2 py-3 mb-3 text-gray-500 w-full border-b-4 border-b-white focus:outline-none focus:border-b-[#ff9f29] transition-all duration-300 ease-in-out"
          placeholder="Email (Required)"
        />

        <input
          type="text"
          className="bg-white px-2 py-3 mb-3 text-gray-500 w-full border-b-4 border-b-white focus:outline-none focus:border-b-[#ff9f29] transition-all duration-300 ease-in-out"
          placeholder="Phone Number (Required)"
        />

        <select className="w-full px-2 py-4 mb-3 bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff9f29] transition duration-300">
          <option value="">one</option>
          <option value="">two</option>
          <option value="">three</option>
        </select>

        <button className="bg-[#ff9f29] mt-4 px-4 py-2 uppercase rounded-full hover:bg-[#e5891c] transition-all duration-300 ease-in-out">
          Request Appointment
        </button>

        <button className="bg-[#ff9f29] mt-4 px-4 py-2 uppercase rounded-full hover:bg-[#e5891c] transition-all duration-300 ease-in-out">
          express online booking
        </button>
      </div>
    </form>
  );
};

export default Form;
