"use client";
import { Rating, Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function ProductDetails({ id }) {
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  console.log("Product Data:", data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-6xl mx-auto">
      {/* Left - Product Image */}
      <div className="flex flex-col items-center">
        <img
          src={data?.thumbnail}
          alt="Organic Spirulina"
          className="rounded-2xl shadow-lg w-110 h-auto"
        />

        {/* Thumbnails */}
        <div className="flex gap-3 mt-4">
          {(data?.images ?? []).map((thumb, i) => (
            <img
              key={i}
              src={thumb}
              alt="thumbnail"
              className="w-30 h-30 border rounded-xl cursor-pointer hover:border-green-500"
            />
          ))}
        </div>
      </div>

      {/* Right - Product Details */}
      <div className="flex flex-col gap-4">
        <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full w-max text-sm">
          {data?.availabilityStatus}
        </span>

        <div>
          {/* Product Category */}
          <h4 className="text-xs font-normal text-secondary">
            {data?.category}
          </h4>

          {/* Product Title */}
          <h1 className="text-2xl font-bold">
            {data?.title || "Organic Spirulina"}
          </h1>
        </div>

        {/* Ratings */}
        <div className="flex items-center gap-2">
          <Box>
            <Rating
              className="text-sm"
              name="simple-controlled"
              value={data?.rating || 0}
            />
          </Box>
          <span className="text-gray-600 text-sm">
            {(data?.reviews ?? []).length > 0
              ? (data?.reviews ?? []).length
              : "0"}{" "}
            Reviews
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-green-600">
            ${data?.price}
          </span>
          <span className="line-through text-gray-400 ">
            ${(data?.price + data?.discountPercentage).toFixed(2)}
          </span>
          <span className="text-sm text-red-500">
            {data?.discountPercentage}% Off
          </span>
        </div>

        <p className="text-sm font-normal text-secondary">
          By{" "}
          <span className="text-brand">
            {data?.brand ? data?.brand : "Nest"}{" "}
          </span>
        </p>

        {/* Short Description */}
        <p className="text-gray-600">{data?.description}</p>

        {/* Size / Weight */}
        <div className="flex items-center gap-2">
          <h3 className="font-medium mb-2">Size / Weight:</h3>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg border bg-green-600 text-white border-green-600">
              {data?.weight}
            </button>
          </div>
        </div>

        {/* Quantity + Add to Cart */}
        <div className="flex items-center gap-3 mt-4">
          <div className="flex items-center border rounded-lg">
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              className="px-3 py-2"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-2"
              maxLength={data?.minimumOrderQuantity}
            >
              +
            </button>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl">
            Add to Cart
          </button>
        </div>

        {/* Meta Info */}
        <div className="p-4 mt-6 text-sm text-gray-600">
          <div className="flex gap-4 mb-4">
            <p className="w-50 font-medium">Delivery: {data?.shippingInformation}</p>
            <p className="w-50 font-medium">SKU: {data?.sku}</p>
          </div>
          <div className="flex gap-4 mb-4">
            <p className="w-50 font-medium">Tags: {data?.tags?.join(", ")}</p>
            <p className="w-50 font-medium">Stock: {data?.stock}</p>
          </div>
          <div className="flex gap-4 mb-4">
            <p className="w-50 font-medium">Return: {data?.returnPolicy}</p>
            <p className="w-50 font-medium">Warranty: {data?.warrantyInformation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
