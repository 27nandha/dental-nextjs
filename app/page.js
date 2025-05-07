'use client';
import MotionWrapper from '@/components/MotionWrapper';
import Book from "@/components/Book";
import Dots from "@/components/Dots";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <>
      <Navbar />
      <MotionWrapper><Hero /></MotionWrapper>
      <MotionWrapper delay={0.2}><Welcome /></MotionWrapper>
      <MotionWrapper delay={0.4}><Dots /></MotionWrapper>
      <MotionWrapper delay={0.6}><Map /></MotionWrapper>
      <MotionWrapper delay={0.8}><Book /></MotionWrapper>
      <Footer />
    </>
  );
}
