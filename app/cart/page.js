import React from 'react'
import Banner from '../components/Shop/Banner'
import Subscribe from '../components/utils/Subscribe'
import FeaturesGrid from '../components/utils/FeaturesGrid'
import YourCart from '../components/Cart/YourCart'

const page = () => {
  return (
    <>
      <Banner />
      <YourCart />
      {/* <Products searchParams={searchParams} /> */}
      <Subscribe />
      <FeaturesGrid />
    </>
  )
}

export default page
