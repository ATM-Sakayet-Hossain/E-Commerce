"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import BannerItems from "./BannerItems";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "15px", width: "100%" }}>
        <ul className="flex justify-center text-[0px] gap-1.5"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3.5 h-3.5 rounded-full border-2 border-black cursor-pointer">
        {i + 1}
      </div>
    ),
  };
  return (
    <section className="mt-7">
      <div className="container px-0">
        <Slider {...settings}>
          <BannerItems />
          <BannerItems/>
        </Slider>
      </div>
    </section>
  );
};

export default Banner;