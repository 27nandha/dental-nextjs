"use client";
import React from "react";

function Map() {
  return (
    <div className="w-full h-[400px] mb-0">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13455.278755084276!2d-97.34923885!3d31.0811197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86456e4e21e4058b%3A0xaefb55d833b3edc7!2s4311%20S%2031st%20St%20Ste%20145%2C%20Temple%2C%20TX%2076574%2C%20USA!5e0!3m2!1sen!2sus!4v1680302853192!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
