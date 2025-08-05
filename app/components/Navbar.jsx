"use client"
import React, { useState } from "react";
import { FaBox, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { IoCall, IoCloseCircleSharp } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const userData = false
  const cartData = false

  return (
    <header className="relative shadow-sm m-auto">
      {/* Header Top Part */}
      <div className="container">
        <div className="flex justify-between items-center py-8 gap-8">
          <button
            onClick={() => setSidebar(true)}
            className="md:hidden text-2xl text-primary cursor-pointer"
          >
            <FaBarsStaggered />
          </button>
          <Link href="/" className="w-32 inline-block lg:w-auto">
            <Image src="/logo.png" width={128} height={50} alt="logo" className="w-32" />
          </Link>
          <div className="border-2 border-brand p-2 lg:p-5 rounded w-full max-w-64  lg:max-w-[700px] hidden md:flex items-center">
            <select
              name=""
              id=""
              className="pr-3.5 border-r-2 border-slate-200 text-primary hidden lg:block"
            >
              <option value="">All Categories</option>
              <option value="">All Categories</option>
              <option value="">All Categories</option>
            </select>
            <input
              type="text"
              placeholder="Search for items..."
              className="px-3.5 w-full lg:w-2/3 outline-0"
            />
            <FaSearch className="ml-auto" />
          </div>
          <div>
            <ul className="flex items-center gap-4 lg:gap-8 text-sm">
              <li>
                <Link
                  href="/cart"
                  className="flex gap-2 items-end relative text-secondary"
                >
                  <span className="w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-brand text-white text-xs md:text-sm flex items-center justify-center absolute -top-3 md:-top-2 -right-2 md:right-5">
                   {cartData.length}
                  </span>
                  <FaShoppingCart className="text-2xl lg:text-3xl text-primary" />{" "}
                  <span className="hidden md:block">Cart</span>
                </Link>
              </li>
              <li>
                {
                  userData
                  ?
                  <>
                   <div className="userImage overflow-hidden w-[30px] h-[30px]  rounded-full bg-gray-200">
                     <Image width={24} height={50} src={userData?.avatar?.url} alt="user profile" />
                    </div>
                    <h2 className="text-[16px] font-medium text-black">{userData?.username}</h2>
                  </>

                  :
                 <Link href="/login">
                   login
                 </Link>
                }
              </li>
            </ul>
          </div>
          {/* Main menu mobile view */}
          <nav
            className={`w-full h-screen bg-[rgba(0,0,0,0.6)] absolute top-0 left-0 transition-all z-50 ${
              sidebar ? "translate-x-0" : "-translate-x-full"
            } `}
          >
            <div className="w-[95%] h-full bg-white overflow-y-auto">
              <div className="flex justify-between items-center border-b border-[#ececec] pb-4 mb-4 px-4">
                <Link href="/" className="w-32 inline-block">
                  <Image width={128} height={50} src="/logo.png" alt="logo" />
                </Link>
                <button
                  onClick={() => setSidebar(false)}
                  className="text-2xl text-brand cursor-pointer"
                >
                  <IoCloseCircleSharp />
                </button>
              </div>
              <div className="px-4 flex flex-col gap-4">
                <div className="border-2 border-brand p-2 lg:p-5 rounded w-full flex items-center">
                  <input
                    type="text"
                    placeholder="Search for items..."
                    className="px-3.5 w-full lg:w-2/3 outline-0"
                  />
                  <FaSearch className="ml-auto" />
                </div>
                <ul className="font-bold text-primary text-base">
                  <li className="w-full">
                    <Link
                      href="/"
                      className="block border-b border-[#ececec] py-2"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/about"
                      className="block border-b border-[#ececec] py-2"
                    >
                      About
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/shop"
                      className="block border-b border-[#ececec] py-2"
                    >
                      Shop
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/"
                      className="block border-b border-[#ececec] py-2"
                    >
                      Mega menu
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/"
                      className="block border-b border-[#ececec] py-2"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link
                      href="/"
                      className="block border-b border-[#ececec] py-2"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Main Menu desktop view*/}
      <nav className="hidden md:block py-6 border-t border-[#ececec]">
        <div className="container flex items-center gap-4 xl:gap-9">
          <div className="relative">
            <h3
              onClick={() => setShow(!show)}
              className="p-2 xl:py-3 xl:px-6 bg-brand rounded-md text-white text-xs xl:text-base font-bold flex items-center gap-1 xl:gap-2 cursor-pointer"
            >
              <FaBox /> <span className="hidden xl:inline">Browse All</span>{" "}
              Categories <FaChevronDown />
            </h3>
            {show && (
              <div className="bg-white w-md rounded-lg absolute top-10 xl:top-20 left-0 p-7 border-2 border-brand grid grid-cols-2 gap-6 z-50">
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3">
                  <Image width={24} height={50} src="/category-1.svg" alt="category1" className="w-6" />
                  <p className="font-bold text-sm text-primary">
                    Milks and Dairies
                  </p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3">
                  <Image width={24} height={50} src="/category-1.svg" alt="category1" className="w-6" />
                  <p className="font-bold text-sm text-primary">
                    Milks and Dairies
                  </p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3">
                  <Image width={24} height={50} src="/category-1.svg" alt="category1" className="w-6" />
                  <p className="font-bold text-sm text-primary">
                    Milks and Dairies
                  </p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3">
                  <Image width={24} height={50} src="/category-1.svg" alt="category1" className="w-6" />
                  <p className="font-bold text-sm text-primary">
                    Milks and Dairies
                  </p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3">
                  <Image width={24} height={50} src="/category-1.svg" alt="category1" className="w-6" />
                  <p className="font-bold text-sm text-primary">
                    Milks and Dairies
                  </p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3">
                  <Image width={24} height={50} src="/category-1.svg" alt="category1" className="w-6" />
                  <p className="font-bold text-sm text-primary">
                    Milks and Dairies
                  </p>
                </div>
              </div>
            )}
          </div>
          <ul className="flex gap-3 xl:gap-6 font-bold text-primary text-base xl:text-lg">
            <li>
              <Link href="/" className="hover:text-brand transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-brand transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-brand transition">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-brand transition">
                Mega menu
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-brand transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-brand transition">
                Contact
              </Link>
            </li>
          </ul>
          <Link
            href="tel: 1900 - 888"
            className="ml-auto flex items-center gap-2"
          >
            <IoCall className="text-2xl xl:text-4xl" />
            <div>
              <p className="text-brand font-bold text-base xl:text-2xl">
                {" "}
                1900 - 888
              </p>
              <p className="text-secondary font-medium text-xs xl:text-sm">
                24/7 Support Center
              </p>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;