"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Link from "next/link";
import CategoryItems from "./CategoryItems";
import { NextArrow, PrevArrow } from "../utils/SliderArrows";
import { useEffect, useState } from "react";
const Category = () => {
  const [data, setData] = useState([]); 
    useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products/categories");
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);
  
  // console.log("Category Data:", data);
  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: <NextArrow customStyle="absolute -top-10 md:-top-16 right-0" />,
    prevArrow: <PrevArrow customStyle="absolute -top-10 md:-top-16 right-16" />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 896,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="pt-14 pb-11">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-7 items-center md:items-end">
          <h2 className="sectn_heading">Featured Categories</h2>
          <ul className="flex flex-wrap text-base font-light text-primary gap-2 md:gap-7">
            <li>
              <Link href="/" className="hover:text-brand">
                {data.slug ? data.slug : "All Categories"}
              </Link>
            </li>
          </ul>
        </div>
        <div className="pt-11">
          <Slider {...settings}>
            {data.map((item, index) => (
                <CategoryItems key={index} data={item}/>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Category;