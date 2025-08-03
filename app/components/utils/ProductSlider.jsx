"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const ProductSlider = ({ slideSetting, children }) => {
  const settings = slideSetting;
  return <Slider {...settings}>{children}</Slider>;
};

export default ProductSlider;
