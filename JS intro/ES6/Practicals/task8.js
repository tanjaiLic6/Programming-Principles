// 8. Write a function that returns indexes of the elements greater than 10.
// Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// Output: 1, 2, 5

let getIndex=(...arr)=>{
  let newAr=[];
     arr.map((item,index)=>{
        if (item>10){
           newAr.push(index)
        }
        
    })
  return newAr
}

let array=getIndex(1.6, 11.34, 29.23, 7, 3.11, 18);
console.log(array);