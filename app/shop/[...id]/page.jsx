import ProductDetails from '@/app/components/Shop/ProductDetail'
import MapBreadcramp from '@/app/components/utils/MapBreadcramp'
import React from 'react'

const page = async ({params}) => {
  const { id } = params;
  
  return (
    <>
    <MapBreadcramp id={id[0]} />
    <ProductDetails id={id[0]} />
    </>
  )
}

export default page