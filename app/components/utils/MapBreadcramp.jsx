import React from 'react'
import Breadcramp from './Breadcramp'

const MapBreadcramp = ({title}) => {
  
  return (
    <section className="py-4 border-y-1 border-rose-100">
      <div className="container">
        <div>
          <Breadcramp title={title}/>
        </div>
      </div>
    </section>
  )
}

export default MapBreadcramp