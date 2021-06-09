import React from 'react';
import './App.css';
// Challenge 7
import data, { allCategories, categoryCount, namesAndCounts, uniqueCategories } from './data';

// console.log(data)
// console.log(allCategories)
// console.log(uniqueCategories)
// console.log(categoryCount)
// console.log(namesAndCounts)

function App() {
  return (
    <div className="App">
      <h1>React Product List</h1>
      <p># of Products: { data.length }</p>
      <p># of Category: { uniqueCategories.length }</p>
      { namesAndCounts.map(obj => {
          return (
            <button>
              { obj.name }
              <span> { obj.count } </span>
            </button>
          )
      }) }
    </div>
  );
}

export default App;