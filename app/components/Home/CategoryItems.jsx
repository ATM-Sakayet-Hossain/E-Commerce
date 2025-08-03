import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryItems = () => {
  return (
    <div>
      <Link
        href="/"
        className="p-2 md:p-6 mx-2 rounded-xl bg-[#F2FCE4] w-fit text-center transition-all hover:shadow-xl inline-block"
      >
        <Image width={50} height={50} src="/burger-caregory.png" alt="burger-caregory" />
        <h3 className="pt-2 md:pt-4 font-bold text-xs md:text-base text-primary">
         Oganic Kiwi
        </h3>
        <p className="text-secondary font-normal text-xs md:text-sm">
          26 items
        </p>
      </Link>
    </div>
  );
};

export default CategoryItems;