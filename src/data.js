// Challenge 1
import data from './data.json';

export default data;
// console.log(data[0]);

const allCategories = data.map(obj => obj.category);

export{
  allCategories
}