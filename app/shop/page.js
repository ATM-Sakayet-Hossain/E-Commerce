import React from 'react'
import Banner from '../components/Shop/Banner'
import Products from '../components/Shop/Products'
import DealOfDay from '../components/DealOfTheDay/DealOfDay'
import Subscribe from '../components/utils/Subscribe'
import FeaturesGrid from '../components/utils/FeaturesGrid'

const page = ({searchParams}) => {
  
  return (
    <>
      <Banner />
      <Products searchParams={searchParams} />
      <DealOfDay />
      <Subscribe />
      <FeaturesGrid />
    </>
  )
}

export default page