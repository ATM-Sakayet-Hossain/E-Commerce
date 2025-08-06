import React from 'react'
import Subscribe from '../components/utils/Subscribe'
import FeaturesGrid from '../components/utils/FeaturesGrid'
import MapBreadcramp from '../components/utils/MapBreadcramp'
import AboutUs from '../components/About/AboutUs'
import Provide from '../components/About/Provide'

const page = () => {
  return (
    <>
    <MapBreadcramp />
    <AboutUs />
    <Provide />
    <Subscribe />
    <FeaturesGrid />
    </>
  )
}

export default page