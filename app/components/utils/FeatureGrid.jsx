import React from 'react'

const FeatureGrid = () => {
  return (
    <div className='w-full bg-[#F4F6FA] rounded-2xl p-5 flex gap-5 items-center'>
        <img src="/icon-1.png" alt="product" className="max-w-15" />
        <div>
            <h2>Best prices & offers</h2>
            <p>Orders $50 or more</p>
        </div>
    </div>
  )
}

export default FeatureGrid