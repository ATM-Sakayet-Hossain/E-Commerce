"use client";

import Image from "next/image";
import Link from "next/link";
import { CiLock, CiMail } from "react-icons/ci";

const page = () => {
  return (
    // <section className="h-screen flex items-center justify-center">
    //   <form className="w-xl">
    //     <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
    //       <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
    //         <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
    //           <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
    //             Login to our account
    //           </p>
    //           <div>
    //             <label className="block mb-2 text-sm font-medium text-gray-900">
    //               Username
    //             </label>
    //             <input
    //               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
    //               placeholder="username"
    //               id="username"
    //               type="text"
    //               required
    //             />
    //           </div>
    //           <div>
    //             <label className="block mb-2 text-sm font-medium text-gray-900">
    //               Password
    //             </label>
    //             <input
    //               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
    //               placeholder="••••••••"
    //               id="password"
    //               type="password"
    //               required
    //             />
    //           </div>
    //           <button
    //             className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white"
    //             type="submit"
    //           >
    //             Login
    //           </button>
    //           <p>
    //             Don't have account ? <Link href="/registration">Sign Up</Link>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </form>
    // </section>
    <div className="flex items-center justify-center min-h-screen">
      {/* <ToastContainer position="top-right" theme="light" /> */}
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
                type="text"
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
