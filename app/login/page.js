"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiLock, CiMail } from "react-icons/ci";
import { toast, ToastContainer } from "react-toastify";

const page = () => {
  const [userData, SetUserData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handelLogin = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch("https://fdr-food-api.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      toast.success("Login successful!");
      toast.error(data.message);
      document.cookie=`token=${data.token}`; // Set cookie for 1 hour
      router.push("/");
    }catch(error){
      console.log("Error during registration:", error);
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <ToastContainer position="top-right" theme="light" />
      <div className="w-full max-w-lg px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
        <div className="flex items-center space-x-5 justify-center">
          <h2 className="text-3xl font-bold text-blue-400">
            Login to our account
          </h2>
        </div>
        <form className="space-y-4">
          <div className="mt-5">
            <div className="flex items-center justify-start gap-25">
              <label
                className="font-semibold text-sm text-gray-600 block"
                htmlFor="login"
              >
                E-mail
              </label>
            </div>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full ">
              <CiMail className="text-xl font-bold" />
              <input
                className="pl-2 text-sm w-full outline-none"
                onChange={(e) =>
                  SetUserData((prev) => ({ ...prev, email: e.target.value }))
                }
                type="email"
                id="login"
                placeholder="Type your email address"
              />
            </div>
            <div className="flex items-center justify-start gap-17">
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="password"
              >
                Password
              </label>
            </div>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full">
              <CiLock className="text-xl font-bold" />
              <input
                className="pl-2 text-sm w-full outline-none"
                onChange={(e) =>
                  SetUserData((prev) => ({ ...prev, password: e.target.value }))
                }
                type="password"
                id="password"
                placeholder="••••••••"
              />
            </div>
          </div>
          {/* <div className="flex items-center justify-between mb-4">
            <label
              htmlFor="remember-me"
              className="text-sm text-gray-900 cursor-pointer gap-1 flex items-center"
            >
              <input type="checkbox" id="remember-me" />
              Remember me
            </label>
            <Link
              href="/forgotpassword"
              className="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer"
            >
              Forgot Password?
            </Link>
          </div> */}
          <div className="flex flex-col gap-2 mt-5">
            <button
              onClick={handelLogin}
              className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              type="submit"
            >
              Log in
            </button>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            <Link
              href="/registration"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or sign up
            </Link>
            <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
