import React from "react";
import ProductSlider from "../utils/ProductSlider";
import { NextArrow, PrevArrow } from "../utils/SliderArrows";

const AboutUs = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow customStyle="absolute bottom-1/2 right-5" />,
    prevArrow: <PrevArrow customStyle="absolute bottom-1/2 left-5" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="pt-5">
      <div className="container">
        <div className="lg:flex items-center gap-10 xl:px-40">
          <div className="lg:1/2">
            <img src="/about-1.png" className="lg:w-full rounded-2xl" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl text-center lg:text-start font-bold py-5 md:pb-10">
              Welcome to Nest
            </h2>
            <p className="text-base px-5 lg:px-0 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate id est laborum.
            </p>
            <p className="text-base px-5 py-5 md:py-10 lg:px-0 text-justify">
              Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
              et Ut placerat legendos interpre.Donec vitae sapien ut libero
              venenatis faucibus. Nullam quis ante Etiam sit amet orci eget.
              Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt
              dui ut ornare lectus. Auctor elit sed vulputate mi sit amet.
              Commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate id est laborum.
            </p>
            <div className="w-full sm:w-3/4 md:w-full">
              <ProductSlider slideSetting={settings}>
                <div className="px-2">
                  <img src="/about-2.png" alt="about-2.png" />
                </div>
                <div className="px-2">
                  <img src="/about-3.png" alt="about-3.png" />
                </div>
                <div className="px-2">
                  <img src="about-4.png" alt="about-4.png" />
                </div>
                <div className="px-2">
                  <img src="/about-2.png" alt="about-2.png" />
                </div>
                <div className="px-2">
                  <img src="/about-3.png" alt="about-3.png" />
                </div>
                <div className="px-2">
                  <img src="about-4.png" alt="about-4.png" />
                </div>
                <div className="px-2">
                  <img src="/about-2.png" alt="about-2.png" />
                </div>
                <div className="px-2">
                  <img src="/about-3.png" alt="about-3.png" />
                </div>
                <div className="px-2">
                  <img src="about-4.png" alt="about-4.png" />
                </div>
              </ProductSlider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
