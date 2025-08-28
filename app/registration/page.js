"use client";
import Link from "next/link";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Page = () => {
  const [userData, SetUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handelSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch("https://fdr-food-api.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      toast.success(data.message); 
    }catch(error){
      console.log("Error during registration:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen from-[#e0f7ff] to-[#ffffff]">
      <ToastContainer position="top-right" theme="light" />
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl px-8 py-10">
        <div className=" text-center mb-8">
          <h2 className="text-2xl font-semibold text-[#1a1a68]">
            Create an account
          </h2>
        </div>

        <form onSubmit={handelSubmit} className="space-y-4">
          <div className="input flex flex-col static">
            <label
              htmlFor="input"
              className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
            >
              Email Address:
            </label>
            <input
              type="email"
              onChange={(e) =>
                SetUserData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="you@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="input flex flex-col static">
            <label
              htmlFor="input"
              className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
            >
              User Name:
            </label>
            <input
              type="text"
              onChange={(e) =>
                SetUserData((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Your Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="input flex flex-col static">
            <label
              htmlFor="input"
              className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
            >
              Password:
            </label>
            <input
              type="password"
              onChange={(e) =>
                SetUserData((prev) => ({ ...prev, password: e.target.value }))
              }
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#0275a6] to-[#025e87] text-white py-2 rounded-full font-semibold hover:opacity-90 transition duration-300"
          >
            Sign up
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?
          <Link href="/login" className="text-[#0275a6] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
