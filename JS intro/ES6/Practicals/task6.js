// 6. Write a function that filters all integer numbers from the given array.
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]

// Output: [7, 8]


let getIntegers=(...arr)=>{
  return arr.filter((item)=>{
      return Number.isInteger(item);
  })
}


let num=getIntegers(1.6, 11.34, 9.23, 7, 3.11, 8);
console.log(num)
