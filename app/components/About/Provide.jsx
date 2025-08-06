import React from 'react'
import ProvideItem from './ProvideItem'

const Provide = () => {
  return (
    <section className='pt-10 pb-5'>
        <div className='container'>
            <h2 className='text-4xl text-center font-bold'>What we Provide?</h2>
            <div className='grid grid-cols-1 gap-5 mx-5 mt-5'>
                <ProvideItem/>
                <ProvideItem/>
                <ProvideItem/>
                <ProvideItem/>
                <ProvideItem/>
                <ProvideItem/>
            </div>
        </div>
    </section>
  )
}

export default Provide