import React, { useState } from 'react';
import './App.css';
import Category from './Category';
// Challenge 7
import data, { uniqueCategories } from './data';
import AllProducts from './AllProducts';

// console.log(data)
// console.log(allCategories)
// console.log(uniqueCategories)
// console.log(categoryCount)
// console.log(namesAndCounts)

function App() {
  const [category, setCategory] = useState('All')
  return (
    <div className="ProductList">
      <h1>React Product List</h1>
      <p># of Products: { data.length }</p>
      <p># of Category: { uniqueCategories.length }</p>
      <Category
        category={category}
        onClick={(newCategory) => {
          if (newCategory !== 'All') {
            if (category.includes('All')) {
              setCategory([newCategory])
            } else if (category.includes(newCategory)) {
              const index = category.indexOf(newCategory)
              category.splice(index, 1)
              setCategory([...category])
            } else {
              setCategory([...category, newCategory])
            }
          } else {
            setCategory(['All'])
          }
        }}
      />
      <AllProducts
        category = {category}
      />
    </div>
  );
}

export default App;