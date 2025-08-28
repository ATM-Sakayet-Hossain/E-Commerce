// import ProductDetails from "@/app/components/Shop/ProductDetail";
import Counter from "@/app/components/Shop/Counter";
import MapBreadcramp from "@/app/components/utils/MapBreadcramp";
import { Box, Rating } from "@mui/material";
import Image from "next/image";
import React from "react";

export const dynamic = "force-dynamic";

export default async function page ({ params }) {
  const { id } = params;
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  console.log("Product Data:", data);
  

  return (
    <>
      <MapBreadcramp title={data.title} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-6xl mx-auto">
        {/* Left - Product Image */}
        <div className="flex flex-col items-center">
          <Image
            width={150}
            height={150}
            src={data?.thumbnail}
            alt="Organic Spirulina"
            className="rounded-2xl shadow-lg w-110 h-auto"
          />

          <div className="flex gap-3 mt-4">
            {(data?.images ?? []).map((thumb, i) => (
              <Image
                width={100}
                height={100}
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
              {/* ${(data?.price + data?.discountPercentage).toFixed(2)} */}
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
              <button className="px-4 rounded-lg border bg-green-600 text-white border-green-600">
                {data?.weight}
              </button>
            </div>
          </div>

          {/* Quantity + Add to Cart */}
          <Counter />

          {/* Meta Info */}
          <div className="p-4 mt-6 text-sm text-gray-600">
            <div className="flex gap-4 mb-4">
              <p className="w-60  font-medium">
                Delivery: {data?.shippingInformation}
              </p>
              <p className="w-60 font-medium">SKU: {data?.sku}</p>
            </div>
            <div className="flex gap-4 mb-4">
              <p className="w-60 font-medium">Tags: {data?.tags?.join(", ")}</p>
              <p className="w-60 font-medium">Stock: {data?.stock}</p>
            </div>
            <div className="flex gap-4 mb-4">
              <p className="w-60 font-medium">Return: {data?.returnPolicy}</p>
              <p className="w-60 font-medium">
                Warranty: {data?.warrantyInformation}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </>
  );
};

// export default page;
