"use client";
import { useRouter } from "next/navigation";

const Limits = ({ limit }) => {
  const router = useRouter();

  const handleChange = (e) => {
    const newLimit = e.target.value;
    router.replace(`?limit=${newLimit}&skip=0`, { scroll: false });
  };

  return (
    <div className="flex items-center gap-2 p-2 border border-[#CACACA] rounded">
      <label htmlFor="show">Show: </label>
      <select
        id="show"
        value={String(limit)}
        onChange={handleChange}
        className="border rounded px-2 py-1"
      >
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
      </select>
    </div>
  );
};

export default Limits;