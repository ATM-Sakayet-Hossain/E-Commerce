import React from 'react'
import { FaStar } from 'react-icons/fa'

const ProductListItem = () => {
  return (
    <div className="flex">
      <img src="/product.png" alt="product" className="max-w-28" />
      <div>
        <h3 className="text-primary font-bold text-sm md:text-base">
          Seeds of Change Organic Quinoa, Brown, & Red Rice
        </h3>
        <div className="flex gap-3 py-2.5">
          <ul className="flex text-amber-400">
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
          </ul>
          <p className="text-xs font-normal text-secondary">(4.0)</p>
        </div>
        <h4 className="text-sm md:text-lg font-bold text-brand">
          $28.85
          <span className="text-secondary text-base line-through">$32</span>
        </h4>
      </div>
    </div>
  )
}

export default ProductListItem