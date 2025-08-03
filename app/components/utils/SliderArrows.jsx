"use client"
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

function NextArrow({ customStyle, onClick }) {
  return (
    <div
      className={`w-6 h-6 md:w-10 md:h-10 z-50 ${customStyle} rounded-full bg-[#F2F3F4] text-primary flex justify-center items-center cursor-pointer`}
      onClick={onClick}
    >
      <FaLongArrowAltRight />
    </div>
  );
}

function PrevArrow({ customStyle, onClick }) {
  return (
    <div
      className={`w-6 h-6 md:w-10 md:h-10 z-50 ${customStyle} rounded-full bg-[#F2F3F4] text-primary flex justify-center items-center cursor-pointer`}
      onClick={onClick}
    >
      <FaLongArrowAltLeft />
    </div>
  );
}

export { NextArrow, PrevArrow };