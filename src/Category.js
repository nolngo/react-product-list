import React from 'react'
import { namesAndCounts } from './data';
import CategoryButton from './CategoryButton';

function Category(props) {
  const { category, onClick } = props;
  return (
    <div className='Category'>
      {namesAndCounts.map((obj) => {
        const { name, count } = obj
        const className = category.includes(name) ? 'selected' : ''
        return <CategoryButton onClick={() => onClick(name)} name={name} count={count} className={className} />
      })}
    </div>
  )
}

export default Category;