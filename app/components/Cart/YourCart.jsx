import React from "react";
import ShoppingCart from "./ShoppingCart";
import { RiDeleteBin5Line } from "react-icons/ri";

const YourCart = async () => {
  const res = await fetch("https://dummyjson.com/carts/5", {
    method: "GET",
    cache: "no-store",
  });
  const data = await res.json();

  // console.log(data);

  return (
    <section className="pt-8 pb-12">
      <div className="container">
        <div className="flex gap-5 ">
          <div className="w-2/3">
            <h2 className="text-4xl font-bold">Your Cart</h2>
            <div className="flex items-center justify-between text-xl">
              <h5>
                There are{" "}
                <span className="text-green-400">{data?.totalProducts}</span>{" "}
                products in your cart
              </h5>
              <button className="flex items-center gap-2 text-xl text-gray-600">
                <RiDeleteBin5Line /> Clear Cart
              </button>
            </div>
            <div className="mt-5">
              <div className="bg-white shadow rounded-lg pb-5">
                <ul className="flex items-center bg-gray-200 px-4">
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
                {data.products?.map((item) => (
                  <ShoppingCart key={item.id} data={item} />
                ))}
                <div className="flex items-center justify-end gap-20 mr-60">
                  <label className="min-w-[120px] text-base sm:text-end font-semibold text-gray-700">
                    Total Products:{" "}
                    <span className="text-green-500">
                      {data?.totalProducts}
                    </span>
                  </label>
                  <label className="min-w-[120px] text-base sm:text-end font-semibold text-gray-700">
                    Total Quantity:{" "}
                    <span className="text-green-500">
                      {data?.totalQuantity}
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 mt-25">
            <form>
              <div className="grid gap-2  shadow-lg rounded-2xl py-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 lg:gap-2 mx-5 px-5 py-4 border rounded-xl border-gray-400 transform-fill">
                  <label className="min-w-[120px] text-base sm:text-end font-semibold text-gray-700">
                    Total
                  </label>
                  <p className="w-full text-end">
                    $ {(data?.total + data?.discountedTotal).toFixed(2)}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 lg:gap-2 mx-5 px-5 py-4 border rounded-xl border-gray-400 transform-fill">
                  <label className="min-w-[120px] text-base sm:text-end font-semibold text-gray-700">
                    Total Discount
                  </label>
                  <p className="w-full text-end">
                    $ {data?.discountedTotal.toFixed(2)}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 lg:gap-2 mx-5 px-5 py-4 border rounded-xl border-gray-400 transform-fill">
                  <label className="min-w-[120px] text-base sm:text-end font-semibold text-gray-700">
                    Shipping
                  </label>
                  <p className="w-full text-end">Free</p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 lg:gap-2 mx-5 px-5 py-4 border rounded-xl border-gray-400 transform-fill">
                  <label className="min-w-[120px] text-base sm:text-end font-semibold text-gray-700">
                    Apply Coupon
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg py-2 pl-2"
                  />
                  <button className="bg-green-500 px-8 py-2 rounded-lg">
                    Apply
                  </button>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 lg:gap-2 mx-5 px-5 py-4 border rounded-xl border-gray-400 transform-fill">
                  <label className="min-w-[120px] text-base sm:text-end font-semibold text-gray-700">
                    Payable Amount
                  </label>
                  <p className="w-full text-end">$ {data?.total.toFixed(2)}</p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 lg:gap-2 mx-5 px-5 py-4 border rounded-xl border-gray-400 transform-fill">
                  <label className="min-w-[120px] text-base sm:text-end font-semibold text-gray-700">
                    Shipping Type
                  </label>
                  <select className="w-full text-end form-control">
                    <option value="Cash on Delivary">Cash on Delivary</option>
                  </select>
                </div>
                <div className="px-10 rounded-2xl">
                  <button
                    className="w-full bg-green-500 py-2 text-2xl text-white hover:text-green-3
                  00 hover:bg-blue-500 transition duration-300 ease-in-out rounded-lg"
                  >
                    Proceed To CheckOut
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourCart;
