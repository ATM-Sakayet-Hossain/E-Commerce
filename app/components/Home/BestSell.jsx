import Image from "next/image";
import ProductItems from "../Product/ProductITems";
import ProductSlider from "../utils/ProductSlider";
import { NextArrow, PrevArrow } from "../utils/SliderArrows";
import bestImg from "../../../public/bestsellBanner.png"
const BestSell = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow customStyle="absolute bottom-1/2 right-5" />,
    prevArrow: <PrevArrow customStyle="absolute bottom-1/2 left-5" />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 896,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="pb-12">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row gap-7 items-center md:items-end">
          <h2 className="sectn_heading">Daily Best Sells</h2>
          <ul className="flex flex-wrap text-base font-light text-primary gap-2 md:gap-7">
            <li>
              <button className="hover:text-brand cursor-pointer">
                Featured
              </button>
            </li>
            <li>
              <button className="hover:text-brand cursor-pointer">
                Popular
              </button>
            </li>
            <li>
              <button className="hover:text-brand cursor-pointer">
                New added
              </button>
            </li>
          </ul>
        </div>
        <div className="pt-11 flex flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-1/4">
            <Image
              src={bestImg}
              placeholder="blur"
              alt="bestsellBanner"
              className="w-full h-full"
              width={50}
              height={50}
              layout="responsive"
            />
          </div>
          <div className="w-full sm:w-3/4">
            <ProductSlider slideSetting={settings}>
                <div className="px-2">
                  <ProductItems />
                </div>
                <div className="px-2">
                  <ProductItems />
                </div>
                <div className="px-2">
                  <ProductItems />
                </div>
                <div className="px-2">
                  <ProductItems />
                </div>
                <div className="px-2">
                  <ProductItems />
                </div>
            </ProductSlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSell;