import React from 'react'
import { IoIosSend } from 'react-icons/io'

const Subscribe = () => {
  return (
    <section className="pb-10 ">
      <div className="container bg-[url(/subscribe-bg.png)] bg-no-repeat bg-cover bg-center p-20 rounded-3xl">
        <h2 className="font-bold :text-primary text-[40px] max-w-xl">
          Stay home & get your daily needs from our shop
        </h2>
        <p className="font-normal text-secondary pt-5 pb-11">
          Start You'r Daily Shopping with Nest Mart
        </p>
        <div className="bg-white rounded-full max-w-md flex items-center gap-1 pl-2">
          <IoIosSend className="text-4xl text-secondary" />
          <input
            type="email"
            placeholder="Your emaill address"
            className="w-full outline-0"
          />
          <button className="py-2 px-3 md:py-6 md:px-10 bg-brand rounded-4xl text-white text-base cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}

export default Subscribe