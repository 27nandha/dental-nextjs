import Book from "@/components/Book";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}
      <div className="mt-10">
        <Book />
      </div>
      <Footer />
    </>
  );
};

export default layout;
