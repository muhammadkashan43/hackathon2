import React from 'react'
import ProductCard from './productcard'

const TopCategories = () => {
  return (
    <div className='max-w-[1341px] m-auto px-4'>
      <h1 className='text-xl font-bold mt-9 mb-9 lg:ml-4'>Top categories</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl m-auto gap-6 justify-center'>
      <ProductCard title='Wing Chair' productCount={3345} imageUrl='/Image(7).png' href='#'/>
      <ProductCard title='Wooden Chair' productCount={157} imageUrl='/Image(5).png' href='#'/>
      <ProductCard title='Desk Chair' productCount={154} imageUrl='/Image(6).png' href='#'/>
    </div>
    </div>
  )
}

export default TopCategories