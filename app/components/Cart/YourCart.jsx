import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import ShoppingCart from "./ShoppingCart";

export default async function YourCart() {

    const res = await fetch('https://dummyjson.com/carts/1')
    const data = res.json()

    console.log(data);
    
  return (
    <section className="pt-8 pb-12">
      <div className="container">
        <div className="flex gap-5">
          <div className="w-2/3">
            <h2 className="text-4xl font-bold">Your Cart</h2>
            <div className="flex items-center justify-between text-xl">
              <h5>
                There are <span className="text-green-400">0</span> products in
                your cart
              </h5>
              <button className="flex items-center gap-2 text-xl text-gray-600">
                <RiDeleteBin5Line /> Clear Cart
              </button>
            </div>
            <div className="mt-5">
              <div className="bg-white shadow rounded-lg">
                <ul className="flex items-center bg-gray-200">
                  <li className="min-w-5 px-3 py-2 text-left text-xs sm:text-sm font-medium whitespace-nowrap">
                    <input type="checkbox" />
                  </li>
                  <li className="min-w-120 px-3 py-2 text-left text-xs sm:text-sm font-medium whitespace-nowrap">
                    Product
                  </li>
                  <li className="min-w-30 sm px-3 py-2 text-center text-xs sm:text-sm font-medium whitespace-nowrap">
                    Unit Price
                  </li>
                  <li className="min-w-30 px-3 py-2 text-center text-xs sm:text-sm font-medium whitespace-nowrap">
                    Quantity
                  </li>
                  <li className="min-w-30 px-3 py-2 text-center text-xs sm:text-sm font-medium whitespace-nowrap">
                    Subtotal
                  </li>
                  <li className="min-w-30 px-3 py-2 text-center text-xs sm:text-sm font-medium whitespace-nowrap">
                    Remove
                  </li>
                </ul>
                <ShoppingCart />
              </div>
            </div>
          </div>
          <div className="w-1/3 mt-25 p-5 border border-gray-300 rounded-2xl">
            <h2>Payment</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
