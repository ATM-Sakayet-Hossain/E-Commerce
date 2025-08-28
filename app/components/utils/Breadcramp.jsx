"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Breadcramp = ({title}) => {
  const pathname = usePathname().split("/").filter(Boolean);
  const page = pathname[0] || "";
  return (
    <ul className="flex items-center gap-3 text-secondary font-semibold">
      <li>
        <Link href="/" className="flex items-center gap-1.5 text-brand">
          <FaHome />
          <span>Home</span>
        </Link>
      </li>
      {page && (
        <>
          <li>
            <IoIosArrowForward className="text-xs" />
          </li>
          <li>
            <p>{page}</p>
          </li>
        </>
      )}
      {title && (
        <>
          <li>
            <IoIosArrowForward className="text-xs" />
          </li>
          <li>
            <p>{title}</p>
          </li>
        </>
      )}
    </ul>
  );
};

export default Breadcramp;
