import Link from 'next/link'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FaFacebookF } from 'react-icons/fa'
import { TbPhoneCall } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className='px-4'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-20">
          <div>
            <img src="/logo.png" alt="logo" />
            <p className="font-normal text-lg text-primary pt-4 pb-8">
              Awesome grocery store website template
            </p>
            <ul className="flex flex-col gap-2.5">
              <li className="flex gap-2 items-center">
                <div className="text-brand">
                  <CiLocationOn />
                </div>
                <p className="font-normal text-base text-primary">
                  Address: Uttara, Dhaka
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <div className="text-brand">
                  <TbPhoneCall />
                </div>
                <p className="font-normal text-base text-primary">
                  Call Us:(+88) - 01611 89 6899
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <div className="text-brand">
                  <TbPhoneCall />
                </div>
                <p className="font-normal text-base text-primary">
                  Call Us:(+88) - 01611 89 6899
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-2xl text-primary">Company</h3>
            <ul className="font-normal text-base text-primary flex flex-col gap-3.5 mt-5">
              <li>
                <Link href="/" className='hover:text-green-400'>About Us</Link>
              </li>
              <li>
                <Link href="/" className='hover:text-green-400'>Delivery Information</Link>
              </li>
              <li>
                <Link href="/" className='hover:text-green-400'>Privacy Policy</Link>
              </li>
              <li>
                <Link href="/" className='hover:text-green-400'>Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/" className='hover:text-green-400'>Contact Us</Link>
              </li>
              <li>
                <Link href="/" className='hover:text-green-400'>Careers</Link>
              </li>
              <li>
                <Link href="/" className='hover:text-green-400'>Support Center</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-2xl text-primary">Account</h3>
            <ul className="font-normal text-base text-primary flex flex-col gap-3.5 mt-5">
              <li>
                <Link href="/" className='hover:text-green-400'>Sign In</Link>
              </li>
              <li>
                <Link href="/" className='hover:text-green-400'>View Cart</Link>
              </li>
              <li>
                <Link href="/" className='hover:text-green-400'>My Wishlist</Link>
              </li>
              <li>
                <Link href="/" className='hover:text-green-400'>Track My Order</Link>
              </li>
              <li>
                <Link href="/" className='hover:text-green-400'>Help Ticket</Link>
              </li>
              <li>
                <Link href="/" className='hover:text-green-400'>Shipping Details</Link>
              </li>
              <li>
                <Link href="/" className='hover:text-green-400'>Compare products</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-2xl text-primary">Corporate</h3>
            <ul className="font-normal text-base text-primary flex flex-col gap-3.5 mt-5">
              <li>
                <Link href="/" className='hover:text-green-400'>Become a Vendor</Link>
              </li>
              <li>
                <Link href="/" className='hover:text-green-400'>Affiliate Program</Link>
              </li>
              <li>
                <Link href="/" className='hover:text-green-400'>Farm Business</Link>
              </li>
              <li>
                <Link href="/" className='hover:text-green-400'>Farm Careers</Link>
              </li>
              <li>
                <Link href="/" className='hover:text-green-400'>Our Suppliers</Link>
              </li>
              <li>
                <Link href="/" className='hover:text-green-400'>Accessibility</Link>
              </li>
              <li>
                <Link href="/" className='hover:text-green-400'>Promotions</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-2xl text-primary">Popular</h3>
            <ul className="font-normal text-base text-primary flex flex-col gap-3.5 mt-5">
              <li>
                <Link href="/" className='hover:text-green-400'>Milk & Flavoured Milk</Link>
              </li>
              <li>
                <Link href="/" className='hover:text-green-400'>Butter and Margarine</Link>
              </li>
              <li>
                <Link href="/" className='hover:text-green-400'>Eggs Substitutes</Link>
              </li>
              <li>
                <Link href="/" className='hover:text-green-400'>Marmalades</Link>
              </li>
              <li>
                <Link href="/" className='hover:text-green-400'>Sour Cream and Dips</Link>
              </li>
              <li>
                <Link href="/" className='hover:text-green-400'>Tea & Kombucha</Link>
              </li>
              <li>
                <Link href="/" className='hover:text-green-400'>Cheese</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-2xl text-primary">Install App</h3>
            <p className="font-normal text-base text-primary my-5">
              From App Store or Google Play
            </p>
            <div className="flex gap-3">
              <Link href="/">
                <img src="/app-store.png" alt="app-store" />
              </Link>
              <Link href="/">
                <img src="/app-store.png" alt="app-store" />
              </Link>
            </div>
            <p className="font-normal text-base text-primary my-5">
              Secured Payment Gateways
            </p>
            <img src="/payment-method.png" alt="payment-method" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 justify-between items-center py-9 border-t border-brand mt-11">
          <p className="max-w-72">
            © 2024, Nest - Next JS Ecommerce Template All rights reserved
          </p>
          <div className="flex gap-8">
            <Link href="tel: 1900 - 666" className="ml-auto flex items-center gap-2">
              <TbPhoneCall className="text-2xl xl:text-4xl text-secondary" />
              <div>
                <p className="text-brand font-bold text-base xl:text-2xl">
                  1900 - 666
                </p>
                <p className="text-secondary font-medium text-xs xl:text-sm">
                  Working 8:00 - 22:00
                </p>
              </div>
            </Link>
            <Link href="tel: 1900 - 888" className="ml-auto flex items-center gap-2">
              <TbPhoneCall className="text-2xl xl:text-4xl text-secondary" />
              <div>
                <p className="text-brand font-bold text-base xl:text-2xl">
                  1900 - 888
                </p>
                <p className="text-secondary font-medium text-xs xl:text-sm">
                  24/7 Support Center
                </p>
              </div>
            </Link>
          </div>
          <div>
            <div className="flex gap-3.5 items-center">
              <p>Follow Us</p>
              <ul className="flex gap-3">
                <li>
                  <Link
                    href="/"
                    className="w-8 h-8 rounded-full bg-brand flex justify-center items-center text-white"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="w-8 h-8 rounded-full bg-brand flex justify-center items-center text-white"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="w-8 h-8 rounded-full bg-brand flex justify-center items-center text-white"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
              </ul>
            </div>
            <p>Up to 15% discount on your first subscribe</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer