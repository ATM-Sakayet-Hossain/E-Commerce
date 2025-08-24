
import { AiTwotoneAppstore } from "react-icons/ai";
import ProductItems from '../Product/ProductITems';

const Products = async () => {
  // this page api renders on the server-side Rendering (SSR) and fetches data at build time or on request.
  const response = await fetch(
    "https://dummyjson.com/products",
    {
      method: "GET",
      cache: 'no-store',
    }
  );
  
  const data = await response.json();
 
  return (
    <section className="pb-12">
      <div className="container">
        <div className="md:flex md:items-center md:justify-between">
            <p>We found {data.total} items for you!</p>
          <div className="flex items-center gap-2 p-2 border border-[#CACACA] rounded">
            <AiTwotoneAppstore />
            <label htmlFor="show">Show: </label>
            <select id="show" >
              <option value="50">30</option>
              <option value="100">60</option>
              <option value="150">90</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:pt-5 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {data.products.map((item) => (
            <ProductItems key={item.id} data={item} />
          ))}
        </div>
        <div>
          <button className="bg-brand text-white font-bold text-sm md:text-base px-4 py-2 rounded mt-6">
            {/* {data.total > 0 ? `Show ${data.total} items` : {data.skip}} */}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Products


// 'use client';
// import React, { useState, useEffect } from 'react';
// import { AiTwotoneAppstore } from "react-icons/ai";
// import ProductItems from '../Product/ProductITems';
// import PevNext from './PevNext';

// const Products = async () => {
//   // const [skip, setSkip] = useState(0);
//   // const [limit, setLimit] = useState(30);
//   // const [data, setData] = useState({ products: [], total: 0 });

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
//   //     const json = await res.json();
//   //     setData(json);
//   //   };
//   //   fetchData();
//   // }, [skip, limit]);
//   const response = await fetch(
//     "https://dummyjson.com/products",
//     {
//       method: "GET",
//     }
//   );

//   return (
//     <section className="pb-12">
//       <div className="container">
//         <div className="md:flex md:items-center md:justify-between">
//           <p>We found {data.total} items for you!</p>
//           {/* <div className="flex items-center gap-2 p-2 border border-[#CACACA] rounded">
//             <AiTwotoneAppstore />
//             <label htmlFor="show">Show: </label>
//             <select
//               id="show"
//               value={limit}
//               onChange={(e) => {
//                 setLimit(Number(e.target.value));
//                 setSkip(0); // Reset skip when limit changes
//               }}
//             >
//               <option value="25">25</option>
//               <option value="50">50</option>
//               <option value="75">75</option>
//               <option value="100">100</option>
//             </select>
//           </div> */}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 md:pt-5 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//           {data.products.map((item) => (
//             <ProductItems key={item.id} data={item} />
//           ))}
//         </div>

//         <div>
//           <button
                //   className="bg-brand text-white font-bold text-sm md:text-base px-4 py-2 rounded mt-6"
                //   onClick={() => setSkip(skip - limit)}
                //   disabled={skip - limit >= data.total}
                // >
                //   {skip + limit < data.total
                //     ? `Prives (${data.total + skip + limit} left)`
                //     : "No more products"}
                // </button>
                // <button
                //   className="bg-brand text-white font-bold text-sm md:text-base px-4 py-2 rounded mt-6"
                //   onClick={() => setSkip(skip + limit)}
                //   disabled={skip + limit >= data.total}
                // >
                //   {skip + limit < data.total
                //     ? `Next (${data.total - skip - limit} left)`
                //     : "No more products"}
                // </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;