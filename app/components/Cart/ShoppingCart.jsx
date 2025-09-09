import { Box, Rating } from "@mui/material";
import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const ShoppingCart = () => {
  return (
    <div className="space-y-4">
      <div
        // key={product.id}
        className="flex items-center bg-white shadow rounded-lg"
      >
        <div className="min-w-5 px-3 py-2">
          <input type="checkbox" />
        </div>
        <div className="min-w-120 px-3 py-2 flex items-center gap-2">
          <img
            src="/product.png"
            alt="name"
            className="w-16 h-16 object-cover rounded"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-lg">
              Field Roast Chao Cheese Creamy Original
            </h3>
            {/* <p className="text-sm text-gray-500">⭐ 4.0 rating</p> */}
            <Box>
              <Rating
                className="text-sm"
                name="simple-controlled"
                // value={data?.rating || 0}
              />
            </Box>
          </div>
        </div>
        <p className="min-w-30 px-3 py-2 text-center text-lg font-bold text-gray-700">
          {/* Unit Price: ${product.price.toFixed(2)} */}
          2.51
        </p>
        <div className="min-w-30 px-3 py-2 flex justify-center">
          <input
            type="number"
            min="1"
            max="5"
            defaultValue="1"
            className="w-16 border rounded text-center text-lg"
          />
        </div>
        <p className="min-w-30 px-3 py-2 text-center text-lg font-semibold">
          2.51
          {/* Subtotal: ${(product.price * product.quantity).toFixed(2)} */}
        </p>
        <button className="min-w-30 px-3 py-2 flex justify-center text-lg text-red-500 hover:underline">
          <RiDeleteBin5Line />
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
