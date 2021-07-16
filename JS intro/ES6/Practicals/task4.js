// 4. Write a function that filters all even elements of the array.
// Input: [6, 11, 9, 0, 3]
// Output: [6, 0]

let filterArray= (array)=>{
  return  array.filter((item)=> {return item%2===0})
}

console.log(filterArray([6, 11, 9, 0, 3]));
