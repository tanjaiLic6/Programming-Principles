// 4. Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }



function smallest(array){
    var smal=array[0];
    var min=array.filter( function (el,pos){
            return el<smal;    
    })
   var last= array.lastIndexOf(min[0]);
   return {
       minValue:min[0],
       minLastIndex:last

   }
    
}

console.log(smallest([1, 4, -2, 11, 8, 1, -2, 3]));