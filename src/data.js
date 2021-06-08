// Challenge 1
import data from './data.json';

export default data;
// console.log(data[0]);

// Challenge 2
const allCategories = data.map(obj => obj.category);

// Challenge 3
const categorySet = new Set(allCategories)
const uniqueCategories = Array.from(categorySet)

export{
  allCategories,
  uniqueCategories
}