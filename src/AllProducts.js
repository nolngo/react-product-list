import React from 'react';
import Product from './Product'
import data from './data'

function AllProducts (props) {
  const { category } = props
  return (
    <div className='AllProducts'>
      {data.filter((obj) => category.includes(obj.category) || category[0] === 'All').map((obj) => (
        <Product key={obj.description} {...obj} />
      ))}
    </div>
  )
}

export default AllProducts;