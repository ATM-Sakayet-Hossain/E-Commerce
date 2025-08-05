import React from 'react'
import FeatureGrid from '../utils/FeatureGrid'

const FeaturesGrid = () => {
  return (
    <section className='pb-16'>
        <div className="container">
            <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <FeatureGrid />
                <FeatureGrid />
                <FeatureGrid />
                <FeatureGrid />
            </div>
        </div>
    </section>
  )
}

export default FeaturesGrid