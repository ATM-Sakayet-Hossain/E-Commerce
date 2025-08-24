"use client";
import React, { useState } from "react";

const Counter = () => {
  const [quantity, setQuantity] = useState(1);
  return (
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
        >
          +
        </button>
      </div>
      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl">
        Add to Cart
      </button>
    </div>
  );
};

export default Counter;
