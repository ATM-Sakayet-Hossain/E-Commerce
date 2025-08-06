"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Breadcramp = () => {
  const pathname = usePathname().split("/")[1];  
  return (
    <ul className="flex items-center gap-3 text-secondary font-semibold">
      <li>
        <Link href="/" className="flex items-center gap-1.5 text-brand">
          <FaHome />
          <span>Home</span>
        </Link>
      </li>
      <li>
        <IoIosArrowForward className="text-xs" />
      </li>
      <li>
        <p>{pathname}</p>
      </li>
    </ul>
  );
};

export default Breadcramp;
