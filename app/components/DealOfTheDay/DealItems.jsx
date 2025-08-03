import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import dealbg from "../../../public/dealbg.png"
import Image from "next/image";
const DealItems = () => {
  return (
    <div className="relative group">
      <div>
        <Image width={50} height={50} placeholder="blur" layout="responsive" src={dealbg} alt="product" className="w-full h-full" />
      </div>
      <div className="w-5/6 absolute top-2 lg:top-1/2 left-1/2 transition-all -translate-x-1/2 group-hover:-translate-y-5">
        <div className="flex gap-3.5 justify-center mb-4">
          <div className="p-3.5 rounded bg-white text-center">
            <p>22</p>
            <p>Days</p>
          </div>
          <div className="p-3.5 rounded bg-white text-center">
            <p>22</p>
            <p>Days</p>
          </div>
          <div className="p-3.5 rounded bg-white text-center">
            <p>22</p>
            <p>Days</p>
          </div>
        </div>
        <div className="bg-white shadow py-6 px-7 rounded-lg">
          <h3 className="text-primary font-bold text-sm md:text-base">
            Seeds of Change Organic Quinoa, Brown, & Red Rice
          </h3>
          <div className="flex gap-3 py-2.5">
            <ul className="flex text-amber-400">
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
            </ul>
            <p className="text-xs font-normal text-secondary">(4.0)</p>
          </div>
          <p className="text-sm font-normal text-secondary">
            By <span className="text-brand">NestFood</span>
          </p>
          <div className="flex flex-col md:flex-row gap-2 justify-between pt-6">
            <h4 className="text-sm md:text-lg font-bold text-brand">
              $28.85
              <span className="text-secondary text-base line-through">$32</span>
            </h4>
            <button className="bg-[#DEF9EC] flex items-center justify-center text-brand font-bold text-lg md:px-5 md:py-2.5 rounded-sm cursor-pointer">
              <CiShoppingCart />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealItems;