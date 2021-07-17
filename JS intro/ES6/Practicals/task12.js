// 12. Write a function that calculates the maximum of the given array.
// Input: [2, 7, 3, 8, 5.4]
// Output: 8

let getmax= (...arr)=>{
  return arr.reduce((accum,curent)=>{
      return Math.max(accum,curent)
   })
}

console.log(getmax(2, 7, 3, 8, 5.4,55));