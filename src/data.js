// Challenge 1
import data from './data.json';

export default data;
// console.log(data[0]);

// Challenge 2
const allCategories = data.map(obj => obj.category);

// Challenge 3
// const categorySet = new Set(allCategories)
// const uniqueCategories = Array.from(categorySet)
const cats = allCategories.reduce((acc, cat) => {
  acc[cat] = 0;
  return acc
}, {})
const uniqueCategories = Object.keys(cats)

// Challenge 4
const categoryCount = allCategories.reduce((obj, cat) => {
  if (obj[cat] === undefined) {
    obj[cat] = 1; 
  } else {
    obj[cat] += 1;
  }
  return obj;
}, {})

export{
  allCategories,
  uniqueCategories,
  categoryCount
}