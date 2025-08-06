import Link from 'next/link'
import React from 'react'

const ProvideItem = () => {
    return (
        <div className='flex flex-col items-center p-10 border-1 border-rose-100 rounded-2xl'>
            <img src="/icon-1.png" alt="Icon" />
            <h2 className='text-xl font-bold py-10'>Best Prices & Offers</h2>
            <p className='text-base'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
            <Link href="/" className='pt-5 text-green-400 '>Read more</Link>
        </div>
    )
}

export default ProvideItem