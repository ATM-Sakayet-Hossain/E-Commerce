import React from 'react'
import { AiTwotoneAppstore } from "react-icons/ai";
import ProductItems from '../Product/ProductITems';

const Products = async () => {
  const response = await fetch(
    "https://fdr-food-api.onrender.com/api/foods",
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return (
    <section className="pb-12">
      <div className="container">
        <div className="md:flex md:items-center md:justify-between">
            <p>We found 10 items for you!</p>
          <div className="flex items-center gap-2 p-2 border border-[#CACACA] rounded">
            <AiTwotoneAppstore />
            <label htmlFor="show">Show: </label>
            <select id="show" >
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="150">150</option>
              <option value="200">200</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:pt-5 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {data.map((item) => (
            console.log(item),
            
            <ProductItems key={item._id} data={item} />
          ))}
          {data.map((item) => (
            console.log(item),
            
            <ProductItems key={item._id} data={item} />
          ))}
          {data.map((item) => (
            console.log(item),
            
            <ProductItems key={item._id} data={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products