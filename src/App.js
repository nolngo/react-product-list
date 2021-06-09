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
      <div>
        { namesAndCounts.map(obj => {
            return (
              <button>
                { obj.name }
                <span> { obj.count } </span>
              </button>
            )
        }) }
      </div>
      <div>
        { data.map(obj => {
          return (
            <div>
              <h2>{obj.name}</h2>
              <p>{obj.description}</p>
              <p>{obj.price}</p>
              <small>Category: {obj.category} Rating: {obj.rating}</small>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;