export const dynamic = "force-dynamic";
import Link from "next/link";
import ProductItems from "../Product/ProductITems";
import Limits from "./Limits";

export default async function Products({ searchParams }) {
  const limit = parseInt(searchParams?.limit ?? "25", 10) || 25;
  const skip = parseInt(searchParams?.skip ?? "0", 10) || 0;

  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
  const data = await res.json();

  const total = data?.total ?? 0;
  const products = data?.products ?? [];

  const prevSkip = Math.max(0, skip - limit);
  const nextSkip = skip < total - limit ? skip + limit : skip;

  const count = (limit, skip) => `?limit=${limit}&skip=${skip}`;

  return (
    <section className="pb-12">
      <div className="container">
        <div className="md:flex md:items-center md:justify-between">
          <p>
            We found <span className="font-bold text-brand">{total}</span> items for you!
          </p>
          <Limits limit={limit} skip={skip} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:pt-5 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.length > 0 &&
            products.map((item) => <ProductItems key={item.id} data={item} />)}
        </div>
        <div className="flex justify-center items-center gap-10 my-10">
          <Link
            href={count(limit, prevSkip)}
            scroll={false}
            className="text-white bg-brand hover:bg-brand/60 hover:text-black duration-200 px-4 py-2 rounded-md font-medium"
          >
            Prev
          </Link>
          <Link
            href={count(limit, nextSkip)}
            scroll={false}
            className="text-white bg-brand hover:bg-brand/60 hover:text-black duration-200 px-4 py-2 rounded-md font-medium"
          >
            Next
          </Link>
        </div>
      </div>
    </section>
  );
}